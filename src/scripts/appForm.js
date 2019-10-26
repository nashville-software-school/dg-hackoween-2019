export default{
    buildAndAppendAppForm: () => {
        const appForm = `
        <div id ="appForm">
            <h3>Application</h3>
            <section>
                <article>Request ID: ${appForm.id}</article>
                <article>Complete Organization Address: ${appForm.address}</article>
                <article>ZIP Code: ${appForm.zip}</article>
                <article>Project Title: ${appForm.title}</article>
                <article>Grant/Request Amount: ${appForm.request_amount}</article>
                <article>Number of individuals served by funding from this Adult Literacy application Total: ${appForm.nbr_served}</article>
                <article>Is this a new project?: ${appForm.new_proj}</article>
                <article>What is your National Literacy Directory Program ID number?: ${appForm.NLDP_id}</article>
                <article>Geographic Classification: ${appForm.geo_class}</article>
                <article>What is the unemployment rate?: ${appForm.unemployment_rate}</article>
                <article>What is the drop-out rate?: ${appForm.dropout_rate}</article>
                <article>What is the poverty level in the geographical area served?: ${appForm.poverty}</article>
                <article>What is the literacy rate in the geographical area served?: ${appForm.literacy}</article>
                <article>"If it is not the first year for this project, then how many individuals were served by this Adult Li": ${appForm.zip}</article>



            </section>
        </div>
        `
        console.log(appForm)

        const appFormContainerDiv = document.querySelector("#app-form")
        appFormContainerDiv.innerHTML = appForm
    }
}