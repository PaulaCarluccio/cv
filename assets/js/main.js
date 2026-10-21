const translations = {
  en: {
    aboutText3: "I also give training sessions and support the team when new tools are adopted. I care as much about building a solution as about helping others understand it and make the most of it.",
    p5c: "It's a single Java file, with no outside libraries. The application code is read-only: the agents look at it, they don't change it.",
    stackMore: "See the full stack",
    stackLang: "Languages and data",
    stackTests: "Test automation",
    stackSearchLabel: "Search a technology",
    p7c: "The decisions stay with the team: approving, running or automating is up to a person.",
    p7b: "It also writes the cases in Xray, in Gherkin: one per feature, each with a single check. They go in a “To review” folder. It changes nothing in the original tickets, it only reads them.",
    p7a: "When an epic is ready for QA, the plugin reads everything in Jira and looks at the screens in Figma. With that it creates a functional analysis ticket: what the epic is about, the stories with their criteria, and the points to clear up with the PO.",
    p7Summary: "I built another plugin that takes an epic that's ready for QA, reads Jira and Figma, and leaves the analysis and the test cases ready in Xray.",
    p7Title: "Functional analysis and test cases with AI",
    p7Meta: "Claude Code · Jira · Xray · Figma",
    p4d: "I also built CI/CD pipelines in Bitbucket Pipelines, with parallel execution, retries and quality gates, and I mentor people on the QA team.",
    p2Meta: "Python · Power Automate · Power Apps · Teams",
    p6b: "It works with read-only permissions and has a rule-based fallback, so the report goes out even if the AI doesn't respond.",
    p6a: "When a run ends, the analysis runs by itself inside the pipeline. It groups similar failures, looks at the screenshot, how the page is built and the run log, and classifies them: locator changed, possible product bug or environment issue. It also says how confident it is.",
    p6Summary: "I set Claude Code to analyze failures inside the pipeline. It groups them, classifies them and says how sure it is.",
    p6Title: "Failure analysis in the CI pipeline",
    p6Meta: "Claude Code · CI · Bitbucket Pipelines",
    p5b: "It searches in two ways and merges the results: by words (BM25) and by meaning, with embeddings from a model that runs on my own machine with Ollama. If the model isn't available, it keeps working with words only.",
    p5a: "To analyze a failure well, an agent has to know the project. This search tool gives it what it needs: the steps and pages that already exist, the scenarios, the execution history and the application code.",
    p5Summary: "I built a search tool in Java that gives the agents the project's context: tests, scenarios, execution history and app code. It searches by words and by meaning at the same time.",
    p5Title: "RAG built in Java for the agents",
    p5Meta: "Java · RAG · Hybrid search",
    certAwsDate: "Apr 2026 · Completed",
    ubaStatus: "University of Buenos Aires · Coursework completed",
    roleMinder: "AI Automation Engineer",
    demoIntro: "Five short demos: how a report is analyzed, how the notification reaches Teams, how my two plugins work and how everything connects. The data is made up.",
    demoTitle: "See how it works",
    demoLabel: "03 / Interactive demos",
    navDemos: "Demos",
    skip: "Skip to content",
    navAbout: "About me",
    navWork: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    navContact: "Contact",
    profileTitle: "AI Automation Engineer",
    heroKicker: "Professional portfolio",
    ctaContact: "Get in touch",
    ctaProjects: "View projects",
    pillarQaTitle: "QA Automation",
    pillarQaText:
      "Web, mobile and API test frameworks, from test data preparation to results analysis.",
    pillarAiTitle: "AI Automation",
    pillarAiText:
      "Multi-agent systems and automated workflows that reduce repetitive work for the QA team.",
    hero: "I build AI agents and automations to simplify processes, cut down manual tasks and speed up the work of teams.",
    profileDesc:
      "QA Automation · Web · Mobile · APIs · Pipelines · Data · Process automation · Applied AI",
    profileLang: "Buenos Aires, Argentina · Native Spanish · English C1",
    aboutLabel: "01 / Profile",
    aboutTitle: "About me",
    aboutText: "I have more than five years of experience in software quality and automation. That path gave me a practical eye for spotting problems, understanding how they affect the team and building solutions that help solve them.",
    aboutText2: "Today I apply artificial intelligence to work processes, with projects like agents that analyze test failures and automatic reports that make it easier to review results. I want the team to spend less time on operational tasks and have clear information to decide how to move forward.",
    workLabel: "02 / Selected work",
    workTitle: "Projects and systems",
    filterAll: "All",
    p4Title: "End-to-end test automation",
    p4Summary: "It's what I've done the most: building automation frameworks from scratch, starting by understanding the business and deciding what's worth automating.",
    more: "View details",
    p4a: "Test automation is where I have the most experience. I can build a framework from scratch: first I understand how the product works, its business rules and what the team needs to validate.",
    p4b: "Then I decide what's worth automating and how to organize the tests. I write the code so it's clear, easy to maintain and can grow with the product.",
    p4c: "I've worked on web, mobile and API automation, from preparing the data to analyzing the results.",
    p2Title: "Reporting and tracking on Power Platform",
    p2Summary: "Each run reaches Teams with the AI analysis and Jira links. I also built a Power Apps app to follow the results.",
    p2a: "Before, to find out how a run went, we had to open the pipeline, download the report and read it by hand. It took time and made it harder to follow the cases that had failed.",
    p2b: "I suggested to the team that we automate that follow-up with Python and Power Automate. Now, when the pipeline ends, the team gets a summary in Teams with the AI analysis and the Jira links. The results are also saved on their own in a database, where we review the failures and note their follow-up.",
    p2c: "I also built a Power Apps app to see results by build, failures by module and known bugs.",
    p1Title: "QA execution analytics",
    p1Summary: "I organized the execution data to see what fails, where and how often.",
    p1a: "The results were spread across several reports. It was hard to compare them and see what was happening over time.",
    p1b: "I built a process that takes the results of each run, keeps what's useful, organizes it and saves it in a database. I also handled retries: the same case isn't recorded twice or changes the numbers.",
    p1c: "Now I can see each run by module and user type, review the failures and spot the ones that keep coming back. We make better use of data the automation was already producing.",
    p3Meta: "Claude Code · Agents · Plugin",
    p3Title: "Multi-agent system with Claude Code",
    p3Summary: "I built a system of agents with Claude Code, packaged as a plugin for the team. It reads manual cases, automates them, investigates failures and proposes fixes. Anything ambiguous, and possible bugs, goes to a person.",
    p3a: "Maintaining test automation takes a lot of time. When something changes on screen, the test fails and someone has to find out what happened. A lot of the time it's repetitive work.",
    p3b: "With the plugin, the agents do that work first. They can automate a manual case: they look for what already exists to reuse, write what's missing, compile and validate it with several runs. They also diagnose failures and fix only the ones caused by the automation. If it's a product bug, they leave the test alone.",
    p3c: "Before, analyzing the regression for each release could take several days. Now we have it as soon as the run ends. The AI separates failures caused by locator changes from possible bugs, and the team looks at what matters first.",
    careerLabel: "04 / Career",
    careerTitle: "Experience",
    date4: "Feb 2021 – Jan 2023",
    careerAccenture: "My first QA job. In every sprint I designed and ran functional, integration and regression tests, reported defects and helped new people on the team.",
    readExperience: "Learn about my experience →",
    date3: "Mar 2023 – Oct 2024",
    careerMarkmonitor: "This is where I moved into automation. I wrote regression and end-to-end tests with Java and Playwright, in international teams and in English. I also validated APIs with Postman and took part in performance tests with JMeter.",
    date2: "Oct 2024 – Jul 2025",
    careerAllianz: "I automated UI and API tests with Java, Selenium and Cucumber, and set up Docker and Selenium Grid environments to run in parallel. I was also in charge of the automation for one line of business.",
    date1: "Jul 2025 – present",
    careerMinder: "Today I do automation and AI applied to QA: a multi-agent system with Claude Code, a RAG in Java, failure analysis in CI and automatic reports in Teams and Power Apps. I also mentor people on the team.",
    skillsLabel: "05 / Tools and education",
    skillsTitle: "Education",
    education: "Studies",
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
    stackCi: "CI/CD and cloud",
    stackReports: "Reporting and monitoring",
    stackData: "Data and visualization",
    stackProcesses: "Process automation",
    stackAi: "Artificial intelligence and agents",
    stackMethods: "Methods",
    exploratoryData: "exploratory data analysis",
    dataCleaning: "data cleaning and analysis",
    dataViz: "data visualization",
    multiagentSystems: "Multiagent systems",
    generativeAi: "Generative AI",
    functionalAnalysis: "Functional analysis",
    testCaseDesign: "Test case design",
    regressionTesting: "Regression testing",
    defectTracking: "Defect tracking",
    contactLabel: "06 / Contact",
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
    .getElementById("cv-toggle")
    .setAttribute("aria-label", lang === "es" ? "Elegir idioma del CV" : "Choose CV language");
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
  document.title = "Paula Carluccio | AI Automation Engineer";
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
    ? "#14101a"
    : "#f6efe9";
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

// Technology list: main items first, the rest on demand
const stackList = document.getElementById("stack-list"),
  stackToggle = document.getElementById("stack-toggle");
function updateStackToggle() {
  const open = stackToggle.getAttribute("aria-expanded") === "true",
    es = document.documentElement.lang === "es";
  stackToggle.firstElementChild.textContent = open
    ? es
      ? "Ver solo lo principal"
      : "Show only the main ones"
    : es
      ? "Ver todo el stack"
      : "See the full stack";
}
stackToggle.addEventListener("click", () => {
  const open = stackToggle.getAttribute("aria-expanded") !== "true";
  stackToggle.setAttribute("aria-expanded", String(open));
  stackList.classList.toggle("show-all", open);
  updateStackToggle();
});
new MutationObserver(updateStackToggle).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"],
});

