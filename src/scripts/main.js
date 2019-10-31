import design from "./design.js"
import stateDropdown from "./stateDropdown.js";
import appForm from "./appForm.js";

design.buildAndAppendbackgroundImage()

design.buildAndAppendheader()

stateDropdown.createDropdown()

document.querySelector("#state-dropdown").addEventListener("change", stateDropdown.handleSelection)

appForm.getAppDataAndAddHashChangeListener()





