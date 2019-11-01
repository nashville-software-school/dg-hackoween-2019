import warnings
warnings.filterwarnings('ignore')

import pandas as pd
import folium 

print('Creating maps...')

#read state,lat and long
df=pd.read_csv('./data/raw/statelatlong.csv')
df.set_value(47, 'Latitude', float(47.751))
df.set_value(47, 'Longitude', float(-120.740))
df=df[df.State!='DC']
apps = pd.read_csv('./data/final/apps_final.csv')
dg = pd.read_csv('./data/processed/dg_stores_geocoded.csv')

cash_df=pd.read_csv("./data/raw/cash_cube.csv")
stores_df=pd.read_csv('./data/processed/dg_stores_geocoded.csv')
stores_df.columns=['store', 'add', 'city', 'state', 'zip', 'county', 'lat', 'lng']
cash_df.columns=['division', 'region', 'district', 'store', 'city', 'state', 'dollars']
stores_cash=pd.merge(stores_df, cash_df,  on='store', how="left")
stores_cash=stores_cash.fillna('$0')
stores_cash = stores_cash.drop(['division', 'region', 'district', 'city_y', 'state_y'], axis=1)
stores_cash['address']= stores_cash['add'] + ', ' + stores_cash.city_x
stores_cash=stores_cash[stores_cash.state_x!='DC']
stores_cash['address'] = stores_cash.address.str.replace("'", "")

apps.loc[apps.color == 'yellow', 'color'] = 'orange' 

def map_state(long,lat,state): 
    state_map=folium.Map(location=(lat,long),zoom_start=7)
    for i in apps[apps.state==state].iterrows():
        row = i[1]
        folium.Marker(
        location = [row['lat'],row['lng']],
        icon = folium.Icon(color=row['color'], icon='bolt',prefix='fa'),
        popup= folium.Popup('State Rank: ' + str(int(row['state_rank'])) + '<br/>' + 
r'''
<a href = "javascript: window.parent.location.hash = \'#''' +
#str(row['Request ID']) + r'''\'; void(0)"> View App </a>''' #+ '<br/>' +   
str(row['id']) + r'''\'; void(0)"> View App </a>''' + '<br/>' +
                'Has required Keyword: '+ str(row['has_required_keyword']) + '<br/>' +
                'Store within 20 miles: ' + str(row['store_within_20_miles']) + '<br/>' +
                'Has national ID: ' + str(row['has_national_id'])
               )).add_to(state_map)
    
    for i in stores_cash[stores_cash.state_x==state].iterrows():
        row = i[1]
        folium.CircleMarker(
        location = [row['lat'],row['lng']],
        color = 'gray', fill = True, fill_color = 'black', radius = 5,
        popup = folium.Popup('Store Number: ' + str(row['store'])+ '<br/>'+
                'Store Address: '+ row['address']+ '<br/>'+
                'Cash Cube: '+ row['dollars']),
        icon = folium.Icon(color='gray', icon='star',prefix='fa', icon_color = 'white')).add_to(state_map)   
    state_map.save(outfile='./maps/' + state.lower()+'-map'+'.html')

df.apply(lambda row: map_state(row['Longitude'], row['Latitude'],row['State']), axis = 1)
