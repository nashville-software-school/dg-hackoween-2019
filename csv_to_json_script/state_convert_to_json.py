import csv
import json

CSV_FILENAME = 'State_aggregations.csv'
JSON_FILENAME = 'State_aggregations.json'

key_map = {
        "State": "state",
        "Total Applications": "app_count",
        "green": "green",
        "red": "red",
        "yellow": "yellow",
        " Budget ": "budget"
    }

def main():
    with open(CSV_FILENAME) as csvfile:
        reader = csv.DictReader(csvfile)
        data = [{key_map[key]: val for key, val in rec.items()} for rec in reader]

    with open(JSON_FILENAME, 'w') as jsonfile:
        jsonfile.write(json.dumps(data, sort_keys=False, indent=4, separators=(',', ': '), ensure_ascii=False))


if __name__ == '__main__':
    main()

