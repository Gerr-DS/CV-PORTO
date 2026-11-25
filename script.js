/* Portofolio Gerry Dimasarya */

// ---------- Kamus Terjemahan Dwibahasa (ID / EN) ----------
const TRANSLATIONS = {
  id: {
    "page.title": "Gerry Dimasarya — Portfolio",
    "page.desc": "Portfolio dummy untuk Gerry Dimasarya. Dibuat sebagai contoh belajar.",
    "skip": "Lewati ke konten",

    // Nav
    "nav.about": "Tentang",
    "nav.skills": "Keahlian",
    "nav.projects": "Proyek",
    "nav.certificate": "Sertifikat",
    "nav.contact": "Kontak",

    // Hero
    "hero.location": "Bogor, Indonesia",
    "hero.major": "Teknologi Rekayasa Perangkat Lunak, IPB University",
    "hero.field": "Data, Web & Cyber",
    "hero.portrait_alt": "Potret dummy Gerry Dimasarya",
    "hero.hint_mouse": "Gerakkan kursor di atas potret",
    "hero.hint_touch": "Geser jari di atas potret",
    "hero.panels_aria": "Ringkasan",
    "hero.currently": "Saat ini",
    "hero.student": "Mahasiswa",
    "hero.at_glance": "Sekilas",
    "hero.stat_projects": "Proyek",
    "hero.stat_skills": "Keahlian",
    "hero.stat_cert": "Sertifikat",
    "hero.switch_aura": "Tampilkan aura",
    "hero.switch_photo": "Tampilkan foto",
    "hero.switch_sub": "Ganti potret",
    "hero.view_cv": "Lihat CV",
    "hero.cv_url": "https://drive.google.com/file/d/1JR8nMMHUF6aoPG53Uv0rVVSIukp9_dM0/view?usp=sharing",

    // About
    "about.title": "Tentang",
    "about.meta": "Siapa saya",
    "about.lead": "Saya memiliki keunggulan dalam merancang arsitektur aplikasi secara komprehensif, adaptif terhadap teknologi baru, dan solid dalam kolaborasi tim. Walaupun terkadang perfeksionis terhadap detail teknis yang kompleks, saya selalu memastikan efisiensi kerja dengan menerapkan skala prioritas Minimum Viable Product (MVP) dan manajemen waktu yang ketat.",
    "about.studying": "Pendidikan",
    "about.studying_desc": "Teknologi Rekayasa Perangkat Lunak, IPB University",
    "about.based": "Domisili",
    "about.based_desc": "Bogor, Indonesia",
    "about.works": "Fokus",
    "about.works_desc": "Web, mobile, data, UI/UX",

    // Skills
    "skills.title": "Keahlian",
    "skills.meta": "Teknologi yang saya gunakan",
    "skills.s1_title": "Data",
    "skills.s1_desc": "Basis data MySQL dan MongoDB, dengan Python dan SQL.",
    "skills.s2_title": "Build",
    "skills.s2_desc": "Backend dan REST API dengan Laravel/PHP, integrasi Flutter, serta game dengan Unity/C#.",
    "skills.s3_title": "Design & Security",
    "skills.s3_desc": "UI/UX dan aset 3D untuk game, ditambah forensik digital dan keamanan aplikasi web.",

    // Projects
    "projects.title": "Proyek",
    "projects.meta": "Karya terpilih",
    "wheel.meta": "Project wheel",
    "wheel.hint": "Geser roda atau gunakan tombol panah",
    "wheel.aria": "Galeri proyek. Gunakan tombol panah kiri dan kanan untuk memilih proyek.",
    "wheel.prev": "Proyek sebelumnya",
    "wheel.next": "Proyek berikutnya",
    "wheel.view_project": "Lihat proyek",
    "wheel.view_item": "Lihat",
    "wheel.of": "dari",

    // Certificate
    "cert.title": "Sertifikat",
    "cert.meta": "Kredensial & pencapaian",
    "cert.rail": "Rel sertifikat",
    "cert.aria": "Galeri sertifikat. Pilih bingkai untuk membaca deskripsi.",
    "cert.open": "Lihat sertifikat",
    "cert.back": "Kembali ke semua sertifikat",
    "cert.prev": "Sertifikat sebelumnya",
    "cert.next": "Sertifikat berikutnya",
    "cert.view_detail": "Lihat detail",
    "cert.of": "dari",

    // Contact
    "contact.title": "Kontak",
    "contact.meta": "Mari berkolaborasi",
    "contact.lead": "Tertarik berkolaborasi? Hubungi saya melalui platform pilihan Anda.",
    "contact.linkedin_aria": "Buka profil LinkedIn Gerry Dimasarya",
    "contact.github_aria": "Buka GitHub Gerr-DS",
    "contact.email_aria": "Tulis email ke Gerry Dimasarya",
    "contact.wa_aria": "Hubungi Gerry Dimasarya melalui WhatsApp",
    "contact.ig_aria": "Buka Instagram grydz",
    "contact.footer_copy": "Portfolio pribadi · 2026",

    // Status
    "status.loading": "Memuat…",
    "status.offline": "Koneksi terputus — menunggu jaringan pulih…"
  },
  en: {
    "page.title": "Gerry Dimasarya — Portfolio",
    "page.desc": "Personal portfolio for Gerry Dimasarya.",
    "skip": "Skip to content",

    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.certificate": "Certificate",
    "nav.contact": "Contact",

    // Hero
    "hero.location": "Bogor, Indonesia",
    "hero.major": "Software Engineering Technology, IPB University",
    "hero.field": "Data, Web & Cyber",
    "hero.portrait_alt": "Portrait of Gerry Dimasarya",
    "hero.hint_mouse": "Move cursor over portrait",
    "hero.hint_touch": "Swipe finger over portrait",
    "hero.panels_aria": "Summary",
    "hero.currently": "Currently",
    "hero.student": "Student",
    "hero.at_glance": "At a glance",
    "hero.stat_projects": "Projects",
    "hero.stat_skills": "Skills",
    "hero.stat_cert": "Certificate",
    "hero.switch_aura": "Show aura",
    "hero.switch_photo": "Show photo",
    "hero.switch_sub": "Switch portrait",
    "hero.view_cv": "View CV",
    "hero.cv_url": "https://drive.google.com/file/d/1o34ITOkCunaHiCVXi0MYI7r7LlaGIaut/view?usp=sharing",

    // About
    "about.title": "About",
    "about.meta": "Who I am",
    "about.lead": "I specialize in architecting comprehensive systems, adapting rapidly to emerging technologies, and collaborating effectively in cross-functional teams. While detail-oriented toward technical precision, I maintain swift execution through Minimum Viable Product (MVP) prioritization and disciplined time management.",
    "about.studying": "Studying",
    "about.studying_desc": "Software Engineering Technology, IPB University",
    "about.based": "Based in",
    "about.based_desc": "Bogor, Indonesia",
    "about.works": "Works across",
    "about.works_desc": "Web, mobile, data, UI/UX",

    // Skills
    "skills.title": "Skills",
    "skills.meta": "What I work with",
    "skills.s1_title": "Data",
    "skills.s1_desc": "MySQL and MongoDB databases, with Python and SQL.",
    "skills.s2_title": "Build",
    "skills.s2_desc": "Backend and REST APIs with Laravel/PHP, Flutter integration, and games with Unity/C#.",
    "skills.s3_title": "Design & Security",
    "skills.s3_desc": "UI/UX and 3D assets for games, along with digital forensics and web application security.",

    // Projects
    "projects.title": "Projects",
    "projects.meta": "Selected work",
    "wheel.meta": "Project wheel",
    "wheel.hint": "Drag wheel or use arrow keys",
    "wheel.aria": "Project gallery. Use left and right arrow keys to select a project.",
    "wheel.prev": "Previous project",
    "wheel.next": "Next project",
    "wheel.view_project": "View project",
    "wheel.view_item": "View",
    "wheel.of": "of",

    // Certificate
    "cert.title": "Certificate",
    "cert.meta": "Credentials & recognition",
    "cert.rail": "Certificate rail",
    "cert.aria": "Certificate gallery. Select a frame to view description.",
    "cert.open": "View certificate",
    "cert.back": "Back to all certificates",
    "cert.prev": "Previous certificate",
    "cert.next": "Next certificate",
    "cert.view_detail": "View details for",
    "cert.of": "of",

    // Contact
    "contact.title": "Contact",
    "contact.meta": "Let's work",
    "contact.lead": "Interested in collaborating? Reach out through your preferred platform.",
    "contact.linkedin_aria": "Open Gerry Dimasarya's LinkedIn profile",
    "contact.github_aria": "Open Gerr-DS GitHub",
    "contact.email_aria": "Send email to Gerry Dimasarya",
    "contact.wa_aria": "Contact Gerry Dimasarya on WhatsApp",
    "contact.ig_aria": "Open grydz Instagram",
    "contact.footer_copy": "Personal portfolio · 2026",

    // Status
    "status.loading": "Loading…",
    "status.offline": "Connection lost — waiting for network to recover…"
  }
};

let currentLang = localStorage.getItem("portfolio_lang") || "id";
function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || (TRANSLATIONS.id && TRANSLATIONS.id[key]) || key;
}
function tText(val) {
  if (!val) return "";
  if (typeof val === "object") return val[currentLang] || val.id || Object.values(val)[0] || "";
  return String(val);
}

