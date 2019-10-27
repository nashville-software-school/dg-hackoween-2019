export default {
    buildAndAppendStateResults: (stateData) => {
        const stateResults = `
            <article>
                <h3 class=title>State Info</h3>
                <div>
                    <h5>Budget Amount: <span class="span">$${stateData.budget}</span></h5>
                    <h5>Total Applications: <span class="span">${stateData.app_count}</span></h5>
                    <h5>Total Green Ranking: <span class="span">${stateData.green}</span></h5>
                    <h5>Total Orange Ranking: <span class="span">${stateData.yellow}</span></h5>
                    <h5>Total Red Ranking: <span class="span">${stateData.red}</span></h5>
                </div>
            </article>
    `
        const stateResultsContainerDiv = document.querySelector("#stateResults")
        stateResultsContainerDiv.innerHTML = stateResults
    }
}
