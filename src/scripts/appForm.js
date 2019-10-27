export default{
    buildAndAppendAppForm: (appObject) => {
        const appForm = 
        `
        <div id ="appForm">
            <h2>Application</h2>
            <section id="appFormSection">
                <div class="field">
                    <h4>Request ID:</h4>
                    <p>${appObject.id}</p>
                </div>
                <div class="field">
                    <h4>Project Title:</h4>
                    <p>${appObject.title}</p>
                </div>
                <div class="field">
                    <h4>Complete Organization Address:</h4>
                    <p>${appObject.address}</p>
                </div>
                <div class="field">
                    <h4>ZIP Code: </h4>
                    <p>${appObject.zip}</p>
                </div>
                <div class="field">
                    <h4>Grant/Request Amount:</h4>
                    <p>${appObject.request_amount}</p>
                </div>
                <div class="field">
                    <h4>Number of individuals served by funding from this Adult Literacy application Total:</h4>
                    <p>${appObject.nbr_served}</p>
                </div>
                <div class="field">
                    <h4>Is this a new project?:</h4>
                    <p>${appObject.new_proj}</p>
                </div>
                <div class="field">
                    <h4>What is your National Literacy Directory Program ID number?:</h4>
                    <p>${appObject.NLDP_id}</p>
                </div>
                <div class="field">
                    <h4>Geographic Classification:</h4>
                    <p>${appObject.geo_class}</p>
                </div>
                <div class="field">
                    <h4>What is the unemployment rate?:</h4>
                    <p>${appObject.unemployment_rate}</p>
                </div>
                <div class="field">
                    <h4>What is the drop-out rate?:</h4>
                    <p>${appObject.dropout_rate}</p>
                </div>
                <div class="field">
                    <h4>What is the poverty level in the geographical area served?:</h4>
                    <p>${appObject.poverty}</p>
                </div>
                <div class="field">
                    <h4>What is the literacy rate in the geographical area served?:</h4>
                    <p>${appObject.literacy}</p>
                </div>
                <div class="field">
                    <h4>"If it is not the first year for this project, then how many individuals were served by this Adult Literacy program":</h4>
                    <p>${appObject.previously_served}</p>
                </div>
                <div class="field">
                    <h4>Statement of Impact:</h4>
                    <p>${appObject.impact_statement}</p>
                </div>
                <div class="field">
                    <h4>Project/Program Objective:</h4>
                    <p>${appObject.objective}</p>
                </div>
                <div class="field">
                    <h4>Project/Program Design:</h4>
                    <p>${appObject.design}</p>
                </div>
                <div class="field">
                    <h4>Timeline:</h4>
                    <p>${appObject.timeline}</p>
                </div>
                <div class="field">
                    <h4>Assessment Methods:</h4>
                    <p>${appObject.assess_methods}</p>
                </div>
                <div class="field">
                    <h4>Project Facilities:</h4>
                    <p>${appObject.facilities}</p>
                </div>
                <div class="field">
                    <h4>Available Technology:</h4>
                    <p>${appObject.available_tech}</p>
                </div>
                <div class="field">
                    <h4>Are you requesting technology with this grant application?:</h4>
                    <p>${appObject.tech_request}</p>
                </div>
                <div class="field">
                    <h4>"If yes, how will it be used to advance the literacy program we would be funding?":</h4>
                    <p>${appObject.tech_use_how}</p>
                </div>
                <div class="field">
                    <h4>Revenue - Sources of Funding Total:</h4>
                    <p>${appObject.funding_sources}</p>
                </div>
                <div class="field">
                    <h4>Budget Allocations Total:</h4>
                    <p>${appObject.total_budget}</p>
                </div>
                <div class="field">
                    <h4>Budget Narrative:</h4>
                    <p>${appObject.budget_narrative}</p>
                </div>
            </section>
        </div>
        `

        const appFormContainerDiv = document.querySelector("#app-form")
        appFormContainerDiv.innerHTML = appForm
    }
}