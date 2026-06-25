// ===== SERVICES =====
customElements.define('services-section', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .section { background:var(--gray-100); padding:100px 24px 80px; }
                .inner { max-width:1200px; margin:0 auto; }
                .section-title { font-size:clamp(2rem,3.4vw,2.8rem); font-weight:700; letter-spacing:-0.02em; margin-bottom:12px; }
                .section-sub { color:var(--gray-600); font-size:1.05rem; max-width:580px; margin-bottom:48px; line-height:1.7; }
                .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:24px; }
                .card {
                    background:#fff;
                    border-radius:var(--radius);
                    padding:32px 24px 28px;
                    text-align:center;
                    transition:var(--transition);
                    border:1px solid transparent;
                    box-shadow:var(--shadow-sm);
                }
                .card:hover { transform:translateY(-6px); box-shadow:var(--shadow-md); border-color:rgba(47,128,237,0.10); }
                .card .icon {
                    width:64px; height:64px;
                    margin:0 auto 16px;
                    border-radius:50%;
                    background:linear-gradient(135deg,rgba(47,128,237,0.08),rgba(86,204,242,0.08));
                    display:flex; align-items:center; justify-content:center;
                    font-size:2rem;
                }
                .card h3 { font-size:1.1rem; font-weight:600; margin-bottom:6px; }
                .card p { color:var(--gray-600); font-size:0.9rem; line-height:1.5; }
                @media (max-width:768px) {
                    .section { padding:70px 16px 50px; }
                    .grid { gap:16px; }
                    .card { padding:24px 16px 20px; }
                }
            </style>
            <section class="section reveal" id="services">
                <div class="inner">
                    <span class="section-label" style="display:inline-block;font-size:0.7rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--blue);background:rgba(47,128,237,0.10);padding:4px 16px;border-radius:30px;margin-bottom:14px;">What We Do</span>
                    <h2 class="section-title">Our <span class="text-gradient">Services</span></h2>
                    <p class="section-sub">End-to-end digital solutions tailored to your business needs.</p>
                    <div class="grid">
                        <div class="card"><div class="icon">💻</div><h3>Web Development</h3><p>Custom websites &amp; web apps</p></div>
                        <div class="card"><div class="icon">📱</div><h3>Software Engineering</h3><p>Desktop &amp; mobile solutions</p></div>
                        <div class="card"><div class="icon">🗃️</div><h3>Database Integration</h3><p>Optimized data systems</p></div>
                        <div class="card"><div class="icon">🛡️</div><h3>Cybersecurity</h3><p>Protection &amp; compliance</p></div>
                        <div class="card"><div class="icon">🌍</div><h3>Server Deployment</h3><p>Cloud &amp; on-premise setup</p></div>
                        <div class="card"><div class="icon">🎬</div><h3>Video &amp; Graphic Design</h3><p>Branding &amp; motion content</p></div>
                        <div class="card"><div class="icon">📧</div><h3>Email Server Setup</h3><p>Secure mail infrastructure</p></div>
                        <div class="card"><div class="icon">📈</div><h3>Social Media Marketing</h3><p>Growth &amp; engagement</p></div>
                    </div>
                </div>
            </section>
        `;
    }
});