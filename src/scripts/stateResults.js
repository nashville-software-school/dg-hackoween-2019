export default {
    buildAndAppendStateResults: () => {
        const stateResults = `
            <article>
                <h4 class=title>State Info</h4>
                <div>
                    <h5>Budget Amount><span>text text</span>
                    <h5>Total Apllications</h5><span>text text</span>
                    <h5>Total Green Ranking</h5><span>text text</span>
                    <h5>Total Orange Ranking</h5><span>text text</span>
                    <h5>Total Red Ranking</h5><span>text text</span>
                </div>
            </article>
    `
        console.log(stateResults)

        const stateResultsContainerDiv = document.querySelector("#stateResults")
        stateResultsContainerDiv.innerHTML = stateResults
    }
}
