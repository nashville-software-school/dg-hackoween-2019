export default{
    buildAndAppendAppForm: (appObject) => {
        const appForm = `
        <div id ="appForm">
            <h3>Application</h3>
            <section>
                <article>Request ID: ${appObject.id}</article>
                <article>Complete Organization Address: ${appObject.address}</article>
                <article>ZIP Code: ${appObject.zip}</article>
                <article>Project Title: ${appObject.title}</article>
                <article>Grant/Request Amount: ${appObject.request_amount}</article>
                <article>Number of individuals served by funding from this Adult Literacy application Total: ${appObject.nbr_served}</article>
                <article>Is this a new project?: ${appObject.new_proj}</article>
                <article>What is your National Literacy Directory Program ID number?: ${appObject.NLDP_id}</article>
                <article>Geographic Classification: ${appObject.geo_class}</article>
                <article>What is the unemployment rate?: ${appObject.unemployment_rate}</article>
                <article>What is the drop-out rate?: ${appObject.dropout_rate}</article>
                <article>What is the poverty level in the geographical area served?: ${appObject.poverty}</article>
                <article>What is the literacy rate in the geographical area served?: ${appObject.literacy}</article>
                <article>"If it is not the first year for this project, then how many individuals were served by this Adult Li": ${appObject.zip}</article>



            </section>
        </div>
        `
        console.log(appForm)

        const appFormContainerDiv = document.querySelector("#app-form")
        appFormContainerDiv.innerHTML = appForm
    }
}