const translations = {
  en: {
    skip: "Skip to content",
    navAbout: "About me",
    navWork: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    navContact: "Contact",
    profileTitle: "Automation Engineer · Data & AI",
    hero: "I work in automation and study Data Science and Artificial Intelligence. My experience began in QA, and over time I have added data analysis, process automation and AI solutions.",
    profileDesc:
      "QA Automation · Web · Mobile · APIs · Pipelines · Data · Process automation · Applied AI",
    profileLang: "Native Spanish · English C1",
    aboutLabel: "01 / Profile",
    aboutTitle: "About me",
    aboutText:
      "I started working in QA in 2021, and from day one I knew I wanted to code. I have always enjoyed understanding problems, finding a way to solve them, and learning everything I need to make that happen.",
    aboutText2:
      "Over the years, I have discovered new interests, especially data and artificial intelligence. I see myself as curious, persistent, and proactive. In a team, I bring autonomy, a thoughtful eye for what could be improved, and a strong drive to turn ideas into solutions that are genuinely useful.",
    workLabel: "02 / Selected work",
    workTitle: "Projects and systems",
    filterAll: "All",
    p4Title: "End-to-end test automation",
    p4Summary:
      "This is the area where I have the most experience: I build frameworks from scratch, starting by understanding the business and defining what needs to be automated.",
    more: "View details",
    p4a: "Test automation is the area where I have the most experience. I can build a framework from scratch, starting by understanding how the product works, its business rules, and what the team needs to validate.",
    p4b: "From there, I decide what is worth automating, how to organize the tests, and what needs to be implemented. I apply good programming practices so the framework is clear, easy to maintain, and able to grow with the product.",
    p4c: "I have worked on web, mobile, and API automation, from preparing test data to analyzing the results. This experience helps me understand what each project needs and turn that into a solution the team can use.",
    p2Title: "Automated execution tracking",
    p2Summary:
      "I turned each execution result into a summary that reaches the team as soon as the pipeline finishes.",
    p2a: "Previously, to find out how a run went, we had to open the pipeline, download the report, and review it manually. This took time and made it harder to follow up on failed cases.",
    p2b: "I proposed automating that follow-up. Now, whenever the pipeline finishes, the team receives a summary of the run in Teams. The results are also saved automatically in a database, where we can review failures and record the follow-up on each case.",
    p2c: "This lets us quickly see what happened in each run and focus directly on the cases that need attention.",
    p1Title: "QA execution analytics",
    p1Summary:
      "I organized execution data to see what was failing, where, and how often.",
    p1a: "The results were spread across different reports, making it difficult to compare them and understand what was happening over time.",
    p1b: "To address this, I developed a process that automatically takes the results of each run, selects the relevant information, organizes it, and stores it in a structured database. I also added retry handling so the same case is not recorded more than once and does not distort the results.",
    p1c: "We can now view each run by module and user type, review failures, and identify recurring issues. This helps us use the data our automated tests already generate to track results more clearly and make better decisions.",
    p3Meta: "Claude Code · Agents · QA",
    p3Title: "QA agent system",
    p3Summary:
      "I built a system that identifies tests failing because of a broken locator and updates it automatically. We then check that the new locator works correctly.",
    p3a: "A common part of maintaining automated tests is fixing cases that fail because an element in the application has changed. Identifying the issue, finding a new locator, and updating it takes time, even though the task is often repetitive.",
    p3b: "I built an agent system that analyzes failed tests, identifies those caused by a broken locator, and updates the locator automatically.",
    p3c: "Once the change is made, we check that the new locator works correctly. This reduces the time spent on maintenance and lets the team focus on failures that need closer investigation and judgment.",
    careerLabel: "03 / Career",
    careerTitle: "Experience",
    date4: "Feb 2021 – Jan 2023",
    careerAccenture:
      "This is where my QA career began. I learned the foundations of testing, functional analysis and working within a development team.",
    readExperience: "Learn about my experience →",
    date3: "Mar 2023 – Oct 2024",
    careerMarkmonitor:
      "It was a big step for me: I learned new tools, got to know an unfamiliar business, and learned to work confidently in English.",
    date2: "Oct 2024 – Jul 2025",
    careerAllianz:
      "I owned the automation of a business line and built the team’s first flow connecting the UI, APIs and database validations.",
    date1: "Jul 2025 – present",
    careerTulegajo:
      "I still work in automation, while looking for new ways to use test results and improve how the team works.",
    skillsLabel: "04 / Tools and education",
    skillsTitle: "What I use and study",
    education: "Education",
    ubaTitle: "Bachelor's Degree in Data Science",
    studyDate: "2026–present",
    iftsTitle: "Higher Technical Degree in Data Science and Artificial Intelligence",
    iftsStatus: "IFTS No. 24 · In progress",
    certifications: "Certifications",
    certSeleniumDate: "Jul 2024 · Completed",
    completed: "Completed",
    certAiDate: "May 2026 · Completed",
    stack: "Toolkit",
    stackWeb: "Web automation",
    stackApi: "APIs and backend",
    stackCi: "CI/CD and infrastructure",
    stackReports: "Reporting and monitoring",
    stackData: "Data and visualization",
    stackProcesses: "Process automation",
    stackAi: "Artificial intelligence",
    stackMethods: "Methods and management",
    exploratoryData: "exploratory data analysis",
    dataCleaning: "data cleaning and analysis",
    dataViz: "data visualization",
    multiagentSystems: "Multiagent systems",
    generativeAi: "Generative AI",
    functionalAnalysis: "Functional analysis",
    testCaseDesign: "Test case design",
    regressionTesting: "Regression testing",
    defectTracking: "Defect tracking",
    contactLabel: "05 / Contact",
    contactTitle: "Let’s connect!",
    copyHint: "Copy",
    closeDetails: "Close details",
    stackTabsLabel: "Stack categories",
  },
};

