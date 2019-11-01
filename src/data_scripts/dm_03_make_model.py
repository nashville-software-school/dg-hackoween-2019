import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from joblib import dump

print('Building model...')

apps = pd.read_csv('./data/processed/apps_with_features.csv')
winners = pd.read_csv('./data/raw/Approved.csv')

winners_list = list(winners['Request ID'].values)
apps['winner'] = apps['id'].apply(lambda x: x in winners_list)

apps['dist_to_nearest'] = pd.to_numeric(apps['dist_to_nearest'],errors='coerce').fillna(20)
apps['ppl_per_dollar'] = apps['ppl_per_dollar'].fillna(0)
apps['unemp_rate_percentage'] = apps['unemp_rate_percentage'].fillna(0)
apps['dropout_rate_percentage'] = apps['dropout_rate_percentage'].fillna(0)
apps['poverty_level_percentage'] = apps['poverty_level_percentage'].fillna(0)
apps['literacy_rate_percentage'] = apps['literacy_rate_percentage'].fillna(100)
apps['nearby_cash'] = apps['nearby_cash'].fillna(0)

predictors = ['ppl_per_dollar', 'unemp_rate_percentage',
       'dropout_rate_percentage', 'poverty_level_percentage',
       'literacy_rate_percentage', 'dist_to_nearest', 'nearby_cash',
       'keyword_required_score', 'keyword_not_required_score']
X = apps[predictors]
y = apps['winner']

model = RandomForestClassifier(n_estimators = 1000, max_depth = 3)

model.fit(X, y)

dump(model, './data/models/fit_model.joblib') 

