export default{
    buildAndAppendAppForm: (appObject) => {
        const appForm = 
<<<<<<< HEAD
        // `
        // <article id ="appForm">
        //     <h3>Application</h3>
            //     <section>
            //         <h4>Request ID:</h4> 
                            // <div id="appObjectId">${appObject.id}</div>
            //         <h4>Complete Organization Address:</h4> 
                            // <div id="appObjectAddress">${appObject.address}</div>
            //         <h4>ZIP Code:</h4>
                            // <div id="appObjectZip">${appObject.zip}</div>
            //         <h4>Project Title:</h4> 
                            // <div id="appObjectTitle">${appObject.title}</div>
            //         <h4>Grant/Request Amount:</h4> 
                            // <div id="appObjectRequestAmount">${appObject.request_amount}</div>
            //         <h4>Number of individuals served by funding from this Adult Literacy application Total:</h4> 
                            // <div id="appObjectNbrServed">${appObject.nbr_served}</div>
            //         <h4>Is this a new project?:</h4> 
                            // <div id="appObjectNewPro">${appObject.new_proj}</div>
            //         <h4>What is your National Literacy Directory Program ID number?:</h4> 
                            // <div id="appObjectNldpId">${appObject.NLDP_id}</div>
            //         <h4>Geographic Classification:</h4> 
                            // <div id="appObjectGeoClass">${appObject.geo_class}</div>
            //         <h4>What is the unemployment rate?:</h4> 
                            // <div id="appObjectUnemployment">${appObject.unemployment_rate}</div>
            //         <h4>What is the drop-out rate?:</h4> 
                            // <div id="appObjectDropoutRate">${appObject.dropout_rate}</div>
            //         <h4>What is the poverty level in the geographical area served?:</h4> 
                            // <div id="appObjectPoverty">${appObject.poverty}</div>
            //         <h4>What is the literacy rate in the geographical area served?:</h4> 
                            // <div id="appObjectLiteracy">${appObject.literacy}</div>
            //         <h4>"If it is not the first year for this project, then how many individuals were served by this Adult Li":</h4> 
                            // <div id="appObjectPreviouslyServed">${appObject.previously_served}</div>
            //         <h4>Statement of Impact:</h4> 
                            // <div id="appObjectImpactStatement">${appObject.impact_statement}</div>
            //         <h4>Project/Program Objective:</h4> 
                            // <div id="appObjectObjective">${appObject.objective}</div>
            //         <h4>Project/Program Design:</h4> 
                            // <div id="appObjectDesign">${appObject.design}</div>
            //         <h4>Timeline:</h4> 
                            // <div id="appObjectTimeline">${appObject.timeline}</div>
            //         <h4>Assessment Methods:</h4> 
                            // <div id="appObjectAssessMethods">${appObject.assess_methods}</div>
            //         <h4>Project Facilities:</h4> 
                            // <div id="appObjectFacilities">${appObject.facilities}</div>
            //         <h4>Available Technology:</h4> 
                            // <div id="appObjectAvailableTech">${appObject.available_tech}</div>
            //         <h4>Are you requesting technology with this grant application?:</h4> 
                            // <div id="appObjectTechRequest">${appObject.tech_request}</div>
            //         <h4>"If yes, how will it be used to advance the literacy program we would be funding?":</h4> 
                            // <div id="appObjectAppObject">${appObject.tech_use_how}</div>
            //         <h4>Revenue - Sources of Funding Total:</h4> 
                            // <div id="appObjectFundingSources">${appObject.funding_sources}</div>
            //         <h4>Budget Allocations Total:</h4> 
                            // <div id="appObjectTotalBudget">${appObject.total_budget}</div>
            //         <h4>Budget Narrative:</h4> 
                            // <div id="appObjectNarrative">${appObject.budget_narrative}</div>
            //         <h4>Latitude:</h4> 
                            // <div id="appObjectLat">${appObject.lat}</div>
            //         <h4>Longitude:</h4> 
                            // <div id="appObjectLng">${appObject.lng}</div>
            //     </section>
        // </article>
        // `

        // test data
=======
>>>>>>> master
        `
        <div id ="appForm">
            <h2>Application</h2>
            <section id="appFormSection">
                <div class="field">
                    <h4>Request ID:</h4>
                    <p>${appObject.id}</p>
                </div>
                <div class="field">
                    <h4>Color Ranking:</h4>
                    <p>${appObject.color}</p>
                </div>
                <div class="field">
                    <h4>Has National ID:</h4>
                    <p>${appObject.has_national_id}</p>
                </div>
                <div class="field">
                    <h4>Required Keywords:</h4>
                    <p>${appObject.required_keyword}</p>
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
                    <h4>State:</h4>
                    <p>${appObject.state}</p>
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