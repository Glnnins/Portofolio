import "../css/input.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  createIcons,
  ArrowUpRight,
  Sun,
  Moon,
  Menu,
  X,
  Github,
  Instagram,
  Mail,
  MapPin,
  Send,
  Code2,
  Braces,
  Palette,
  GitBranch,
  Calendar,
  GraduationCap,
  User,
  Sparkles,
  ExternalLink,
} from "lucide";

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = {
  github: "https://github.com/glnnins",
  instagram: "https://www.instagram.com/glnnnnns/",
  email: "glenninssindim@gmail.com",
};

const app = document.querySelector("#app");
app.innerHTML = `
<div class="loader" id="loader" aria-label="Loading portfolio">
  <div class="loader-inner">
    <span class="loader-name">GLENNINS</span>
    <div class="loader-bar"><span class="loader-fill"></span></div>
    <span class="loader-text">Portfolio Loading</span>
  </div>
</div>

<header class="nav" id="site-nav">
  <div class="nav-inner">
    <a class="brand" href="#home" aria-label="GLENNINS home">GLENNINS<span>.</span></a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="#about">About</a>
      <a href="#stack">Stack</a>
      <a href="#work">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="nav-tools">
      <button class="tool menu-btn" id="menu" aria-label="Open menu" aria-expanded="false"><i data-lucide="menu"></i></button>
      <button class="tool" id="theme" aria-label="Switch theme"><i data-lucide="moon"></i></button>
    </div>
  </div>
  <nav class="mobile-menu" id="mobile" aria-label="Mobile navigation">
    <a href="#about">About</a>
    <a href="#stack">Stack</a>
    <a href="#work">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <section class="hero" id="home">
    <div class="container hero-inner">
      <div class="hero-copy">
        <span class="hello-label">HELLO, I'M GLENNINS</span>
        <h1>Informatics Student <span class="hero-break">&amp;</span> <span class="accent">Web Developer</span>.</h1>
        <p class="hero-desc">
          Saya membangun pengalaman web yang modern, interaktif, dan fungsional — dari ide visual sampai implementasi kode.
        </p>
        <div class="hero-proof" aria-label="Quick profile facts">
          <span><i data-lucide="code-2"></i> Web Development</span>
          <span><i data-lucide="sparkles"></i> Interactive UI</span>
          <span><i data-lucide="graduation-cap"></i> Informatics</span>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#work">View Projects <i data-lucide="arrow-up-right"></i></a>
          <a class="btn btn-ghost" href="#contact">Let's Connect</a>
        </div>
        <div class="connect">
          <span class="connect-label">Find me on</span>
          <div class="connect-icons">
            <a class="icon-btn" href="${SOCIALS.github}" target="_blank" rel="noreferrer" aria-label="GitHub"><i data-lucide="github"></i></a>
            <a class="icon-btn" href="${SOCIALS.instagram}" target="_blank" rel="noreferrer" aria-label="Instagram"><i data-lucide="instagram"></i></a>
            <a class="icon-btn" href="mailto:${SOCIALS.email}" aria-label="Email"><i data-lucide="mail"></i></a>
          </div>
        </div>
      </div>

      <div class="hero-visual" id="lanyard-zone">
        <div class="visual-note"><span>INTERACTIVE ID</span><i data-lucide="sparkles"></i></div>
        <div class="lanyard-rig" id="lanyard-rig">
          <div class="lanyard-strap" aria-hidden="true"><span class="strap-print">GLENNINS · GLENNINS · GLENNINS ·</span></div>
          <div class="lanyard-clip" aria-hidden="true"><span class="clip-swivel"></span><span class="clip-hook"></span></div>
          <div class="badge3d-tilt" id="id-card" role="button" tabindex="0" aria-label="Balik kartu ID">
            <span class="badge-hole" aria-hidden="true"></span>
            <div class="badge3d" id="id-card-flip">
              <div class="badge3d-face badge3d-front">
                <div class="badge-top"><span class="badge-chip"></span><span class="badge-headline">ID · 2026</span></div>
                <div class="card-photo"><img src="/assets/images/BJNO0114.JPG" alt="Foto profil Glennins" fetchpriority="high"></div>
                <h2 class="card-name">GLENNINS</h2>
                <p class="card-role">INFORMATICS<br>STUDENT &amp; WEB DEVELOPER</p>
                <div class="card-line"></div>
                <div class="card-tags"><span>WEB</span><span>CODE</span><span>UI</span></div>
              </div>
              <div class="badge3d-face badge3d-back">
                <span class="badge-back-logo">GLENNINS.</span>
                <div class="badge-back-line"></div>
                <div class="badge-back-tags"><span>BUILD</span><span>DESIGN</span><span>CODE</span></div>
                <span class="badge-back-id">NO. 2026-07</span>
              </div>
            </div>
            <span class="card-hint">Klik untuk membalik</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="about" id="about">
    <div class="container">
      <div class="section-heading about-heading">
        <div>
          <span class="section-label">01 / About Me</span>
          <h2>I don't just build pages. I shape how they <em>feel.</em></h2>
        </div>
        <p>Saya mahasiswa Teknik Informatika yang senang mengeksplorasi web development, visual interface, dan interaksi. Bagi saya, website yang bagus bukan cuma bekerja dengan benar — tetapi juga punya alasan di balik setiap detailnya.</p>
      </div>

      <div class="about-layout">
        <article class="about-story">
          <div class="about-story-top">
            <span class="about-kicker">WHO I AM</span>
            <span class="about-year">2026 / MANADO</span>
          </div>
          <h3>Learning by building, improving by experimenting.</h3>
          <p>Saya membangun berbagai project sebagai bagian dari perjalanan saya di bidang pengembangan web. Di sini, saya membagikan sedikit tentang diri saya, teknologi yang saya gunakan, serta beberapa project yang pernah saya kerjakan.</p>
          <div class="about-facts">
            <div><span>Focus</span><strong>Web Development</strong></div>
<div><span>Education</span><strong>Informatics</strong></div>
          </div>
        </article>

        <aside class="about-design">
          <div class="about-design-head">
            <div>
              <span class="about-kicker">WHY THIS UI?</span>
              <h3>Every visual choice has a job.</h3>
            </div>
            <div class="design-mark"><i data-lucide="palette"></i></div>
          </div>
          <p class="about-design-intro">Desain UI di website ini bukan sekadar dekorasi. Konsepnya dibuat untuk membangun identitas developer yang minimal, modern, dan tetap terasa personal.</p>

          <div class="design-grid">
            <div class="design-card">
              <span class="design-number">01</span>
              <div class="design-icon"><i data-lucide="palette"></i></div>
              <h4>Dark Grey System</h4>
              <p>Warna gelap menjaga fokus ke konten dan memberi kesan technical tanpa terlihat terlalu ramai.</p>
            </div>
            <div class="design-card">
              <span class="design-number">02</span>
              <div class="design-icon"><i data-lucide="sparkles"></i></div>
              <h4>Motion with Purpose</h4>
              <p>GSAP, Lenis, hover state, dan reveal animation dipakai untuk memberi feedback, bukan sekadar efek.</p>
            </div>
            <div class="design-card">
              <span class="design-number">03</span>
              <div class="design-icon"><i data-lucide="code-2"></i></div>
              <h4>Developer First</h4>
              <p>Typography, spacing, cards, dan hierarchy dibuat supaya project dan kemampuan coding tetap menjadi pusat perhatian.</p>
            </div>
            <div class="design-card">
              <span class="design-number">04</span>
              <div class="design-icon"><i data-lucide="braces"></i></div>
              <h4>Interactive Identity</h4>
              <p>Lanyard dan ID card menjadi signature visual: representasi sederhana bahwa portfolio ini adalah personal space, bukan template biasa.</p>
            </div>
          </div>
        </aside>
      </div>

      <div class="personal-info">
        <div class="personal-info-top">
          <div class="personal-index"><span>PERSONAL INFO</span><b>02</b></div>
          <span class="personal-status"><i></i> AVAILABLE TO CONNECT</span>
        </div>
        <div class="personal-info-grid">
          <div class="personal-profile">
            <div class="personal-avatar-wrap">
              <div class="personal-avatar"><img src="/assets/images/BJNO0114.JPG" alt="Foto profil Glennins" loading="lazy"></div>
              <span class="avatar-orbit">GLN / 26</span>
            </div>
            <div class="personal-name-block">
              <span class="personal-eyebrow">THE PERSON BEHIND THE INTERFACE</span>
              <h3>Glennins<br><em>Sindim.</em></h3>
              <p>Informatics Student &amp; Web Developer</p>
            </div>
          </div>
          <div class="personal-details">
            <div class="personal-detail-item"><span>01 / EDUCATION</span><strong>Universitas Katolik<br>De La Salle Manado</strong><i data-lucide="graduation-cap"></i></div>
            <div class="personal-detail-item"><span>02 / FOCUS</span><strong>Web Development<br>&amp; Interactive UI</strong><i data-lucide="code-2"></i></div>
            <div class="personal-detail-item"><span>03 / BASED IN</span><strong>Manado, Indonesia</strong><i data-lucide="map-pin"></i></div>
            <div class="personal-detail-item"><span>04 / CONTACT</span><a href="mailto:${SOCIALS.email}">${SOCIALS.email}</a><i data-lucide="mail"></i></div>
          </div>
        </div>
        <div class="personal-info-footer">
          <span>CURIOUS BY NATURE</span><span>BUILDING BY PRACTICE</span><span>DESIGNING WITH INTENT</span>
        </div>
      </div>
    </div>
  </section>

  <section class="stack" id="stack">
    <div class="container">
      <div class="section-heading compact">
        <div><span class="section-label">02 / Tech Stack</span><h2>Tools I use to turn ideas into interfaces.</h2></div>
        <p>Stack ini bisa berkembang seiring project. Fokus saya bukan mengoleksi tools, tetapi memahami kapan sebuah teknologi memang dibutuhkan.</p>
      </div>
      <div class="stack-grid">
        <div class="stack-card"><span class="stack-icon"><i data-lucide="code-2"></i></span><div><strong>HTML &amp; CSS</strong><span>Semantic structure &amp; responsive UI</span></div></div>
        <div class="stack-card"><span class="stack-icon"><i data-lucide="braces"></i></span><div><strong>JavaScript</strong><span>Interaction &amp; browser logic</span></div></div>
        <div class="stack-card"><span class="stack-icon"><i data-lucide="palette"></i></span><div><strong>Tailwind CSS</strong><span>Utility-first interface styling</span></div></div>
        <div class="stack-card"><span class="stack-icon"><i data-lucide="sparkles"></i></span><div><strong>GSAP &amp; Lenis</strong><span>Motion &amp; smooth scrolling</span></div></div>
        <div class="stack-card"><span class="stack-icon"><i data-lucide="git-branch"></i></span><div><strong>Git &amp; GitHub</strong><span>Version control &amp; deployment workflow</span></div></div>
        <div class="stack-card"><span class="stack-icon"><i data-lucide="code-2"></i></span><div><strong>Vite</strong><span>Fast modern frontend tooling</span></div></div>
      </div>
    </div>
  </section>

  <section class="work" id="work">
    <div class="container">
      <div class="section-heading compact">
        <div><span class="section-label">03 / Selected Projects</span><h2>Small projects, real experiments.</h2></div>
        <p>Beberapa project yang menunjukkan minat saya pada web, visual interaction, dan problem solving.</p>
      </div>
      <div class="project-grid">
        <article class="project-card project-card-featured">
          <div class="project-visual gentaaa-visual"><span>GENTAAA</span><div class="project-orb orb-a"></div><div class="project-orb orb-b"></div></div>
          <div class="project-content"><div class="project-top"><span class="project-number">01</span><span class="project-status">LIVE</span></div><h3>GENTAAA</h3><p>Interactive memory website built around photos, music, and atmosphere as a personal digital experience.</p><div class="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div><a class="project-link" href="https://glnnins.github.io/GENTAAA/" target="_blank" rel="noreferrer">View live project <i data-lucide="external-link"></i></a></div>
        </article>
        <article class="project-card">
          <div class="project-visual portfolio-visual"><span>PORTFOLIO</span><div class="mini-window"><i></i><i></i><i></i></div></div>
          <div class="project-content"><div class="project-top"><span class="project-number">02</span><span class="project-status">CURRENT</span></div><h3>GLENNINS Portfolio</h3><p>Personal portfolio focused on clean dark UI, interactive lanyard, motion, and a developer-first presentation.</p><div class="project-tags"><span>Vite</span><span>GSAP</span><span>Lenis</span></div><a class="project-link" href="#home">You are here <i data-lucide="arrow-up-right"></i></a></div>
        </article>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="container contact-inner">
      <span class="section-label">04 / Let's Connect</span>
      <h2 class="contact-title">Have an idea? <span>Let's build it.</span></h2>
      <p class="contact-copy">Open for conversations about web projects, collaborations, and new things to learn.</p>
      <div class="contact-actions">
        <a class="btn btn-primary btn-lg" href="mailto:${SOCIALS.email}?subject=Project%20Inquiry">Contact Me <i data-lucide="send"></i></a>
        <div class="connect-icons">
          <a class="icon-btn" href="${SOCIALS.github}" target="_blank" rel="noreferrer" aria-label="GitHub"><i data-lucide="github"></i></a>
          <a class="icon-btn" href="${SOCIALS.instagram}" target="_blank" rel="noreferrer" aria-label="Instagram"><i data-lucide="instagram"></i></a>
          <a class="icon-btn" href="mailto:${SOCIALS.email}" aria-label="Email"><i data-lucide="mail"></i></a>
        </div>
      </div>
      <div class="contact-meta"><div class="meta-item"><i data-lucide="map-pin"></i><span>Indonesia · GMT+7</span></div><div class="meta-item"><i data-lucide="github"></i><a href="${SOCIALS.github}" target="_blank" rel="noreferrer">github.com/glnnins</a></div></div>
    </div>
  </section>
</main>

<footer>
  <div class="container footer-inner"><span>© 2026 Glennins.</span><span>Designed &amp; built with curiosity.</span></div>
</footer>
`;

