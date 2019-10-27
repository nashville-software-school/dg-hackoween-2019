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
          appForm.buildAndAppendAppForm(selectedApplication)
        } else {
            window.alert("This application cannot be found.")
        }
    });
})

design.buildAndAppendbackgroundImage()

design.buildAndAppendheader()

stateResults.buildAndAppendStateResults();

ranking.buildAndAppendStateRanking();

footer.buildAndAppendFooter()

stateDropdown.createDropdown();

document.querySelector("#state-dropdown").addEventListener("change", stateDropdown.handleSelection)

