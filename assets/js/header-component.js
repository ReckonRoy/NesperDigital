// ===== HEADER =====
customElements.define('nesper-header', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                * { box-sizing: border-box; margin:0; padding:0; }
                :host {
                    display: block;
                    position: fixed;
                    top:0; left:0; width:100%;
                    z-index:1000;
                    transition: background 0.3s ease, box-shadow 0.3s ease;
                }
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 40px;
                    background: rgba(255,255,255,0.82);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border-bottom: 1px solid rgba(255,255,255,0.30);
                    transition: var(--transition);
                }
                .scrolled header {
                    background: rgba(255,255,255,0.94);
                    box-shadow: 0 4px 30px rgba(10,22,40,0.06);
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: var(--navy);
                }
                .logo span { color: var(--blue); }
                nav {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                nav a {
                    padding: 8px 16px;
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: var(--gray-600);
                    border-radius: 30px;
                    transition: var(--transition);
                    position: relative;
                }
                nav a:hover { color: var(--navy); background: rgba(47,128,237,0.06); }
                nav a.nav-cta {
                    background: linear-gradient(135deg, var(--blue), var(--blue-light));
                    color: #fff;
                    padding: 10px 24px;
                    font-weight: 600;
                    box-shadow: 0 4px 16px rgba(47,128,237,0.25);
                }
                nav a.nav-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 28px rgba(47,128,237,0.35);
                    background: linear-gradient(135deg, #3b8df2, #66d4f5);
                }
                .hamburger {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                }
                .hamburger span {
                    display: block;
                    width: 26px;
                    height: 2.5px;
                    background: var(--navy);
                    border-radius: 4px;
                    transition: var(--transition);
                }
                @media (max-width: 920px) {
                    header { padding: 14px 24px; }
                    nav a:not(.nav-cta) { display: none; }
                    .hamburger { display: flex; }
                    nav.open a:not(.nav-cta) {
                        display: block;
                        padding: 12px 20px;
                        width: 100%;
                        text-align: center;
                    }
                    nav.open {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: rgba(255,255,255,0.98);
                        backdrop-filter: blur(16px);
                        flex-direction: column;
                        padding: 16px 24px 24px;
                        border-bottom: 1px solid var(--gray-200);
                        gap: 4px;
                    }
                    nav.open .nav-cta {
                        margin-top: 8px;
                        width: 100%;
                        text-align: center;
                    }
                }
                @media (max-width: 480px) {
                    header { padding: 12px 16px; }
                    .logo { font-size: 1.2rem; }
                }
            </style>
            <header>
                <div class="logo">Nesper<span>Digital</span></div>
                <nav id="mainNav">
                    <a href="#home">Home</a>
                    <a href="#insights">Insights</a>
                    <a href="#services">Services</a>
                    <a href="#trust">Trust</a>
                    <a href="#clients">Clients</a>
                    <a href="#case-studies">Cases</a>
                    <a href="#team">Team</a>
                    <a href="#contact" class="nav-cta">Get Quote</a>
                </nav>
                <button class="hamburger" id="hamburgerBtn" aria-label="Toggle navigation">
                    <span></span><span></span><span></span>
                </button>
            </header>
        `;
        const btn = this.shadowRoot.getElementById('hamburgerBtn');
        const nav = this.shadowRoot.getElementById('mainNav');
        if (btn && nav) {
            btn.addEventListener('click', () => {
                nav.classList.toggle('open');
                btn.setAttribute('aria-expanded', nav.classList.contains('open'));
            });
        }
        this.shadowRoot.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                btn?.setAttribute('aria-expanded', 'false');
            });
        });
        const headerEl = this.shadowRoot.querySelector('header');
        const onScroll = () => {
            if (window.scrollY > 40) {
                headerEl.classList.add('scrolled');
            } else {
                headerEl.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
});
