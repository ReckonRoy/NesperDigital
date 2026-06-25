// ===== CLIENTS =====
customElements.define('clients-section', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .section { background:var(--gray-100); padding:100px 24px 80px; }
                .inner { max-width:1200px; margin:0 auto; }
                .section-title { font-size:clamp(2rem,3.4vw,2.8rem); font-weight:700; letter-spacing:-0.02em; margin-bottom:12px; }
                .section-sub { color:var(--gray-600); font-size:1.05rem; max-width:580px; margin-bottom:48px; line-height:1.7; }
                .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:28px; }
                .card {
                    background:#fff;
                    border-radius:var(--radius);
                    padding:32px 28px;
                    box-shadow:var(--shadow-sm);
                    border:1px solid transparent;
                    transition:var(--transition);
                }
                .card:hover { transform:translateY(-6px); box-shadow:var(--shadow-md); border-color:rgba(47,128,237,0.08); }
                .card .rating { color:var(--gold); font-size:1.1rem; letter-spacing:2px; margin-top:12px; }
                .card h3 { font-size:1.2rem; font-weight:600; }
                .card .meta { color:var(--gray-600); font-size:0.85rem; margin:4px 0 10px; }
                .card p { color:var(--gray-600); font-size:0.95rem; line-height:1.6; }
                @media (max-width:768px) {
                    .section { padding:70px 16px 50px; }
                    .grid { gap:18px; }
                    .card { padding:24px 20px; }
                }
            </style>
            <section class="section reveal" id="clients">
                <div class="inner">
                    <span class="section-label" style="display:inline-block;font-size:0.7rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--blue);background:rgba(47,128,237,0.10);padding:4px 16px;border-radius:30px;margin-bottom:14px;">Client Success</span>
                    <h2 class="section-title">Proven Work &amp; <span class="text-gradient">Client Success</span></h2>
                    <p class="section-sub">Real systems built for real businesses — delivering measurable impact.</p>
                    <div class="grid">
                        <div class="card">
                            <h3>🏥 CountrySide Pharmacy</h3>
                            <div class="meta">Rushinga, Zimbabwe · Client: Alexio</div>
                            <p>Transitioned from paper-based records to a fully digital system, improving efficiency and patient access.</p>
                            <div class="rating">★★★★★ <span style="color:var(--gray-600);font-weight:600;font-size:0.9rem;">5.0</span></div>
                        </div>
                        <div class="card">
                            <h3>🕊️ Raining Grace Funeral Parlour</h3>
                            <div class="meta">South Africa · Client: Grace</div>
                            <p>Built a centralized system for policies, payments and invoicing automation, reducing administrative overhead.</p>
                            <div class="rating">★★★★☆ <span style="color:var(--gray-600);font-weight:600;font-size:0.9rem;">4.0</span></div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
});