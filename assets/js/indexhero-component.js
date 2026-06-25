// ===== HERO — vector illustration with code & creative elements =====
customElements.define('hero-section', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .hero {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    background: var(--navy);
                    padding: 80px 24px 60px;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    opacity: 0.12;
                    background-image: 
                        radial-gradient(circle at 20% 50%, rgba(47,128,237,0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(86,204,242,0.2) 0%, transparent 40%),
                        radial-gradient(circle at 50% 80%, rgba(47,128,237,0.15) 0%, transparent 45%);
                }
                .hero-grid {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 1200px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                    color: #fff;
                }
                .hero-text .badge {
                    display: inline-block;
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    background: rgba(255,255,255,0.10);
                    backdrop-filter: blur(8px);
                    padding: 6px 20px;
                    border-radius: 30px;
                    margin-bottom: 20px;
                    color: rgba(255,255,255,0.85);
                    border: 1px solid rgba(255,255,255,0.08);
                }
                .hero-text h1 {
                    font-size: clamp(2.6rem, 6vw, 4.2rem);
                    font-weight: 800;
                    line-height: 1.08;
                    letter-spacing: -0.03em;
                    margin-bottom: 18px;
                }
                .hero-text h1 .highlight {
                    background: linear-gradient(135deg, var(--blue-light), var(--blue));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .hero-text p {
                    font-size: 1.15rem;
                    color: rgba(255,255,255,0.75);
                    max-width: 480px;
                    line-height: 1.7;
                    margin-bottom: 34px;
                }
                .hero-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 14px;
                }
                .hero-actions .btn-hero {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 16px 38px;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    border: none;
                    cursor: pointer;
                    transition: var(--transition);
                }
                .btn-hero.primary {
                    background: linear-gradient(135deg, var(--blue), var(--blue-light));
                    color: #fff;
                    box-shadow: 0 8px 32px rgba(47,128,237,0.35);
                }
                .btn-hero.primary:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 14px 44px rgba(47,128,237,0.45);
                }
                .btn-hero.outline {
                    background: transparent;
                    color: #fff;
                    border: 2px solid rgba(255,255,255,0.30);
                }
                .btn-hero.outline:hover {
                    border-color: #fff;
                    background: rgba(255,255,255,0.06);
                    transform: translateY(-4px);
                }

                /* Vector illustration */
                .hero-illustration {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 360px;
                }
                .vector-art {
                    width: 100%;
                    max-width: 540px;
                    aspect-ratio: 1/1;
                    position: relative;
                }
                .vector-art svg {
                    width: 100%;
                    height: 100%;
                }
                .code-float {
                    position: absolute;
                    font-family: 'Courier New', monospace;
                    font-size: 0.7rem;
                    color: rgba(86,204,242,0.5);
                    background: rgba(10,22,40,0.6);
                    backdrop-filter: blur(4px);
                    padding: 6px 12px;
                    border-radius: 8px;
                    border: 1px solid rgba(86,204,242,0.15);
                    animation: float 6s ease-in-out infinite;
                    pointer-events: none;
                    white-space: nowrap;
                }
                .code-float:nth-child(1) { top: 8%; left: 5%; animation-delay: 0s; }
                .code-float:nth-child(2) { bottom: 18%; right: 2%; animation-delay: 1.5s; }
                .code-float:nth-child(3) { top: 45%; left: -4%; animation-delay: 3s; }
                .code-float:nth-child(4) { bottom: 8%; left: 20%; animation-delay: 0.8s; }
                .code-float:nth-child(5) { top: 20%; right: 8%; animation-delay: 2.2s; }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(2deg); }
                }

                @media (max-width: 968px) {
                    .hero-content {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        text-align: center;
                    }
                    .hero-text p { margin: 0 auto 34px; }
                    .hero-actions { justify-content: center; }
                    .hero-illustration { min-height: 280px; }
                    .code-float { display: none; }
                    .vector-art { max-width: 400px; margin: 0 auto; }
                }
                @media (max-width: 480px) {
                    .hero { padding: 100px 16px 40px; }
                    .hero-text h1 { font-size: 2rem; }
                    .hero-illustration { min-height: 200px; }
                    .vector-art { max-width: 280px; }
                    .hero-actions .btn-hero { padding: 14px 28px; font-size: 0.85rem; }
                }
            </style>
            <section class="hero" id="home">
                <div class="hero-bg"></div>
                <div class="hero-grid"></div>
                
                <div class="hero-content">
                    <div class="hero-text">
                        <span class="badge">✦ Next-Gen Digital Solutions</span>
                        <h1>Transform Your <br /><span class="highlight">Business Digitally</span></h1>
                        <p>We design and build systems that drive efficiency, security, and growth — from software to security, we've got you covered.</p>
                        <div class="hero-actions">
                            <a href="#contact" class="btn-hero primary">Start Your Project →</a>
                            <a href="#services" class="btn-hero outline">Explore Services</a>
                        </div>
                    </div>
                    <div class="hero-illustration">
                        <div class="vector-art">
                            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <!-- Background shapes -->
                                <circle cx="200" cy="200" r="160" fill="rgba(47,128,237,0.06)" stroke="rgba(47,128,237,0.15)" stroke-width="1.5"/>
                                <circle cx="200" cy="200" r="120" fill="rgba(86,204,242,0.04)" stroke="rgba(86,204,242,0.10)" stroke-width="1"/>
                                <circle cx="200" cy="200" r="80" fill="rgba(47,128,237,0.05)" stroke="rgba(47,128,237,0.08)" stroke-width="1"/>
                                
                                <!-- Terminal window -->
                                <rect x="80" y="100" width="240" height="180" rx="12" fill="rgba(10,22,40,0.7)" stroke="rgba(47,128,237,0.3)" stroke-width="1.5"/>
                                <rect x="80" y="100" width="240" height="32" rx="12" fill="rgba(47,128,237,0.15)"/>
                                <rect x="80" y="120" width="240" height="12" fill="rgba(47,128,237,0.15)"/>
                                <circle cx="98" cy="116" r="5" fill="#FF5F56"/>
                                <circle cx="114" cy="116" r="5" fill="#FFBD2E"/>
                                <circle cx="130" cy="116" r="5" fill="#27C93F"/>
                                
                                <!-- Code lines -->
                                <text x="100" y="158" font-family="'Courier New', monospace" font-size="11" fill="#56CCF2">const nesper = new Digital();</text>
                                <text x="100" y="180" font-family="'Courier New', monospace" font-size="11" fill="#F5A623">nesper.services = [</text>
                                <text x="120" y="200" font-family="'Courier New', monospace" font-size="11" fill="#2F80ED">'Web Development',</text>
                                <text x="120" y="218" font-family="'Courier New', monospace" font-size="11" fill="#2F80ED">'Cybersecurity',</text>
                                <text x="120" y="236" font-family="'Courier New', monospace" font-size="11" fill="#2F80ED">'Cloud Infrastructure'</text>
                                <text x="100" y="256" font-family="'Courier New', monospace" font-size="11" fill="#F5A623">];</text>
                                
                                <!-- Floating elements -->
                                <circle cx="60" cy="80" r="6" fill="rgba(86,204,242,0.3)" stroke="rgba(86,204,242,0.2)" stroke-width="1"/>
                                <circle cx="340" cy="320" r="8" fill="rgba(47,128,237,0.25)" stroke="rgba(47,128,237,0.15)" stroke-width="1"/>
                                <rect x="320" y="60" width="12" height="12" rx="2" fill="rgba(245,166,35,0.2)" stroke="rgba(245,166,35,0.15)" stroke-width="1" transform="rotate(45 326 66)"/>
                                
                                <!-- Shield icon -->
                                <path d="M200 280 L200 280 C220 280 240 270 240 250 L240 230 C240 220 230 210 220 210 L180 210 C170 210 160 220 160 230 L160 250 C160 270 180 280 200 280 Z" fill="rgba(47,128,237,0.08)" stroke="rgba(47,128,237,0.2)" stroke-width="1.5"/>
                                <path d="M200 270 L200 270 C215 270 230 262 230 248 L230 235 C230 228 223 222 216 222 L184 222 C177 222 170 228 170 235 L170 248 C170 262 185 270 200 270 Z" fill="rgba(86,204,242,0.04)" stroke="rgba(86,204,242,0.15)" stroke-width="1"/>
                                <text x="190" y="250" font-family="'Courier New', monospace" font-size="14" fill="#56CCF2">🔒</text>
                                
                                <!-- Gear / settings icon -->
                                <g transform="translate(340, 140)">
                                    <circle cx="0" cy="0" r="14" stroke="rgba(86,204,242,0.15)" stroke-width="1.5" fill="rgba(47,128,237,0.05)"/>
                                    <circle cx="0" cy="0" r="7" stroke="rgba(86,204,242,0.2)" stroke-width="1.5" fill="rgba(47,128,237,0.05)"/>
                                    <circle cx="0" cy="0" r="3" fill="rgba(86,204,242,0.3)"/>
                                    <line x1="0" y1="-18" x2="0" y2="-14" stroke="rgba(86,204,242,0.2)" stroke-width="2" stroke-linecap="round"/>
                                    <line x1="0" y1="14" x2="0" y2="18" stroke="rgba(86,204,242,0.2)" stroke-width="2" stroke-linecap="round"/>
                                    <line x1="-18" y1="0" x2="-14" y2="0" stroke="rgba(86,204,242,0.2)" stroke-width="2" stroke-linecap="round"/>
                                    <line x1="14" y1="0" x2="18" y2="0" stroke="rgba(86,204,242,0.2)" stroke-width="2" stroke-linecap="round"/>
                                </g>
                                
                                <!-- Database icon -->
                                <g transform="translate(70, 280)">
                                    <ellipse cx="0" cy="0" rx="16" ry="6" stroke="rgba(47,128,237,0.2)" stroke-width="1.5" fill="rgba(47,128,237,0.05)"/>
                                    <path d="M-16 0 L-16 12 C-16 15.3 -8.8 18 0 18 C8.8 18 16 15.3 16 12 L16 0" stroke="rgba(47,128,237,0.2)" stroke-width="1.5" fill="rgba(47,128,237,0.05)"/>
                                    <ellipse cx="0" cy="12" rx="16" ry="6" stroke="rgba(47,128,237,0.15)" stroke-width="1" fill="rgba(47,128,237,0.03)"/>
                                </g>
                            </svg>
                        </div>
                        <!-- Floating code snippets -->
                        <div class="code-float">&lt;/&gt; code</div>
                        <div class="code-float">⚡ deploy</div>
                        <div class="code-float">🔐 secure</div>
                        <div class="code-float">📊 scale</div>
                        <div class="code-float">🚀 launch</div>
                    </div>
                </div>
            </section>
        `;
    }
});