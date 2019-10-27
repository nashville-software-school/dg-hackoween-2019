// FIXME: change url to point to new and REAL JSON data
const stateURL = "https://raw.githubusercontent.com/nashville-software-school/dg-hackoween-2019/master/data/states.json"

const applicationURL = "https://raw.githubusercontent.com/nashville-software-school/dg-hackoween-2019/master/data/apps_geocoded.json"

const getStates = () => {
    return fetch(`${stateURL}`)
    .then(response => response.json())
}

const getApplicationData = () => {
    return fetch(`${applicationURL}`)
    .then(response => response.json())    
}

export default { getStates, getApplicationData }