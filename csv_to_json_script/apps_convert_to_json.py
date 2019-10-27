import csv
import json

CSV_FILENAME = 'apps_by_color_merged.csv'
JSON_FILENAME = 'apps_by_color_merged.json'

def main():
    with open(CSV_FILENAME) as csvfile:
        reader = csv.DictReader(csvfile)
        data = [rec for rec in reader]

    with open(JSON_FILENAME, 'w') as jsonfile:
        jsonfile.write(json.dumps(data, sort_keys=False, indent=4, separators=(',', ': '), ensure_ascii=False))


if __name__ == '__main__':
    main()

