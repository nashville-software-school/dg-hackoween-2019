import data from './dataManager.js';


const stateDropdown = {
    dropdownContainer: document.querySelector("#state-dropdown"),
    createDropdown() {
        this.dropdownContainer.innerHTML = `<select id="states"><option disabled selected>Select State</option></select>`
        const stateOptions = document.querySelector("#states")
        data.getStates().then(statesData => {
            const statesArray = statesData.states
            statesArray.forEach(state => {
                stateOptions.innerHTML += `<option value="${state.abbreviation}">${state.name}</option>`
            })
        })
    }
}

export default stateDropdown