// Translation dictionaries and locale state
const es = Object.fromEntries(
  [...document.querySelectorAll("[data-i18n]")].map((node) => [
    node.dataset.i18n,
    node.firstChild.textContent,
  ]),
);
es.closeDetails = "Cerrar detalles";
function updateProjectToggles(lang) {
  document.querySelectorAll("#proyectos .project-card").forEach((card) => {
    card.querySelector(".project-toggle").textContent = card.open
      ? lang === "en"
        ? translations.en.closeDetails
        : es.closeDetails
      : lang === "en"
        ? translations.en.more
        : es.more;
  });
}
// Language and theme controls
const languageButton = document.getElementById("language"),
  themeButton = document.getElementById("theme"),
  menuToggle = document.getElementById("menu-toggle"),
  navLinks = document.getElementById("navlinks");
function updateMenuLabel() {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true",
    isEs = document.documentElement.lang === "es";
  menuToggle.setAttribute(
    "aria-label",
    isEs ? (isOpen ? "Cerrar menú" : "Abrir menú") : isOpen ? "Close menu" : "Open menu",
  );
}
function language(lang) {
  document.documentElement.lang = lang;
  document
    .querySelector(".topbar nav")
    .setAttribute(
      "aria-label",
      lang === "es" ? "Navegación principal" : "Main navigation",
    );
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = (lang === "en" ? translations.en : es)[node.dataset.i18n];
    if (value !== undefined) node.firstChild.textContent = value;
  });
  const selectedStackOption = document.querySelector(
    '.stack-menu [role="option"][aria-selected="true"]',
  );
  if (selectedStackOption) {
    document.querySelector(".stack-menu-trigger span").textContent =
      selectedStackOption.textContent;
  }
  updateProjectToggles(lang);
  languageButton.textContent = lang === "es" ? "EN" : "ES";
  languageButton.lang = lang === "es" ? "en" : "es";
  languageButton.setAttribute(
    "aria-label",
    lang === "es" ? "Switch to English" : "Cambiar a español",
  );
  document.querySelector(".hero-portrait").alt =
    lang === "es" ? "Retrato de Paula Carluccio" : "Portrait of Paula Carluccio";
  document
    .querySelector(".modal-close")
    .setAttribute("aria-label", lang === "es" ? "Cerrar imagen" : "Close image");
  document
    .getElementById("certificate-previous")
    .setAttribute(
      "aria-label",
      lang === "es" ? "Certificado anterior" : "Previous certificate",
    );
  document
    .getElementById("certificate-next")
    .setAttribute(
      "aria-label",
      lang === "es" ? "Certificado siguiente" : "Next certificate",
    );
  document
    .querySelector(".project-filters")
    .setAttribute("aria-label", lang === "es" ? "Filtrar proyectos" : "Filter projects");
  document
    .querySelector(".stack-tablist")
    .setAttribute(
      "aria-label",
      lang === "es" ? "Categorías del stack" : translations.en.stackTabsLabel,
    );
  document
    .querySelectorAll("[data-certificate-image]")
    .forEach((button) =>
      button.setAttribute(
        "aria-label",
        `${lang === "es" ? "Ver" : "View"} ${button.dataset.certificateTitle}`,
      ),
    );
  const backToTop = document.getElementById("back-to-top");
  backToTop.setAttribute("aria-label", lang === "es" ? "Volver arriba" : "Back to top");
  backToTop.title = backToTop.getAttribute("aria-label");
  updateMenuLabel();
  document.querySelectorAll(".experience-link").forEach((link) => {
    const url = new URL(link.href);
    if (lang === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    link.href = url;
  });
  document.title = "Paula Carluccio | Automation Engineer";
  theme(document.documentElement.dataset.theme || "light");
  try {
    localStorage.setItem("pc-language", lang);
  } catch {}
}
function theme(value) {
  document.documentElement.dataset.theme = value;
  const dark = value === "dark",
    span = themeButton.querySelector("span"),
    isEs = document.documentElement.lang === "es";
  themeButton.firstChild.textContent = dark ? "☀ " : "☾ ";
  span.textContent = isEs ? (dark ? "Claro" : "Oscuro") : dark ? "Light" : "Dark";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.setAttribute(
    "aria-label",
    isEs
      ? dark
        ? "Activar modo claro"
        : "Activar modo oscuro"
      : dark
        ? "Switch to light mode"
        : "Switch to dark mode",
  );
  document.querySelector('meta[name="theme-color"]').content = dark
    ? "#281f26"
    : "#f2e1dc";
  try {
    localStorage.setItem("pc-theme", value);
  } catch {}
}
let preferredLanguage = "es",
  preferredTheme = "dark";
