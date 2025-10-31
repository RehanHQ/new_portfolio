// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Remove DeepSite watermark if it appears
document.addEventListener("DOMContentLoaded", () => {
    const badge = document.querySelector("#deepsite-badge-wrapper");
    if (badge) badge.remove();
});

// Watch for reinjections (if that annoying script keeps coming back)
const observerBadge = new MutationObserver(() => {
    const badge = document.querySelector("#deepsite-badge-wrapper");
    if (badge) badge.remove();
});

observerBadge.observe(document.body, { childList: true, subtree: true });
