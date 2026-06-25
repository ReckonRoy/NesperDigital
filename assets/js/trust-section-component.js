// ===== TRUST =====
customElements.define('trust-section', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .section { padding:100px 24px 80px; max-width:1200px; margin:0 auto; }
                .section-title { font-size:clamp(2rem,3.4vw,2.8rem); font-weight:700; letter-spacing:-0.02em; margin-bottom:12px; }
                .section-sub { color:var(--gray-600); font-size:1.05rem; max-width:580px; margin-bottom:48px; line-height:1.7; }
                .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:24px; }
                .card {
                    background:var(--white);
                    border-radius:var(--radius);
                    padding:32px 24px;
                    border:1px solid var(--gray-200);
                    text-align:center;
                    transition:var(--transition);
                }
                .card:hover { transform:translateY(-6px); box-shadow:var(--shadow-md); border-color:transparent; }
                .card .num { font-size:2.4rem; font-weight:800; color:var(--blue); margin-bottom:4px; }
                .card h3 { font-size:1.1rem; font-weight:600; }
                .card p { color:var(--gray-600); font-size:0.9rem; }
                @media (max-width:768px) {
                    .section { padding:70px 16px 50px; }
                    .grid { gap:16px; }
                }
            </style>
            <section class="section reveal" id="trust">
                <span class="section-label" style="display:inline-block;font-size:0.7rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--blue);background:rgba(47,128,237,0.10);padding:4px 16px;border-radius:30px;margin-bottom:14px;">Why Trust Us</span>
                <h2 class="section-title">Built on <span class="text-gradient">Trust</span></h2>
                <p class="section-sub">We focus on delivering reliable, secure, and scalable solutions that stand the test of time.</p>
                <div class="grid">
                    <div class="card"><div class="num">10+</div><h3>Years Experience</h3><p>Proven delivery across industries</p></div>
                    <div class="card"><div class="num">✅</div><h3>Reliable Systems</h3><p>Used in production environments</p></div>
                    <div class="card"><div class="num">🔒</div><h3>Security Focused</h3><p>Best-in-class security practices</p></div>
                    <div class="card"><div class="num">🤝</div><h3>Long-Term Support</h3><p>We grow with your business</p></div>
                </div>
            </section>
        `;
    }
});