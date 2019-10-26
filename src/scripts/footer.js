const buildAndAppendFooter = () => {
    const footer = `
    <div class="container">
    <nav class="global-footer-nav">
        <div class="grid">
            <div
                class="grid__item col-1-2 m--col-1-3 l--col-1-4 xl--col-1-5 footer-nav__wrap footer-nav__wrap-primary">
                <ul class="footer-nav">
                    <li class="caps"><a href="https://www.dgliteracy.org/about-us/">About Us</a></li>
                    <li class="caps"><a href="https://www.dgliteracy.org/national-literacy-directory/">Find A
                            Program</a></li>
                    <li class="caps"><a href="https://www.dgliteracy.org/get-involved/">Get Involved</a></li>
                    <li class="donate footer__donate caps"><a href="https://www.dgliteracy.org/donate/">Donate</a>
                    </li>
                    <li class="caps hide-desktop"><a href="https://www.dgliteracy.org/terms-conditions/">Terms &amp;
                            Conditions</a></li>
                    <li class="caps hide-desktop"><a href="https://www.dgliteracy.org/privacy-policy/">Privacy
                            Policy</a></li>
                </ul>
            </div>
            <div
                class="grid__item col-1-2 m--col-1-3 l--col-1-4 xl--col-1-5 footer-nav__wrap footer-nav__wrap-secondary">
                <ul class="footer-nav-secondary">
                    <li class="caps"><a href="https://www.dgliteracy.org/grant-programs/">Grant Programs</a></li>
                    <li><a href="/grant-programs/#adult-literacy-grants">Adult Literacy Grants</a></li>
                    <li><a href="/grant-programs/#beyond-words">Beyond Words</a></li>
                    <li><a href="/grant-programs/#family-literacy-grants">Family Literacy Grants</a></li>
                    <li><a href="/grant-programs/#summer-reading">Summer Reading</a></li>
                    <li><a href="/grant-programs/#youth-literacy-grants">Youth Literacy Grants</a></li>
                    <li class="rise-up"><a href="https://www.dgliteracy.org/riseuptoshine/">Rise Up to Shine</a>
                    </li>
                </ul>
            </div>
            <div
                class="grid__item Xcol-1-2 m--col-1-3 l--col-1-4 xl--col-1-5 footer-nav__wrap footer-nav__wrap-tertiary">
                <ul class="footer-nav-tertiary">
                    <li class="caps"><a href="https://www.dgliteracy.org/terms-conditions/">Terms &amp;
                            Conditions</a></li>
                    <li class="caps"><a href="https://www.dgliteracy.org/privacy-policy/">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="grid__item col-1-2 m--col-1-3 l--col-1-4 xl--col-1-5 footer__sponsor">
                <p>Thanks to our sponsor</p>
                <a class="footer__sponsor-link" href="https://www.dollargeneral.com" target="_blank"><img
                        class="footer__sponsor-logo"
                        src="https://www.dgliteracy.org/wp-content/uploads/2018/03/dg-logo.svg"
                        alt="Dollar General"></a>
            </div>

        </div>
    </nav><!-- end global-footer-nav -->

    <div class="footer__copyright">
        <p>© 2019 Dollar General Literacy Foundation. All Rights Reserved</p>
    </div>


</div>    `
    console.log(footer)

    const footerContainerDiv = document.querySelector("#footer-container")
    footerContainerDiv.innerHTML = footer
}

// buildAndAppendFooter()