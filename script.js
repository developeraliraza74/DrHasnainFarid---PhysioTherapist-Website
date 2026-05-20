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

// Testimonials 

const testimonials = [
  {
    name: "FARHAN SAHI",
    date: "1 Months ago",
    source: "Google",
    rating: 5,
    condition: "Post Surgery",
    text: "Dr Hasnain Farid is very competent and qualified young physiotherpist in swl ; i my self got treated from dr sb ,he has all latest skills and competence regarding his field...so I strongly recommend Dr Hassain Farid as a best physio in swl..😍👍👍",
  },
  {
    name: "Zafar Joyia",
    date: "2 Months ago",
    source: "Google",
    rating: 5,
    condition: "Low Back Pain",
    text: "Best physiotherapist in Sahiwal. He treated my wife's low back pain and within 10 sessions, Alhamdulillah she is completely fine. Highly recommend.",
  },
  {
    name: "Fizza Tariq",
    date: "3 Month ago",
    source: "Google",
    rating: 5,
    condition: "Fracture Recovery",
    text: "I had multiple fractures in my right leg and lost hope of walking again. But the physiotherapy by Dr. Hasnain made my limbs completely okay. Now I'm back to work. Many thanks to Dr. Hasnain Farid at Al-Khidmat Hospital Sahiwal.",
  },
  {
    name: "Haq Nawaz Tabassum",
    date: "3 Months ago",
    source: "Google",
    rating: 5,
    condition: "Frozen Shoulder",
    text: "My wife got treatment for frozen shoulder. She recovered within just 9 days. Thank you Dr. Hasnain Farid — best physiotherapist in Sahiwal.",
  },
   {
    name: "Ayesha Tariq",
    date: "2 years ago",
    source: "Google",
    rating: 5,
    condition: "Low Back Pain",
    text: "My visit was for low back pain. Having been to several physiotherapists before for the same problem, I decided to visit Dr. Hasnain Farid. In just 2 sessions — plus some home exercises — my back was so much better. Remarkable.",
  },
  {
    name: "Amna Umer",
    date: "6 years ago",
    source: "Google",
    rating: 5,
    condition: "Disc Bulge · Lumber Lordosis",
    text: "For 3 Months I had severe back pain. I consulted different doctors but nothing worked. Then I visited Dr. Hasnain — I was diagnosed with lumber lordosis and disc bulge (L3, L4, L5). After his treatment, Alhamdulillah I am perfectly fine. Highly recommend.",
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
        color: #fff;
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



// Services


const services = [
  {
    icon: "activity",
    title: "Back Pain",
    desc: "Effective treatment for acute and chronic lower, mid, and upper back pain using manual therapy and targeted exercises.",
  },
  {
    icon: "alert-circle",
    title: "Neck Pain",
    desc: "Relief from cervical pain, stiffness, and nerve compression through specialized neck physiotherapy techniques.",
  },
  {
    icon: "wind",
    title: "Frozen Shoulder",
    desc: "Proven treatment for adhesive capsulitis — restoring full shoulder mobility, often within days of starting sessions.",
  },
  {
    icon: "zap",
    title: "Arm Pain",
    desc: "Treatment for arm pain, muscle weakness, and nerve-related conditions affecting the upper limb and elbow.",
  },
  {
    icon: "trending-down",
    title: "Knee Pain",
    desc: "Targeted therapy for knee pain, osteoarthritis, ligament injuries, and post-surgical knee rehabilitation.",
  },
  
  {
    icon: "shield",
    title: "Sports Injuries Rehabilitation",
    desc: "Fast-track recovery for athletes — from sprains and fractures to ligament tears and muscle injuries.",
  },

];

/* 
//other serives 
{
    icon: "map-pin",
    title: "Heel Pain",
    desc: "Treatment for plantar fasciitis, heel spurs, and Achilles-related issues that cause walking difficulty.",
  },

  // ── Our Services ──
  {
    icon: "thermometer",
    title: "Post-Operative Physio",
    desc: "Structured recovery programs after surgery — restoring strength, mobility, and function in the shortest time possible.",
  },
  {
    icon: "heart",
    title: "Stroke Rehabilitation",
    desc: "Neurological physiotherapy to help stroke patients regain movement, balance, and independence in daily life.",
  },
  {
    icon: "users",
    title: "CP Child Physiotherapy",
    desc: "Gentle, specialized physiotherapy for children with cerebral palsy — improving motor skills and quality of life.",
  },
{
    icon: "box",
    title: "Orthopedic Physiotherapy",
    desc: "Expert management of bone, joint, and musculoskeletal conditions for patients of all ages.",
  },
  {
    icon: "smile",
    title: "Paediatric Physiotherapy",
    desc: "Child-focused physiotherapy for developmental delays, injuries, and conditions like cerebral palsy.",
  },
  {
    icon: "user",
    title: "Geriatric Physiotherapy",
    desc: "Tailored physiotherapy for elderly patients — improving mobility, reducing fall risk, and managing age-related conditions.",
  },
  {
    icon: "cpu",
    title: "Neuro-Muscular Physiotherapy",
    desc: "Treatment for neurological disorders affecting muscle control — including multiple sclerosis, Parkinson's, and nerve injuries.",
  },
  {
    icon: "home",
    title: "Home Visits",
    desc: "Professional physiotherapy services at your home for patients who cannot visit the clinic.",
  }, */
// AOS delays per card index
const delays = [0,50,100,150,200,250,300,350,400,450,500,550,600,650];

function renderServices() {
  const grid = document.querySelector(".services-grid");
  if (!grid) return;

  grid.innerHTML = services.map((s, i) => {
    return `
      <div class="service-card" data-aos="fade-up" data-aos-delay="${delays[i] ?? 0}">
        <div class="service-icon">
          <i data-feather="${s.icon}"></i>
        </div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `;
  }).join("");

  if (typeof feather !== "undefined") feather.replace();
}

document.addEventListener("DOMContentLoaded", renderServices);

// WhatsApp Floating Button
const bubble  = document.getElementById('waBubble');
const closeBtn = document.getElementById('waClose');

  // Auto-hide bubble after 6 seconds
//   setTimeout(() => bubble.classList.add('hidden'), 6000);

  // Close button hides bubble
  closeBtn.addEventListener('click', e => {
    e.stopPropagation();
    bubble.classList.add('hidden');
  });

  