// Reveal sections as they enter the viewport
if ("IntersectionObserver" in window) {
  const revealTargets = [
    ...document.querySelectorAll(
      "main section .sectionhead,.demo-shell,#proyectos .project-filters,#proyectos .grid,.timeline,.learning-block,.contact .actions",
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
  preview.loading = "eager";
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
// CV menu: pick Spanish or English after pressing CV
const cvToggle = document.getElementById("cv-toggle"),
  cvList = document.getElementById("cv-list");
function setCvMenu(open) {
  cvList.hidden = !open;
  cvToggle.setAttribute("aria-expanded", String(open));
}
cvToggle.addEventListener("click", () => {
  const open = cvList.hidden;
  setCvMenu(open);
  if (open) cvList.querySelector("a").focus();
});
cvList.addEventListener("click", (event) => {
  if (event.target.closest("a")) setCvMenu(false);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".cv-menu")) setCvMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cvList.hidden) {
    setCvMenu(false);
    cvToggle.focus();
  }
});

// Project details open in a sheet instead of expanding the grid
const projectModal = document.getElementById("project-modal"),
  projectBody = document.getElementById("project-modal-body");
let projectTrigger = null;
document.querySelectorAll("#proyectos .project-card").forEach((card) => {
  card.querySelector("summary").addEventListener("click", (event) => {
    event.preventDefault();
    projectTrigger = event.currentTarget;
    const meta = document.createElement("span"),
      title = document.createElement("h2"),
      intro = document.createElement("p");
    meta.className = "meta";
    meta.textContent = card.querySelector(".meta").textContent;
    title.id = "project-modal-title";
    title.textContent = card.querySelector("h3").textContent;
    intro.className = "project-intro";
    intro.textContent = card.querySelector("summary > p").textContent;
    projectBody.replaceChildren(meta, title, intro);
    card.querySelectorAll(".detail p").forEach((paragraph) => {
      const copy = document.createElement("p");
      copy.textContent = paragraph.textContent;
      projectBody.append(copy);
    });
    projectModal
      .querySelector(".modal-close")
      .setAttribute("aria-label", document.documentElement.lang === "es" ? "Cerrar" : "Close");
    projectModal.showModal();
    projectModal.scrollTop = 0;
  });
});
projectModal
  .querySelector(".modal-close")
  .addEventListener("click", () => projectModal.close());
projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) projectModal.close();
});
projectModal.addEventListener("close", () => projectTrigger?.focus());
new MutationObserver(() => projectModal.open && projectModal.close()).observe(
  document.documentElement,
  { attributes: true, attributeFilter: ["lang"] },
);