// ---------- Proyek (Dwibahasa) ----------
const PROJECTS = [
  {
    tag: { id: "WebGIS · AI & Intelijen Sumber Terbuka · 2026", en: "WebGIS · AI & Open-Source Intelligence · 2026" },
    title: { id: "GeoSentry", en: "GeoSentry" },
    desc: {
      id: "Dasbor WebGIS untuk memantau berita dan media sosial publik secara real-time. Dilengkapi klasifikasi AI (fakta vs hoaks), verifikasi sumber otomatis, peta interaktif Leaflet, serta database geospasial PostgreSQL/PostGIS.",
      en: "Real-time WebGIS dashboard monitoring news and public social media. Features AI classification (fact vs hoax), automated source verification, interactive Leaflet maps, and PostgreSQL/PostGIS geospatial database."
    },
    cover: "assets/project-7.svg",
    alt: {
      id: "Mockup dasbor WebGIS dengan peta, titik data, dan panel analisis",
      en: "WebGIS dashboard mockup with map, data points, and analytics panel"
    },
    year: "Node.js · Python · PostGIS · Leaflet",
    link: "https://github.com/Gerr-DS/GeoSentry.git"
  },
  {
    tag: { id: "Aplikasi web & mobile · 2026", en: "Web & mobile app · 2026" },
    title: { id: "IPB Kehilangan", en: "IPB Kehilangan" },
    desc: {
      id: "Aplikasi barang hilang dan ditemukan dengan REST API, MongoDB, serta integrasi backend Laravel ke Flutter.",
      en: "Lost and found reporting application with REST API, MongoDB, and Laravel backend integration with Flutter."
    },
    cover: "assets/project-1.svg",
    alt: {
      id: "Mockup antarmuka peta kampus dan kartu barang hilang",
      en: "Campus map interface mockup and lost item cards"
    },
    year: "Feb–Jun 2026",
    link: "https://github.com/Gerr-DS/IPB-KEHILANGANV.git"
  },
  {
    tag: { id: "Game edukasi · 2026", en: "Educational game · 2026" },
    title: { id: "AR Games", en: "AR Games" },
    desc: {
      id: "Game edukasi Pancasila dengan gameplay interaktif di Unity/C# dan aset 3D dari Blender.",
      en: "Pancasila educational game with interactive gameplay in Unity/C# and 3D assets from Blender."
    },
    cover: "assets/project-2.svg",
    alt: {
      id: "Desain visual game edukasi dengan dunia 3D dan kontrol interaktif",
      en: "Educational game visual design with 3D world and interactive controls"
    },
    year: "Jan–Jun 2026",
    link: "https://drive.google.com/drive/folders/1PTte5DsS-fWWMT4NmNGsc0fISGLQ4gQz?usp=sharing"
  },
  {
    tag: { id: "Sistem informasi · 2026", en: "Information system · 2026" },
    title: { id: "Digital Agensi UMKM", en: "Digital Agency for SMEs" },
    desc: {
      id: "Sistem informasi manajemen katering berbasis web; pengembangan backend menggunakan Laravel, PHP, dan MySQL.",
      en: "Web-based catering management information system; backend development using Laravel, PHP, and MySQL."
    },
    cover: "assets/project-3.svg",
    alt: {
      id: "Mockup desain sistem informasi pesanan katering",
      en: "Catering order information system design mockup"
    },
    year: "Feb–Jun 2026",
    link: "https://github.com/Gerr-DS/Catering.git"
  },
  {
    tag: { id: "Website bisnis · 2025", en: "Business website · 2025" },
    title: { id: "FIFIFA Multimedia", en: "FIFIFA Multimedia" },
    desc: {
      id: "Website untuk mendukung kehadiran daring usaha kecil dan menengah, dikembangkan sesuai kebutuhan bisnis.",
      en: "Website supporting online presence for small and medium enterprises, tailored to specific business needs."
    },
    cover: "assets/project-4.svg",
    alt: {
      id: "Mockup desain website bisnis kreatif pada layar desktop",
      en: "Creative business website design mockup on desktop screen"
    },
    year: "Jan–Jun 2025",
    link: "https://www.fififa-multimedia.com/"
  },
  {
    tag: { id: "Website layanan", en: "Service website" },
    title: { id: "Bengkel Valentino Motor", en: "Valentino Motor Workshop" },
    desc: {
      id: "Website bengkel yang menyajikan informasi servis, produk, lokasi, dan kontak Valentino Motor.",
      en: "Workshop website presenting service information, products, location, and Valentino Motor contact."
    },
    cover: "assets/project-5.svg",
    alt: {
      id: "Mockup desain website bengkel dengan ilustrasi sepeda motor",
      en: "Workshop website design mockup with motorcycle illustration"
    },
    year: "Bogor, Indonesia",
    link: "https://valentinomotorbogor.asia/"
  },
  {
    tag: { id: "Website solusi keamanan", en: "Security solutions website" },
    title: { id: "Marino Inti Solusi", en: "Marino Inti Solusi" },
    desc: {
      id: "Website solusi keamanan hardware dengan informasi produk CCTV, access control, dan layanan instalasi.",
      en: "Hardware security solutions website with CCTV products, access control, and installation services."
    },
    cover: "assets/project-6.svg",
    alt: {
      id: "Mockup katalog perangkat CCTV dan kontrol akses",
      en: "CCTV devices and access control catalog mockup"
    },
    year: "CCTV · Access control",
    link: "https://marinointisolusi.com/"
  },
];

// ---------- Indikator loading (dipakai bila jaringan bermasalah) ----------
const dataLoading = document.getElementById("dataLoading");
const dataLoadingText = document.getElementById("dataLoadingText");
const loadingReasons = new Set();
const loadingMessages = new Map();

function showDataLoading(reason, message) {
  loadingReasons.add(reason);
  if (message) loadingMessages.set(reason, message);
  dataLoadingText.textContent = loadingMessages.get(reason) || t("status.loading");
  dataLoading.hidden = false;
}

function hideDataLoading(reason) {
  loadingReasons.delete(reason);
  loadingMessages.delete(reason);
  if (loadingReasons.size === 0) {
    dataLoadingText.textContent = t("status.loading");
    dataLoading.hidden = true;
    return;
  }
  const lastReason = [...loadingReasons][loadingReasons.size - 1];
  dataLoadingText.textContent = loadingMessages.get(lastReason) || t("status.loading");
}

window.cvaLoading = { show: showDataLoading, hide: hideDataLoading };

function onNetworkChange() {
  if (!navigator.onLine) {
    showDataLoading("network", t("status.offline"));
  } else {
    hideDataLoading("network");
  }
}
window.addEventListener("offline", onNetworkChange);
window.addEventListener("online", onNetworkChange);
if ("connection" in navigator && navigator.connection && navigator.connection.addEventListener) {
  navigator.connection.addEventListener("change", onNetworkChange);
}

const grid = document.getElementById("projectsGrid");
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);

// Palet warna lampu & kabin pasar malam (Carnival colors)
const CARNIVAL_COLORS = [
  "#00f5d4", // 01: Cyan neon
  "#38bdf8", // 02: Sky blue
  "#4ade80", // 03: Emerald neon
  "#fbbf24", // 04: Golden amber
  "#f43f5e", // 05: Hot pink / magenta
  "#ef4444", // 06: Crimson flame
  "#c084fc"  // 07: Electric violet
];

const BULB_PALETTE = ["#fbbf24", "#f43f5e", "#00f5d4", "#c084fc", "#38bdf8", "#4ade80", "#fb923c"];

// 35 Lampu lingkaran luar pasar malam (Outer rim cabochon bulbs)
const outerLights = Array.from({ length: 35 }, (_, i) => {
  const angle = (i / 35) * Math.PI * 2;
  const color = BULB_PALETTE[i % BULB_PALETTE.length];
  return `<i class="project-wheel-light is-outer" aria-hidden="true" style="--light-color:${color};--light-delay:${(i % 7) * 0.14}s;left:${50 + Math.cos(angle) * 44}%;top:${50 + Math.sin(angle) * 44}%"></i>`;
}).join("");

// 21 Lampu lingkaran dalam (Inner rim neon bulbs)
const innerLights = Array.from({ length: 21 }, (_, i) => {
  const angle = (i / 21) * Math.PI * 2;
  const color = BULB_PALETTE[(i + 3) % BULB_PALETTE.length];
  return `<i class="project-wheel-light is-inner" aria-hidden="true" style="--light-color:${color};--light-delay:${(i % 5) * 0.18}s;left:${50 + Math.cos(angle) * 29}%;top:${50 + Math.sin(angle) * 29}%"></i>`;
}).join("");

// 14 Jeruji dengan lampu radial pasar malam
const spokes = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * 360;
  const color = BULB_PALETTE[i % BULB_PALETTE.length];
  return `<span class="project-wheel-spoke" style="transform:rotate(${angle}deg);--spoke-color:${color}"><b class="spoke-bulb b1"></b><b class="spoke-bulb b2"></b></span>`;
}).join("");

// 12 Lampu cincin di sekeliling poros tengah (Hub lights ring)
const hubLights = Array.from({ length: 12 }, (_, i) => {
  const color = BULB_PALETTE[i % BULB_PALETTE.length];
  return `<i style="--hub-c:${color};transform:rotate(${i * 30}deg) translateY(-32px)"></i>`;
}).join("");

// Gondola warna-warni pasar malam dengan atap kanopi & badge menyala
const gondolasHTML = PROJECTS.map((p, i) => {
  const color = CARNIVAL_COLORS[i % CARNIVAL_COLORS.length];
  return `
    <div class="project-gondola" data-gondola="${i}" style="--gondola-color:${color}">
      <button class="project-thumb" type="button" data-project-index="${i}" aria-label="${escapeHTML(t("wheel.view_item"))} ${escapeHTML(tText(p.title))}, ${i + 1} ${escapeHTML(t("wheel.of"))} ${PROJECTS.length}" aria-pressed="false">
        <span class="gondola-roof" aria-hidden="true"><i class="gondola-bulb"></i></span>
        <div class="gondola-frame">
          <img src="${escapeHTML(p.cover)}" alt="" draggable="false">
        </div>
        <span class="gondola-badge">✦ ${String(i + 1).padStart(2, "0")} ✦</span>
      </button>
    </div>`;
}).join("");

