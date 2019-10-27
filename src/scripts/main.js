import design from "./design.js"
import footer from "./footer.js"
import stateDropdown from "./stateDropdown.js";
import appForm from "./appForm.js";
import dataManager from "./dataManager.js";


dataManager.getApplicationData().then((data) => {
    window.addEventListener("hashchange", event => {
        const applicationId = parseInt(location.hash.split("#")[1])
        const applicationsArray = data.applications
        const selectedApplication = applicationsArray.find(application => application.id === applicationId)
        appForm.buildAndAppendAppForm(selectedApplication)
        
    });
})

design.buildAndAppendbackgroundImage()
design.buildAndAppendheader()


footer.buildAndAppendFooter()

stateDropdown.createDropdown();

document.querySelector("#state-dropdown").addEventListener("change", stateDropdown.handleSelection)

