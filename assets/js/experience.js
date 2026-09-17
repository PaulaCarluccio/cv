const pages = {
  accenture: {
    company: "01 · First role",
    role: "QA Analyst",
    period: "Feb 2021 – Jan 2023",
    tools: "Technical tools",
    back: "← Back to experience",
    all: "← View full career",
    next: "Next: Markmonitor →",
    paragraphs: [
      `Accenture was my first job in QA. I began with manual testing on an internal application, contributing to functional analysis, writing test cases, and running regression tests. There I learned the basics of the development cycle, how an agile team works, and how to explain an issue clearly enough for someone else to understand and resolve it.`,
      `Starting with functional testing taught me to think about what users need and what we are actually checking. At the same time, I knew I wanted to code and develop a more technical profile, so I looked for opportunities to move into automation.`,
    ],
  },
  markmonitor: {
    company: "02 · Career",
    role: "QA Automation Engineer",
    period: "Mar 2023 – Oct 2024",
    tools: "Technical tools",
    back: "← Back to experience",
    previous: "← Previous: Accenture",
    next: "Next: Allianz →",
    paragraphs: [
      `At Markmonitor, I took a significant step forward technically. I deepened my automation experience, learned to use tools such as Postman and JMeter, and worked on tests run through Jenkins. I also had to learn an unfamiliar business from scratch, and working in English was a major challenge at first.`,
      `That combination helped me grow. Learning the tools was only part of the job: I also needed to understand the product, ask questions, investigate, and communicate with the team in another language. Over time, I became much more confident and independent.`,
    ],
  },
  allianz: {
    company: "03 · Career",
    role: "QA Automation Engineer",
    period: "Oct 2024 – Jul 2025",
    tools: "Technical tools",
    back: "← Back to experience",
    previous: "← Previous: Markmonitor",
    next: "Next: Minder S.A. →",
    paragraphs: [
      `At Allianz, I worked on the team's automation framework and built its first flow combining UI tests, APIs, and database checks. I used APIs to prepare test data before signing in as the user, then checked the results directly in the database. This gave us more complete coverage of both the frontend and backend.`,
      `I was also responsible for automating one business line on my own. I organized the work, set priorities, created and maintained test cases, and analyzed execution results. That experience gave me a lot of autonomy and taught me to take ownership of a complete scope, from the technical work to the planning.`,
    ],
  },
  tulegajo: {
    company: "04 · Current role",
    role: "QA Automation Engineer",
    period: "Jul 2025 – present",
    tools: "Technical tools",
    back: "← Back to experience",
    previous: "← Previous: Allianz",
    next: "View full career →",
    challenges: "Challenges",
    challengeTitle: "Improving pipeline execution tracking",
    paragraphs: [
      `I joined Minder S.A. with more experience designing automation and working with APIs and databases. Here I have expanded on that work: I test web and mobile applications and APIs, maintain existing cases, create new scenarios, and investigate test failures.`,
      `Over time, I also became more involved in what happens around the tests. I want the team to understand the results without having to search in several places. Alongside automation, I propose improvements to reporting and to how we record and review failures. It feels like a natural progression for me: QA remains my foundation, while I increasingly work with data, processes, and ways to apply AI.`,
    ],
    challengeParagraphs: [
      `We realized that checking a run meant opening the pipeline, downloading the report, and reviewing it manually. The team needed a quick view everyone could use. We had considered an integrated model, but did not have access to an API key, so I looked for a solution using the tools we already had.`,
      `I built a summary of each run that reaches Teams through a webhook. Then I put the same data to further use by recording it in a structured way in Microsoft Lists, using our existing Microsoft 365 tools. We had previously tracked part of the error review in Excel; now we can keep the results and follow-up for each case together.`,
      `I am proud of this project because it began with a simple need—seeing how the pipeline run went—and ended up helping us organize our reviews. It reflects how I like to work: listen to what is slowing the team down, find a practical solution, and keep improving it as we see what else it can do.`,
    ],
  },
};
// The URL parameter takes precedence over the saved site language
const lang =
  new URLSearchParams(location.search).get("lang") ||
  localStorage.getItem("pc-language") ||
  "es";
if (lang === "en") {
  const page = pages[document.body.dataset.experience];
  const employer = document.querySelector(".employer-name").textContent;
  document.documentElement.lang = "en";
  document.querySelector(".next-role").setAttribute("aria-label", "Career navigation");
  document.title = `${page.role} at ${employer} | Paula Carluccio`;
  document.querySelector(".company").textContent = page.company;
  document.querySelector("h1").textContent = page.role;
  document.querySelector(".period").textContent = page.period;
  document.querySelector(".back-link").textContent = page.back;
  document.querySelector(".role-tools h2").textContent = page.tools;
  const chipTranslations = {
    "Análisis funcional": "Functional analysis",
    "Diseño de casos de prueba": "Test case design",
    "Pruebas de regresión": "Regression testing",
    "Seguimiento de defectos": "Defect tracking",
  };
  document.querySelectorAll(".role-tools .chip").forEach((chip) => {
    if (chipTranslations[chip.textContent])
      chip.textContent = chipTranslations[chip.textContent];
  });
  document
    .querySelectorAll(".experience-copy:first-of-type p")
    .forEach((node, index) => (node.textContent = page.paragraphs[index]));
  const links = document.querySelectorAll(".next-role a");
  links.forEach((link) => {
    const url = new URL(link.href);
    url.searchParams.set("lang", "en");
    link.href = url;
  });
  links[0].textContent = page.previous || page.all;
  links[1].textContent = page.next;
  if (page.challengeParagraphs) {
    document.querySelector(".challenges>h2").textContent = page.challenges;
    document.querySelector(".challenges h3").textContent = page.challengeTitle;
    document
      .querySelectorAll(".challenges p")
      .forEach((node, index) => (node.textContent = page.challengeParagraphs[index]));
  }
}
