export default {
    buildAndAppendStateResults: () => {
        const stateResults = `
    `
        // console.log(stateResults)

        const stateResultsContainerDiv = document.querySelector("#footer-container")
        stateResultsContainerDiv.innerHTML = stateResults
    }
}
