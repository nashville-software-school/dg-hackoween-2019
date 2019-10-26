const buildAndAppendbackgroundImage = () => {
    const backgroundImage = `
    <div id = "background"></div>
    `
    console.log(backgroundImage)

    const backgroundContainerDiv = document.querySelector("#container")
    backgroundContainerDiv.innerHTML = backgroundImage
}

buildAndAppendbackgroundImage()