// Desain grafis stan pasar malam & orang-orang jualan di bawah kincir ria
const marketHTML = `
  <svg viewBox="0 0 520 142" class="carnival-market-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="popcornGlow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95" />
        <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.75" />
      </linearGradient>
      <linearGradient id="awningPinkGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fb7185" />
        <stop offset="100%" stop-color="#e11d48" />
      </linearGradient>
      <linearGradient id="awningRedGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f87171" />
        <stop offset="100%" stop-color="#dc2626" />
      </linearGradient>
      <linearGradient id="awningBlueGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#38bdf8" />
        <stop offset="100%" stop-color="#0284c7" />
      </linearGradient>
    </defs>

    <!-- 1. Garis Dasar Jalur Paving Pasar Malam (Groundline) -->
    <path d="M 10 132 Q 260 134 510 132" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.35" />
    <path d="M 15 135 Q 260 137 505 135" stroke="#cbd5e1" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.4" />
    <circle cx="50" cy="133.5" r="1.5" fill="#94a3b8" opacity="0.4" />
    <circle cx="120" cy="133" r="1.2" fill="#94a3b8" opacity="0.4" />
    <circle cx="210" cy="134" r="1.5" fill="#94a3b8" opacity="0.4" />
    <circle cx="280" cy="134" r="1.2" fill="#94a3b8" opacity="0.4" />
    <circle cx="360" cy="133" r="1.5" fill="#94a3b8" opacity="0.4" />
    <circle cx="440" cy="133.5" r="1.2" fill="#94a3b8" opacity="0.4" />
    <path d="M 18 132 L 20 128 L 22 132 M 160 133 L 162 129 L 164 133 M 340 133 L 342 129 L 344 133 M 500 132 L 502 128 L 504 132" stroke="#10b981" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.6" />

    <!-- 2. Tali Lentera Lampu & Umbul-umbul Menggantung Antar Stan -->
    <path d="M 98 52 Q 155 70 208 44" fill="none" stroke="rgba(217, 119, 6, 0.45)" stroke-width="1" stroke-dasharray="2 3" />
    <path d="M 292 44 Q 338 68 382 50" fill="none" stroke="rgba(217, 119, 6, 0.45)" stroke-width="1" stroke-dasharray="2 3" />
    <polygon points="120,62 128,64 124,72" fill="#f59e0b" />
    <polygon points="140,66 148,67 144,75" fill="#0f766e" />
    <polygon points="160,67 168,66 164,74" fill="#f43f5e" />
    <polygon points="180,63 188,60 184,69" fill="#0284c7" />
    <polygon points="312,52 320,56 316,64" fill="#0f766e" />
    <polygon points="332,60 340,62 336,70" fill="#f59e0b" />
    <polygon points="352,62 360,60 356,69" fill="#ec4899" />
    <circle cx="110" cy="58" r="2.5" fill="#fbbf24" class="market-bulb b1" />
    <circle cx="134" cy="65" r="2.5" fill="#f43f5e" class="market-bulb b2" />
    <circle cx="154" cy="67" r="2.5" fill="#38bdf8" class="market-bulb b3" />
    <circle cx="174" cy="64" r="2.5" fill="#10b981" class="market-bulb b4" />
    <circle cx="194" cy="56" r="2.5" fill="#fbbf24" class="market-bulb b1" />
    <circle cx="304" cy="48" r="2.5" fill="#f43f5e" class="market-bulb b2" />
    <circle cx="326" cy="58" r="2.5" fill="#fbbf24" class="market-bulb b3" />
    <circle cx="346" cy="62" r="2.5" fill="#a855f7" class="market-bulb b4" />
    <circle cx="366" cy="57" r="2.5" fill="#14b8a6" class="market-bulb b1" />

    <!-- STAN 1: GULALI / ARUM MANIS -->
    <circle cx="46" cy="122" r="11" fill="none" stroke="#be123c" stroke-width="2.5" />
    <circle cx="46" cy="122" r="3" fill="#be123c" />
    <line x1="46" y1="111" x2="46" y2="133" stroke="#be123c" stroke-width="1.2" />
    <line x1="35" y1="122" x2="57" y2="122" stroke="#be123c" stroke-width="1.2" />
    <line x1="38" y1="114" x2="54" y2="130" stroke="#be123c" stroke-width="1.2" />
    <line x1="38" y1="130" x2="54" y2="114" stroke="#be123c" stroke-width="1.2" />
    <rect x="88" y="116" width="4" height="15" rx="1.5" fill="#be123c" />
    <rect x="32" y="84" width="66" height="34" rx="4" fill="url(#awningPinkGrad)" stroke="#be123c" stroke-width="1.5" />
    <rect x="38" y="90" width="54" height="22" rx="2.5" fill="#fff1f2" />
    <text x="65" y="104" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="900" fill="#be123c" text-anchor="middle" letter-spacing="1">GULALI</text>
    <line x1="35" y1="84" x2="35" y2="48" stroke="#be123c" stroke-width="2" />
    <line x1="95" y1="84" x2="95" y2="48" stroke="#be123c" stroke-width="2" />
    <path d="M 28 48 Q 65 38 102 48 L 102 56 Q 65 50 28 56 Z" fill="url(#awningPinkGrad)" />
    <path d="M 28 56 Q 37 62 46 56 Q 55 62 65 56 Q 74 62 83 56 Q 92 62 102 56" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" />
    <ellipse cx="78" cy="82" rx="13" ry="4.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1" />
    <ellipse cx="78" cy="81.5" rx="9" ry="2.5" fill="#fbcfe8" />
    <line x1="78" y1="81" x2="78" y2="62" stroke="#d97706" stroke-width="1.5" />
    <circle cx="78" cy="64" r="8" fill="#fbcfe8" stroke="#f472b6" stroke-width="1" />
    <circle cx="83" cy="67" r="5.5" fill="#f472b6" opacity="0.75" />
    <circle cx="73" cy="66" r="5" fill="#bae6fd" opacity="0.8" />
    <path d="M 45 68 C 45 60, 57 60, 57 68 L 59 86 L 43 86 Z" fill="#e11d48" />
    <rect x="47" y="70" width="8" height="15" rx="1" fill="#fff" />
    <circle cx="51" cy="55" r="6" fill="#fed7aa" />
    <circle cx="53" cy="54" r="0.7" fill="#1e293b" />
    <path d="M 52 57 Q 54 59 56 57" fill="none" stroke="#1e293b" stroke-width="0.7" stroke-linecap="round" />
    <ellipse cx="51" cy="49" rx="5" ry="2" fill="#fff" />
    <circle cx="51" cy="46" r="4.5" fill="#fff" />
    <line x1="56" y1="72" x2="68" y2="70" stroke="#fed7aa" stroke-width="2" stroke-linecap="round" />
    <circle cx="68" cy="69" r="4.5" fill="#bae6fd" />
    <path d="M 110 92 C 110 86, 120 86, 120 92 L 122 116 L 108 116 Z" fill="#0284c7" />
    <line x1="112" y1="116" x2="112" y2="131" stroke="#1e293b" stroke-width="2.5" />
    <line x1="118" y1="116" x2="118" y2="131" stroke="#1e293b" stroke-width="2.5" />
    <circle cx="115" cy="80" r="5.5" fill="#fed7aa" />
    <path d="M 109 79 C 109 72, 121 72, 121 79 Z" fill="#78350f" />
    <line x1="112" y1="92" x2="103" y2="82" stroke="#fed7aa" stroke-width="2" stroke-linecap="round" />

    <!-- STAN 2: POPCORN & JAGUNG BAKAR -->
    <circle cx="226" cy="121" r="12" fill="none" stroke="#78350f" stroke-width="2.5" />
    <circle cx="226" cy="121" r="3" fill="#f59e0b" />
    <line x1="226" y1="109" x2="226" y2="133" stroke="#78350f" stroke-width="1.2" />
    <line x1="214" y1="121" x2="238" y2="121" stroke="#78350f" stroke-width="1.2" />
    <line x1="217" y1="112" x2="235" y2="130" stroke="#78350f" stroke-width="1.2" />
    <line x1="217" y1="130" x2="235" y2="112" stroke="#78350f" stroke-width="1.2" />
    <rect x="282" y="115" width="4" height="17" rx="1.5" fill="#78350f" />
    <rect x="212" y="78" width="78" height="40" rx="4" fill="url(#awningRedGrad)" stroke="#78350f" stroke-width="1.5" />
    <rect x="220" y="84" width="62" height="26" rx="2.5" fill="#78350f" />
    <text x="251" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="900" fill="#fef08a" text-anchor="middle" letter-spacing="1">POPCORN</text>
    <line x1="214" y1="78" x2="214" y2="40" stroke="#78350f" stroke-width="2" />
    <line x1="288" y1="78" x2="288" y2="40" stroke="#78350f" stroke-width="2" />
    <path d="M 206 40 Q 251 30 296 40 L 296 48 Q 251 42 206 48 Z" fill="url(#awningRedGrad)" />
    <path d="M 206 48 Q 215 54 224 48 Q 233 54 242 48 Q 251 54 260 48 Q 269 54 278 48 Q 287 54 296 48" fill="none" stroke="#fef08a" stroke-width="2.8" stroke-linecap="round" />
    <rect x="216" y="50" width="34" height="28" rx="2" fill="url(#popcornGlow)" stroke="#f59e0b" stroke-width="1.2" />
    <circle cx="223" cy="72" r="2.2" fill="#fff" />
    <circle cx="229" cy="71" r="2.5" fill="#fef08a" />
    <circle cx="235" cy="72" r="2" fill="#fff" />
    <circle cx="241" cy="71" r="2.2" fill="#fef08a" />
    <circle cx="226" cy="67" r="2" fill="#fff" />
    <circle cx="232" cy="65" r="2.4" fill="#fef08a" />
    <circle cx="238" cy="66" r="1.8" fill="#fff" />
    <circle cx="233" cy="56" r="2" fill="#fff" class="popcorn-flake" />
    <rect x="256" y="70" width="28" height="8" rx="1.5" fill="#334155" />
    <rect x="258" y="72" width="24" height="2" fill="#ef4444" />
    <ellipse cx="264" cy="68" rx="6" ry="2.2" fill="#facc15" stroke="#ca8a04" stroke-width="0.8" />
    <ellipse cx="276" cy="68" rx="6" ry="2.2" fill="#facc15" stroke="#ca8a04" stroke-width="0.8" />
    <path class="steam-puff" d="M 264 64 Q 262 57 265 51 Q 267 45 264 39" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" />
    <path class="steam-puff p2" d="M 276 64 Q 278 58 275 52 Q 273 46 276 40" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round" />
    <path d="M 293 66 C 293 58, 306 58, 306 66 L 308 98 L 291 98 Z" fill="#b45309" />
    <rect x="295" y="68" width="9" height="23" fill="#fef3c7" rx="1" />
    <line x1="295" y1="98" x2="295" y2="131" stroke="#1e293b" stroke-width="2.5" />
    <line x1="304" y1="98" x2="304" y2="131" stroke="#1e293b" stroke-width="2.5" />
    <circle cx="300" cy="52" r="6.5" fill="#fed7aa" />
    <ellipse cx="300" cy="47" rx="9" ry="2.5" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="295" y="40" width="10" height="7" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="295" y="44" width="10" height="2" fill="#dc2626" />
    <line x1="293" y1="70" x2="282" y2="72" stroke="#fed7aa" stroke-width="2" stroke-linecap="round" />
    <path d="M 278 70 L 284 70 L 282 78 L 279 78 Z" fill="#ef4444" />
    <circle cx="281" cy="68" r="2.2" fill="#fef08a" />
    <path d="M 176 74 C 176 66, 187 66, 187 74 L 189 104 L 174 104 Z" fill="#0f766e" />
    <circle cx="181" cy="60" r="6" fill="#fde68a" />
    <path d="M 175 58 C 175 51, 187 51, 187 58 Z" fill="#334155" />
    <line x1="178" y1="104" x2="178" y2="131" stroke="#1e293b" stroke-width="2.5" />
    <line x1="185" y1="104" x2="185" y2="131" stroke="#1e293b" stroke-width="2.5" />
    <line x1="184" y1="76" x2="195" y2="76" stroke="#fde68a" stroke-width="2" stroke-linecap="round" />

    <!-- STAN 3: ES KRIM & BALON TERBANG -->
    <circle cx="394" cy="121" r="11" fill="none" stroke="#0369a1" stroke-width="2.5" />
    <circle cx="394" cy="121" r="3" fill="#38bdf8" />
    <line x1="394" y1="110" x2="394" y2="132" stroke="#0369a1" stroke-width="1.2" />
    <line x1="383" y1="121" x2="405" y2="121" stroke="#0369a1" stroke-width="1.2" />
    <line x1="386" y1="113" x2="402" y2="129" stroke="#0369a1" stroke-width="1.2" />
    <line x1="386" y1="129" x2="402" y2="113" stroke="#0369a1" stroke-width="1.2" />
    <rect x="444" y="115" width="4" height="16" rx="1.5" fill="#0369a1" />
    <rect x="382" y="84" width="72" height="34" rx="4" fill="url(#awningBlueGrad)" stroke="#0369a1" stroke-width="1.5" />
    <rect x="390" y="90" width="56" height="22" rx="2.5" fill="#f0f9ff" />
    <text x="418" y="104" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="900" fill="#0369a1" text-anchor="middle" letter-spacing="1">ES KRIM</text>
    <path d="M 426 84 L 430 76 L 434 84 Z" fill="#d97706" />
    <circle cx="430" cy="75" r="3" fill="#ec4899" />
    <path d="M 436 84 L 440 76 L 444 84 Z" fill="#d97706" />
    <circle cx="440" cy="75" r="3" fill="#38bdf8" />
    <line x1="418" y1="84" x2="418" y2="40" stroke="#0369a1" stroke-width="2" />
    <path d="M 380 48 Q 418 34 456 48 L 452 56 Q 418 48 384 56 Z" fill="url(#awningBlueGrad)" />
    <path d="M 384 56 Q 396 62 407 56 Q 418 62 429 56 Q 441 62 452 56" fill="none" stroke="#fef08a" stroke-width="2.5" stroke-linecap="round" />
    <path d="M 462 72 C 462 64, 474 64, 474 72 L 476 102 L 460 102 Z" fill="#0284c7" />
    <line x1="464" y1="102" x2="464" y2="131" stroke="#1e293b" stroke-width="2.5" />
    <line x1="472" y1="102" x2="472" y2="131" stroke="#1e293b" stroke-width="2.5" />
    <circle cx="468" cy="56" r="6.5" fill="#fed7aa" />
    <path d="M 461 53 Q 468 50 475 53 L 479 54 L 460 54 Z" fill="#38bdf8" />
    <line x1="468" y1="72" x2="473" y2="76" stroke="#fed7aa" stroke-width="2" stroke-linecap="round" />
    <path d="M 473 76 Q 468 54 463 36" fill="none" stroke="#64748b" stroke-width="0.8" />
    <path d="M 473 76 Q 477 50 481 28" fill="none" stroke="#64748b" stroke-width="0.8" />
    <path d="M 473 76 Q 471 56 492 40" fill="none" stroke="#64748b" stroke-width="0.8" />
    <path d="M 473 76 Q 466 58 452 44" fill="none" stroke="#64748b" stroke-width="0.8" />
    <g class="balloon b1">
      <ellipse cx="463" cy="34" rx="6.5" ry="8" fill="#f43f5e" />
      <polygon points="462,42 464,42 463,44" fill="#f43f5e" />
      <ellipse cx="461" cy="32" rx="1.5" ry="3" fill="#fff" opacity="0.4" />
    </g>
    <g class="balloon b2">
      <ellipse cx="481" cy="26" rx="7" ry="8.5" fill="#f59e0b" />
      <polygon points="480,34.5 482,34.5 481,36.5" fill="#f59e0b" />
      <ellipse cx="479" cy="24" rx="1.5" ry="3.5" fill="#fff" opacity="0.4" />
    </g>
    <g class="balloon b3">
      <ellipse cx="492" cy="38" rx="6" ry="7.5" fill="#14b8a6" />
      <polygon points="491,45.5 493,45.5 492,47.5" fill="#14b8a6" />
      <ellipse cx="490" cy="36" rx="1.2" ry="2.8" fill="#fff" opacity="0.4" />
    </g>
    <g class="balloon b4">
      <ellipse cx="452" cy="42" rx="6" ry="7.5" fill="#a855f7" />
      <polygon points="451,49.5 453,49.5 452,51.5" fill="#a855f7" />
      <ellipse cx="450" cy="40" rx="1.2" ry="2.8" fill="#fff" opacity="0.4" />
    </g>
    <path d="M 362 94 C 362 88, 372 88, 372 94 L 374 116 L 360 116 Z" fill="#ec4899" />
    <circle cx="367" cy="82" r="5.5" fill="#fed7aa" />
    <path d="M 362 81 C 362 75, 372 75, 372 81 Z" fill="#92400e" />
    <line x1="364" y1="116" x2="364" y2="131" stroke="#1e293b" stroke-width="2" />
    <line x1="370" y1="116" x2="370" y2="131" stroke="#1e293b" stroke-width="2" />
    <line x1="370" y1="94" x2="377" y2="90" stroke="#fed7aa" stroke-width="1.8" stroke-linecap="round" />
    <polygon points="378,89 381,95 376,94" fill="#d97706" />
    <circle cx="377.5" cy="87.5" r="2.5" fill="#38bdf8" />
  </svg>
`;

