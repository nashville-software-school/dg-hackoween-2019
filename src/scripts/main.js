import design from "./design.js"
import footer from "./footer.js"
import stateDropdown from "./stateDropdown.js";
import appForm from "./appForm.js";
import stateResults from "./stateResults.js";
import ranking from "./ranking.js";

import dataManager from "./dataManager.js";


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

design.buildAndAppendbackgroundImage()

// design.buildAndAppendheader()

stateDropdown.createDropdown();

document.querySelector("#state-dropdown").addEventListener("change", stateDropdown.handleSelection)

