from joblib import load
import pandas as pd

print('Scoring applications...')

model = load('./data/models/fit_model.joblib') 
apps = pd.read_csv('./data/processed/apps_with_features.csv')

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

apps['score'] = model.predict_proba(X)[:,1]

apps[['id', 'score']].to_csv('./data/processed/scores.csv', index = False)
