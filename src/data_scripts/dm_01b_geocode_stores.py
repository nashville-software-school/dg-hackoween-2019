import pandas as pd
import requests
import logging
import re

logger = logging.getLogger("root")
logger.setLevel(logging.DEBUG)
#create console handler
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)
logger.addHandler(ch)

stores = pd.read_csv('./data/raw/Stores - Export Worksheet.csv')

def fix_address(add):
    add = re.sub('STE\s\S*\s', '', add)
    add = re.sub('UNIT\s\S*\s', '', add)
    add = re.sub('-\d{4}', '', add)
    add = re.sub('US HIGHWAY 23', 'US-23', add)
    add = re.sub('&', ' and ', add)
    return add

stores['clean_address'] = stores['Complete Organization Address'].apply(fix_address)

addresses = stores['clean_address'].tolist()

def get_google_results(address, api_key=None, return_full_response=False):
    """
    Get geocode results from Google Maps Geocoding API.
    
    Note, that in the case of multiple google geocode reuslts, this function returns details of the FIRST result.
    
    @param address: String address as accurate as possible. For Example "18 Grafton Street, Dublin, Ireland"
    @param api_key: String API key if present from google. 
                    If supplied, requests will use your allowance from the Google API. If not, you
                    will be limited to the free usage of 2500 requests per day.
    @param return_full_response: Boolean to indicate if you'd like to return the full response from google. This
                    is useful if you'd like additional location details for storage or parsing later.
    """
    # Set up your Geocoding url
    geocode_url = "https://maps.googleapis.com/maps/api/geocode/json?address={}".format(address)
    if api_key is not None:
        geocode_url = geocode_url + "&key={}".format(api_key)
        
    # Ping google for the reuslts:
    results = requests.get(geocode_url)
    # Results will be in JSON format - convert to dict using requests functionality
    results = results.json()
    
    # if there's no results or an error, return empty results.
    if len(results['results']) == 0:
        output = {
            "formatted_address" : None,
            "latitude": None,
            "longitude": None,
            "accuracy": None,
            "google_place_id": None,
            "type": None,
            "postcode": None
        }
    else:    
        answer = results['results'][0]
        output = {
            "formatted_address" : answer.get('formatted_address'),
            "latitude": answer.get('geometry').get('location').get('lat'),
            "longitude": answer.get('geometry').get('location').get('lng'),
            "accuracy": answer.get('geometry').get('location_type'),
            "google_place_id": answer.get("place_id"),
            "type": ",".join(answer.get('types')),
            "postcode": ",".join([x['long_name'] for x in answer.get('address_components') 
                                  if 'postal_code' in x.get('types')])
        }
        
    # Append some other details:    
    output['input_string'] = address
    output['number_of_results'] = len(results['results'])
    output['status'] = results.get('status')
    if return_full_response is True:
        output['response'] = results
    
    return output

with open('key') as fi:
    API_KEY = fi.read().rstrip()
RETURN_FULL_RESULTS = False

output_filename = '../data/geocode/stores'

# Create a list to hold results
results = []
# Go through each address in turn
for address in addresses:
    # While the address geocoding is not finished:
    geocoded = False
    while geocoded is not True:
        # Geocode the address with google
        try:
            geocode_result = get_google_results(address, API_KEY, return_full_response=RETURN_FULL_RESULTS)
        except Exception as e:
            geocoded = True
        
        if geocode_result['status'] != 'OK':
            logger.warning("Error geocoding {}: {}".format(address, geocode_result['status']))
        logger.debug("Geocoded: {}: {}".format(address, geocode_result['status']))

        results.append(geocode_result)           
        geocoded = True

    # Print status every 100 addresses
    if len(results) % 100 == 0:
        logger.info("Completed {} of {} address".format(len(results), len(addresses)))
            
    # Every 500 addresses, save progress to file(in case of a failure so you have something!)
    if len(results) % 500 == 0:
        pd.DataFrame(results).to_csv("{}_bak.csv".format(output_filename), index = False)

# Write the full results to csv using the pandas library.
geocoded = pd.DataFrame(results)
geocoded.to_csv(output_filename + '.csv', encoding='utf8', index = False)

geocoded = (geocoded[['input_string', 'latitude', 'longitude']].
            rename(columns = {'input_string': 'clean_address'}))

stores = pd.merge(stores, geocoded).drop(columns = 'clean_address')
stores.to_csv('./data/processed/dg_stores_geocoded.csv', index = False)

