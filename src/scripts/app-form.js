export default{
    buildAndAppendbackgroundImage: () => {
        const appForm = `
        <div id ="appForm">
            <h3>Application</h3>
            <section>
                
            </section>
        </div>
        `
        // console.log(appForm)

        const appFormContainerDiv = document.querySelector("#app-form")
        appFormContainerDiv.innerHTML = appForm
    }
}