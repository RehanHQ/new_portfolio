class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: white;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    position: sticky;
                    top: 0;
                    z-index: 50;
                }
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: #3B82F6;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                .nav-link {
                    font-weight: 500;
                    color: #1E293B;
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: #3B82F6;
                }
                .mobile-menu-btn {
                    display: none;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="#" class="logo">RehanHQ</a>
                    <div class="nav-links">
                        <a href="#about" class="nav-link">About</a>
                        <a href="#skills" class="nav-link">Skills</a>
                        <a href="#projects" class="nav-link">Projects</a>
                        <a href="#contact" class="nav-link">Contact</a>
                    </div>
                    <div class="flex items-center gap-4">
                        <button class="mobile-menu-btn">
<i data-feather="menu"></i>
                        </button>
                    </div>
</div>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);
