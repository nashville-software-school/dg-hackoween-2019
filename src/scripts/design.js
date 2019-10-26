const buildAndAppendbackgroundImage = () => {
    const backgroundImage = `
    <div id ="background"></div>
    `
    console.log(backgroundImage)

    const backgroundContainerDiv = document.querySelector("#background-container")
    backgroundContainerDiv.innerHTML = backgroundImage
}

const buildAndAppendheader = () => {
    const navBarHeader = `
    <header class="global-header sticky">
        <a href="https://www.dgliteracy.org/" title="Dollar General Literacy Foundation" rel="home" class="logo"><img
            src="https://www.dgliteracy.org/wp-content/themes/dg-literacy/assets/images/dg-literacy-logo_656w.png"
            alt="Dollar General Literacy Foundation"></a>
        <div id="main_nav_container" class="sticky">
            <nav class="global-header-nav sticky" itemscope="" itemtype="http://schema.org/Menu">
                <ul class="main-nav">
                    <li class="current--item"><a href="https://www.dgliteracy.org/"
                        aria-current="page"><span>Home</span></a></li>
                    <li><a href="https://www.dgliteracy.org/about-us/"><span>About Us</span></a></li>
                    <li><a href="https://www.dgliteracy.org/national-literacy-directory/"><span>Find A Program</span></a>
                    </li>
                    <li class="dropdown__item"><a class="dropdown-toggle"
                        href="https://www.dgliteracy.org/grant-programs/"><span>Grant Programs</span></a>
                        <ul class="dropdown depth--zero" style="display: none;">
                            <li><a href="/grant-programs/#adult-literacy-grants"><span>Adult Literacy Grants</span></a></li>
                            <li><a href="/grant-programs/#beyond-words"><span>Beyond Words</span></a></li>
                            <li><a href="/grant-programs/#family-literacy-grants"><span>Family Literacy Grants</span></a>
                            </li>
                            <li><a href="/grant-programs/#summer-reading"><span>Summer Reading</span></a></li>
                            <li><a href="/grant-programs/#youth-literacy-grants"><span>Youth Literacy Grants</span></a></li>
                            <li class="rise-up"><a href="https://www.dgliteracy.org/riseuptoshine/"><span>Rise Up to Shine</span></a></li>
                        </ul>
                    </li>
                    <li class="last"><a href="https://www.dgliteracy.org/get-involved/"><span>Get Involved</span></a></li>
                    <li class="donate"><a href="https://www.dgliteracy.org/donate/"><span>Donate</span></a></li>
                </ul>
            </nav>
        </div>
        <div class="mobile_menu">
            <a href="#mm_container" class="mm_btn"><span class="icon icon-menu2"></span></a>
            <div id="mm_container">
                <ul class="main-nav">
                    <li class="current--item"><a href="https://www.dgliteracy.org/"aria-current="page"><span>Home</span></a></li>
                    <li><a href="https://www.dgliteracy.org/about-us/"><span>About Us</span></a></li>
                    <li><a href="https://www.dgliteracy.org/national-literacy-directory/"><span>Find A Program</span></a></li>
                    <li class="dropdown__item"><a class="dropdown-toggle"href="https://www.dgliteracy.org/grant-programs"><span>GrantPrograms</span></a>
                        <ul class="dropdown depth--zero">
                            <li><a href="/grant-programs/#adult-literacy-grants"><span>Adult Literacy Grants</span></a></li>
                            <li><a href="/grant-programs/#beyond-words"><span>Beyond Words</span></a></li>
                            <li><a href="/grant-programs/#family-literacy-grants"><span>Family Literacy Grants</span></a></li>
                            <li><a href="/grant-programs/#summer-reading"><span>Summer Reading</span></a></li>
                            <li><a href="/grant-programs/#youth-literacy-grants"><span>Youth Literacy Grants</span></a></li>
                            <li class="rise-up"><a href="https://www.dgliteracy.org/riseuptoshine/"><span>Rise Up to Shine</span></a></li>
                        </ul>
                    </li>
                    <li class="last"><a href="https://www.dgliteracy.org/get-involved/"><span>Get Involved</span></a></li>
                    <li class="donate"><a href="https://www.dgliteracy.org/donate/"><span>Donate</span></a></li>
                </ul>
            </div>
        </div>
    </header>
    `
    console.log("hello", navBarHeader)

    const headerContainer = document.querySelector("#header")
    headerContainer.innerHTML = navBarHeader
}
