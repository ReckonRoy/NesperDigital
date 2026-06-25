// ===== FOOTER =====
customElements.define('footer-section', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: var(--navy);
                    color: rgba(255,255,255,0.7);
                    padding: 60px 24px 40px;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }
                footer .inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 2fr 1.5fr 1.5fr;
                    gap: 48px;
                    text-align: left;
                }
                footer .brand {
                    font-size: 1.6rem;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 12px;
                }
                footer .brand span {
                    color: var(--blue-light);
                }
                footer .story {
                    font-size: 0.9rem;
                    line-height: 1.7;
                    color: rgba(255,255,255,0.6);
                    max-width: 360px;
                    margin-bottom: 20px;
                }
                footer .story strong {
                    color: rgba(255,255,255,0.85);
                }
                footer .hours {
                    font-size: 0.85rem;
                    color: rgba(255,255,255,0.6);
                    margin-top: 8px;
                }
                footer .hours span {
                    display: inline-block;
                    min-width: 80px;
                    color: rgba(255,255,255,0.8);
                }
                footer .hours .day {
                    font-weight: 500;
                    color: #fff;
                }
                footer .col h4 {
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: 16px;
                    letter-spacing: 0.04em;
                }
                footer .links {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                footer .links a {
                    color: rgba(255,255,255,0.6);
                    font-size: 0.9rem;
                    transition: var(--transition);
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                footer .links a:hover {
                    color: #fff;
                    transform: translateX(4px);
                }
                footer .links a .icon {
                    opacity: 0.5;
                    font-size: 0.8rem;
                    transition: var(--transition);
                }
                footer .links a:hover .icon {
                    opacity: 1;
                }
                footer .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-size: 0.9rem;
                    color: rgba(255,255,255,0.6);
                }
                footer .contact-info .item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                footer .contact-info .item .ico {
                    font-size: 1.1rem;
                    opacity: 0.7;
                    width: 20px;
                }
                footer .social {
                    display: flex;
                    gap: 14px;
                    margin-top: 18px;
                }
                footer .social a {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.06);
                    color: rgba(255,255,255,0.5);
                    font-size: 0.95rem;
                    transition: var(--transition);
                    text-decoration: none;
                }
                footer .social a:hover {
                    background: rgba(47,128,237,0.25);
                    color: #fff;
                    transform: translateY(-3px);
                }
                footer .copy {
                    grid-column: 1 / -1;
                    text-align: center;
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.35);
                    border-top: 1px solid rgba(255,255,255,0.06);
                    padding-top: 28px;
                    margin-top: 16px;
                }
                /* Responsive */
                @media (max-width: 968px) {
                    footer .inner {
                        grid-template-columns: 1fr 1fr;
                        gap: 36px;
                    }
                    footer .story { max-width: 100%; }
                }
                @media (max-width: 640px) {
                    footer .inner {
                        grid-template-columns: 1fr;
                        gap: 32px;
                        text-align: center;
                    }
                    footer .story { margin: 0 auto 12px; }
                    footer .links { align-items: center; }
                    footer .contact-info { align-items: center; }
                    footer .social { justify-content: center; }
                    footer .hours { text-align: center; }
                }
            </style>
            <footer>
                <div class="inner">
                    <!-- Brand & Story -->
                    <div class="col">
                        <div class="brand">Nesper<span>Digital</span></div>
                        <p class="story">
                            <strong>NesperDigital</strong> is a collective of passionate technologists, 
                            designers, and strategists. We believe in using technology to amplify 
                            human potential — delivering high-performance systems, stunning design, 
                            and data-driven marketing that helps our clients reach new heights.
                        </p>
                        <div class="hours">
                            <div><span class="day">Mon – Fri:</span> <span>9:00 AM – 6:00 PM</span></div>
                            <div><span class="day">Saturday:</span> <span>10:00 AM – 2:00 PM</span></div>
                            <div><span class="day">Sunday:</span> <span>Closed</span></div>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="col">
                        <h4>Quick Links</h4>
                        <div class="links">
                            <a href="#home"><span class="icon">›</span> Home</a>
                            <a href="#services"><span class="icon">›</span> Services</a>
                            <a href="#trust"><span class="icon">›</span> Why Trust Us</a>
                            <a href="#case-studies"><span class="icon">›</span> Case Studies</a>
                            <a href="#team"><span class="icon">›</span> Our Team</a>
                            <a href="#contact"><span class="icon">›</span> Contact</a>
                        </div>
                    </div>

                    <!-- Contact & Social -->
                    <div class="col">
                        <h4>Get in Touch</h4>
                        <div class="contact-info">
                            <div class="item"><span class="ico">📧</span> nesperdigital@email.com</div>
                            <div class="item"><span class="ico">📞</span> +263 XXX XXX XXX</div>
                            <div class="item"><span class="ico">📍</span> Zimbabwe / South Africa</div>
                        </div>
                        <div class="social">
                            <a href="#" aria-label="LinkedIn">in</a>
                            <a href="#" aria-label="Twitter">𝕏</a>
                            <a href="#" aria-label="GitHub">⌨</a>
                            <a href="#" aria-label="YouTube">▶</a>
                        </div>
                    </div>

                    <!-- Copyright -->
                    <div class="copy">© 2026 NesperDigital. All rights reserved.</div>
                </div>
            </footer>
        `;

        // Smooth scroll for internal links
        this.shadowRoot.querySelectorAll('.links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
});