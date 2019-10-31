export default {
    buildAndAppendStateResults: (stateData) => {
        const stateResults = `
            <div class="stateResults">
                <h3 class="state-results-header">${stateData.state} Applications Summary</h3>
                <div>
                    <h5 class="summary-text">Total Applications: <span class="span">${stateData.app_count}</span></h5>
                    <h5 class="summary-text">Total Green Ranking: <span class="span">${stateData.green}</span></h5>
                    <h5 class="summary-text">Total Orange Ranking: <span class="span">${stateData.yellow}</span></h5>
                    <h5 class="summary-text">Total Red Ranking: <span class="span">${stateData.red}</span></h5>
                </div>
            </div>
    `
        const stateResultsContainerDiv = document.querySelector("#app-and-data-container")
        stateResultsContainerDiv.innerHTML = stateResults
    },
    resultsNotFound: () => {
        const stateResults = `
            <div class="stateResults">
                <h3 class="state-results-header">No data available for selected state</h3>
            </div>
    `
        const stateResultsContainerDiv = document.querySelector("#app-and-data-container")
        stateResultsContainerDiv.innerHTML = stateResults
    }

}
