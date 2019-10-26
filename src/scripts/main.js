import design from "./design.js"
import footer from "./footer.js"
import stateDropdown from "./stateDropdown.js";
import submitButton from "./button.js";
import appForm from "./appForm.js";

// Comment later
design.buildAndAppendbackgroundImage()
design.buildAndAppendheader()

footer.buildAndAppendFooter()
// import data from './dataManager.js';

// comment later
stateDropdown.createDropdown();

appForm.buildAndAppendAppForm();
