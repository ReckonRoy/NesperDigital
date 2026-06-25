// ===== INSIGHTS =====
customElements.define('insights-section', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .section { padding: 100px 24px 80px; max-width:1200px; margin:0 auto; }
                .section-title { font-size: clamp(2rem,3.4vw,2.8rem); font-weight:700; letter-spacing:-0.02em; margin-bottom:12px; }
                .section-sub { color:var(--gray-600); font-size:1.05rem; max-width:580px; margin-bottom:48px; line-height:1.7; }
                .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:28px; }
                .card {
                    background: var(--white);
                    border-radius: var(--radius);
                    padding: 32px 28px;
                    border: 1px solid var(--gray-200);
                    transition: var(--transition);
                    cursor: default;
                    position: relative;
                    overflow: hidden;
                }
                .card::before {
                    content: '';
                    position: absolute;
                    top:0; left:0; right:0; height:4px;
                    background: linear-gradient(90deg, var(--blue), var(--blue-light));
                    opacity:0;
                    transition: var(--transition);
                }
                .card:hover { transform:translateY(-8px); box-shadow:var(--shadow-md); border-color:transparent; }
                .card:hover::before { opacity:1; }
                .card .icon {
                    width: 48px; height:48px;
                    border-radius:14px;
                    background: rgba(47,128,237,0.08);
                    display: flex; align-items:center; justify-content:center;
                    margin-bottom:18px;
                    font-size:1.6rem;
                }
                .card h3 { font-size:1.15rem; font-weight:600; margin-bottom:8px; }
                .card p { color:var(--gray-600); font-size:0.95rem; line-height:1.6; }
                .card .tag {
                    display:inline-block;
                    font-size:0.7rem;
                    font-weight:600;
                    color:var(--blue);
                    background:rgba(47,128,237,0.08);
                    padding:2px 14px;
                    border-radius:20px;
                    margin-top:12px;
                }
                @media (max-width:768px) {
                    .section { padding:70px 16px 50px; }
                    .grid { gap:18px; }
                    .card { padding:24px 20px; }
                }
            </style>
            <section class="section reveal" id="insights">
                <span class="section-label" style="display:inline-block;font-size:0.7rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--blue);background:rgba(47,128,237,0.10);padding:4px 16px;border-radius:30px;margin-bottom:14px;">Expertise</span>
                <h2 class="section-title">Insights &amp; <span class="text-gradient">Expertise</span></h2>
                <p class="section-sub">We combine technical depth with real-world business understanding to deliver solutions that scale, perform, and last.</p>
                <div class="grid">
                    <div class="card">
                        <div class="icon">⚙️</div>
                        <h3>Software Development Excellence</h3>
                        <p>Scalable applications for business workflows and long-term growth.</p>
                        <span class="tag">Full-Stack</span>
                    </div>
                    <div class="card">
                        <div class="icon">🗄️</div>
                        <h3>Database Management &amp; Optimization</h3>
                        <p>Fast, secure and reliable data systems that power your operations.</p>
                        <span class="tag">SQL &amp; NoSQL</span>
                    </div>
                    <div class="card">
                        <div class="icon">🌐</div>
                        <h3>Networking Solutions</h3>
                        <p>Stable infrastructure and connectivity systems for seamless performance.</p>
                        <span class="tag">Infrastructure</span>
                    </div>
                    <div class="card">
                        <div class="icon">🖥️</div>
                        <h3>Server Management</h3>
                        <p>Reliable server deployment, monitoring and maintenance.</p>
                        <span class="tag">DevOps</span>
                    </div>
                    <div class="card">
                        <div class="icon">🔒</div>
                        <h3>Cybersecurity</h3>
                        <p>Protecting systems and ensuring data integrity with best practices.</p>
                        <span class="tag">Security</span>
                    </div>
                    <div class="card">
                        <div class="icon">🎨</div>
                        <h3>Creative Digital Impact</h3>
                        <p>Design, motion and branding that engages users and tells your story.</p>
                        <span class="tag">Design &amp; Motion</span>
                    </div>
                </div>
            </section>
        `;
    }
});