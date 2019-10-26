import data from './dataManager.js';


const mapContainer = document.querySelector("#state-map")

const stateDropdown = {
    dropdownContainer: document.querySelector("#state-dropdown"),
    createDropdown() {
        const stateOptions = document.querySelector("#states")
        data.getStates().then(statesData => {
            const statesArray = statesData.states
            statesArray.forEach(state => {
                stateOptions.innerHTML += `<option value="${state.abbreviation}">${state.name}</option>`
            })
        })
    },
    handleSelection(event) {
        const selectedState = event.target.value
        mapContainer.innerHTML = `<iframe src="./maps/${selectedState}-map.html"></iframe>`
    }
}

export default stateDropdown