export default {
    buildAndAppendStateRanking: () => {
        const stateRanking = `
            <article>
                <h3 class=title>App Rankings</h3>
                <div>
                    <h5>State Rank: <span class="span">text text</span></h5>
                    <h5>Request ID: <span class="span">text text</span></h5>
                    <h5>Project Title: <span class="span">text text</span></h5>
                </div>
            </article>
    `
        console.log(stateRanking)

        const stateRankingContainerDiv = document.querySelector("#ranking")
        stateRankingContainerDiv.innerHTML = stateRanking
    }
}
