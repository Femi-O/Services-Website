/* Minimal JS for mobile nav toggle and small interactions */
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.querySelector('[data-nav-toggle]');
        const nav = document.querySelector('.nav');

        if (btn && nav) {
            btn.addEventListener('click', () => {
                const expanded = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', String(!expanded));
                nav.style.display = expanded ? '' : 'flex';
            });
        }


        // Simple year fill for footer
        const yearEls = document.querySelectorAll('[data-year]');
        yearEls.forEach(el => el.textContent = new Date().getFullYear());
    });
})();

const nav = document.getElementById("main-nav");
const toggle = document.getElementById("nav-toggle");

function closeNav() {
    nav.classList.remove("open");
    document.body.classList.remove("nav-open");
}

// Toggle menu when clicking the button
toggle.addEventListener("click", (e) => {
    nav.classList.toggle("open");
    document.body.classList.toggle("nav-open");
    e.stopPropagation(); // Prevent the click from bubbling to body
});

// Close menu when any link is clicked
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeNav);
});

// Close menu when clicking outside the nav
document.body.addEventListener("click", (e) => {
    if (nav.classList.contains("open") && !nav.contains(e.target) && e.target !== toggle) {
        closeNav();
    }
});