grid.innerHTML = `
  <div class="project-wheel-column" data-reveal style="--i: 1;">
    <div class="project-wheel-meta"><span data-project-wheel-meta>${escapeHTML(t("wheel.meta"))}</span><span data-wheel-count>01 / ${String(PROJECTS.length).padStart(2, "0")}</span></div>
    <div class="project-wheel" data-project-wheel role="group" tabindex="0" aria-label="${escapeHTML(t("wheel.aria"))}">
      <div class="project-wheel-rotor" data-wheel-rotor aria-hidden="true">
        <span class="project-wheel-inner"></span>
        <span class="project-wheel-spokes">${spokes}</span>
        ${outerLights}
        ${innerLights}
      </div>
      <div class="project-wheel-items">${gondolasHTML}</div>
      <div class="project-wheel-hub" aria-hidden="true">
        <div class="hub-lights-ring">${hubLights}</div>
        <strong>${String(PROJECTS.length).padStart(2, "0")}</strong>
        <span>PROJECTS</span>
      </div>
      <div class="project-wheel-stand" aria-hidden="true"></div>
    </div>
    <div class="wheel-carnival-market" aria-hidden="true">${marketHTML}</div>
    <p class="project-wheel-hint" data-project-wheel-hint>${escapeHTML(t("wheel.hint"))}</p>
  </div>
  <article class="project-detail" data-reveal style="--i: 2;" aria-live="polite" aria-atomic="true">
    <div class="project-detail-cover"><img data-project-image src="${escapeHTML(PROJECTS[0].cover)}" alt="${escapeHTML(tText(PROJECTS[0].alt))}"></div>
    <div class="project-detail-copy">
      <p class="project-tag" data-project-tag></p>
      <p class="project-number" data-project-number></p>
      <h3 data-project-title></h3>
      <p class="project-description" data-project-description></p>
      <p class="project-year" data-project-year></p>
      <div class="project-detail-actions">
        <button type="button" class="project-nav-button" data-project-previous aria-label="${escapeHTML(t("wheel.prev"))}">←</button>
        <button type="button" class="project-nav-button is-next" data-project-next aria-label="${escapeHTML(t("wheel.next"))}">→</button>
        <a class="project-open-link" data-project-link target="_blank" rel="noopener noreferrer">${escapeHTML(t("wheel.view_project"))} <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </article>
  <span class="project-sr-status" data-project-status role="status" aria-live="polite" aria-atomic="true"></span>
`;

const wheel = grid.querySelector("[data-project-wheel]");
const rotor = grid.querySelector("[data-wheel-rotor]");
const gondolas = [...grid.querySelectorAll("[data-gondola]")];
const slot = 360 / PROJECTS.length;

let activeProject = 0;
let currentAngle = 0;
let targetAngle = 0;
let isSpinningToTarget = false;
let spinStartTime = 0;
let spinStartAngle = 0;
const SPIN_DURATION = 950;
const AUTO_SPIN_SPEED = 9.0;
const IDLE_DELAY = 2800;

let isHovered = false;
let isDragging = false;
let dragStart = null;
let suppressThumbClickUntil = 0;
let lastInteractionTime = Date.now();
let lastFrameTime = performance.now();
let currentVelocity = 0;

function easeOutQuart(x) {
  return 1 - Math.pow(1 - x, 4);
}

function renderWheelPositions() {
  rotor.style.transform = `rotate(${currentAngle}deg)`;
  gondolas.forEach((gondola, i) => {
    const angle_i = currentAngle + i * slot;
    const button = gondola.querySelector("button");
    gondola.style.transform = `translate(-50%, -50%) rotate(${angle_i}deg) translateY(calc(0px - var(--wheel-orbit)))`;
    button.style.transform = `rotate(${-angle_i}deg)`;
  });
}

function updateProjectDetails(index, announce = false) {
  activeProject = (index + PROJECTS.length) % PROJECTS.length;
  const project = PROJECTS[activeProject];
  const projectTitle = tText(project.title);

  gondolas.forEach((gondola, i) => {
    const isActive = i === activeProject;
    gondola.classList.toggle("is-active", isActive);
    const button = gondola.querySelector("button");
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-label", `${t("wheel.view_item")} ${tText(PROJECTS[i].title)}, ${i + 1} ${t("wheel.of")} ${PROJECTS.length}`);
  });

  const wheelMeta = grid.querySelector("[data-project-wheel-meta]");
  if (wheelMeta) wheelMeta.textContent = t("wheel.meta");
  if (wheel) wheel.setAttribute("aria-label", t("wheel.aria"));
  const wheelHint = grid.querySelector("[data-project-wheel-hint]");
  if (wheelHint) wheelHint.textContent = t("wheel.hint");

  grid.querySelector("[data-wheel-count]").textContent = `${String(activeProject + 1).padStart(2, "0")} / ${String(PROJECTS.length).padStart(2, "0")}`;
  const detailImage = grid.querySelector("[data-project-image]");
  if (detailImage.getAttribute("src") !== project.cover) {
    detailImage.src = project.cover;
    detailImage.alt = tText(project.alt);
  }
  grid.querySelector("[data-project-tag]").textContent = tText(project.tag);
  grid.querySelector("[data-project-number]").textContent = `PROJECT ${String(activeProject + 1).padStart(2, "0")}`;
  grid.querySelector("[data-project-title]").textContent = projectTitle;
  grid.querySelector("[data-project-description]").textContent = tText(project.desc);
  grid.querySelector("[data-project-year]").textContent = tText(project.year);

  const prevBtn = grid.querySelector("[data-project-previous]");
  if (prevBtn) prevBtn.setAttribute("aria-label", t("wheel.prev"));
  const nextBtn = grid.querySelector("[data-project-next]");
  if (nextBtn) nextBtn.setAttribute("aria-label", t("wheel.next"));

  const link = grid.querySelector("[data-project-link]");
  link.href = project.link;
  link.innerHTML = `${escapeHTML(t("wheel.view_project"))} <span aria-hidden="true">↗</span>`;

  if (announce) {
    grid.querySelector("[data-project-status]").textContent = `${projectTitle}, ${activeProject + 1} ${t("wheel.of")} ${PROJECTS.length}`;
  }
}

