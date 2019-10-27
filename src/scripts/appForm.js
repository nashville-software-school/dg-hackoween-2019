export default{
    buildAndAppendAppForm: () => {
        const appForm = 
        // `
        // <div id ="appForm">
        //     <h3>Application</h3>
        //     <section>
        //         <article>Request ID: ${appObject.id}</article>
        //         <article>Complete Organization Address: ${appObject.address}</article>
        //         <article>ZIP Code: ${appObject.zip}</article>
        //         <article>Project Title: ${appObject.title}</article>
        //         <article>Grant/Request Amount: ${appObject.request_amount}</article>
        //         <article>Number of individuals served by funding from this Adult Literacy application Total: ${appObject.nbr_served}</article>
        //         <article>Is this a new project?: ${appObject.new_proj}</article>
        //         <article>What is your National Literacy Directory Program ID number?: ${appObject.NLDP_id}</article>
        //         <article>Geographic Classification: ${appObject.geo_class}</article>
        //         <article>What is the unemployment rate?: ${appObject.unemployment_rate}</article>
        //         <article>What is the drop-out rate?: ${appObject.dropout_rate}</article>
        //         <article>What is the poverty level in the geographical area served?: ${appObject.poverty}</article>
        //         <article>What is the literacy rate in the geographical area served?: ${appObject.literacy}</article>
        //         <article>"If it is not the first year for this project, then how many individuals were served by this Adult Li": ${appObject.previously_served}</article>
        //         <article>Statement of Impact: ${appObject.impact_statement}</article>
        //         <article>Project/Program Objective: ${appObject.objective}</article>
        //         <article>Project/Program Design: ${appObject.design}</article>
        //         <article>Timeline: ${appObject.timeline}</article>
        //         <article>Assessment Methods: ${appObject.assess_methods}</article>
        //         <article>Project Facilities: ${appObject.facilities}</article>
        //         <article>Available Technology: ${appObject.available_tech}</article>
        //         <article>Are you requesting technology with this grant application?: ${appObject.tech_request}</article>
        //         <article>"If yes, how will it be used to advance the literacy program we would be funding?": ${appObject.tech_use_how}</article>
        //         <article>Revenue - Sources of Funding Total: ${appObject.funding_sources}</article>
        //         <article>Budget Allocations Total: ${appObject.total_budget}</article>
        //         <article>Budget Narrative: ${appObject.budget_narrative}</article>
        //         <article>Latitude: ${appObject.lat}</article>
        //         <article>Longitude: ${appObject.lng}</article>
        //     </section>
        // </div>
        // `

        // test data
        `
        <div id ="appForm">
            <h2>Application</h2>
            <section id="appFormSection">
                <div class="field">
                    <h4>Project Title:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>Request ID:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>Complete Organization Address:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>ZIP Code:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>Grant/Request Amount:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>Number of individuals served by funding from this Adult Literacy application Total:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>Is this a new project?:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>What is your National Literacy Directory Program ID number?:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>Geographic Classification:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>What is the unemployment rate?:<h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>What is the drop-out rate?:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>What is the poverty level in the geographical area served?:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>What is the literacy rate in the geographical area served?:</h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>"If it is not the first year for this project, then how many individuals were served by this Adult Li":</h4>
                    <p>text text</p>
                </div>
                <div class="field">Statement of Impact: </div>
                <div class="field">Project/Program Objective:</div>
                <div class="field">Project/Program Design: </div>
                <div class="field">Timeline: </div>
                <div class="field">Assessment Methods: </div>
                <div class="field">Project Facilities: </div>
                <div class="field">Available Technology: </div>
                <div class="field">Are you requesting technology with this grant application?: </div>
                <div class="field">"If yes, how will it be used to advance the literacy program we would be funding?":</div>
                <div class="field">Revenue - Sources of Funding Total: </div>
                <div class="field">Budget Allocations Total: </div>
                <div class="field">Budget Narrative: </div>
                <div class="field">Latitude: </div>
                <div class="field">Longitude: </div>
            </section>
        </div>
        `

        console.log(appForm)

        const appFormContainerDiv = document.querySelector("#app-form")
        appFormContainerDiv.innerHTML = appForm
    }
}