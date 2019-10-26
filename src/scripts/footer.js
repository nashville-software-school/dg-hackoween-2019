export default {
    buildAndAppendFooter: () => {
        const footer = `
    <nav class="global-footer-nav">
            <div>
                <a class="nss-home" href="http://nashvillesoftwareschool.com/" target="_blank">
                    <img class="nss-logo" src="http://nashvillesoftwareschool.com/images/NSS-logo-horizontal-small.jpg" alt="Nashville Software School Small Logo" class="logo">
                </a>
                <p class="hackoween"><strong>Nashville Software School Hackoween 2019</strong></p>
                <a class="dg-home" href="https://www.dollargeneral.com" target="_blank">
                    <img class="dg-logo" src="https://www.dgliteracy.org/wp-content/uploads/2018/03/dg-logo.svg" alt="Dollar General">
                </a>

                
            </div>
    </nav>
    `
        console.log(footer)

        const footerContainerDiv = document.querySelector("#footer-container")
        footerContainerDiv.innerHTML = footer
    }
}
