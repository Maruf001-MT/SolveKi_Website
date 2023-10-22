class FooterTemplate extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `


      <div class="footer">
                <div class="container">
                    <div class="row w-row">
                        <div class="footer-col-left w-col w-col-4 w-col-stack"><a href="/" class="mb-20 w-inline-block"><img src="https://drive.prozukty.com/share/p9hVjvZNwhflzokW" loading="lazy" width="140" alt=""/></a>
                            <div>
                                <div class="mb-20 text-grey text-medium">Ready to transform your digital presence? Get in touch with us for a free consultation. We're ready to discuss your project and take it to the next level.</div>
                                <div class="footer-social"><a href="https://twitter.com/" target="_blank" class="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/60e725382856b1beae2f7d44_twitter%20(3).svg" loading="lazy" width="20" alt=""/></a>
                                    <a
                                        href="https://www.instagram.com/" target="_blank" class="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/60e724ee82f901312571abcd_instagram.svg" loading="lazy" width="20" alt="" /></a><a href="https://www.facebook.com/" target="_blank" class="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/60e724f8ffb53a696611e1d3_facebook.svg" loading="lazy" width="20" alt=""/></a>
                                        <a
                                            href="https://www.linkedin.com/" target="_blank" class="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60e442218dc45d472ca993d7/60e7254d64f0d08f78dadaae_linkedin%20(1).svg" loading="lazy" width="20" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-20-fixed w-col w-col-2 w-col-stack">
                            <div class="text-primary subtitle text-small mb-20">PRODUCTS</div><a href="/home/saas" class="footer-link text-small">Saas</a><a href="/home/startup" aria-current="page" class="footer-link text-small w--current">Startup</a><a href="/home/software" class="footer-link text-small">Software</a>
                            <a
                                href="/home/desktop-app" class="footer-link text-small">Desktop app</a><a href="/home/mobile-app" class="footer-link text-small">Mobile app</a>
                            </div>
                        <div class="mb-20-fixed w-col w-col-2 w-col-stack">
                            <div class="text-primary subtitle text-small mb-20">PLATFORM</div><a href="/features/product" class="footer-link text-small">Product features</a><a href="/features/solutions" class="footer-link text-small">Solutions</a><a href="/features/use-cases" class="footer-link text-small">Use cases</a>
                            <a
                                href="/pricing/custom-plan" class="footer-link text-small">Pricing</a><a href="/pricing/price-plans" class="footer-link text-small">Price plans</a></div>
                        <div class="mb-20-fixed w-col w-col-2 w-col-stack">
                            <div class="text-primary subtitle text-small mb-20">COMPANY</div><a href="/company" class="footer-link text-small">About us</a><a href="/careers" class="footer-link text-small">Careers</a><a href="/contacts" class="footer-link text-small">Contacts</a><a href="/case-studies"
                                class="footer-link text-small">Case studies</a><a href="/blog" class="footer-link text-small">Blog</a></div>
                        <div class="mb-20-fixed w-col w-col-2 w-col-stack">
                            <div class="text-primary subtitle text-small mb-20">RESOURCES</div><a href="/help-center-category" class="footer-link text-small">Support</a><a href="/style-guide" class="footer-link text-small">Style guide</a><a href="/licensing" class="footer-link text-small">Licensing</a>
                            <a
                                href="/changelog" class="footer-link text-small">Changelog</a><a href="/policy" class="footer-link text-small">Terms and policy</a>
                        </div>
                    </div>
                    <div class="footer-legal">
                        <div class="row w-row">
                            <div class="w-col w-col-4 w-col-stack">
                                <div class="text-grey text-extra-small">© Solveki. All Rights Reserved. </div>
                            </div>
                            <div class="footer-bottom-right w-col w-col-8 w-col-stack">
                                <div class="footer-bottom-right-container"><a href="https://webflow.com/" class="footer-link-legal text-extra-small">Powered by SolveKi</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      

      `;
    }
  }

  customElements.define('footer-template', FooterTemplate);