function showProject(index, announce = false, direction = 0) {
  const targetIdx = (index + PROJECTS.length) % PROJECTS.length;
  lastInteractionTime = Date.now();

  const baseTarget = -targetIdx * slot;
  let diff = ((baseTarget - currentAngle) % 360 + 540) % 360 - 180;

  if (direction > 0 && diff > -5) {
    diff -= 360;
  } else if (direction < 0 && diff < 5) {
    diff += 360;
  }

  spinStartAngle = currentAngle;
  targetAngle = currentAngle + diff;
  spinStartTime = performance.now();
  isSpinningToTarget = true;

  updateProjectDetails(targetIdx, announce);
}

function animateWheel(now) {
  const dt = Math.min((now - lastFrameTime) / 1000, 0.1);
  lastFrameTime = now;
  const prevAngle = currentAngle;

  if (isSpinningToTarget) {
    const elapsed = now - spinStartTime;
    const progress = Math.min(elapsed / SPIN_DURATION, 1);
    const ease = easeOutQuart(progress);
    currentAngle = spinStartAngle + (targetAngle - spinStartAngle) * ease;
    currentVelocity = (currentAngle - prevAngle) / (dt || 0.016);

    if (progress >= 1) {
      currentAngle = targetAngle;
      isSpinningToTarget = false;
      currentVelocity = 0;
      lastInteractionTime = Date.now();
    }
  } else if (!isDragging && !isHovered && !reduced && (Date.now() - lastInteractionTime > IDLE_DELAY)) {
    currentAngle -= AUTO_SPIN_SPEED * dt;
    currentVelocity = -AUTO_SPIN_SPEED;

    let closestIdx = 0;
    let minDiff = Infinity;
    for (let i = 0; i < PROJECTS.length; i++) {
      const gAngle = ((currentAngle + i * slot) % 360 + 540) % 360 - 180;
      if (Math.abs(gAngle) < minDiff) {
        minDiff = Math.abs(gAngle);
        closestIdx = i;
      }
    }
    if (closestIdx !== activeProject && minDiff < 12) {
      updateProjectDetails(closestIdx, false);
    }
  } else {
    currentVelocity = 0;
  }

  renderWheelPositions();

  requestAnimationFrame(animateWheel);
}
requestAnimationFrame(animateWheel);

gondolas.forEach((gondola, i) => gondola.querySelector("button").addEventListener("click", () => {
  if (Date.now() < suppressThumbClickUntil) return;
  showProject(i, true);
}));

grid.querySelector("[data-project-previous]").addEventListener("click", () => showProject(activeProject - 1, true, -1));
grid.querySelector("[data-project-next]").addEventListener("click", () => showProject(activeProject + 1, true, 1));

wheel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") { event.preventDefault(); showProject(activeProject - 1, true, -1); }
  if (event.key === "ArrowRight" || event.key === "ArrowDown") { event.preventDefault(); showProject(activeProject + 1, true, 1); }
});

wheel.addEventListener("mouseenter", () => { isHovered = true; });
wheel.addEventListener("mouseleave", () => { isHovered = false; lastInteractionTime = Date.now(); });

const detailContainer = grid.querySelector(".project-detail");
if (detailContainer) {
  detailContainer.addEventListener("mouseenter", () => { isHovered = true; });
  detailContainer.addEventListener("mouseleave", () => { isHovered = false; lastInteractionTime = Date.now(); });
}

wheel.addEventListener("pointerdown", (event) => {
  if (event.isPrimary) {
    dragStart = { id: event.pointerId, x: event.clientX, y: event.clientY, angle: currentAngle };
    isDragging = true;
    isSpinningToTarget = false;
    lastInteractionTime = Date.now();
  }
});

wheel.addEventListener("pointermove", (event) => {
  if (!isDragging || !dragStart || event.pointerId !== dragStart.id) return;
  const deltaX = event.clientX - dragStart.x;
  currentAngle = dragStart.angle + deltaX * 0.28;
  renderWheelPositions();
});

wheel.addEventListener("pointerup", (event) => {
  if (!dragStart || event.pointerId !== dragStart.id) return;
  const deltaX = event.clientX - dragStart.x;
  dragStart = null;
  isDragging = false;
  lastInteractionTime = Date.now();

  if (Math.abs(deltaX) > 28) {
    suppressThumbClickUntil = Date.now() + 350;
    showProject(activeProject + (deltaX < 0 ? 1 : -1), true, deltaX < 0 ? 1 : -1);
  } else {
    // Snap ke proyek terdekat setelah drag kecil
    let closestIdx = 0;
    let minDiff = Infinity;
    for (let i = 0; i < PROJECTS.length; i++) {
      const gAngle = ((currentAngle + i * slot) % 360 + 540) % 360 - 180;
      if (Math.abs(gAngle) < minDiff) {
        minDiff = Math.abs(gAngle);
        closestIdx = i;
      }
    }
    showProject(closestIdx, false);
  }
});

wheel.addEventListener("pointercancel", () => {
  dragStart = null;
  isDragging = false;
  lastInteractionTime = Date.now();
});

updateProjectDetails(0);
renderWheelPositions();

// ---------- Galeri Certificate: bingkai cetak pada rel (Dwibahasa) ----------
const CERTIFICATES = [
  {
    title: { id: "Data Science", en: "Data Science" },
    kind: { id: "Pelatihan", en: "Training" },
    mark: "01",
    style: "data",
    artDesc: { id: "Python, SQL, dan analisis data.", en: "Python, SQL, and data analysis." },
    desc: {
      id: "Sertifikat Data Science yang melengkapi kemampuan Python, SQL, pemikiran analitis, dan problem-solving yang tercantum di CV.",
      en: "Data Science certificate complementing Python, SQL, analytical thinking, and problem-solving skills listed in the CV."
    },
    link: "https://drive.google.com/file/d/1jBKUJuQA-r_wH_aZEwE9GN48osBCW4ik/view"
  },
  {
    title: { id: "Green Jobs Training", en: "Green Jobs Training" },
    kind: { id: "Pelatihan", en: "Training" },
    mark: "02",
    style: "green",
    artDesc: { id: "Wawasan Green Jobs dan peluang kerja berkelanjutan.", en: "Green Jobs insights & sustainable careers." },
    desc: {
      id: "Sertifikat Green Jobs Training yang menambah wawasan profesional dan melengkapi ketertarikan pada eksplorasi solusi inovatif.",
      en: "Green Jobs Training certificate expanding professional knowledge and complementing interest in innovative sustainable solutions."
    },
    link: "https://drive.google.com/file/d/1VQAlwPO8iX31lwyOJJRvWWBfe1BfIS5B/view"
  },
  {
    title: { id: "Semifinal Business Plan", en: "Business Plan Semifinalist" },
    kind: { id: "Kompetisi internasional · 25–26 Okt 2025", en: "International competition · 25–26 Oct 2025" },
    mark: "03",
    style: "business",
    artDesc: { id: "Memimpin tim menyusun rencana bisnis hingga semifinal.", en: "Led business plan team to the semifinals." },
    desc: {
      id: "Memimpin tim dalam International Business Plan di Universitas Brawijaya, mengoordinasikan kolaborasi dan penyusunan rencana bisnis hingga mencapai babak semifinal.",
      en: "Led team in the International Business Plan competition at Brawijaya University, coordinating collaboration and business planning to reach the semifinals."
    },
    link: "https://drive.google.com/file/d/1LlFqA8i1HR11LpqRPZTJCF3ujoSkNlt6/view"
  },
  {
    title: { id: "Digital Forensic · Juara 3", en: "Digital Forensics · 3rd Place" },
    kind: { id: "Cyber Rise The Ranger 2 · 2026", en: "Cyber Rise The Ranger 2 · 2026" },
    mark: "04",
    style: "forensic",
    artDesc: { id: "Juara 3 kompetisi forensik digital berbasis tim.", en: "3rd Place in team digital forensics." },
    desc: {
      id: "Meraih juara ketiga dalam kompetisi forensik digital berbasis tim yang diselenggarakan Mabes TNI, dengan berkolaborasi menyelesaikan tantangan keamanan siber.",
      en: "Achieved 3rd place in a team-based digital forensics competition organized by TNI Headquarters, collaborating to solve cybersecurity challenges."
    },
    link: "https://drive.google.com/file/d/1jip2r-KvFKLdzlx6eFpAGoMtJ0otnI-3/view"
  },
  {
    title: { id: "Lomba UI/UX", en: "UI/UX Competition" },
    kind: { id: "UI/UX in Action 2025", en: "UI/UX in Action 2025" },
    mark: "05",
    style: "ux",
    artDesc: { id: "Ketua tim · konsep desain multimedia dan industri.", en: "Team lead · multimedia & industrial UX concepts." },
    desc: {
      id: "Ketua tim UI/UX in Action 2025. Mengoordinasikan kolaborasi tim dan berkontribusi pada konsep desain serta pemecahan masalah untuk tema multimedia dan industri.",
      en: "Team lead for UI/UX in Action 2025. Coordinated team collaboration and contributed to design concepts and problem solving for multimedia and industrial themes."
    },
    link: "https://drive.google.com/file/d/1qOc3ABcqXth8GMsV3FAd8vP9-PPfay_i/view"
  },
  {
    title: { id: "UI/UX Innovation", en: "UI/UX Innovation" },
    kind: { id: "Desain produk & interaksi", en: "Product & interaction design" },
    mark: "06",
    style: "innovation",
    artDesc: { id: "Ide inovatif lewat desain dan problem-solving kolaboratif.", en: "Innovative ideas through collaborative UX design." },
    desc: {
      id: "Sertifikat bidang UI/UX yang selaras dengan kemampuan Figma, pemikiran kreatif, analisis, dan kolaborasi tim dalam mengembangkan konsep desain.",
      en: "UI/UX certificate aligning with Figma proficiency, creative thinking, analysis, and team collaboration in developing design concepts."
    },
    link: "https://drive.google.com/file/d/12hZ6Q-zl95MJrsRI9kjNGWKkIZaex8DU/view"
  },
  {
    title: { id: "SQL", en: "SQL" },
    kind: { id: "Keahlian basis data", en: "Database skills" },
    mark: "07",
    style: "sql",
    artDesc: { id: "Keterampilan basis data, relevan dengan pengalaman MySQL.", en: "Database skills, relevant to MySQL experience." },
    desc: {
      id: "Sertifikat SQL yang mendukung keterampilan basis data, relevan dengan pengalaman pengembangan backend Laravel/PHP dan integrasi MySQL.",
      en: "SQL certificate supporting database proficiency, relevant to Laravel/PHP backend development and MySQL integration."
    },
    link: "https://drive.google.com/file/d/1lMWDG3B7pZ5rqANKxw4pm6Pd83jx_vNP/view"
  },
];