try {
  preferredLanguage = localStorage.getItem("pc-language") || "es";
  preferredTheme = localStorage.getItem("pc-theme") || "dark";
} catch {}
theme(preferredTheme === "dark" ? "dark" : "light");
language(preferredLanguage === "en" ? "en" : "es");
languageButton.addEventListener("click", () =>
  language(document.documentElement.lang === "es" ? "en" : "es"),
);
themeButton.addEventListener("click", () =>
  theme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"),
);
// Responsive navigation
function setMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  if (open) navLinks.dataset.open = "true";
  else delete navLinks.dataset.open;
  updateMenuLabel();
}
menuToggle.addEventListener("click", () =>
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true"),
);
navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuToggle.focus();
  }
});
// Project cards and filters
document.querySelectorAll("#proyectos .project-card").forEach((card) => {
  card.addEventListener("toggle", () =>
    updateProjectToggles(document.documentElement.lang),
  );
  card.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && card.open) {
      card.open = false;
      card.querySelector("summary").focus();
    }
  });
});
const projectGrid = document.querySelector("#proyectos .grid"),
  projectCards = [...projectGrid.querySelectorAll(".project-card")],
  projectFilters = [...document.querySelectorAll(".project-filters button")];
projectFilters.forEach((button) =>
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    projectFilters.forEach((option) =>
      option.setAttribute("aria-pressed", String(option === button)),
    );
    projectCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.tags.split(" ").includes(filter);
      if (!matches) card.open = false;
      card.hidden = !matches;
    });
    scheduleScrollUi();
  }),
);

// Stack category tabs
const stackTabs = [...document.querySelectorAll('[role="tab"]')];
const stackMenuTrigger = document.getElementById("stack-menu-trigger");
const stackMenu = document.getElementById("stack-menu");
const stackMenuOptions = [...stackMenu.querySelectorAll('[role="option"]')];
function setStackMenu(open) {
  stackMenu.hidden = !open;
  stackMenuTrigger.setAttribute("aria-expanded", String(open));
}
function selectStackTab(selectedTab, moveFocus = false) {
  stackTabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !isSelected;
  });
  stackMenuOptions.forEach((option) => {
    const isSelected = option.dataset.panel === selectedTab.getAttribute("aria-controls");
    option.setAttribute("aria-selected", String(isSelected));
    if (isSelected) stackMenuTrigger.firstElementChild.textContent = option.textContent;
  });
  if (moveFocus) selectedTab.focus();
}
stackTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectStackTab(tab));
  tab.addEventListener("keydown", (event) => {
    const keyTargets = {
      ArrowRight: (index + 1) % stackTabs.length,
      ArrowDown: (index + 1) % stackTabs.length,
      ArrowLeft: (index - 1 + stackTabs.length) % stackTabs.length,
      ArrowUp: (index - 1 + stackTabs.length) % stackTabs.length,
      Home: 0,
      End: stackTabs.length - 1,
    };
    if (keyTargets[event.key] === undefined) return;
    event.preventDefault();
    selectStackTab(stackTabs[keyTargets[event.key]], true);
  });
});
stackMenuTrigger.addEventListener("click", () => {
  const open = stackMenuTrigger.getAttribute("aria-expanded") !== "true";
  setStackMenu(open);
  if (open)
    stackMenuOptions
      .find((option) => option.getAttribute("aria-selected") === "true")
      ?.focus();
});
stackMenuOptions.forEach((option, index) => {
  option.addEventListener("click", () => {
    const selectedTab = stackTabs.find(
      (tab) => tab.getAttribute("aria-controls") === option.dataset.panel,
    );
    if (selectedTab) selectStackTab(selectedTab);
    setStackMenu(false);
    stackMenuTrigger.focus();
  });
  option.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? stackMenuOptions.length - 1
          : event.key === "ArrowDown"
            ? (index + 1) % stackMenuOptions.length
            : (index - 1 + stackMenuOptions.length) % stackMenuOptions.length;
    stackMenuOptions[nextIndex].focus();
  });
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".stack-mobile-control")) setStackMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !stackMenu.hidden) {
    setStackMenu(false);
    stackMenuTrigger.focus();
  }
});

