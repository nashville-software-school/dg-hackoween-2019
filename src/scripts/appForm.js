import dataManager from "./dataManager.js"


const appForm = {
    getAppDataAndAddHashChangeListener: () => {
        dataManager.getApplicationData().then((applicationsArray) => {
            window.addEventListener("hashchange", event => {
                const applicationId = parseInt(location.hash.split("#")[1])
                const selectedApplication = applicationsArray.find(application => parseInt(application.id) === applicationId)
                if (selectedApplication) {
                    // Loop over object properties to check for empty responses and replace with "Answer not provided by applicant"
                    for (const key in selectedApplication) {
                        if (selectedApplication[key] === "") {
                            selectedApplication[key] = "(Answer not provided by applicant)"
                        }
                    }
                    appForm.buildAndAppendAppForm(selectedApplication)
                } else {
                    window.alert("This application cannot be found.")
                }
            });
        })
    },
    buildAndAppendAppForm: (appObject) => {
        const application =
            `
        <div class ="appForm">
            <h2 class="application-header">Application</h2>
            <section id="appFormSection">
                <div class="field">
                    <h4 class="app-form-question">Project Title:</h4>
                    <p class="app-form-answer">${appObject.title}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Request ID:</h4>
                    <p class="app-form-answer">${appObject.id}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Color Ranking:</h4>
                    <p class="app-form-answer">${appObject.color}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Has National ID:</h4>
                    <p class="app-form-answer">${appObject.has_national_id}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Complete Organization Address:</h4>
                    <p class="app-form-answer">${appObject.address}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">State:</h4>
                    <p class="app-form-answer">${appObject.state}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">ZIP Code: </h4>
                    <p class="app-form-answer">${appObject.zip}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Grant/Request Amount:</h4>
                    <p class="app-form-answer">${appObject.request_amount}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Number of individuals served by funding from this Adult Literacy application Total:</h4>
                    <p class="app-form-answer">${appObject.nbr_served}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Is this a new project?:</h4>
                    <p class="app-form-answer">${appObject.new_proj}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">What is your National Literacy Directory Program ID number?:</h4>
                    <p class="app-form-answer">${appObject.nldp_id}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Geographic Classification:</h4>
                    <p class="app-form-answer">${appObject.geo_class}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">What is the unemployment rate?:</h4>
                    <p class="app-form-answer">${appObject.unemployment_rate}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">What is the drop-out rate?:</h4>
                    <p class="app-form-answer">${appObject.dropout_rate}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">What is the poverty level in the geographical area served?:</h4>
                    <p class="app-form-answer">${appObject.poverty}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">What is the literacy rate in the geographical area served?:</h4>
                    <p class="app-form-answer">${appObject.literacy}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">"If it is not the first year for this project, then how many individuals were served by this Adult Literacy program":</h4>
                    <p class="app-form-answer">${appObject.previously_served}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Statement of Impact:</h4>
                    <p class="app-form-answer">${appObject.impact_statement}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Project/Program Objective:</h4>
                    <p class="app-form-answer">${appObject.objective}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Project/Program Design:</h4>
                    <p class="app-form-answer">${appObject.design}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Timeline:</h4>
                    <p class="app-form-answer">${appObject.timeline}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Assessment Methods:</h4>
                    <p class="app-form-answer">${appObject.assess_methods}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Project Facilities:</h4>
                    <p class="app-form-answer">${appObject.facilities}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Available Technology:</h4>
                    <p class="app-form-answer">${appObject.available_tech}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Are you requesting technology with this grant application?:</h4>
                    <p class="app-form-answer">${appObject.tech_request}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">"If yes, how will it be used to advance the literacy program we would be funding?":</h4>
                    <p class="app-form-answer">${appObject.tech_use_how}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Revenue - Sources of Funding Total:</h4>
                    <p class="app-form-answer">${appObject.funding_sources}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Budget Allocations Total:</h4>
                    <p class="app-form-answer">${appObject.total_budget}</p>
                </div>
                <div class="field">
                    <h4 class="app-form-question">Budget Narrative:</h4>
                    <p class="app-form-answer">${appObject.budget_narrative}</p>
                </div>
            </section>
        </div>
        `

        const appFormContainerDiv = document.querySelector("#app-and-data-container")
        appFormContainerDiv.innerHTML = application
    }
}

export default appForm