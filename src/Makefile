geocoded:
	python3 data_scripts/dm_01a_geocode_apps.py
	dm data_scripts/dm_01b_geocode_stores.py

features:
	python3 data_scripts/dm_02_make_features.py

model: features
	python3 data_scripts/dm_03_make_model.py

scores: features model
	python3 data_scripts/dm_04_generate_scores.py

rankings: scores
	python3 data_scripts/dm_05_generate_rankings.py

json_files: rankings
	python3 data_scripts/dm_07_state_aggregations.py 
	python3 data_scripts/apps_convert_to_json.py
	python3 data_scripts/state_convert_to_json.py

maps: rankings
	python3 data_scripts/dm_06_make_maps.py 

everything: rankings
	python3 data_scripts/dm_07_state_aggregations.py
	python3 data_scripts/apps_convert_to_json.py
	python3 data_scripts/state_convert_to_json.py
	python3 data_scripts/dm_06_make_maps.py 

