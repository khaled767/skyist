import logo from "../assets/logo.png";
import doctorImg from "../assets/hero section/new-doctor.webp";
import istanbulHeorImg from "../assets/hero section/istanbul-twilight.webp";
import istanbulImg from "../assets/istanbul.jpg";

import { translations } from "./translations";
import airplaneImg from "../assets/Sunduğumuz Hizmetler/airplane.jpg";
import hotelRoomImg from "../assets/Sunduğumuz Hizmetler/hotel-room.jpg";
import carTransportImg from "../assets/Sunduğumuz Hizmetler/car-transport.webp";
import localGuidesImg from "../assets/Sunduğumuz Hizmetler/local-guides.jpg";
import healthTourismImg from "../assets/Sunduğumuz Hizmetler/health-tourism.webp";

// TRUST SECTION
import healthTourismCertificate from "../assets/trust/health-tourisem-turkey.webp";

import bmLogo from "../assets/trust/BM-Logo.webp";
import bmBuilding from "../assets/trust/BM-entrance.jpeg";

import efcLogo from "../assets/trust/EFC-Logo.webp";
import efcBuilding from "../assets/trust/EFC-building.jpeg";

import hlcLogo from "../assets/trust/HLC-Logo.png";
import hlcBuilding from "../assets/trust/HLC-entrance.jpeg";

import bm1 from "../assets/trust/clinics/BM1.jpeg";
import bm2 from "../assets/trust/clinics/BM2.jpeg";

import efc1 from "../assets/trust/clinics/EFC1.jpeg";
import efc2 from "../assets/trust/clinics/EFC2.jpeg";

import hlc1 from "../assets/trust/clinics/HLC1.jpeg";
import hlc2 from "../assets/trust/clinics/HLC2.jpeg";




// ✅ NEW: real images (place them in src/assets/services/)
// IMPORTANT: rename files to avoid spaces (recommended)
import cosmeticDentistryImg from "../assets/services/cosmatic-dentistry.jpg";
import hairTransplantImg from "../assets/services/hair-transplant.jpeg";
import cosmeticSurgeryImg from "../assets/services/cosmatic-surgery.jpeg";
import bodySurgeryImg from "../assets/services/body-surgery.webp";
import heartOfHealth from "../assets/trust/heart-of-health.png";


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
// Need to delete 
// ----------------------------------------------------
// // Service icons
// const serviceIcons = [
//   `
//   <svg viewBox="0 0 64 64" aria-hidden="true">
//     <path d="M10 42h22l18 10 4-6-16-12h-8l-6-10h-6l3 10H10Z"/>
//     <path d="M8 52h30" />
//     <path d="M40 46h16" />
//     <path d="M40 28h12v18H40z"/>
//     <path d="M44 28v-6h4v6" />
//     <path d="M40 34h12" />
//   </svg>
//   `,
//   `
//   <svg viewBox="0 0 64 64" aria-hidden="true">
//     <path d="M16 54V18a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v36"/>
//     <path d="M12 54h40"/>
//     <path d="M22 24h6M22 32h6M22 40h6"/>
//     <path d="M36 24h6M36 32h6M36 40h6"/>
//     <path d="M24 8h16v8H24z"/>
//     <path d="M26 12h12" />
//     <path d="M27 15h10" />
//   </svg>
//   `,
//   `
//   <svg viewBox="0 0 64 64" aria-hidden="true">
//     <path d="M12 40V22a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v18"/>
//     <path d="M12 32h40"/>
//     <path d="M18 40a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/>
//     <path d="M46 40a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/>
//     <path d="M18 24h10M32 24h10"/>
//     <path d="M24 14h16" />
//   </svg>
//   `,
//   `
//   <svg viewBox="0 0 64 64" aria-hidden="true">
//     <path d="M26 26a8 8 0 1 0-8-8 8 8 0 0 0 8 8Z"/>
//     <path d="M10 54a16 16 0 0 1 32 0"/>
//     <path d="M46 10v32"/>
//     <path d="M46 12h12l-4 6 4 6H46" />
//   </svg>
//   `,
// ];
// ----------------------------------------------------

