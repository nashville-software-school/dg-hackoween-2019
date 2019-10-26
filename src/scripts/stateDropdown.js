import data from './dataManager.js';


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
    handleSubmitButton() {
        /*
        1. Whatever state is selected by user,
        2. Get the correct state HTML file,
        3. Create iFrame for the selected state's HTML file
        */
       const mapContainer = document.querySelector("#state-map"),
             selectedState = event.target.value
             console.log(selectedState)
    }
}

export default stateDropdown