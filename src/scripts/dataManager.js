// FIXME: change url to point to new and REAL JSON data
const stateURL = "/data/states.json"

const applicationURL = "/data/apps_by_color_merged.json"

const aggregatedDataURL = "/data/State_aggregations.json"

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