const certificateGallery = document.getElementById("certificateGallery");
let showCertificate = null;
let updateCertificateTexts = null;

if (certificateGallery) {
  const certificateArtTitle = (title) => escapeHTML(title).replace(" · ", "<br>").replace(" ", "<br>");
  const certificateArtwork = (certificate) => `
    <span class="certificate-frame certificate-frame-${certificate.style}">
      <span class="certificate-print">
        <span class="certificate-print-head"><span>GERRY DIMASARYA</span><span>${certificate.mark}</span></span>
        <svg class="certificate-seal" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 3 38 9l9-1 3 9 8 5-2 9 4 8-6 7-1 9-10 1-7 6-8-4-9 3-6-8-9-2v-9l-6-7 5-8-1-9 9-4 4-8 9 2Z"/><circle cx="32" cy="32" r="17"/><path d="m24 32 5 5 11-12"/></svg>
        <span class="certificate-art-kicker">CERTIFICATE</span>
        <span class="certificate-art-title">${certificateArtTitle(tText(certificate.title))}</span>
        <span class="certificate-art-description">${escapeHTML(tText(certificate.artDesc))}</span>
        <span class="certificate-art-rule"></span>
        <span class="certificate-art-kind">${escapeHTML(tText(certificate.kind))}</span>
        <span class="certificate-print-foot">IPB UNIVERSITY <i>✦</i> PORTFOLIO</span>
      </span>
    </span>`;

  certificateGallery.innerHTML = `
    <div class="certificate-gallery-top" data-reveal style="--i: 1;"><span data-cert-rail-title>${escapeHTML(t("cert.rail"))}</span><span data-certificate-count>01 / ${String(CERTIFICATES.length).padStart(2, "0")}</span></div>
    <div class="certificate-stage" data-reveal style="--i: 2;" data-certificate-stage role="group" aria-label="${escapeHTML(t("cert.aria"))}">
      <div class="certificate-rail" aria-hidden="true"><span></span></div>
      <div class="certificate-frames">
        ${CERTIFICATES.map((certificate, index) => `
          <button class="certificate-frame-button${index === 0 ? " is-active" : ""}" type="button" data-certificate-index="${index}" aria-label="${escapeHTML(t("cert.view_detail"))} ${escapeHTML(tText(certificate.title))}" aria-pressed="${index === 0}">
            <span class="certificate-cord" aria-hidden="true"></span>
            ${certificateArtwork(certificate)}
            <span class="certificate-frame-caption">${escapeHTML(tText(certificate.title))}</span>
          </button>`).join("")}
      </div>
    </div>
    <div class="certificate-detail" data-certificate-detail hidden aria-live="polite" aria-atomic="true">
      <div class="certificate-detail-copy"><p class="certificate-kind" data-certificate-kind></p><h3 data-certificate-title></h3><p class="certificate-description" data-certificate-description></p></div>
      <div class="certificate-detail-actions"><button class="certificate-nav" type="button" data-certificate-prev aria-label="${escapeHTML(t("cert.prev"))}">←</button><button class="certificate-nav" type="button" data-certificate-next aria-label="${escapeHTML(t("cert.next"))}">→</button><a class="certificate-open" data-certificate-link target="_blank" rel="noopener noreferrer">${escapeHTML(t("cert.open"))} <span aria-hidden="true">↗</span></a><button class="certificate-back" type="button" data-certificate-back>${escapeHTML(t("cert.back"))}</button></div>
    </div>
    <span class="certificate-status" data-certificate-status role="status" aria-live="polite" aria-atomic="true"></span>
  `;

  let activeCertificate = 0;
  const certificateButtons = [...certificateGallery.querySelectorAll("[data-certificate-index]")];
  const certificateDetail = certificateGallery.querySelector("[data-certificate-detail]");

  showCertificate = function (index, announce = false, focusMode = certificateGallery.classList.contains("has-selection")) {
    activeCertificate = (index + CERTIFICATES.length) % CERTIFICATES.length;
    const certificate = CERTIFICATES[activeCertificate];
    const certTitle = tText(certificate.title);
    const certKind = tText(certificate.kind);
    const certDesc = tText(certificate.desc);

    certificateButtons.forEach((button, i) => {
      const active = i === activeCertificate;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    certificateGallery.querySelector("[data-certificate-count]").textContent = `${String(activeCertificate + 1).padStart(2, "0")} / ${String(CERTIFICATES.length).padStart(2, "0")}`;
    certificateGallery.classList.toggle("has-selection", focusMode);
    certificateDetail.hidden = !focusMode;
    certificateGallery.querySelector("[data-certificate-kind]").textContent = certKind;
    certificateGallery.querySelector("[data-certificate-title]").textContent = certTitle;
    certificateGallery.querySelector("[data-certificate-description]").textContent = certDesc;
    certificateGallery.querySelector("[data-certificate-link]").href = certificate.link;

    if (announce) {
      certificateGallery.querySelector("[data-certificate-status]").textContent = `${certTitle}, ${activeCertificate + 1} ${t("cert.of")} ${CERTIFICATES.length}`;
    }
  };

  updateCertificateTexts = function () {
    const railTitle = certificateGallery.querySelector("[data-cert-rail-title]");
    if (railTitle) railTitle.textContent = t("cert.rail");
    const stage = certificateGallery.querySelector("[data-certificate-stage]");
    if (stage) stage.setAttribute("aria-label", t("cert.aria"));
    const prevBtn = certificateGallery.querySelector("[data-certificate-prev]");
    if (prevBtn) prevBtn.setAttribute("aria-label", t("cert.prev"));
    const nextBtn = certificateGallery.querySelector("[data-certificate-next]");
    if (nextBtn) nextBtn.setAttribute("aria-label", t("cert.next"));
    const openLink = certificateGallery.querySelector("[data-certificate-link]");
    if (openLink) openLink.innerHTML = `${escapeHTML(t("cert.open"))} <span aria-hidden="true">↗</span>`;
    const backBtn = certificateGallery.querySelector("[data-certificate-back]");
    if (backBtn) backBtn.textContent = t("cert.back");

    certificateButtons.forEach((button, index) => {
      const cert = CERTIFICATES[index];
      const title = tText(cert.title);
      const kind = tText(cert.kind);
      const artDesc = tText(cert.artDesc);

      button.setAttribute("aria-label", `${t("cert.view_detail")} ${title}`);
      const caption = button.querySelector(".certificate-frame-caption");
      if (caption) caption.textContent = title;
      const artTitle = button.querySelector(".certificate-art-title");
      if (artTitle) artTitle.innerHTML = certificateArtTitle(title);
      const artDescEl = button.querySelector(".certificate-art-description");
      if (artDescEl) artDescEl.textContent = artDesc;
      const artKind = button.querySelector(".certificate-art-kind");
      if (artKind) artKind.textContent = kind;
    });

    showCertificate(activeCertificate, false, certificateGallery.classList.contains("has-selection"));
  };

  certificateButtons.forEach((button, index) => button.addEventListener("click", () => showCertificate(index, true, true)));
  certificateGallery.querySelector("[data-certificate-prev]").addEventListener("click", () => showCertificate(activeCertificate - 1, true));
  certificateGallery.querySelector("[data-certificate-next]").addEventListener("click", () => showCertificate(activeCertificate + 1, true));
  certificateGallery.querySelector("[data-certificate-back]").addEventListener("click", () => {
    showCertificate(activeCertificate, false, false);
    certificateButtons[activeCertificate]?.focus({ preventScroll: true });
  });
  certificateGallery.querySelector("[data-certificate-stage]").addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? CERTIFICATES.length - 1 : activeCertificate + (event.key === "ArrowRight" ? 1 : -1);
    showCertificate(next, true);
    certificateButtons[activeCertificate].focus();
  });
  showCertificate(0);
}

// ---------- Petunjuk potret menyesuaikan perangkat & bahasa ----------
const heroHintEl = document.querySelector(".hero-hint");
function updateHeroHint() {
  if (!heroHintEl) return;
  const isTouch = window.matchMedia("(hover: none)").matches;
  heroHintEl.textContent = isTouch ? t("hero.hint_touch") : t("hero.hint_mouse");
}
updateHeroHint();

// ---------- Efek potret: jejak kursor membuka versi "aura" ----------
const stage = document.getElementById("heroPortrait");
const canvas = document.getElementById("portraitCanvas");
const ctx = canvas.getContext("2d");
const photoLayer = document.querySelector(".layer-photo");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const trail = document.createElement("canvas");
const tctx = trail.getContext("2d");
const glow = document.createElement("canvas");
const gctx = glow.getContext("2d");

// Stempel "kuas" bergerigi: siluetnya tidak rata (radius diwarnai noise
// sinusoidal) dengan lembul tengah, dipakai menyambar jejak sehingga
// tepi daerah yang terbuka menjadi bergerigi dan organik.
function makeStamp(size) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const x = c.getContext("2d");
  const cx = size / 2, cy = size / 2;
  const base = size * 0.34;
  const p1 = Math.random() * Math.PI * 2;
  const p2 = Math.random() * Math.PI * 2;
  const p3 = Math.random() * Math.PI * 2;
  x.beginPath();
  const steps = 72;
  for (let i = 0; i <= steps; i++) {
    const ang = (i / steps) * Math.PI * 2;
    const n = 0.5 + 0.5 * Math.sin(ang * 3 + p1) * Math.sin(ang * 5 + p2) * Math.sin(ang * 2 + p3);
    const r = base * (0.6 + 0.8 * n);
    const px = cx + Math.cos(ang) * r;
    const py = cy + Math.sin(ang) * r;
    if (i === 0) x.moveTo(px, py); else x.lineTo(px, py);
  }
  x.closePath();
  const g = x.createRadialGradient(cx, cy, 0, cx, cy, base * 1.25);
  g.addColorStop(0, "rgba(255,255,255,0.95)");
  g.addColorStop(0.6, "rgba(255,255,255,0.55)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  x.fillStyle = g;
  x.fill();
  return c;
}
const stamps = [];