// Reveal sections as they enter the viewport
if ("IntersectionObserver" in window) {
  const revealTargets = [
    ...document.querySelectorAll(
      "main section .sectionhead,#proyectos .project-filters,#proyectos .grid,.timeline,.learning-block,.contact .actions",
    ),
  ];
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
  );
  document.documentElement.classList.add("has-reveal");
  revealTargets.forEach((target) => {
    target.classList.add("reveal-on-scroll");
    revealObserver.observe(target);
  });
}
// Certificate gallery
const certificateModal = document.getElementById("certificate-modal"),
  certificateModalImage = document.getElementById("certificate-modal-image"),
  certificateModalTitle = document.getElementById("certificate-modal-title"),
  certificateButtons = [...document.querySelectorAll("[data-certificate-image]")];
let activeCertificate = 0,
  certificateTrigger = null;
function showCertificate(index) {
  activeCertificate = (index + certificateButtons.length) % certificateButtons.length;
  const button = certificateButtons[activeCertificate];
  certificateModalImage.src = button.dataset.certificateImage;
  certificateModalImage.alt = button.dataset.certificateTitle;
  certificateModalTitle.textContent = button.dataset.certificateTitle;
  document.getElementById("certificate-position").textContent =
    `${activeCertificate + 1} / ${certificateButtons.length}`;
}
certificateButtons.forEach((button, index) => {
  const preview = document.createElement("img");
  preview.src = button.dataset.certificateImage;
  preview.alt = "";
  preview.loading = "lazy";
  button.replaceChildren(preview);
  button.addEventListener("click", () => {
    certificateTrigger = button;
    showCertificate(index);
    certificateModal.showModal();
  });
});
document
  .getElementById("certificate-previous")
  .addEventListener("click", () => showCertificate(activeCertificate - 1));
document
  .getElementById("certificate-next")
  .addEventListener("click", () => showCertificate(activeCertificate + 1));
certificateModal.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    showCertificate(activeCertificate + (event.key === "ArrowRight" ? 1 : -1));
  }
});
certificateModal
  .querySelector(".modal-close")
  .addEventListener("click", () => certificateModal.close());
certificateModal.addEventListener("click", (event) => {
  if (event.target === certificateModal) certificateModal.close();
});
certificateModal.addEventListener("close", () => {
  certificateModalImage.removeAttribute("src");
  certificateTrigger?.focus();
});
// Reading progress and back-to-top control
const scrollProgress = document.getElementById("scroll-progress"),
  backToTopButton = document.getElementById("back-to-top");
let scrollScheduled = false;
function updateScrollUi() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.transform = `scaleX(${scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0})`;
  backToTopButton.classList.toggle("is-visible", window.scrollY > 600);
  scrollScheduled = false;
}
function scheduleScrollUi() {
  if (!scrollScheduled) {
    scrollScheduled = true;
    requestAnimationFrame(updateScrollUi);
  }
}
window.addEventListener("scroll", scheduleScrollUi, { passive: true });
window.addEventListener("resize", scheduleScrollUi);
backToTopButton.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  }),
);
updateScrollUi();
document.getElementById("copyright-year").textContent = new Date().getFullYear();
// Contact actions
const copyEmailButton = document.getElementById("copy-email"),
  copyEmailStatus = document.getElementById("copy-email-status");
copyEmailButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("paucarluccio@gmail.com");
    copyEmailStatus.textContent =
      document.documentElement.lang === "es" ? "Mail copiado" : "Email copied";
  } catch {
    copyEmailStatus.textContent =
      document.documentElement.lang === "es"
        ? "No se pudo copiar. El mail es paucarluccio@gmail.com"
        : "Could not copy it. The email is paucarluccio@gmail.com";
  }
  setTimeout(() => (copyEmailStatus.textContent = ""), 3000);
});
// Keep the current section highlighted in the navigation
const sectionLinks = [...document.querySelectorAll('.navlinks a[href^="#"]')],
  observedSections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      sectionLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${visible.target.id}`)
          link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.5] },
  );
  observedSections.forEach((section) => sectionObserver.observe(section));
}
