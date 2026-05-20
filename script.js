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

const testimonials = [
  {
    name: "Zarahabib",
    date: "8 months ago",
    source: "Google",
    rating: 5,
    condition: "Sciatica",
    text: "Dr. Hasnain Farid provided exceptional care for my sciatica, offering a thorough assessment and an effective treatment plan. His expertise and supportive approach greatly improved my mobility and relieved my pain. Highly recommended!",
  },
  {
    name: "Zafar Joyia",
    date: "3 months ago",
    source: "Google",
    rating: 5,
    condition: "Low Back Pain",
    text: "Best physiotherapist in Sahiwal. He treated my wife's low back pain and within 10 sessions, Alhamdulillah she is completely fine. Highly recommend.",
  },
  {
    name: "Fizza Tariq",
    date: "2 years ago",
    source: "Google",
    rating: 5,
    condition: "Fracture Recovery",
    text: "I had multiple fractures in my right leg and lost hope of walking again. But the physiotherapy by Dr. Hasnain made my limbs completely okay. Now I'm back to work. Many thanks to Dr. Hasnain Farid at Al-Khidmat Hospital Sahiwal.",
  },
  {
    name: "Haq Nawaz Tabassum",
    date: "2 years ago",
    source: "Google",
    rating: 5,
    condition: "Frozen Shoulder",
    text: "My wife got treatment for frozen shoulder. She recovered within just 9 days. Thank you Dr. Hasnain Farid — best physiotherapist in Sahiwal.",
  },
  {
    name: "Amna Umer",
    date: "1 year ago",
    source: "Google",
    rating: 5,
    condition: "Disc Bulge · Lumber Lordosis",
    text: "For 3 months I had severe back pain. I consulted different doctors but nothing worked. Then I visited Dr. Hasnain — I was diagnosed with lumber lordosis and disc bulge (L3, L4, L5). After his treatment, Alhamdulillah I am perfectly fine. Highly recommend.",
  },
  {
    name: "Ayesha Tariq",
    date: "2 years ago",
    source: "Google",
    rating: 5,
    condition: "Low Back Pain",
    text: "My visit was for low back pain. Having been to several physiotherapists before for the same problem, I decided to visit Dr. Hasnain Farid. In just 2 sessions — plus some home exercises — my back was so much better. Remarkable.",
  },
];



function buildStars(count) {
  const star = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>`;
  return Array(count).fill(star).join("");
}

function renderTestimonials() {
  const grid = document.querySelector(".testimonials-grid");
  if (!grid) return;

  grid.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${i * 80}">
      <div class="testimonial-stars">${buildStars(t.rating)}</div>
      <span style="
        display: inline-block;
        color: #00507a;
        font-size: 0.72rem;
        font-weight: 700;
        padding: 3px 10px;
        margin-bottom: 12px;
      ">${t.condition}</span>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">
          <i data-feather="user"></i>
        </div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-source">
            Verified ${t.source} Review &nbsp;·&nbsp; ${t.date}
          </div>
        </div>
      </div>
    </div>
  `).join("");

  if (typeof feather !== "undefined") feather.replace();
}

document.addEventListener("DOMContentLoaded", renderTestimonials);