// Ukuran kuas mengikuti ukuran potret supaya di HP jejaknya tidak terlalu lebar.
function buildStamps() {
  const size = Math.max(56, Math.round(Math.min(cssW, cssH) * 0.24));
  stamps.length = 0;
  for (let i = 0; i < 5; i++) stamps.push(makeStamp(size));
}

const auraImg = new Image();
auraImg.src = "assets/aura.png";
let auraReady = false;
auraImg.onload = () => { auraReady = true; };

let points = [];
let raf = null;
let cssW = 0;
let cssH = 0;
let lastActive = 0;
let bgFit = "contain";
let bgPosX = 0.5;
let bgPosY = 1;

// Nilai background-position CSS: "center" -> 0.5, "top"/"left" -> 0,
// "bottom"/"right" -> 1, "30%" -> 0.3.
function parsePos(value, fallback) {
  if (value == null) return fallback;
  if (value === "center") return 0.5;
  if (value === "top" || value === "left") return 0;
  if (value === "bottom" || value === "right") return 1;
  const m = String(value).match(/^(-?[\d.]+)%$/);
  return m ? parseFloat(m[1]) / 100 : fallback;
}

// Kanvas harus menggambar aura persis seperti CSS menggambar .layer,
// kalau tidak hasilnya akan geser/membesar berbeda.
function readLayerFit() {
  const cs = getComputedStyle(photoLayer);
  bgFit = cs.backgroundSize;
  const parts = cs.backgroundPosition.split(/\s+/);
  bgPosX = parsePos(parts[0], 0.5);
  bgPosY = parsePos(parts[1], parts.length > 1 ? 0.5 : 1);
}

function resizeCanvas() {
  // clientWidth/clientHeight = ukuran tata letak, tidak terpengaruh
  // transform (scale/rotate) pada potret.
  cssW = Math.max(1, stage.clientWidth);
  cssH = Math.max(1, stage.clientHeight);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  canvas.style.width = cssW + "px";
  canvas.style.height = cssH + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  trail.width = Math.round(cssW);
  trail.height = Math.round(cssH);
  glow.width = Math.round(cssW);
  glow.height = Math.round(cssH);
  readLayerFit();
  buildStamps();
  points = [];
  tctx.clearRect(0, 0, cssW, cssH);
  gctx.clearRect(0, 0, cssW, cssH);
  ctx.clearRect(0, 0, cssW, cssH);
}

function scheduleRender() {
  if (raf === null) raf = requestAnimationFrame(renderFrame);
}

function auraRect() {
  const iw = auraImg.naturalWidth;
  const ih = auraImg.naturalHeight;
  if (!iw || !ih) return null;
  let dw, dh;
  if (bgFit === "cover") {
    const s = Math.max(cssW / iw, cssH / ih);
    dw = iw * s; dh = ih * s;
  } else if (bgFit === "contain") {
    const s = Math.min(cssW / iw, cssH / ih);
    dw = iw * s; dh = ih * s;
  } else {
    dw = cssW; dh = cssH;
  }
  return { dx: (cssW - dw) * bgPosX, dy: (cssH - dh) * bgPosY, dw: dw, dh: dh };
}

function drawAura() {
  const r = auraRect();
  if (r) ctx.drawImage(auraImg, r.dx, r.dy, r.dw, r.dh);
}

function renderFrame() {
  raf = null;
  const now = performance.now();
  points = points.filter((p) => now - p.t < 900);

  // jejak memudar: alpha per bingkai dan batas umur titik menentukan
  // seberapa lama aura bertahan setelah jari diangkat.
  tctx.globalCompositeOperation = "destination-out";
  tctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  tctx.fillRect(0, 0, cssW, cssH);

  // tambah titik baru (stempel bergerigi)
  tctx.globalCompositeOperation = "lighter";
  for (const p of points) {
    const s = stamps[p.s % stamps.length];
    const half = s.width / 2;
    tctx.drawImage(s, p.x - half, p.y - half);
  }

  // bentuk glow kuning dari jejak, dipotong hanya di area subjek
  // (supaya di latar terang tidak mencuci jadi putih)
  gctx.clearRect(0, 0, cssW, cssH);
  gctx.globalCompositeOperation = "source-over";
  gctx.drawImage(trail, 0, 0);
  gctx.globalCompositeOperation = "source-in";
  gctx.fillStyle = "#ffd43b";
  gctx.fillRect(0, 0, cssW, cssH);
  const ar = auraRect();
  if (ar) {
    gctx.globalCompositeOperation = "destination-in";
    gctx.drawImage(auraImg, ar.dx, ar.dy, ar.dw, ar.dh);
  }

  // gambar ke canvas utama
  ctx.clearRect(0, 0, cssW, cssH);
  if (auraReady) {
    // glow di belakang: inti terang + halo lembut (hanya di subjek)
    const coreBlur = Math.max(3, Math.round(cssW * 0.006));
    const haloBlur = Math.max(10, Math.round(cssW * 0.028));
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    if ("filter" in ctx) ctx.filter = "blur(" + coreBlur + "px)";
    ctx.drawImage(glow, 0, 0, cssW, cssH);
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.globalAlpha = 0.8;
    if ("filter" in ctx) ctx.filter = "blur(" + haloBlur + "px)";
    ctx.drawImage(glow, 0, 0, cssW, cssH);
    ctx.restore();

    // aura hanya di mana jejak ada
    ctx.globalCompositeOperation = "source-over";
    drawAura();
    // aura digambar dua kali: sekali tegas, sekali lebih lembut supaya
    // warnanya lebih pekat dan tidak tertutup latar terang.
    ctx.globalAlpha = 0.85;
    drawAura();
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(trail, 0, 0, cssW, cssH);
  }

  // Berhenti begitu jejak habis; batas 1400ms supaya sisa aura benar-benar
  // hilang tanpa membiarkan render berjalan belasan detik.
  if (points.length > 0 || now - lastActive < 1400) {
    scheduleRender();
  } else {
    tctx.clearRect(0, 0, cssW, cssH);
    gctx.clearRect(0, 0, cssW, cssH);
    ctx.clearRect(0, 0, cssW, cssH);
  }
}

// Ubah koordinat layar menjadi koordinat tata letak potret (canvas-local),
// membalik transform (scale/rotate/translate) secara persis.
function localPoint(e) {
  const stageRect = stage.getBoundingClientRect();
  const mt = getComputedStyle(stage).transform;
  let a = 1, b = 0, c = 0, d = 1;
  if (mt && mt !== "none") {
    const nums = mt.slice(7, -1).split(",").map(Number);
    a = nums[0]; b = nums[1]; c = nums[2]; d = nums[3];
  }
  const dx = e.clientX - stageRect.left;
  const dy = e.clientY - stageRect.top;
  const det = a * d - b * c;
  return {
    x: (d * dx - c * dy) / det,
    y: (a * dy - b * dx) / det
  };
}

stage.addEventListener("pointermove", (e) => {
  // Jejak tetap jalan apa pun pengaturan gerak sistem. Yang dihentikan oleh
  // prefers-reduced-motion hanya gerakan mengikuti kursor (parallax).
  const { x, y } = localPoint(e);
  if (x < -20 || x > cssW + 20 || y < -20 || y > cssH + 20) return;
  points.push({ x, y, t: performance.now(), s: (Math.random() * stamps.length) | 0 });
  if (points.length > 240) points.shift();
  lastActive = performance.now();
  scheduleRender();
});

stage.addEventListener("pointerleave", () => {
  if (points.length) scheduleRender();
});

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

// ---------- Efek potret mengikuti kursor / geser ----------
let px = 0, py = 0, ps = 1, pr = 0;
let tPx = 0, tPy = 0, tPs = 1, tPr = 0;
let dragging = false, dragStartX = 0, dragStartY = 0, dragBaseX = 0, dragBaseY = 0;
let parallaxRaf = null;

function clamp(value, lo, hi) { return Math.max(lo, Math.min(hi, value)); }

function renderParallax() {
  parallaxRaf = null;
  px += (tPx - px) * 0.12;
  py += (tPy - py) * 0.12;
  ps += (tPs - ps) * 0.12;
  pr += (tPr - pr) * 0.12;
  stage.style.setProperty("--px", px.toFixed(2) + "px");
  stage.style.setProperty("--py", py.toFixed(2) + "px");
  stage.style.setProperty("--ps", ps.toFixed(3));
  stage.style.setProperty("--pr", pr.toFixed(2) + "deg");
  if (Math.abs(tPx - px) > 0.05 || Math.abs(tPy - py) > 0.05 ||
      Math.abs(tPs - ps) > 0.001 || Math.abs(tPr - pr) > 0.01) {
    parallaxRaf = requestAnimationFrame(renderParallax);
  }
}

function wakeParallax() {
  if (parallaxRaf === null) parallaxRaf = requestAnimationFrame(renderParallax);
}

function resetParallax() {
  tPx = 0; tPy = 0; tPs = 1; tPr = 0;
  wakeParallax();
}

stage.addEventListener("pointermove", (e) => {
  if (reduced) return;
  if (dragging) {
    tPx = clamp(dragBaseX + (e.clientX - dragStartX), -90, 90);
    tPy = clamp(dragBaseY + (e.clientY - dragStartY), -60, 60);
    tPs = 1.07;
    tPr = clamp(tPx / 90, -1, 1) * 3;
    wakeParallax();
    return;
  }
  const rect = stage.getBoundingClientRect();
  const nx = (e.clientX - rect.left) / rect.width - 0.5;
  const ny = (e.clientY - rect.top) / rect.height - 0.5;
  tPx = nx * 26;
  tPy = ny * 18;
  tPs = 1.045;
  tPr = nx * 2.2;
  wakeParallax();
});

stage.addEventListener("pointerleave", () => { if (!dragging) resetParallax(); });

stage.addEventListener("pointerdown", (e) => {
  if (reduced) return;
  dragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  dragBaseX = tPx;
  dragBaseY = tPy;
  tPs = 1.06;
  try { stage.setPointerCapture(e.pointerId); } catch (_) {}
  wakeParallax();
});

function endDrag() {
  if (!dragging) return;
  dragging = false;
  resetParallax();
}
stage.addEventListener("pointerup", endDrag);
stage.addEventListener("pointercancel", endDrag);