const serviceImages = [
  airplaneImg,
  hotelRoomImg,
  carTransportImg,
  localGuidesImg,
  healthTourismImg,
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
    bodySurgeryImg,      // Body cosmetic (reused)
    cosmeticDentistryImg,    // Dentistry
    hairTransplantImg,       // Hair
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

  <div class="container hero-layout ${page === "privacy" ? "privacy-hero" : ""}">

    <div class="hero-left ${page === "privacy" ? "privacy-left" : ""}">

      ${heroLeftHTML}

    </div>

    ${
      page === "privacy"
        ? ""
        : `

      <div class="hero-right">

        <div class="hero-image-area">

          <img
            class="hero-city"
            src="${istanbulHeorImg}"
            alt="Istanbul"
          />

          <img
            class="hero-doctor"
            src="${doctorImg}"
            alt="Doctor"
          />

          <div class="hero-floating-card">

            <div class="hero-item">

              <div class="hero-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z"/>
                </svg>
              </div>

              <div>

                <h4>Trusted</h4>

                <span>Partner</span>

              </div>

            </div>

            <div class="hero-item">

              <div class="hero-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l7-4 7 4v14"/>
                  <path d="M9 10h2"/>
                  <path d="M13 10h2"/>
                  <path d="M9 14h2"/>
                  <path d="M13 14h2"/>
                </svg>
              </div>

              <div>

                <h4>Premium</h4>

                <span>Hospitals</span>

              </div>

            </div>

            <div class="hero-item">

              <div class="hero-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 21s-8-4.5-8-11a5 5 0 0110 0 5 5 0 0110 0c0 6.5-8 11-8 11z"/>
                </svg>
              </div>

              <div>

                <h4>Personalized</h4>

                <span>Care</span>

              </div>

            </div>

            <div class="hero-item">

              <div class="hero-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v6l4 2"/>
                </svg>
              </div>

              <div>

                <h4>24/7</h4>

                <span>Support</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      `
    }

  </div>

</section>         


    <!-- SERVICES -->
      <section id="services" class="section">
        <div class="container">

          <h2 class="section-title centered">
            ${t.servicesTitle}
          </h2>

          <div class="cards">

            ${t.services
              .map(
                (service, index) => `
                  <article class="service-card">

                    <div class="service-image">
                      <img
                        src="${serviceImages[index]}"
                        alt="${service.title}"
                        loading="lazy"
                      />
                    </div>

                    <div class="service-content">

                      <h3 class="card-title">
                        ${service.title}
                      </h3>

                      <p class="card-text">
                        ${service.text}
                      </p>

                      <button
                        class="card-btn"
                        data-link="contact">
                        ${readMoreText}
                      </button>

                    </div>

                  </article>
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

      <!-- The New Thearpey part -->
                    <!-- TRUST SECTION -->
      <section class="section trust-section">

        <div class="container">

          <div class="trust-header">

            <h2 class="section-title centered">
              ${t.trustSection.title}
            </h2>

            <p class="trust-subtitle">
              ${t.trustSection.subtitle}
            </p>

            <div class="trust-divider">

              <span></span>

              <div class="trust-divider-icon">

                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L20 5V11C20 16 16.5 20.5 12 22C7.5 20.5 4 16 4 11V5L12 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>

              </div>

              <span></span>

            </div>

          </div>

          <div class="trust-grid">

            <!-- LEFT CARD -->

            <div class="trust-card certificate-card">

              <div class="trust-card-title">

                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
                  <path d="M8 14L6 22L12 18L18 22L16 14" stroke="currentColor" stroke-width="2"/>
                </svg>

                <span>
                  ${t.trustSection.licenseTitle}
                </span>

              </div>

              <img
                src="${healthTourismCertificate}"
                class="certificate-image"
                alt="Health Tourism Certificate"
              >

            </div>

            <!-- RIGHT CARD -->

            <div class="trust-card partners-card">

              <div class="trust-card-title">

                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 20H20" stroke="currentColor" stroke-width="2"/>
                  <path d="M6 20V8H18V20" stroke="currentColor" stroke-width="2"/>
                  <path d="M9 8V4H15V8" stroke="currentColor" stroke-width="2"/>
                </svg>

                <span>
                  ${t.trustSection.partnerTitle}
                </span>

              </div>

              
              <div class="partners-grid">

              <!-- BM -->
              <div class="partner-item">

                  <img
                      class="partner-logo"
                      src="${bmLogo}"
                      alt="BM Türkiye"
                  >

                  <img
                      class="partner-building"
                      src="${bmBuilding}"
                      alt="BM Türkiye"
                  >

                  <div class="partner-gallery">

                      <img
                          src="${bm1}"
                          alt="BM Türkiye"
                      >

                      <img
                          src="${bm2}"
                          alt="BM Türkiye"
                      >

                  </div>

                </div>
                <!-- EFC -->
                <div class="partner-item">

                    <img
                        class="partner-logo"
                        src="${efcLogo}"
                        alt="EFC Clinic"
                    >

                    <img
                        class="partner-building"
                        src="${efcBuilding}"
                        alt="EFC Clinic"
                    >

                    <div class="partner-gallery">

                        <img
                            src="${efc1}"
                            alt="EFC Clinic"
                        >

                        <img
                            src="${efc2}"
                            alt="EFC Clinic"
                        >

                    </div>

                </div>

                <!-- HLC -->
                <div class="partner-item">

                    <img
                        class="partner-logo"
                        src="${hlcLogo}"
                        alt="HLC Clinic"
                    >

                    <img
                        class="partner-building"
                        src="${hlcBuilding}"
                        alt="HLC Clinic"
                    >

                    <div class="partner-gallery">

                        <img
                            src="${hlc1}"
                            alt="HLC Clinic"
                        >

                        <img
                            src="${hlc2}"
                            alt="HLC Clinic"
                        >

                    </div>

                </div>
            </div>



          </div>

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

          <h2 class="section-title contact-title">

          

          <span><svg viewBox="0 0 24 24" fill="none">

              <path
                  d="M22 16.9V20a2 2 0 0 1-2.2 2
                  19.8 19.8 0 0 1-8.6-3.1
                  19.4 19.4 0 0 1-6-6
                  A19.8 19.8 0 0 1 2 4.2
                  2 2 0 0 1 4 2h3.1
                  a2 2 0 0 1 2 1.7
                  l.5 3.2
                  a2 2 0 0 1-.6 1.8
                  l-2 2
                  a16 16 0 0 0 6 6
                  l2-2
                  a2 2 0 0 1 1.8-.6
                  l3.2.5
                  A2 2 0 0 1 22 16.9Z"

                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"

              />

          </svg>${t.contactTitle}</span>

      </h2>

          <div class="contact-wrapper">

            <!-- LEFT SIDE -->
            <div class="wide-card">

              <p class="wide-text">${t.contactText}</p>

              <div class="contact-info">

                <div class="contact-item">
                  <span class="contact-label">Phone:</span>
                  <a href="tel:+905319457388">+90 531 945 7388</a>
                </div>

                <div class="contact-item">
                  <span class="contact-label">Phone:</span>
                  <a href="tel:+905300799487">+90 530 079 9487</a>
                </div>

                <div class="contact-item">
                  <span class="contact-label">Email:</span>
                  <a href="mailto:info@skyistgroup.com">
                    info@skyistgroup.com
                  </a>
                </div>

                <div class="contact-item address">
                  <span class="contact-label">Address:</span>

                    <p class="contact-value">
                      ZAFER MAH. 185. SK.<br>
                      BABACAN PREMİUM B BLOK NO: 4 B<br>
                      İÇ KAPI NO: 319 ESENYURT / İSTANBUL
                    </p>

                </div>

              </div>

            </div>

            <!-- RIGHT SIDE -->
            <div class="health-side">

              <img
                src="${heartOfHealth}"
                class="health-logo"
                alt="Health Türkiye"
              >

              <div class="health-card">

                <div class="health-card-icon">
                  ✓
                </div>

                <h3>Authorized by</h3>

                <h2>Turkish Ministry of Health</h2>

                <p>
                  Officially licensed to provide international
                  health tourism services in Türkiye.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
      <footer class="footer">
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
      <a class="wa-fab"
   href="https://wa.me/905300799487"
   target="_blank"
   rel="noopener">

    <svg viewBox="0 0 32 32" aria-hidden="true">

        <path fill="currentColor"
        d="M19.1 17.3c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.2-.7.9-.8 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.3-1.6-1.5-1.8-.2-.3 0-.4.1-.6l.4-.5.3-.4c.1-.2.1-.4 0-.6-.1-.2-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.8-.9 2s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 2.6 1.1 2.6.7 3.1.7.5 0 1.6-.7 1.8-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>

        <path fill="currentColor"
        d="M16 3C8.8 3 3 8.8 3 16c0 2.5.7 4.8 2 6.8L3.6 28l5.4-1.4A13 13 0 1016 3zm0 23.5c-2 0-3.9-.6-5.4-1.6l-.4-.2-3.2.8.8-3.1-.2-.4A10.5 10.5 0 1116 26.5z"/>

    </svg>

    <span>WhatsApp</span>

</a>
<!-- IMAGE LIGHTBOX -->

<div class="lightbox" id="lightbox">

    <button class="lightbox-close" id="lightboxClose">

        ✕

    </button>

    <img
        id="lightboxImage"
        class="lightbox-image"
        src=""
        alt=""
    >

</div>
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
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

if (lightbox && lightboxImage && lightboxClose) {

    app.querySelectorAll(".certificate-image, .partner-building, .partner-gallery img")
    .forEach((img) => {

        img.addEventListener("click", () => {

            lightboxImage.src = img.src;
            lightbox.classList.add("show");

        });

    });

    lightboxClose.addEventListener("click", () => {

        lightbox.classList.remove("show");

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("show");

        }

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

