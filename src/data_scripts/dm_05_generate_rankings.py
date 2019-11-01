import pandas as pd

print('Generating rankings...')

budget=pd.read_csv('./data/raw/budget_by_state.csv')
budget[' Budget '] = budget[' Budget '].str.replace(',', '')
budget[' Budget '] = budget[' Budget '].str.replace('$', '')
budget[' Budget ']=budget[[' Budget ']].astype(float)
budget['Budget_2.0']=(budget[' Budget ']* 2)
budget['num_recommended']=round((budget['Budget_2.0']/10000))
budget['Green']=(budget['num_recommended']*.50).apply(lambda x: max(x,1))

budget['State'] = budget['State'].str.strip()
budget = budget.rename(columns = {'State' : 'state'})

apps = pd.read_csv('./data/processed/apps_with_features.csv')

scores=pd.read_csv('./data/processed/scores.csv')
req_id_merge=pd.merge(scores,apps)
req_id_merge=req_id_merge.rename(columns={'score':'simple_rank'})
req_id_merge['state_rank']=req_id_merge.groupby('state')['simple_rank'].rank(ascending=False)
merger_again=pd.merge(budget,req_id_merge)

def color(row):
    if row['state_rank']<= row['Green']:
        return 'green'
    if row['state_rank']<= row['num_recommended']:
        return 'yellow'
    else:
        return 'red'

merger_again['color']=merger_again.apply(color,axis=1)

key_map = {
        "id": "id",
        "address": "address",
        "zipcode": "zip",
        "project_title": "title",
        "grant_amount": "request_amount",
        "project_served_count": "nbr_served",
        "is_new_project": "new_proj",
        "national_lit_dir_program_id": "NLDP_id",
        "geo_classification": "geo_class",
        "unemp_rate": "unemployment_rate",
        "dropout_rate": "dropout_rate",
        "poverty_level": "poverty",
        "literacy_rate": "literacy",
        "served_adult_li": "previously_served",
        "statement_impact": "impact_statement",
        "project_objective": "objective",
        "project_design": "design",
        "project_timeline": "timeline",
        "assessment_methods": "assess_methods",
        "project_facilities": "facilities",
        "available_technology": "available_tech",
        "is_technology_request": "tech_request",
        "technology_request_purpose": "tech_use_how",
        "revenue_funding_source_total": "funding_sources",
        "budget_total": "total_budget",
        "budget_narrative": "budget_narrative",
        "lat": "lat",
        "long": "lng",
        "State": "state",
        "has_national_id": "has_national_id",
        "required_keyword": "required_keyword",
        "simple_rank": "simple_rank",
        "ppl_per_dollar_rank": "ppl_per_dollar_rank",
        "unemployment_rank": "unemployment_rank",
        "dropout_rank": "dropout_rank",
        "poverty_rank": "poverty_rank",
        "literacy_rank": "literacy_rank",
        "dist_rank": "dist_rank",
        "dist_cash_rank": "dist_cash_rank",
        "keyword_rank": "keyword_rank",
        "complex_rank": "complex_rank",
        "num_recommended": "num_recommendations",
        "Green": "green",
        "Color": "color"
    }

merger_again = merger_again.rename(columns = key_map)

merger_again.to_csv('./data/final/apps_final.csv', index = False)
