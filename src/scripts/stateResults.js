export default {
    buildAndAppendStateResults: () => {
        const stateResults = `
            <article>
                <h3 class=title>State Info</h3>
                <div>
                    <h5>Budget Amount: <span class="span">text text</span></h5>
                    <h5>Total Apllications: <span class="span">text text</span></h5>
                    <h5>Total Green Ranking: <span class="span">text text</span></h5>
                    <h5>Total Orange Ranking: <span class="span">text text</span></h5>
                    <h5>Total Red Ranking: <span class="span">text text</span></h5>
                </div>
            </article>
    `
        console.log(stateResults)

        const stateResultsContainerDiv = document.querySelector("#stateResults")
        stateResultsContainerDiv.innerHTML = stateResults
    }
}
