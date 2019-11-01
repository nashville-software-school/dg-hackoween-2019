import warnings
warnings.filterwarnings('ignore')

import pandas as pd

print('Aggregating state-level data...')
apps = pd.read_csv('./data/final/apps_final.csv')
budget = pd.read_csv('./data/raw/budget_by_state.csv')

budget.columns = [x.lower().strip() for x in budget.columns]
budget.budget = budget.budget.str.strip().str[1:].str.replace(',', '').astype('int')
budget = budget[['state', 'budget']]

def get_total_applications(state):
    return len(apps[apps.state == state.strip()])
def get_color_count(state, color):
    return len(apps[(apps.state == state.strip()) & (apps.color == color)])

budget['app_count'] = budget.state.apply(get_total_applications)
for color in ['green', 'yellow', 'red']:
    budget[color] = budget.state.apply(lambda x: get_color_count(x, color))

budget.to_csv('./data/final/State_aggregations.csv', index = False)
