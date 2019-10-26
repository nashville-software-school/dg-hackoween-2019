import design from "./design.js"
import footer from "./footer.js"
import stateDropdown from "./stateDropdown.js";

// Comment later
design.buildAndAppendbackgroundImage()
design.buildAndAppendheader()

footer.buildAndAppendFooter()
// import data from './dataManager.js';

// comment later
stateDropdown.createDropdown();

document.querySelector("#state-dropdown").addEventListener("change", stateDropdown.handleSelection)

window.addEventListener("hashchange", event => console.log(location.hash));
