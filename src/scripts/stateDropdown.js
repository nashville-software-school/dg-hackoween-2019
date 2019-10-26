import data from './dataManager.js';


const mapContainer = document.querySelector("#state-map")
// mapContainer.addEventListener('click', () => {
//     console.log("Good luck...")
// })

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
        /*
        1. Whatever state is selected by user,
        2. Get the correct state HTML file ${state}-map.html,
        3. Create iFrame for the selected state's HTML file
        */
             const selectedState = event.target.value
             mapContainer.innerHTML = `<iframe src="./maps/${selectedState}-map.html"></iframe>`
    },

}

export default stateDropdown