// ---------- Tombol Switch portrait ----------
const switchBtn = document.getElementById("switchBtn");
const switchTitle = document.getElementById("switchTitle");

function updateSwitchButtonText() {
  if (!switchTitle) return;
  const showingAura = stage && stage.classList.contains("show-aura");
  switchTitle.textContent = showingAura ? t("hero.switch_photo") : t("hero.switch_aura");
}

if (switchBtn) {
  switchBtn.addEventListener("click", () => {
    const showingAura = stage.classList.toggle("show-aura");
    switchBtn.setAttribute("aria-pressed", String(showingAura));
    updateSwitchButtonText();
    points = [];
    lastActive = 0;
    tctx.clearRect(0, 0, cssW, cssH);
    gctx.clearRect(0, 0, cssW, cssH);
    ctx.clearRect(0, 0, cssW, cssH);
  });
}

// ---------- Animasi reveal saat scroll (Dua Arah: scroll ke bawah & scroll ke atas) ----------
document.body.classList.add("reveal-ready");

const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    } else {
      // Ketika elemen keluar dari viewport, hilangkan class agar beranimasi kembali saat di-scroll
      entry.target.classList.remove("is-visible");
    }
  }
}, {
  threshold: 0.08,
  rootMargin: "0px 0px -60px 0px"
});

function observeReveal(scope) {
  (scope || document).querySelectorAll("[data-reveal]").forEach((el) => {
    revealObserver.observe(el);
  });
}

observeReveal(document);

// ---------- Preloader: sapaan beberapa bahasa ----------
(function () {
  const overlay = document.getElementById("preloader");
  const word = document.getElementById("preloaderWord");
  if (!overlay || !word) return;

  const greetings = [
    "Hello", "Bonjour", "안녕하세요", "Hola",
    "Ciao", "Hallo", "नमस्ते", "こんにちは"
  ];
  let index = 0;

  function showGreeting(text, isLast) {
    word.classList.remove("is-anim", "is-static");
    void word.offsetWidth; // memulai ulang animasi
    word.textContent = text;
    word.classList.add(isLast ? "is-static" : "is-anim");
  }

  function finishPreloader() {
    if (overlay.classList.contains("is-done")) return;
    overlay.classList.add("is-done");
    document.documentElement.classList.remove("is-preload");
    setTimeout(() => { overlay.style.display = "none"; }, 1100);
  }

  function nextGreeting() {
    if (index >= greetings.length) { finishPreloader(); return; }
    const isLast = index === greetings.length - 1;
    showGreeting(greetings[index], isLast);
    index += 1;
    // Sapaan terakhir ditahan sebentar, lalu layar terbuka.
    setTimeout(nextGreeting, isLast ? 650 : 300);
  }

  nextGreeting();
})();

// ---------- Bar navigasi menyusut saat digulir ke bawah ----------
(function () {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  const EXPAND_SCROLL_THRESHOLD = 80;
  let collapsed = false;
  let lastY = window.scrollY;
  let collapseStart = 0;

  function setCollapsed(value) {
    if (collapsed === value) return;
    collapsed = value;
    nav.classList.toggle("is-collapsed", value);
    if (value) collapseStart = window.scrollY;
  }

  function onScroll() {
    const y = window.scrollY;
    if (!collapsed && y > lastY && y > 150) {
      setCollapsed(true);
    } else if (collapsed && y < lastY && collapseStart - y > EXPAND_SCROLL_THRESHOLD) {
      setCollapsed(false);
    }
    lastY = y;
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Klik lingkaran saat tersemat untuk membuka kembali menu.
  nav.addEventListener("click", () => {
    if (collapsed) setCollapsed(false);
  });
})();

// ---------- Efek Dinamis Saat Scroll (Progress Bar, Parallax, Putaran Bianglala, Nav Spy, Back to Top) ----------
(function () {
  const progressBar = document.getElementById("scrollProgressBar");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const backToTopProgress = document.getElementById("backToTopProgress");
  const heroSec = document.getElementById("top");
  const heroContours = heroSec ? heroSec.querySelector(".contours") : null;
  const heroStage = heroSec ? heroSec.querySelector(".hero-stage") : null;
  const skySec = document.querySelector(".projects-sky");
  const sunRays = skySec ? skySec.querySelector(".sun-rays") : null;
  const cloud1 = skySec ? skySec.querySelector(".sky-cloud-1") : null;
  const cloud2 = skySec ? skySec.querySelector(".sky-cloud-2") : null;
  const cloud3 = skySec ? skySec.querySelector(".sky-cloud-3") : null;
  const birds = skySec ? skySec.querySelector(".sky-birds") : null;

  const certSec = document.getElementById("certificate");
  const certStage = certSec ? certSec.querySelector(".certificate-stage") : null;
  let quakeTimeout = null;

  const navLinks = [...document.querySelectorAll(".nav-links a, .nav-cta")];
  const sectionIds = ["about", "skills", "projects", "certificate", "contact"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

  let lastY = window.scrollY;
  let ticking = false;

  function updateScrollEffects() {
    const y = window.scrollY;
    const deltaY = y - lastY;
    lastY = y;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const scrollRatio = Math.min(Math.max(y / maxScroll, 0), 1);

    // 1. Progress Bar di paling atas layar
    if (progressBar) {
      progressBar.style.width = (scrollRatio * 100).toFixed(2) + "%";
    }

    // 2. Putaran Bianglala Dinamis saat di-scroll (hanya saat Proyek dekat layar)
    if (grid && !isDragging && !isSpinningToTarget) {
      const gRect = grid.getBoundingClientRect();
      if (gRect.top < window.innerHeight + 150 && gRect.bottom > -150) {
        currentAngle -= deltaY * 0.22;
        renderWheelPositions();
        lastInteractionTime = Date.now();
      }
    }

    // 3. Parallax Dekorasi Langit (Matahari, Awan, Burung)
    if (skySec) {
      const sRect = skySec.getBoundingClientRect();
      if (sRect.top < window.innerHeight && sRect.bottom > 0) {
        const p = (window.innerHeight - sRect.top) / (window.innerHeight + sRect.height);
        if (sunRays) sunRays.style.transform = `rotate(${p * 110}deg)`;
        if (cloud1) cloud1.style.transform = `translateX(${p * 48 - 24}px)`;
        if (cloud2) cloud2.style.transform = `translateX(${-(p * 56 - 28)}px)`;
        if (cloud3) cloud3.style.transform = `translateX(${p * 36 - 18}px)`;
        if (birds) birds.style.transform = `translate(${-(p * 70 - 35)}px, ${p * 18 - 9}px)`;
      }
    }

    // 4. Parallax Halus pada Hero
    if (y < window.innerHeight * 1.1) {
      if (heroContours) heroContours.style.transform = `translateY(${(y * 0.16).toFixed(1)}px)`;
      if (heroStage) heroStage.style.transform = `translateY(${(y * 0.08).toFixed(1)}px)`;
    }

    // 5. Efek Gempa pada Bingkai Sertifikat saat di-scroll
    if (certStage && !document.querySelector(".certificate-gallery.has-selection")) {
      const cRect = certSec.getBoundingClientRect();
      if (cRect.top < window.innerHeight + 120 && cRect.bottom > -120 && Math.abs(deltaY) > 0.4) {
        certStage.classList.add("is-quake");
        clearTimeout(quakeTimeout);
        quakeTimeout = setTimeout(() => {
          certStage.classList.remove("is-quake");
        }, 260);
      }
    }

    // 6. Active Nav Spy (highlight tautan navbar saat scroll)
    const viewCenter = y + window.innerHeight * 0.35;
    let currentActiveId = "";
    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      if (sec.offsetTop <= viewCenter) {
        currentActiveId = sec.id;
        break;
      }
    }
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const isCur = currentActiveId && href === `#${currentActiveId}`;
      link.classList.toggle("is-active", Boolean(isCur));
    });

    // 7. Tombol Melayang Kembali ke Atas (Back to Top)
    if (backToTopBtn) {
      const showBtn = y > 380;
      backToTopBtn.classList.toggle("is-visible", showBtn);
      if (showBtn && backToTopProgress) {
        const circumference = 113.1; // 2 * PI * 18
        const offset = circumference - scrollRatio * circumference;
        backToTopProgress.style.strokeDashoffset = offset.toFixed(1);
      }
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    },
    { passive: true }
  );

  // Goyangan gempa juga aktif saat pengguna menggeser galeri sertifikat secara horizontal
  if (certStage) {
    certStage.addEventListener(
      "scroll",
      () => {
        if (!document.querySelector(".certificate-gallery.has-selection")) {
          certStage.classList.add("is-quake");
          clearTimeout(quakeTimeout);
          quakeTimeout = setTimeout(() => {
            certStage.classList.remove("is-quake");
          }, 260);
        }
      },
      { passive: true }
    );
  }

  // Inisialisasi posisi awal saat dimuat
  requestAnimationFrame(updateScrollEffects);

  // Tombol Kembali ke Atas saat diklik
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();

// ---------- Pengaturan Bahasa (ID / EN) ----------
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = "id";
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);
  document.documentElement.lang = lang;

  // Update text content for elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Update attributes for elements with data-i18n-attr (e.g. "aria-label:key")
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const mappings = el.getAttribute("data-i18n-attr").split(",");
    mappings.forEach((m) => {
      const [attr, key] = m.split(":");
      if (attr && key && TRANSLATIONS[lang] && TRANSLATIONS[lang][key.trim()] !== undefined) {
        el.setAttribute(attr.trim(), TRANSLATIONS[lang][key.trim()]);
      }
    });
  });

  // Update toggle buttons UI
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    const isActive = btnLang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  // Update dynamic components
  if (typeof updateProjectDetails === "function") {
    updateProjectDetails(activeProject, false);
  } else if (typeof showProject === "function") {
    showProject(activeProject, false);
  }
  if (typeof updateCertificateTexts === "function") {
    updateCertificateTexts();
  }
  if (typeof updateHeroHint === "function") {
    updateHeroHint();
  }
  updateSwitchButtonText();

  // Update dynamic CV link based on language
  const cvLink = document.getElementById("heroCvLink");
  if (cvLink && TRANSLATIONS[lang] && TRANSLATIONS[lang]["hero.cv_url"]) {
    cvLink.href = TRANSLATIONS[lang]["hero.cv_url"];
  }
}

// Inisialisasi event listener tombol pengalih bahasa
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const targetLang = btn.getAttribute("data-lang");
    if (targetLang && targetLang !== currentLang) {
      setLanguage(targetLang);
    }
  });
});

// Terapkan bahasa pilihan saat halaman dimuat
setLanguage(currentLang);

