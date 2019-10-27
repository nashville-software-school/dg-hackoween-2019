import csv
import json

csv_filename = 'apps_by_color_merged.csv'
json_filename = 'apps_by_color_merged.json'

key_map = {
        "Request ID": "id",
        "Complete Organization Address": "address",
        "ZIP Code": "zip",
        "Project Title": "title",
        "Grant/Request Amount": "request_amount",
        "Number of individuals served by funding from this Adult Literacy application Total": "nbr_served",
        "Is this a new project?": "new_proj",
        "What is your National Literacy Directory Program ID number?": "NLDP_id",
        "Geographic Classification": "geo_class",
        "What is the unemployment rate?": "unemployment_rate",
        "What is the drop-out rate?": "dropout_rate",
        "What is the poverty level in the geographical area served?": "poverty",
        "What is the literacy rate in the geographical area served?": "literacy",
        "If it is not the first year for this project, then how many individuals were served by this Adult Li": "previously_served",
        "Statement of Impact": "impact_statement",
        "Project/Program Objective": "objective",
        "Project/Program Design": "design",
        "Timeline": "timeline",
        "Assessment Methods": "assess_methods",
        "Project Facilities": "facilities",
        "Available Technology": "available_tech",
        "Are you requesting technology with this grant application?": "tech_request",
        "If yes, how will it be used to advance the literacy program we would be funding?": "tech_use_how",
        "Revenue - Sources of Funding Total": "funding_sources",
        "Budget Allocations Total": "total_budget",
        "Budget Narrative": "budget_narrative",
        "latitude": "lat",
        "longitude": "lng",
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
        "Num_Recommendations": "num_recommendations",
        "Green": "green",
        "Color": "color"
    }

def main():
    with open(csv_filename) as csvfile:
        reader = csv.DictReader(csvfile)
        data = [{key_map[key]: val for key, val in rec.items()} for rec in reader]

    with open(json_filename, 'w') as jsonfile:
        jsonfile.write(json.dumps(data, sort_keys=False, indent=4, separators=(',', ': '), ensure_ascii=False))


if __name__ == '__main__':
    main()