const icons = {
  ArrowUpRight,
  Sun,
  Moon,
  Menu,
  X,
  Github,
  Instagram,
  Mail,
  MapPin,
  Send,
  Code2,
  Braces,
  Palette,
  GitBranch,
  Calendar,
  GraduationCap,
  User,
  Sparkles,
  ExternalLink,
};
createIcons({ icons });

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

/* Loader: shorter and non-blocking. */
const loader = document.getElementById("loader");
const loaderFill = loader.querySelector(".loader-fill");
const loaderName = loader.querySelector(".loader-name");
const loaderText = loader.querySelector(".loader-text");
let loaderHidden = false;
function hideLoader() {
  if (loaderHidden) return;
  loaderHidden = true;
  gsap.to(loaderFill, {
    width: "100%",
    duration: 0.35,
    ease: "power2.out",
    onComplete: () => {
      gsap
        .timeline()
        .to([loaderName, loaderText], {
          opacity: 0,
          y: -8,
          duration: 0.2,
          stagger: 0.03,
        })
        .to(loader, {
          opacity: 0,
          duration: 0.35,
          onComplete: () => {
            loader.style.display = "none";
            document.body.classList.add("loaded");
          },
        });
    },
  });
}
gsap.from(loaderName, {
  opacity: 0,
  y: 12,
  duration: 0.45,
  ease: "power3.out",
});
gsap.from(loaderText, {
  opacity: 0,
  y: 8,
  duration: 0.35,
  delay: 0.15,
  ease: "power3.out",
});
window.addEventListener("load", () => setTimeout(hideLoader, 450), {
  once: true,
});
setTimeout(hideLoader, 1400);

