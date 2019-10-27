import design from "./design.js"
import footer from "./footer.js"
import stateDropdown from "./stateDropdown.js";
import appForm from "./appForm.js";


design.buildAndAppendbackgroundImage()

design.buildAndAppendheader()

appForm.buildAndAppendAppForm()

footer.buildAndAppendFooter()

stateDropdown.createDropdown();

document.querySelector("#state-dropdown").addEventListener("change", stateDropdown.handleSelection)

window.addEventListener("hashchange", event => console.log(location.hash));
