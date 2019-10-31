export default {

    buildAndAppendbackgroundImage: () => {
        const backgroundImage = `
        <div id ="background"></div>
        `
        const backgroundContainerDiv = document.querySelector("#background-container")
        backgroundContainerDiv.innerHTML = backgroundImage
    },

    buildAndAppendheader: () => {
        const navBarHeader = `
        <header class="global-header">
                <img class="dg-literacy-logo" src="https://www.dgliteracy.org/wp-content/themes/dg-literacy/assets/images/dg-literacy-logo_656w.png" alt="Dollar General Literacy Foundation">
                <h1 id="title">Grant Application Lookup</h1>

        </header>
        `
        const headerContainer = document.querySelector("#header")
        headerContainer.innerHTML = navBarHeader
    }
}