/* Smooth scroll. */
const lenis = reducedMotion
  ? null
  : new Lenis({ duration: 1.05, smoothWheel: true });
if (lenis) {
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

/* Lanyard interaction. */
const lanyardZone = document.getElementById("lanyard-zone");
const lanyardRig = document.getElementById("lanyard-rig");
const idCard = document.getElementById("id-card");
const idCardFlip = document.getElementById("id-card-flip");
if (lanyardZone && lanyardRig && idCard && idCardFlip) {
  let flipped = false;
  const toggleFlip = () => {
    flipped = !flipped;
    gsap.to(idCardFlip, {
      rotateY: flipped ? 180 : 0,
      duration: 0.65,
      ease: "power3.inOut",
    });
  };
  idCard.addEventListener("click", toggleFlip);
  idCard.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  });
  if (!reducedMotion) {
    gsap.set(lanyardRig, { transformPerspective: 1200 });
    const setZ = gsap.quickTo(lanyardRig, "rotateZ", {
      duration: 0.55,
      ease: "power3.out",
    });
    const setX = gsap.quickTo(lanyardRig, "rotateX", {
      duration: 0.55,
      ease: "power3.out",
    });
    const setCardY = gsap.quickTo(idCard, "rotateY", {
      duration: 0.35,
      ease: "power3.out",
    });
    const setCardX = gsap.quickTo(idCard, "rotateX", {
      duration: 0.35,
      ease: "power3.out",
    });
    let idleTl;
    const startIdle = () => {
      idleTl = gsap
        .timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } })
        .to(lanyardRig, { rotateZ: 2.4, y: -5, duration: 2.8 })
        .to(lanyardRig, { rotateZ: -2.4, y: 0, duration: 2.8 });
    };
    const stopIdle = () => {
      if (idleTl) {
        idleTl.kill();
        idleTl = null;
      }
    };
    startIdle();
    lanyardZone.addEventListener("mousemove", (e) => {
      stopIdle();
      const r = lanyardZone.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setZ(x * 8);
      setX(-y * 5);
      setCardY(x * 14);
      setCardX(-y * 10);
    });
    lanyardZone.addEventListener("mouseleave", () => {
      gsap.to(lanyardRig, {
        rotateZ: 0,
        rotateX: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        onComplete: startIdle,
      });
      gsap.to(idCard, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    });
  }
}

