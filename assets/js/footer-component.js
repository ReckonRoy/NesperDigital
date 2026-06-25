// ===== FOOTER =====
customElements.define('footer-section', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background:var(--navy);
                    color:rgba(255,255,255,0.65);
                    padding:48px 24px 32px;
                    text-align:center;
                    border-top:1px solid rgba(255,255,255,0.06);
                }
                footer .inner { max-width:1200px; margin:0 auto; }
                footer .brand { font-size:1.4rem; font-weight:700; color:#fff; margin-bottom:6px; }
                footer .brand span { color:var(--blue-light); }
                footer .tagline { font-size:0.9rem; margin-bottom:20px; }
                footer .links { display:flex; flex-wrap:wrap; justify-content:center; gap:12px 28px; margin-bottom:24px; }
                footer .links a { font-size:0.85rem; transition:var(--transition); }
                footer .links a:hover { color:#fff; }
                footer .social { display:flex; justify-content:center; gap:16px; margin-bottom:28px; }
                footer .social a {
                    display:inline-flex;
                    align-items:center;
                    justify-content:center;
                    width:40px; height:40px;
                    border-radius:50%;
                    background:rgba(255,255,255,0.06);
                    color:rgba(255,255,255,0.5);
                    font-size:1.1rem;
                    transition:var(--transition);
                }
                footer .social a:hover { background:rgba(47,128,237,0.20); color:#fff; transform:translateY(-3px); }
                footer .copy { font-size:0.8rem; border-top:1px solid rgba(255,255,255,0.06); padding-top:24px; margin-top:8px; }
                @media (max-width:768px) {
                    footer { padding:36px 16px 24px; }
                    footer .links { gap:8px 16px; }
                }
            </style>
            <footer>
                <div class="inner">
                    <div class="brand">Nesper<span>Digital</span></div>
                    <div class="tagline">Digital solutions that drive excellence.</div>
                    <div class="links">
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#trust">Trust</a>
                        <a href="#clients">Clients</a>
                        <a href="#case-studies">Case Studies</a>
                        <a href="#team">Team</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div class="social">
                        <a href="#" aria-label="LinkedIn">in</a>
                        <a href="#" aria-label="Twitter">𝕏</a>
                        <a href="#" aria-label="GitHub">⌨</a>
                        <a href="#" aria-label="YouTube">▶</a>
                    </div>
                    <div class="copy">© 2026 NesperDigital. All rights reserved.</div>
                </div>
            </footer>
        `;
    }
});