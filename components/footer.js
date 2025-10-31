class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #1E293B;
                    color: white;
                    padding: 2rem 0;
                }
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                }
                .footer-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .footer-link {
                    color: white;
                    transition: color 0.3s ease;
                }
                .footer-link:hover {
                    color: #3B82F6;
                }
                .copyright {
                    font-size: 0.875rem;
                    color: #94A3B8;
                }
            </style>
            <footer>
                <div class="footer-container">
                    <div class="footer-links">
                        <a href="#about" class="footer-link">About</a>
                        <a href="#skills" class="footer-link">Skills</a>
                        <a href="#projects" class="footer-link">Projects</a>
                        <a href="#contact" class="footer-link">Contact</a>
                    </div>
                    <div class="copyright">
                        &copy; ${new Date().getFullYear()} Rehan Haque. All rights reserved.
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
