// FIXME: change url to point to new and REAL JSON data
const stateURL = "http://127.0.0.1:8080/data/states.json"

const applicationURL = "http://127.0.0.1:8080/csv_to_json_script/apps_by_color_merged.json"

const aggregatedDataURL = "http://127.0.0.1:8080/csv_to_json_script/State_aggregations.json"

const getStates = () => {
    return fetch(`${stateURL}`)
    .then(response => response.json())
}

const getApplicationData = () => {
    return fetch(`${applicationURL}`)
    .then(response => response.json())
}

const getAggregatedData = () => {
    return fetch(`${aggregatedDataURL}`)
    .then(response => response.json())
}

export default { getStates, getApplicationData, getAggregatedData }