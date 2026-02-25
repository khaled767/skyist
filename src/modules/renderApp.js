import { translations } from "./translations";

import logo from "../assets/logo.png";
import doctorImg from "../assets/doctor.png";
import istanbulImg from "../assets/istanbul.jpeg";

// ✅ NEW: real images (place them in src/assets/services/)
// IMPORTANT: rename files to avoid spaces (recommended)
import cosmeticDentistryImg from "../assets/services/cosmatic-dentistry.jpg";
import hairTransplantImg from "../assets/services/hair-transplant.jpeg";
import cosmeticSurgeryImg from "../assets/services/cosmatic-surgery.jpeg";
import bodySurgeryImg from "../assets/services/body-surgery.jpg";

const LANGS = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇾" },
];

// Smooth scroll with navbar offset so headers don't hide under navbar
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const nav = document.querySelector(".navbar");
  const navHeight = nav ? nav.offsetHeight : 0;

  const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 12;
  window.scrollTo({ top, behavior: "smooth" });
}

// page state
function setPage(page) {
  localStorage.setItem("page", page);
}
function getPage() {
  return localStorage.getItem("page") || "home";
}

// Service icons
const serviceIcons = [
  `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M10 42h22l18 10 4-6-16-12h-8l-6-10h-6l3 10H10Z"/>
    <path d="M8 52h30" />
    <path d="M40 46h16" />
    <path d="M40 28h12v18H40z"/>
    <path d="M44 28v-6h4v6" />
    <path d="M40 34h12" />
  </svg>
  `,
  `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M16 54V18a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v36"/>
    <path d="M12 54h40"/>
    <path d="M22 24h6M22 32h6M22 40h6"/>
    <path d="M36 24h6M36 32h6M36 40h6"/>
    <path d="M24 8h16v8H24z"/>
    <path d="M26 12h12" />
    <path d="M27 15h10" />
  </svg>
  `,
  `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M12 40V22a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v18"/>
    <path d="M12 32h40"/>
    <path d="M18 40a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/>
    <path d="M46 40a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/>
    <path d="M18 24h10M32 24h10"/>
    <path d="M24 14h16" />
  </svg>
  `,
  `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M26 26a8 8 0 1 0-8-8 8 8 0 0 0 8 8Z"/>
    <path d="M10 54a16 16 0 0 1 32 0"/>
    <path d="M46 10v32"/>
    <path d="M46 12h12l-4 6 4 6H46" />
  </svg>
  `,
];

function renderPrivacyPolicyHTML(t) {
  const sections = (t.privacy?.sections || [])
    .map((sec) => {
      const paras = (sec.paras || []).map((p) => `<p>${p}</p>`).join("");
      return `
        <div class="policy-section">
          <h3>${sec.heading}</h3>
          ${paras}
        </div>
      `;
    })
    .join("");

  return `
    <h1 class="hero-title">${t.privacy?.title || "Privacy Policy"}</h1>
    <div class="policy-card" tabindex="0">
      ${sections}
    </div>
  `;
}

function renderHomeHeroHTML(t, lang) {
  return `
    <h1 class="hero-title">${t.heroTitle}</h1>

    <p class="hero-desc">${t.heroText}</p>

    <ul class="hero-bullets">
      ${t.heroBullets.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <div class="hero-actions">
      <button class="btn primary" data-link="contact">
        ${lang === "tr" ? "Hemen İletişim" : lang === "ar" ? "تواصل الآن" : "Contact Now"}
      </button>

      <!-- ✅ WhatsApp number updated -->
      <a class="btn ghost" href="https://wa.me/905300799487" target="_blank" rel="noopener">
        WhatsApp
      </a>
    </div>
  `;
}

