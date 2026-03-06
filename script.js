/* ============================================
   Dr. Husnain Fareed — Main JavaScript
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
    // ── Initialize Vanta.js Globe Effect ──
    if (typeof VANTA !== "undefined" && VANTA.GLOBE) {
        VANTA.GLOBE({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x6366f1,
            color2: 0x06b6d4,
            backgroundColor: 0x1e1b4b,
            size: 1.2,
            points: 8,
        });
    }

    // ── Initialize AOS Animation ──
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });
    }

    // ── Initialize Feather Icons ──
    if (typeof feather !== "undefined") {
        feather.replace();
    }

    // ── Navbar Scroll Effect ──
    const nav = document.querySelector(".nav-main");
    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        });
    }

    // ── Mobile Menu Toggle ──
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuLinks = mobileMenu
        ? mobileMenu.querySelectorAll("a")
        : [];

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.contains("open");
            mobileMenu.classList.toggle("open");
            // Update icon
            const icon = mobileMenuBtn.querySelector("svg, i");
            if (icon) {
                mobileMenuBtn.innerHTML = isOpen
                    ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>'
                    : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            }
        });

        // Close menu when a link is clicked
        mobileMenuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("open");
                mobileMenuBtn.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            });
        });
    }

    // ── Active Nav Link on Scroll ──
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a:not(.nav-cta)");

    function setActiveLink() {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveLink);
    setActiveLink();

    // ── Counter Animation for Stats ──
    const statNumbers = document.querySelectorAll(".stat-number");
    let statsAnimated = false;

    function animateCounters() {
        if (statsAnimated) return;
        const statsSection = document.querySelector(".stats-bar");
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            statsAnimated = true;
            statNumbers.forEach((el) => {
                const target = parseInt(el.getAttribute("data-target"), 10);
                const suffix = el.getAttribute("data-suffix") || "";
                let current = 0;
                const increment = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current + suffix;
                }, 25);
            });
        }
    }

    window.addEventListener("scroll", animateCounters);
    animateCounters();
});
