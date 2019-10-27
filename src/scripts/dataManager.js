// FIXME: change url to point to new and REAL JSON data
const url = "https://raw.githubusercontent.com/nashville-software-school/dg-hackoween-2019/master/data/states.json"


const getStates = () => {
    return fetch(`${url}`)
    .then(response => response.json())
}

export default { getStates }