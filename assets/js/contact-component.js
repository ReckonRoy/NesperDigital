// ===== CONTACT — with proper spacing, phone field, dropdown & WhatsApp =====
customElements.define('contact-section', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .section { padding:100px 24px 80px; max-width:900px; margin:0 auto; }
                .section-title { font-size:clamp(2rem,3.4vw,2.8rem); font-weight:700; letter-spacing:-0.02em; margin-bottom:12px; }
                .section-sub { color:var(--gray-600); font-size:1.05rem; max-width:480px; margin:0 auto 40px; line-height:1.7; }
                .contact-card {
                    background:var(--white);
                    border-radius:var(--radius);
                    padding:48px 40px;
                    box-shadow:var(--shadow-sm);
                    border:1px solid var(--gray-200);
                    transition:var(--transition);
                }
                .contact-card:hover { box-shadow:var(--shadow-md); border-color:transparent; }
                .contact-row { 
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                    margin-bottom: 24px;
                }
                .contact-row.one-col {
                    grid-template-columns: 1fr;
                }
                .contact-row .field { 
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .contact-row .field label { 
                    font-weight:500; 
                    font-size:0.85rem; 
                    color:var(--gray-800);
                }
                .contact-row .field input,
                .contact-row .field textarea,
                .contact-row .field select {
                    width:100%;
                    padding:14px 18px;
                    border:1px solid var(--gray-200);
                    border-radius:var(--radius-sm);
                    font-family:inherit;
                    font-size:0.95rem;
                    transition:var(--transition);
                    background:var(--gray-100);
                    outline:none;
                    appearance: auto;
                    color:var(--gray-800);
                }
                .contact-row .field input:focus,
                .contact-row .field textarea:focus,
                .contact-row .field select:focus {
                    border-color:var(--blue);
                    box-shadow:0 0 0 4px rgba(47,128,237,0.08);
                    background:#fff;
                }
                .contact-row .field textarea { resize:vertical; min-height:120px; }
                .contact-info {
                    display:flex;
                    flex-wrap:wrap;
                    gap:24px 48px;
                    margin-top:24px;
                    padding-top:24px;
                    border-top:1px solid var(--gray-200);
                }
                .contact-info .item { display:flex; align-items:center; gap:10px; color:var(--gray-600); font-size:0.95rem; }
                .contact-info .item .ico { font-size:1.2rem; }
                .btn-submit {
                    padding:14px 44px;
                    border:none;
                    border-radius:50px;
                    background:linear-gradient(135deg,var(--blue),var(--blue-light));
                    color:#fff;
                    font-weight:600;
                    font-size:0.95rem;
                    cursor:pointer;
                    transition:var(--transition);
                    box-shadow:0 8px 30px rgba(47,128,237,0.25);
                    width:100%;
                }
                .btn-submit:hover { transform:translateY(-3px); box-shadow:0 12px 40px rgba(47,128,237,0.35); }
                @media (max-width:768px) {
                    .section { padding:70px 16px 50px; }
                    .contact-card { padding:32px 20px; }
                    .contact-row { grid-template-columns: 1fr; gap: 16px; }
                    .contact-info { flex-direction:column; gap:12px; }
                }
            </style>
            <section class="section reveal" id="contact">
                <span class="section-label" style="display:inline-block;font-size:0.7rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--blue);background:rgba(47,128,237,0.10);padding:4px 16px;border-radius:30px;margin-bottom:14px;">Get In Touch</span>
                <h2 class="section-title">Let's Build Your <span class="text-gradient">System</span></h2>
                <p class="section-sub">Ready to bring your vision to life? Reach out and let's create something exceptional together.</p>
                <div class="contact-card">
                    <form id="contactForm">
                        <!-- Row 1: Name + Email with gap -->
                        <div class="contact-row">
                            <div class="field">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" placeholder="Your name" required />
                            </div>
                            <div class="field">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" placeholder="you@example.com" required />
                            </div>
                        </div>
                        <!-- Row 2: Phone Number -->
                        <div class="contact-row">
                            <div class="field">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="+263 77 123 4567" required />
                            </div>
                        </div>
                        <!-- Row 3: Service Dropdown -->
                        <div class="contact-row">
                            <div class="field">
                                <label for="service">Service Interested In</label>
                                <select id="service" required>
                                    <option value="">Select a service...</option>
                                    <option value="Web Development">💻 Web Development</option>
                                    <option value="Software Engineering">📱 Software Engineering</option>
                                    <option value="Database Integration">🗃️ Database Integration</option>
                                    <option value="Cybersecurity">🛡️ Cybersecurity</option>
                                    <option value="Server Deployment">🌍 Server Deployment</option>
                                    <option value="Video & Graphic Design">🎬 Video & Graphic Design</option>
                                    <option value="Email Server Setup">📧 Email Server Setup</option>
                                    <option value="Social Media Marketing">📈 Social Media Marketing</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <!-- Row 4: Message -->
                        <div class="contact-row">
                            <div class="field">
                                <label for="message">Message</label>
                                <textarea id="message" placeholder="Tell us about your project..." required></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn-submit">Send via WhatsApp →</button>
                    </form>
                    <div class="contact-info">
                        <span class="item"><span class="ico">📧</span> nesperdigital@email.com</span>
                        <span class="item"><span class="ico">📞</span> +263 XXX XXX XXX</span>
                        <span class="item"><span class="ico">📍</span> Zimbabwe / South Africa</span>
                    </div>
                </div>
            </section>
        `;
        // Form handler — send to WhatsApp
        const form = this.shadowRoot.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = form.querySelector('#name').value.trim();
                const email = form.querySelector('#email').value.trim();
                const phone = form.querySelector('#phone').value.trim();
                const service = form.querySelector('#service').value;
                const message = form.querySelector('#message').value.trim();

                if (!name || !email || !phone || !service || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }

                // Build WhatsApp message
                const whatsappNumber = '263777777777'; // Replace with actual WhatsApp number
                const text = `Hello NesperDigital!%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
                const url = `https://wa.me/${whatsappNumber}?text=${text}`;
                window.open(url, '_blank');
            });
        }
    }
});