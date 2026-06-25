// ===== CASE STUDIES =====
customElements.define('case-studies-section', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .section { padding:100px 24px 80px; max-width:1200px; margin:0 auto; }
                .section-title { font-size:clamp(2rem,3.4vw,2.8rem); font-weight:700; letter-spacing:-0.02em; margin-bottom:12px; }
                .section-sub { color:var(--gray-600); font-size:1.05rem; max-width:580px; margin-bottom:48px; line-height:1.7; }
                details.case-item {
                    background:var(--white);
                    border-radius:var(--radius);
                    padding:24px 28px;
                    margin-bottom:16px;
                    border:1px solid var(--gray-200);
                    transition:var(--transition);
                    cursor:pointer;
                }
                details.case-item:hover { border-color:rgba(47,128,237,0.20); }
                details.case-item summary {
                    font-weight:600;
                    font-size:1.1rem;
                    list-style:none;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                }
                details.case-item summary::-webkit-details-marker { display:none; }
                details.case-item summary::after {
                    content:'▸';
                    font-size:1.4rem;
                    color:var(--gray-400);
                    transition:var(--transition);
                }
                details.case-item[open] summary::after { transform:rotate(90deg); }
                details.case-item .body { padding-top:16px; border-top:1px solid var(--gray-200); margin-top:16px; }
                details.case-item .body p { margin:6px 0; color:var(--gray-600); }
                details.case-item .body strong { color:var(--navy); }
                .thumb-grid {
                    display:grid;
                    grid-template-columns:repeat(auto-fit,minmax(100px,1fr));
                    gap:12px;
                    margin-top:16px;
                }
                .thumb-grid .thumb {
                    border-radius:var(--radius-sm);
                    overflow:hidden;
                    cursor:pointer;
                    aspect-ratio:1/1;
                    background:var(--gray-200);
                    transition:var(--transition);
                    border:2px solid transparent;
                }
                .thumb-grid .thumb:hover { transform:scale(1.04); border-color:var(--blue); }
                .thumb-grid .thumb img {
                    width:100%; height:100%; object-fit:cover;
                }
                @media (max-width:768px) {
                    .section { padding:70px 16px 50px; }
                    details.case-item { padding:18px 20px; }
                    .thumb-grid { grid-template-columns:repeat(auto-fit,minmax(70px,1fr)); }
                }
            </style>
            <section class="section reveal" id="case-studies">
                <span class="section-label" style="display:inline-block;font-size:0.7rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--blue);background:rgba(47,128,237,0.10);padding:4px 16px;border-radius:30px;margin-bottom:14px;">Case Studies</span>
                <h2 class="section-title">Detailed <span class="text-gradient">Case Studies</span></h2>
                <p class="section-sub">How we design and deliver real-world systems that make a difference.</p>

                <details class="case-item">
                    <summary>🏥 CountrySide Pharmacy System</summary>
                    <div class="body">
                        <p><strong>Challenge:</strong> Manual paper-based records leading to inefficiencies and data loss.</p>
                        <p><strong>Solution:</strong> Full surgery management system with digital records, inventory tracking, and reporting.</p>
                        <p><strong>Result:</strong> Improved efficiency, faster patient access, and real-time visibility.</p>
                    </div>
                </details>

                <details class="case-item" open>
                    <summary>🕊️ Raining Grace Funeral System</summary>
                    <div class="body">
                        <p><strong>Challenge:</strong> Manual tracking of policies and payments across multiple locations.</p>
                        <p><strong>Solution:</strong> Centralized management system with automated invoicing and policy tracking.</p>
                        <p><strong>Result:</strong> Better control, reduced errors, and enhanced customer service.</p>
                        <div class="thumb-grid">
                            <div class="thumb" onclick="window.openModal(this)"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80" alt="Dashboard preview"></div>
                            <div class="thumb" onclick="window.openModal(this)"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80" alt="Analytics preview"></div>
                            <div class="thumb" onclick="window.openModal(this)"><img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&q=80" alt="Interface preview"></div>
                            <div class="thumb" onclick="window.openModal(this)"><img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200&q=80" alt="Workflow preview"></div>
                            <div class="thumb" onclick="window.openModal(this)"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80" alt="Dashboard 2"></div>
                        </div>
                    </div>
                </details>
            </section>
        `;
    }
});