function setLanguage(lang) {
  const t = translations[lang] || translations.tr;

  document.documentElement.lang = lang;
  document.body.dir = t.dir;

  const currentLang = LANGS.find((l) => l.code === lang) || LANGS[0];

  const app = document.getElementById("app");
  const page = getPage(); // "home" | "privacy"

  // ✅ enable special CSS mode
  document.body.classList.toggle("privacy-mode", page === "privacy");

  const readMoreText = lang === "tr" ? "Detay" : lang === "ar" ? "اقرأ المزيد" : "Read More";

  const heroLeftHTML =
    page === "privacy" ? renderPrivacyPolicyHTML(t) : renderHomeHeroHTML(t, lang);

  // ✅ therapeutic images map (4 items)
  // NOTE: for the new "Body Cosmetic Surgery" card we reuse cosmeticSurgeryImg (so it works without adding new image).
  const therapeuticImages = [
    cosmeticSurgeryImg,      // Face cosmetic
    cosmeticDentistryImg,    // Dentistry
    hairTransplantImg,       // Hair
    bodySurgeryImg,      // Body cosmetic (reused)
  ];

  app.innerHTML = `
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="container navbar-inner">
        <div class="nav-left">
          <div class="brand">
            <img class="brand-logo" src="${logo}" alt="SKYIST logo" />
          </div>
        </div>

        <div class="nav-center">
          <nav class="nav-links">
            <button class="nav-link" data-link="home">${t.nav.home}</button>
            <button class="nav-link" data-link="services">${t.nav.services}</button>
            <button class="nav-link" data-link="about">${t.nav.about}</button>
            <button class="nav-link" data-link="contact">${t.nav.contact}</button>
          </nav>
        </div>

        <div class="nav-right">
          <div class="lang-wrapper">
            <button class="lang-btn" type="button">
              <span class="lang-flag">${currentLang.flag}</span>
              <span class="lang-label">${currentLang.label}</span>
              <span class="lang-chev">▾</span>
            </button>

            <div class="lang-menu">
              ${LANGS.map(
                (l) => `
                  <button class="lang-item" type="button" data-lang="${l.code}">
                    <span class="lang-flag">${l.flag}</span>
                    <span>${l.label}</span>
                  </button>
                `
              ).join("")}
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>

      <!-- HERO -->
      <section id="home" class="hero">
        <div class="hero-bg"></div>

        <div class="container hero-grid ${page === "privacy" ? "privacy-hero" : ""}">
          <div class="hero-left ${page === "privacy" ? "privacy-left" : ""}">
            ${heroLeftHTML}
          </div>

          ${
            page === "privacy"
              ? ""
              : `
            <div class="hero-right">
              <div class="doctor-wrap">
                <img class="doctor-img" src="${doctorImg}" alt="Doctor" />
                <div class="doctor-glow"></div>
              </div>
            </div>
          `
          }
        </div>
      </section>

      <!-- SERVICES -->
      <section id="services" class="section">
        <div class="container">
          <h2 class="section-title centered">${t.servicesTitle}</h2>

          <div class="cards">
            ${t.services
              .map(
                (s, i) => `
                <div class="service-card">
                  <div class="service-icon ${i % 2 === 0 ? "blue" : "teal"}">
                    ${serviceIcons[i] || ""}
                  </div>

                  <h3 class="card-title centered">${s.title}</h3>
                  <p class="card-text centered">${s.text}</p>

                  <button class="card-btn" data-link="contact">${readMoreText}</button>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      </section>

      <!-- ✅ THERAPEUTIC SERVICES (NO BUTTON NOW) -->
      <section id="therapeutic" class="section therapeutic-section">
        <div class="container">
          <h2 class="section-title centered">${t.therapeuticTitle}</h2>

          <div class="therapy-grid">
            ${t.therapeuticServices
              .map((item, idx) => {
                const imgSrc = therapeuticImages[idx] || therapeuticImages[0];
                return `
                  <article class="therapy-card">
                    <div class="therapy-img-wrap">
                      <img class="therapy-img" src="${imgSrc}" alt="${item.title}" loading="lazy" />
                    </div>

                    <div class="therapy-body">
                      <h3 class="therapy-title">${item.title}</h3>
                      <p class="therapy-line">${item.line1}</p>
                      <p class="therapy-line">${item.line2}</p>
                    </div>
                  </article>
                `;
              })
              .join("")}
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section id="about" class="section alt">
        <div class="container">
          <h2 class="section-title">${t.aboutTitle}</h2>
          <div class="wide-card">
            <p class="wide-text">${t.aboutText}</p>
          </div>
        </div>
      </section>

      <!-- ISTANBUL -->
      <section class="istanbul-section" style="--istanbul:url('${istanbulImg}')">
        <div class="istanbul-overlay">
          <div class="container istanbul-inner">
            <div class="istanbul-title">
              ${lang === "tr" ? "Istanbul • Türkiye" : lang === "ar" ? "إسطنبول • تركيا" : "Istanbul • Türkiye"}
            </div>
            <div class="istanbul-sub">
              ${lang === "tr"
                ? "Tedavi yolculuğunuz için güvenilir partner"
                : lang === "ar"
                ? "شريك موثوق لرحلتك العلاجية"
                : "A trusted partner for your medical journey"}
            </div>
          </div>
        </div>

        <svg class="wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C160,90 320,90 480,60 C640,30 800,10 960,30 C1120,50 1280,90 1440,70 L1440,120 L0,120 Z"></path>
        </svg>
      </section>

      <!-- CONTACT (NO FORM) -->
      <section id="contact" class="section">
        <div class="container">
          <h2 class="section-title">${t.contactTitle}</h2>

          <div class="wide-card">
            <p class="wide-text">${t.contactText}</p>

            <div class="contact-info">

              <div class="contact-item">
                <span class="contact-label">Phone:</span>
                <a href="tel:+90531 945 7388">+90 531 945 7388</a>
              </div>

              <div class="contact-item">
                <span class="contact-label">Phone:</span>
                <a href="tel:+905300799487">+90 530 079 9487</a>
              </div>

              <div class="contact-item">
                <span class="contact-label">Email:</span>
                <a href="mailto:info@skyistgroup.com">info@skyistgroup.com</a>
              </div>

              <div class="contact-item address">
                <span class="contact-label">Address:</span>
                <p class="contact-value">
                  ZAFER MAH. 185. SK. BABACAN PREMİUM B BLOK NO: 4 B<br>
                  İÇ KAPI NO: 319  ESENYURT/ İSTANBUL
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container footer-inner">
          <button class="footer-link" type="button" data-action="privacy">
            ${t.footer?.privacyBtn || "Privacy Policy"}
          </button>

          <div class="footer-right">
            ${t.footer?.rights || "All Rights Reserved SKYIST GROUP"}
          </div>
        </div>
      </footer>

      <!-- ✅ Floating WhatsApp urgent button updated -->
      <a class="wa-fab" href="https://wa.me/905300799487" target="_blank" rel="noopener" aria-label="WhatsApp urgent contact">
        WhatsApp
      </a>

    </main>
  `;

  // Navbar scroll (with privacy page logic)
  app.querySelectorAll("[data-link]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.link;

      if (getPage() === "privacy") {
        setPage("home");
        setLanguage(localStorage.getItem("lang") || "tr");
        requestAnimationFrame(() => scrollToId(id));
        return;
      }

      scrollToId(id);
    });
  });

  // Language change
  app.querySelectorAll(".lang-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const chosen = btn.dataset.lang;
      localStorage.setItem("lang", chosen);
      setLanguage(chosen);
    });
  });

  // Footer Privacy Policy
  const privacyBtn = app.querySelector('[data-action="privacy"]');
  if (privacyBtn) {
    privacyBtn.addEventListener("click", () => {
      setPage("privacy");
      setLanguage(localStorage.getItem("lang") || "tr");
      requestAnimationFrame(() => scrollToId("home"));
    });
  }

  // Auto focus on privacy scroll container
  if (page === "privacy") {
    requestAnimationFrame(() => {
      const policyBox = app.querySelector(".policy-card");
      if (policyBox) policyBox.focus();
    });
  }
}

export function renderApp() {
  const saved = localStorage.getItem("lang");
  if (!saved) localStorage.setItem("lang", "tr"); // default Turkish first time

  const page = localStorage.getItem("page");
  if (!page) localStorage.setItem("page", "home");

  setLanguage(localStorage.getItem("lang") || "tr");
}