/* Reveal animations + reduced motion support. */
if (reducedMotion) {
  gsap.set(
    ".hero-copy > *, .hero-visual, .section-heading, .detail-panel, .stack-card, .project-card, .contact-inner",
    { clearProps: "all" },
  );
} else {
  gsap.from(".hero-copy > *", {
    opacity: 0,
    y: 22,
    duration: 0.7,
    stagger: 0.07,
    ease: "power3.out",
    delay: 0.7,
  });
  gsap.from(".hero-visual", {
    opacity: 0,
    y: 25,
    duration: 0.9,
    ease: "power3.out",
    delay: 0.85,
  });
  gsap.utils
    .toArray(
      ".section-heading, .detail-panel, .stack-card, .project-card, .contact-inner",
    )
    .forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 28,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });
}

/* Theme. */
const theme = document.getElementById("theme");
const applyThemeIcon = () => {
  const light = document.body.classList.contains("light");
  theme.innerHTML = `<i data-lucide="${light ? "sun" : "moon"}"></i>`;
  createIcons({ icons });
};
if (localStorage.getItem("glennins-theme") === "light")
  document.body.classList.add("light");
applyThemeIcon();
theme.addEventListener("click", () => {
  const light = !document.body.classList.contains("light");
  document.body.classList.toggle("light", light);
  localStorage.setItem("glennins-theme", light ? "light" : "dark");
  applyThemeIcon();
});

/* Mobile menu. */
const menu = document.getElementById("menu");
const mobile = document.getElementById("mobile");
const closeMobile = () => {
  mobile.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Open menu");
  menu.innerHTML = `<i data-lucide="menu"></i>`;
  createIcons({ icons });
};
menu.addEventListener("click", () => {
  const open = mobile.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
  createIcons({ icons });
});
mobile
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", closeMobile));

/* Navbar active section. */
const nav = document.getElementById("site-nav");
const navLinks = document.querySelectorAll(".nav-links a");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const sections = ["home", "about", "stack", "work", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
function setActive(id) {
  [...navLinks, ...mobileLinks].forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === `#${id}`),
  );
}
function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 24);
  let current = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  setActive(current);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
