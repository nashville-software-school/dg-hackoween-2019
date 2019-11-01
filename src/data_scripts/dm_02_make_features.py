import warnings
warnings.filterwarnings('ignore')

import pandas as pd
import re
import math

print('Generating features...')

apps = pd.read_csv('./data/processed/apps_geocoded.csv')

#Rename the columns to something easier to work with
apps.columns = ['id', 'address', 'zipcode', 'project_title', 'grant_amount', 'project_served_count', 
                'is_new_project', 'national_lit_dir_program_id', 'geo_classification', 
                'unemp_rate', 'dropout_rate', 'poverty_level', 'literacy_rate', 
                'served_adult_li', 'statement_impact', 'project_objective', 'project_design', 'project_timeline', 
                'assessment_methods', 'project_facilities', 'available_technology', 'is_technology_request', 
                'technology_request_purpose', 'revenue_funding_source_total', 'budget_total', 
                'budget_narrative', 'lat', 'lng']


#----------------------------------
# Keyword Finder
# TODO: Refine this step
#----------------------------------

keywords = ['english language learners', 'english language acquisition','ged', 'hiset', 
            'high school equivalency', 'high school diploma', 'adult basic education|abe', 
            'learning differences', 'workforce', 'contextualized', 'personalized', 'adaptive', 
            'tabe', 'casa', 'best', 'best plus']
keywords_required = ['english language learners', 'ged', 'adult basic education|abe']
keywords_not_required = ['english language acquisition', 'hiset', 'high school equivalency', 
                         'high school diploma', 'learning differences', 'workforce', 'contextualized', 
                         'personalized', 'adaptive', 'tabe', 'casa', 'best', 'best plus']

def check_keywords(df, keywords):
    contains_keywords = pd.DataFrame()
    for keyword in keywords:
        contains_keyword = pd.DataFrame()
        for column in df:
            if df[column].dtype not in ['float64', 'int64']:
                contains_keyword[column] = df[column].str.lower().str.contains(keyword.lower())
        contains_keywords[keyword] = contains_keyword.any(axis=1)
    return contains_keywords.astype('int64')

keyword_scores = check_keywords(apps, keywords)
keyword_required_score = keyword_scores[keywords_required].sum(axis=1)
keyword_not_required_score = keyword_scores[keywords_not_required].sum(axis=1)

apps_keyword_scores = pd.concat([apps['id'], keyword_required_score, keyword_not_required_score], axis=1)
apps_keyword_scores.columns = ['id', 'keyword_required_score', 'keyword_not_required_score']

apps = pd.merge(apps, apps_keyword_scores)

#----------------------------------
# Unemployment, dropout, poverty, and literacy rate finder
# Returns the first "match" for each column
# If no matches, replace with either 0 or 100
# TODO: Improve the unemployment extractor
# TODO: Come up with better imputer for missing values
#----------------------------------


def find_percentage(text):
    ''' This only returns values less than 100% '''
    try:
        matches = re.findall('(\d+\.*\d*)\s*%', text) +  re.findall('(\d+\.*\d*)\s*percent', text)
        if len(matches) == 0:
            matches = re.findall('(\d+\.*\d*)', text) +  re.findall('(\d+\.*\d*)', text)
        if float(matches[0]) <= 100:
            return float(matches[0])
        #if float(matches[0]) >= 100:
        #    float(matches[0]) == 100
    except:
        pass

apps['unemp_rate_percentage'] = apps.unemp_rate.apply(find_percentage).fillna(0)
apps['dropout_rate_percentage'] = apps.dropout_rate.apply(find_percentage).fillna(0)
apps['poverty_level_percentage'] = apps.poverty_level.apply(find_percentage).fillna(0)
apps['literacy_rate_percentage'] = apps.literacy_rate.apply(find_percentage).fillna(100)


#-----------------------------------
# Check for National Literacy Program ID
# Also, find number of people served per dollar
#-----------------------------------

# Create a new column for people served per grant dollar
apps.loc[:,'grant_amount'] = apps['grant_amount'].replace(to_replace= r"\$", value='', regex=True).str.strip()
apps.loc[:,'grant_amount'] = apps['grant_amount'].replace(to_replace= r"\,", value='', regex=True).str.strip()
apps['grant_amount'] = apps.grant_amount.astype(float)
apps['ppl_per_dollar'] = apps['project_served_count']/apps['grant_amount']

# Create a new boolean column showing whether the applicant has a National Literacy Program ID
apps['has_national_id'] = apps.national_lit_dir_program_id.str.contains('\d', regex=True)
apps['has_national_id'] = apps.has_national_id.fillna(False)



#-----------------------------------
# Cash cube calculations
#-----------------------------------

cash_df=pd.read_csv("./data/raw/cash_cube.csv")
stores_df=pd.read_csv('./data/processed/dg_stores_geocoded.csv')
stores_df.columns=['store', 'add', 'city', 'state', 'zip', 'county', 'lat', 'lng']
cash_df.columns=['division', 'region', 'district', 'store', 'city', 'state', 'dollars']
stores_cash=pd.merge(stores_df, cash_df[['store', 'dollars']],  on='store', how="left")
stores_cash=stores_cash.fillna('$0')

appln_df=pd.read_csv("./data/processed/apps_geocoded.csv")
appln_df=appln_df.rename(columns={'Complete Organization Address': 'address', 'Request ID': 'reqid'})
app_df=appln_df.iloc[:,[0,1, -1, -2]]

def dist(la1, lo1, la2, lo2):
    '''Calculate distance in miles between two locations based on latitude and longitude coordinates'''
    R = 3959.0  #Radius of earth in miles

    lat1 = math.radians(la1)
    lon1 = math.radians(lo1)
    lat2 = math.radians(la2)
    lon2 = math.radians(lo2)

    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = (math.sin(dlat/2))**2 + math.cos(lat1) * math.cos(lat2) * (math.sin(dlon/2))**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    distance = R * c
    return distance

app_df["state"] = app_df.address.str.extract(r'([A-Z]{2})\s\d{5}')

def find_nearest_store(row):
    try:
        distance = stores_cash[stores_cash.state == row['state']].apply(lambda store: dist(store['lat'], store['lng'], row['latitude'], row['longitude']), axis = 1).min()
        return distance
    except:
        pass

app_df['dist_to_nearest'] = app_df.apply(find_nearest_store, axis = 1)

def get_cash_amt(dollars):
    dollars = dollars.replace('$', '').replace('-', '0').replace(',', '')
    return int(dollars)

stores_cash['cash'] = stores_cash.dollars.apply(get_cash_amt)

def find_nearby_cash(row):
    try:
        in_state_stores = stores_cash[stores_cash.state == row['state']]
        in_state_stores.loc[:,'distance'] = in_state_stores.apply(lambda store: dist(store['lat'], store['lng'], row['latitude'], row['longitude']), axis = 1)
        return in_state_stores[in_state_stores.distance <= 20].cash.sum()
    except:
        pass

app_df['nearby_cash'] = app_df.apply(find_nearby_cash, axis = 1)

app_df = app_df[['reqid', 'state', 'dist_to_nearest', 'nearby_cash']].rename(columns = {'reqid': 'id'})
apps = pd.merge(apps, app_df)


apps['dist_to_nearest'] = pd.to_numeric(apps['dist_to_nearest'],errors='coerce').fillna(30)
apps['store_within_20_miles'] = apps['dist_to_nearest'].apply(lambda x: x<= 20)
apps['has_required_keyword'] = apps['keyword_required_score'].apply(lambda x: x>=1)

apps.to_csv('./data/processed/apps_with_features.csv', index = False)
