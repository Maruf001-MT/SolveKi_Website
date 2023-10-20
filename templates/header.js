class HeaderTemplate extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <div data-collapse="medium" data-animation="default" data-duration="0" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
            <div class="container nav">
                <div class="navbar-container"><a href="/" class="brand w-nav-brand"><img src="assets/img/logo.svg" loading="lazy" alt="" height="35"/></a><a href="/" class="brand short w-nav-brand"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62c0431e7cea7b5c46b90a8c_mobile-logo-short.svg" loading="lazy" alt="" height="35"/></a>
                    <nav
                        role="navigation" class="nav-menu w-nav-menu">
                        <div>
                            <div data-hover="false" data-delay="0" class="nav-dropdown-link w-dropdown">
                                <div class="nav-link dropdown w-dropdown-toggle">
                                    <div class="nav-link-icon w-icon-dropdown-toggle"></div>
                                    <div>Products</div>
                                </div>
                                <nav class="nav-dropdown w-dropdown-list">
                                    <div class="container dropdown-inner">
                                        <div class="row nav-dropdown-main w-row">
                                            <div class="nav-dropdown-left w-col w-col-8 w-col-stack">
                                                <div class="row nav-dropdown-inner w-row">
                                                    <div class="mb-30 w-col w-col-8 w-col-small-small-stack">
                                                        <div class="nav-dropdown-section-divider">
                                                            <div class="subtitle text-extra-small text-grey mb-10">HOME PAGES</div>
                                                            <div class="row mb-30 w-row">
                                                                <div class="w-col w-col-6"><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/623a029d47497c25f67b31e2_servers.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Saas</div><div class="text-small text-light-grey">Home page - variant 1</div></div></a>
                                                                    <a
                                                                        href="#" aria-current="page" class="nav-link-block w-inline-block w--current"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62068c759543ef35c8503f9a_box.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon" />
                                                                        <div>
                                                                            <div class="text-medium text-semi">Startup</div>
                                                                            <div class="text-small text-light-grey">Home page - variant 2</div>
                                                                        </div>
                                                                        </a>
                                                                        <a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/623a028a359dbc6c719731c7_database.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Software</div><div class="text-small text-light-grey">Home page - variant 3</div></div></a></div>
                                                                <div
                                                                    class="w-col w-col-6"><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/620bc98eef6a67f73776baf2_brush.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Desktop app</div><div class="text-small text-light-grey">Home page - variant 4</div></div></a>
                                                                    <a
                                                                        href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/620bc9a3fdc3f3b24880538f_toggle.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon" />
                                                                        <div>
                                                                            <div class="text-medium text-semi">Mobile app</div>
                                                                            <div class="text-small text-light-grey">Home page - variant 5</div>
                                                                        </div>
                                                                        </a><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/623a02940d121a5006d0322a_git-compare.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Developer tool</div><div class="text-small text-light-grey">Home page - variant 6</div></div></a></div>
                                                        </div>
                                                        <div class="subtitle text-extra-small text-grey mb-10">TECH PAGES</div>
                                                        <div class="row w-row">
                                                            <div class="w-col w-col-6"><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62bdb391651501432172b012_download.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Download</div></div></a>
                                                                <a
                                                                    href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/620bc997d9f0376083934acd_users.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon" />
                                                                    <div>
                                                                        <div class="text-medium text-semi">Case stadies</div>
                                                                    </div>
                                                                    </a>
                                                            </div>
                                                            <div class="w-col w-col-6"><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62bdb3913b47d548a3f2b6c6_grid-layout.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Integrations</div></div></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="w-col w-col-4 w-col-small-small-stack">
                                                    <div class="subtitle text-extra-small text-grey mb-10">FEATURES PAGES</div>
                                                    <div class="mb-30"><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/60f5950ee816cfd767d0a239_compass.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Product features</div></div></a>
                                                        <a
                                                            href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/60f5950202189644d7d95b60_layers.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon" />
                                                            <div>
                                                                <div class="text-medium text-semi">Solutions</div>
                                                            </div>
                                                            </a><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/60f593bbe816cf6903d09f2d_shield-tick.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Use cases</div></div></a></div>
                                                    <div
                                                        class="subtitle text-extra-small text-grey mb-10">PRICING PAGES</div><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62bdb758ee998b8f47bb6552_tag.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Price plans</div></div></a>
                                                <a
                                                    href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62bdb758f7202234523f570b_toggle.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon" />
                                                    <div>
                                                        <div class="text-medium text-semi">Custom plan</div>
                                                    </div>
                                                    </a><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62bdb758ee7f14ef149fac32_cart.svg" loading="lazy" width="16" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">License purchase</div></div></a></div>
                                        </div>
                                    </div>
                                    <div class="nav-dropdown-right w-col w-col-4 w-col-stack">
                                        <div class="nav-dropdown-right-bg"></div>
                                        <div class="nav-dropdown-right-content">
                                            <div class="subtitle text-extra-small text-grey mb-10">LEARN</div><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62499d6b4993c18620f63328_91%20(2).svg" loading="lazy" width="36" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Help center</div><div class="text-small text-light-grey">Advice and answers from the Softkit team</div></div></a>
                                            <a
                                                href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62499d3661b33d52968a505e_05%20(3).svg" loading="lazy" width="36" alt="" class="nav-dropdown-link-icon" />
                                                <div>
                                                    <div class="text-medium text-semi">Support</div>
                                                    <div class="text-small text-light-grey">Let us know how we can help</div>
                                                </div>
                                                </a><a href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62bdb05fecff6a3cb8032be2_code-doc.svg" loading="lazy" width="36" alt="" class="nav-dropdown-link-icon"/><div><div class="text-medium text-semi">Documentation</div><div class="text-small text-light-grey">Examples and references for using API</div></div></a>
                                                <a
                                                    href="#" class="nav-link-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/62499d79e3129e018160f962_02%20(3).svg" loading="lazy" width="36" alt="" class="nav-dropdown-link-icon" />
                                                    <div>
                                                        <div class="text-medium text-semi">Blog</div>
                                                        <div class="text-small text-light-grey">Top product news, tips and stories</div>
                                                    </div>
                                                    </a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </nav>
                </div>
                <div data-hover="false" data-delay="0" class="nav-dropdown-link w-dropdown">
                    <div class="nav-link dropdown w-dropdown-toggle">
                        <div class="nav-link-icon w-icon-dropdown-toggle"></div>
                        <div>Platform</div>
                    </div>
                    <nav class="nav-dropdown w-dropdown-list">
                        <div class="container dropdown-inner">
                            <div class="row nav-dropdown-main w-row">
                                <div class="nav-dropdown-left w-col w-col-8 w-col-stack">
                                    <div>
                                        <div class="subtitle text-extra-small text-grey mb-20">FEATURES</div>
                                        <div class="row nav-link-block-row w-row">
                                            <div class="w-col w-col-6"><a href="#" class="nav-link-block light-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/623a37ab4d26f92dbddd537f_dev-feature-2.svg" loading="lazy" width="100" alt="" class="nav-link-block-icon"/><div><div class="text-semi mb-10 text-white">Product features</div><div class="text-light-grey text-small mb-10">Suspendisse varius enim in eros elementum tristique.</div><div class="text-small">Learn more</div></div></a></div>
                                            <div
                                                class="w-col w-col-6"><a href="#" class="nav-link-block light-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/623a38544d26f9e4efdd568f_dev-feature-1.svg" loading="lazy" width="100" alt="" class="mr-14"/><div><div class="text-semi mb-10 text-white">Solutions</div><div class="text-light-grey text-small mb-10">Suspendisse varius enim in eros elementum tristique.</div><div class="text-small">Learn more</div></div></a></div>
                                    </div>
                                    <div class="row nav-link-block-row w-row">
                                        <div class="w-col w-col-6"><a href="#" class="nav-link-block light-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/623a379aedf5590cb4690bee_dev-feature-4.svg" loading="lazy" width="100" alt="" class="mr-14"/><div><div class="text-semi mb-10 text-white">Use cases</div><div class="text-light-grey text-small mb-10">Suspendisse varius enim in eros elementum tristique.</div><div class="text-small">Learn more</div></div></a></div>
                                        <div
                                            class="w-col w-col-6"><a href="/case-studies" class="nav-link-block light-block w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/623a35edd83d0bdcf5691f6d_dev-feature-3.svg" loading="lazy" width="100" alt="" class="mr-14"/><div><div class="text-semi mb-10 text-white">Case studies</div><div class="text-light-grey text-small mb-10">Suspendisse varius enim in eros elementum tristique.</div><div class="text-small">Learn more</div></div></a></div>
                                </div>
                            </div>
                        </div>
                        <div class="nav-dropdown-right w-col w-col-4 w-col-stack">
                            <div class="nav-dropdown-right-bg"></div>
                            <div class="nav-dropdown-right-content">
                                <div class="subtitle text-extra-small text-grey mb-10">INTEGRATIONS</div>
                                <div class="mb-10 w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item">
                                            <a href="#" class="nav-link-block w-inline-block">
                                                <div>
                                                    <div class="nav-item-flex-title">
                                                        <div class="text-medium mr-10">Influentico</div>
                                                        <div class="label small">Billing</div>
                                                    </div>
                                                    <div class="nav-blog-content">
                                                        <div class="text-small text-light-grey">Aperiam non non debitis aut doloribus sapiente quam. Itaque totam explicabo nesciunt maiores expedita itaque. Consequatur iusto hic tempore odit perferendis. Quam autem est molestias et ipsum. Blanditiis
                                                            non nesciunt et eligendi consequ</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div role="listitem" class="w-dyn-item">
                                            <a href="#" class="nav-link-block w-inline-block">
                                                <div>
                                                    <div class="nav-item-flex-title">
                                                        <div class="text-medium mr-10">Flosso</div>
                                                        <div class="label small">CRM</div>
                                                    </div>
                                                    <div class="nav-blog-content">
                                                        <div class="text-small text-light-grey">Dolor nobis et possimus sit totam dolores fugiat provident. Quis quis et sint mollitia beatae illo. Magnam magni architecto laborum ea. Nihil sit provident necessitatibus nemo place</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div role="listitem" class="w-dyn-item">
                                            <a href="#" class="nav-link-block w-inline-block">
                                                <div>
                                                    <div class="nav-item-flex-title">
                                                        <div class="text-medium mr-10">Ophalla</div>
                                                        <div class="label small">Monitoring</div>
                                                    </div>
                                                    <div class="nav-blog-content">
                                                        <div class="text-small text-light-grey">Facilis itaque error ut dicta. Aspernatur non consequatur occaecati sapiente qui. Aut et omnis. Rerum quia rerum minus amet ipsam. Deserunt ipsam dolores quia a sapiente aut. Sunt odit odio in. Est
                                                            doloremque praesentium. Cum hic voluptas eos labore odio et distinctio blandit</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div><a href="#" class="link text-medium">All integrations<br/></a></div>
                        </div>
                </div>
            </div>
            </nav>
        </div><a href="#" class="nav-link w-nav-link">Pricing</a><a href="#" class="nav-link w-nav-link">Company</a><a href="#" class="nav-link w-nav-link">Blog</a>
        <div data-hover="false" data-delay="0" class="nav-dropdown-link w-dropdown">
            <div class="nav-link dropdown w-dropdown-toggle">
                <div class="nav-link-icon w-icon-dropdown-toggle"></div>
                <div>Resources</div>
            </div>
            <nav class="nav-dropdown w-dropdown-list">
                <div class="container dropdown-inner">
                    <div class="row nav-dropdown-main w-row">
                        <div class="nav-dropdown-left w-col w-col-8 w-col-stack">
                            <div>
                                <div class="subtitle text-extra-small text-grey mb-10">TEMPLATE PAGES</div>
                                <div class="row mb-30 w-row">
                                    <div class="w-col w-col-4">
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">SaaS - Home var.1</div>
                                            </div>
                                        </a>
                                        <a href="#" aria-current="page" class="nav-link-block simple w-inline-block w--current">
                                            <div>
                                                <div class="text-small text-semi">Startup - Home var.2</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Software - Home var.3</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Desktop App - Home var.4</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Mobile App - Home var.5</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Dev Tool  - Home var.6</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="w-col w-col-4">
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Product - Features var.1</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Solutions - Features var.2</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Use Cases - Features var.3</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Price Plans - Pricing var.1</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Custom Plan - Pricing var.2</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">License - Pricing var.3</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="w-col w-col-4">
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Company | About Us</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Careers</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Integrations</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Case Studies</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Contacts</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Download</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="divider grey"></div>
                                <div class="row mb-30 w-row">
                                    <div class="w-col w-col-4">
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Blog</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Help Center</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Support</div>
                                            </div>
                                        </a>
                                        <a href="/" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">About Template</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="w-col w-col-4">
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Sign up</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Login</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Password Recovery</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Search Results</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="w-col w-col-4">
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Policy</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Style Guide</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Licensing</div>
                                            </div>
                                        </a>
                                        <a href="#" class="nav-link-block simple w-inline-block">
                                            <div>
                                                <div class="text-small text-semi">Changelog</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nav-dropdown-right w-col w-col-4 w-col-stack">
                            <div class="nav-dropdown-right-bg"></div>
                            <div class="nav-dropdown-right-content">
                                <div class="subtitle text-extra-small text-grey mb-10">LATEST ANNOUNCEMENTS</div>
                                <div class="mb-10 w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="/blog/why-we-love-webflow-and-you-should-too" class="nav-link-block blog w-inline-block"><img alt="" loading="lazy" src="https://uploads-ssl.webflow.com/60ef0d03d225184dc95fca10/628019f72095ef79ffd06741_post-img-18.svg" width="94" class="nav-blog-img"/><div><div class="nav-blog-title"><div class="text-medium text-semi">Why We Love Webflow (And You Should, Too!)</div></div><div class="nav-blog-content"><div class="text-small text-light-grey">Sed nec pulvinar arcu. Proin dapibus vel augue eget egestas. Quisque ullamcorper quam eu egestas aliquet. Sed at ante sed massa bibendum fac</div></div></div></a></div>
                                        <div
                                            role="listitem" class="w-dyn-item"><a href="/blog/the-worst-advice-weve-ever-heard-about-web-design" class="nav-link-block blog w-inline-block"><img alt="" loading="lazy" src="https://uploads-ssl.webflow.com/60ef0d03d225184dc95fca10/628019dd2d729d545ad115f4_post-img-16.svg" width="94" class="nav-blog-img"/><div><div class="nav-blog-title"><div class="text-medium text-semi">The Worst Advice We&#x27;ve Ever Heard About Web Design</div></div><div class="nav-blog-content"><div class="text-small text-light-grey">Sed nec pulvinar arcu. Proin dapibus vel augue eget egestas. Quisque ullamcorper quam eu egestas aliquet. Sed at ante sed massa bibendum fac</div></div></div></a></div>
                                    <div
                                        role="listitem" class="w-dyn-item"><a href="/blog/5-principles-of-effective-web-design" class="nav-link-block blog w-inline-block"><img alt="" loading="lazy" src="https://uploads-ssl.webflow.com/60ef0d03d225184dc95fca10/628019ea7c3cb5083d6b078a_post-img-17.svg" width="94" class="nav-blog-img"/><div><div class="nav-blog-title"><div class="text-medium text-semi">5 Principles Of Effective Web Design</div></div><div class="nav-blog-content"><div class="text-small text-light-grey">Sed nec pulvinar arcu. Proin dapibus vel augue eget egestas. Quisque ullamcorper quam eu egestas aliquet. Sed at ante sed massa bibendum fac</div></div></div></a></div>
                            </div>
                        </div><a href="/blog" class="link text-medium">Read more<br/></a></div>
                </div>
        </div>
    </div>
    </nav>
    </div>
    </div>
    <div class="nav-menu-right"><a href="/" class="nav-link w-nav-link">Schedule a Meeting</a></div>
    </nav>
    <div class="nav-actions-container"><a href="https://solveki.prozukty.com/contact/" class="nav-menu-action button primary small w-button">Contact Us</a>
        <div class="mob-menu-button w-nav-button"></div>
    </div>
    </div>
    </div>
    </div>



      `;
    }
  }

  customElements.define('header-template', HeaderTemplate);