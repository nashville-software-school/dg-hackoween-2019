const buildAndAppendbackgroundImage = () => {
    const backgroundImage = `
    <div id ="background"></div>
    `
    console.log(backgroundImage)

    const backgroundContainerDiv = document.querySelector("#background-container")
    backgroundContainerDiv.innerHTML = backgroundImage
}

const buildAndAppendheader = () => {
    const navBarHeader = `
    <header class="global-header">
        <a href="https://www.dgliteracy.org/" title="Dollar General Literacy Foundation" rel="home" class="logo">
            <img src="https://www.dgliteracy.org/wp-content/themes/dg-literacy/assets/images/dg-literacy-logo_656w.png" alt="Dollar General Literacy Foundation">
        </a>
        </div>
    </header>
    `
    console.log("hello", navBarHeader)

    const headerContainer = document.querySelector("#header")
    headerContainer.innerHTML = navBarHeader
}
