// ===== TEAM =====
customElements.define('team-section', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .section { background:var(--gray-100); padding:100px 24px 80px; }
                .inner { max-width:1200px; margin:0 auto; }
                .section-title { font-size:clamp(2rem,3.4vw,2.8rem); font-weight:700; letter-spacing:-0.02em; margin-bottom:12px; }
                .section-sub { color:var(--gray-600); font-size:1.05rem; max-width:580px; margin:0 auto 48px; line-height:1.7; }
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 28px;
                    margin: 0 auto;
                }
                .team-card {
                    background:#fff;
                    border-radius:var(--radius);
                    padding:28px 20px 24px;
                    text-align:center;
                    box-shadow:var(--shadow-sm);
                    border:1px solid var(--gray-200);
                    transition:var(--transition);
                }
                .team-card:hover { transform:translateY(-8px); box-shadow:var(--shadow-md); border-color:transparent; }
                .team-avatar {
                    width:90px; height:90px;
                    border-radius:50%;
                    margin:0 auto 14px;
                    background:linear-gradient(135deg,var(--blue),var(--blue-light));
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-weight:700;
                    font-size:1.8rem;
                    color:#fff;
                    box-shadow:0 6px 24px rgba(47,128,237,0.18);
                }
                .team-card h3 { font-size:1.2rem; font-weight:700; margin-bottom:2px; }
                .team-role { color:var(--blue); font-weight:500; font-size:0.85rem; margin-bottom:6px; }
                .team-bio { color:var(--gray-600); font-size:0.9rem; line-height:1.5; margin-bottom:10px; }
                .team-tags { display:flex; flex-wrap:wrap; justify-content:center; gap:4px; margin-bottom:12px; }
                .team-tags .tag {
                    background:var(--gray-100);
                    padding:2px 12px;
                    border-radius:20px;
                    font-size:0.65rem;
                    font-weight:500;
                    color:var(--gray-800);
                }
                .team-actions .btn-sm {
                    padding:8px 18px;
                    border-radius:50px;
                    font-weight:600;
                    font-size:0.75rem;
                    border:none;
                    cursor:pointer;
                    transition:var(--transition);
                    background:linear-gradient(135deg,var(--blue),var(--blue-light));
                    color:#fff;
                    box-shadow:0 4px 14px rgba(47,128,237,0.18);
                }
                .team-actions .btn-sm:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(47,128,237,0.28); }
                @media (max-width: 1024px) {
                    .team-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
                }
                @media (max-width: 640px) {
                    .section { padding:70px 16px 50px; }
                    .team-grid { grid-template-columns: 1fr; gap: 20px; }
                    .team-card { padding:24px 16px; }
                    .team-avatar { width:76px; height:76px; font-size:1.4rem; }
                }
            </style>
            <section class="section reveal" id="team">
                <div class="inner">
                    <span class="section-label" style="display:inline-block;font-size:0.7rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--blue);background:rgba(47,128,237,0.10);padding:4px 16px;border-radius:30px;margin-bottom:14px;">Our Team</span>
                    <h2 class="section-title">The People Behind <span class="text-gradient">NesperDigital</span></h2>
                    <p class="section-sub">Frontline team.</p>
                    <div class="team-grid">
                        <!-- Le-Roy Jongwe -->
                        <div class="team-card">
                            <div class="team-avatar">LJ</div>
                            <h3>Le-Roy Jongwe</h3>
                            <div class="team-role">Founder &amp; Technology Strategist</div>
                            <p class="team-bio">Le-Roy Jongwe is a skilled software engineer and digital solutions specialist with expertise in software development, 
                            web technologies, Linux administration, system setup, and digital branding. He focuses on building practical and scalable technology 
                            solutions that help businesses improve efficiency, strengthen their online presence, and grow through modern digital tools and systems.</p>
                            <div class="team-tags">
                                <span class="tag">Software Engineering</span>
                                <span class="tag">System Architecture</span>
                                <span class="tag">Linux Administration</span>
                                <span class="tag">Project Management</span>
                                <span class="tag">Data Analysis</span>
                            </div>
                        </div>
                        <!-- Kim Muse -->
                        <div class="team-card">
                            <div class="team-avatar">KM</div>
                            <h3>Kim Muse</h3>
                            <div class="team-role">Brand PR & Communication Stratagist</div>
                            <p class="team-bio">Responsible for developing the company’s brand image, managing public relations,
                             creating communication strategies, overseeing marketing messaging, and building strong relationships with clients,
                             partners, and the public.</p>
                            <div class="team-tags">
                                <span class="tag">Social Media Management</span>
                                <span class="tag">Corporate Communications</span>
                                <span class="tag">Digital Marketing</span>
                                <span class="tag">Client Relations</span>
                                <span class="tag">Content Planning</span>
                            </div>
                        </div>
                        <!-- Joseph Mokgoto -->
                        <div class="team-card">
                            <div class="team-avatar">JM</div>
                            <h3>Joseph Mokgoto</h3>
                            <div class="team-role">AI &amp; Marketing Specialist</div>
                            <p class="team-bio">Sekatana Joseph Mokgotho has developed strong foundational skills in Python programming, 
                            data preparation, spreadsheet analysis, and data visualisation. His training also includes machine learning concepts such as classification, 
                            natural language processing (NLP), along with exposure to cloud and data infrastructure. Sekatana brings a growing 
                            expertise in data-driven problem solving, analytics, and professional technical development.</p>
                            <div class="team-tags">
                                <span class="tag">AI Strategy</span>
                                <span class="tag">Machine Learning</span>
                                <span class="tag">Marketing Automation</span>
                                <span class="tag">Data Analytics</span>
                            </div>
                        </div>
                        <!-- Nandipha Nyathela -->
                        <div class="team-card">
                            <div class="team-avatar">NN</div>
                            <h3>Noxolo Nyatela</h3>
                            <div class="team-role">IT Support & Digital Services Assistant</div>
                            <p class="team-bio">Noxolo Nyatela is a dedicated and ambitious technology enthusiast with strong skills in computer operations, 
                            coding, research support, document preparation, and digital problem-solving. She is passionate about using technology to create 
                            efficient digital solutions that support business growth and improve client services..</p>
                            <div class="team-tags">
                                <span class="tag">UI/UX Design</span>
                                <span class="tag">Technology Support</span>
                                <span class="tag">Digital Problem Solving</span>
                                <span class="tag">Presentation Design</span>
                                <span class="tag">Research Assistance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
});
