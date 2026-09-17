const pages = {
  accenture: {
    company: "01 · First role",
    role: "QA Analyst",
    period: "Feb 2021 – Jan 2023",
    tools: "Tools and practices",
    back: "← Back to experience",
    all: "← View full career",
    next: "Next: Markmonitor →",
    paragraphs: [
      `Accenture was my first QA job. I started with manual testing on an internal application, taking part in functional analysis, writing test cases and running regression tests. That is where I learned the foundations of the development cycle, how an agile team works and how to communicate an issue so someone else can understand and solve it.`,
      `Starting on the functional side helped me learn to think about what the user needs and what we are actually validating. At the same time, I knew from the beginning that I wanted to code and build a more technical profile, so I kept looking for opportunities to move into automation.`,
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
      `At Markmonitor I made an important technical leap. I went deeper into automation, learned tools such as Postman and JMeter, and worked with tests that ran through Jenkins. I also had to learn a completely new business from scratch, while working in English was a big challenge at first.`,
      `That combination helped me grow the most. Learning a tool was only part of the job: I also had to understand the product, ask questions, investigate and communicate with the team in another language. Over time, I gained much more confidence and autonomy.`,
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
      `At Allianz I worked on the team's automation framework and built its first flow combining UI tests with APIs and database checks. I used APIs to prepare the environment before signing in as the user, then validated the information directly in the database. This gave us more complete coverage across frontend and backend.`,
      `I also owned the automation for one business line. I organized the work, understood priorities, created and maintained test cases, and analyzed execution results. The experience gave me a lot of autonomy and taught me to take responsibility for a complete scope, both technically and in planning.`,
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
      `I joined Minder S.A. with more experience designing automation and working with APIs and databases. Here I expanded that journey: I work on web, API and mobile testing, maintain existing cases, create new scenarios and investigate execution failures.`,
      `Over time I also became interested in everything around the tests. I want the team to understand results without spending time searching in different places. Alongside automation, I suggest improvements to reporting and to how we record and review failures. It feels like a natural step in my career: QA is still my strong foundation, and I increasingly work with data, processes and ideas for applying AI.`,
    ],
    challengeParagraphs: [
      `We realized that checking an execution meant opening the pipeline, downloading its report and reviewing it manually. The team needed a quick shared view. An integrated model had been considered, but we did not have access to an API key, so I looked for a solution with the tools already available.`,
      `I built an execution summary delivered to Teams through a webhook. Then I reused that data by recording it in a structured way in Microsoft Lists with the Microsoft 365 tools we already had. We had previously tracked part of the error review in Excel; now the results and follow-up for each case can live in one place.`,
      `I am proud of this project because it began with a simple need—to see how the pipeline went—and grew into a better way to organize our reviews. It reflects how I like to work: listen to what is slowing the team down, find a practical solution and improve it as we discover what else it can do.`,
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
