// Interactive demos. Every name, number and ticket here is invented for illustration.
// They show how my tools work; none of this is data from a real project.
const T = (es, en) => ({ es, en });
const kinds = {
  locator: T("Cambió un locator", "Locator changed"),
  bug: T("Posible bug del producto", "Possible product bug"),
  env: T("Problema de ambiente", "Environment issue"),
  unknown: T("Indeterminado", "Undetermined"),
  none: T("Sin clasificar", "Unclassified"),
};
const conf = {
  high: T("Alta", "High"),
  medium: T("Media", "Medium"),
  low: T("Baja", "Low"),
};
const evidenceNames = {
  screenshot: T("Captura de pantalla", "Screenshot"),
  dom: T("Cómo está armada la página", "How the page is built"),
  log: T("Registro de la ejecución", "Run log"),
  code: T("El código del test (solo lectura)", "The test code (read-only)"),
};
const failures = [
  {
    id: "login",
    module: T("Login", "Login"),
    role: "client",
    test: T("Login con usuario válido", "Login with a valid user"),
    error: "NoSuchElementException: #btn-ingresar",
    title: T("Login: no se encuentra el botón Ingresar", "Login: Sign in button not found"),
    reason: T(
      "La pantalla de login se ve bien, pero el test no encuentra el botón: cambió cómo se identifica.",
      "The login page looks fine, but the test can't find the button: how it is identified has changed.",
    ),
    ai: { kind: "locator", conf: "high", evidence: ["screenshot", "dom", "code"] },
    rules: { kind: "locator" },
  },
  {
    id: "cart",
    module: T("Carrito", "Cart"),
    role: "client",
    test: T("Agregar producto al carrito", "Add a product to the cart"),
    error: 'TimeoutException: waiting for [data-test="add-cart"]',
    title: T("Carrito: no aparece el botón Agregar", "Cart: Add button not found"),
    reason: T(
      "El botón se ve en la captura, pero con otro atributo. Antes del último cambio de pantalla el caso pasaba.",
      "The button shows up in the screenshot, but with a different attribute. The case passed before the last screen change.",
    ),
    ai: { kind: "locator", conf: "medium", evidence: ["screenshot", "dom", "log"] },
    rules: { kind: "locator" },
  },
  {
    id: "total",
    module: T("Checkout", "Checkout"),
    role: "client",
    test: T("Total con descuento aplicado", "Total with discount applied"),
    error: "AssertionError: expected 90.00 but was 100.00",
    title: T("Checkout: el descuento no se aplica al total", "Checkout: discount not applied to the total"),
    reason: T(
      "La pantalla muestra 100 y el caso espera 90: la app hace algo distinto de lo que se espera.",
      "The screen shows 100 and the case expects 90: the app does something different from what is expected.",
    ),
    ai: { kind: "bug", conf: "medium", evidence: ["screenshot", "dom", "code"] },
    rules: { kind: "bug" },
  },
  {
    id: "contact",
    module: T("Contacto", "Contact"),
    role: "admin",
    test: T("Enviar formulario de contacto", "Submit the contact form"),
    error: "HTTP 503 Service Unavailable",
    title: T("Contacto: el servidor no respondió", "Contact: the server did not respond"),
    reason: T(
      "El ambiente de pruebas devolvió un error 503; no se llegó a probar la pantalla.",
      "The test environment returned a 503 error; the screen was never really tested.",
    ),
    ai: { kind: "env", conf: "high", evidence: ["screenshot", "log"] },
    rules: { kind: "env" },
  },
  {
    id: "copy",
    module: T("Checkout", "Checkout"),
    role: "client",
    test: T("Mensaje de confirmación de compra", "Purchase confirmation message"),
    error: 'AssertionError: "Gracias por tu compra" != "¡Gracias por tu compra!"',
    title: T("Checkout: cambió el texto de confirmación", "Checkout: confirmation text changed"),
    reason: T(
      "El texto es casi igual. Puede ser un cambio de redacción o un defecto, y con lo que hay no se puede saber.",
      "The text is almost the same. It could be a wording change or a defect, and the evidence can't tell which.",
    ),
    ai: { kind: "unknown", conf: "low", evidence: ["screenshot", "code"] },
    rules: { kind: "none" },
  },
];
const kindOrder = { bug: 0, unknown: 1, none: 1, env: 2, locator: 3 };
const ui = {
  tabs: {
    triage: T("1. Análisis del reporte", "1. Report analysis"),
    teams: T("2. Aviso en Teams", "2. Teams notification"),
    plugin: T("3. Automatizar con el plugin", "3. Automating with the plugin"),
    func: T("4. Análisis funcional", "4. Functional analysis"),
    flow: T("5. Cómo se conecta todo", "5. How it all connects"),
  },
  note: T(
    "Es una simulación con datos inventados. No son resultados ni tickets reales de ningún proyecto.",
    "This is a simulation with made-up data. None of it is real results or tickets from any project.",
  ),
  triage: {
    intro: T(
      "Cuando termina una ejecución, una IA mira las fallas y las ordena por tipo. Probalo: tocá “Analizar” y después elegí una falla.",
      "When a test run ends, an AI looks at the failures and sorts them by type. Try it: press “Analyze”, then pick a failure.",
    ),
    run: T("Ejecución de ejemplo · 5 fallas", "Sample run · 5 failures"),
    analyze: T("Analizar con IA", "Analyze with AI"),
    reset: T("Reiniciar", "Reset"),
    modeLabel: T("Quién analiza", "Who analyzes"),
    modeAi: T("IA (Claude Code)", "AI (Claude Code)"),
    modeRules: T("Respaldo por reglas", "Rule-based fallback"),
    steps: [
      T("Agrupando las fallas parecidas…", "Grouping similar failures…"),
      T("Mirando la captura, la página y el registro de cada grupo…", "Looking at the screenshot, the page and the log of each group…"),
      T("Clasificando, sin poder cambiar nada…", "Classifying, with no way to change anything…"),
    ],
    done: T(
      "Listo. Quedó primero lo que hay que mirar sí o sí.",
      "Done. What needs a look comes first.",
    ),
    pending: T("Sin analizar", "Not analyzed"),
    pick: T("Elegí una falla para ver qué encontró.", "Pick a failure to see what it found."),
    rulesNote: T(
      "Sin IA el reporte sale igual: unas reglas simples clasifican lo que reconocen y el resto queda para una persona.",
      "Without the AI the report still goes out: a few simple rules classify what they recognize and the rest is left for a person.",
    ),
    confidence: T("Confianza", "Confidence"),
    noConf: T("Las reglas no informan confianza", "Rules don't report a confidence level"),
    evidence: T("Qué miró", "What it looked at"),
    reasonLabel: T("Por qué", "Why"),
    json: T("Ver como JSON", "View as JSON"),
    hideJson: T("Ocultar JSON", "Hide JSON"),
    readOnly: T(
      "Solo puede leer. No ejecuta nada ni modifica archivos.",
      "It can only read. It doesn't run anything or change any file.",
    ),
    ruleTip: T(
      "Si dudan entre locator y bug, queda como bug para que alguien lo mire.",
      "If it can't tell a locator from a bug, it says bug so someone takes a look.",
    ),
  },
  teams: {
    intro: T(
      "El resultado de cada ejecución le llega al equipo por Teams, sin que nadie tenga que abrir el pipeline. Tocá “Terminar la ejecución”.",
      "Each run's result reaches the team in Teams, with nobody opening the pipeline. Press “Finish the run”.",
    ),
    start: T("Terminar la ejecución", "Finish the run"),
    again: T("Repetir", "Replay"),
    steps: [
      T("Termina la ejecución en el pipeline", "The run finishes in the pipeline"),
      T("Se juntan los resultados", "Results are collected"),
      T("Se analizan las fallas", "Failures are analyzed"),
      T("Se arma la tarjeta", "The card is built"),
      T("Se manda al webhook del canal", "It is sent to the channel webhook"),
    ],
    empty: T(
      "La tarjeta aparece acá cuando termina la ejecución.",
      "The card shows up here when the run ends.",
    ),
    channel: T("Canal · Alertas de QA", "Channel · QA alerts"),
    bot: T("Bot de QA", "QA bot"),
    cardTitle: T("Regresión web · resumen", "Web regression · summary"),
    cardSub: T("Hoy, 08:30 · datos de ejemplo", "Today, 08:30 · sample data"),
    passed: T("Pasaron", "Passed"),
    failed: T("Fallaron", "Failed"),
    rate: T("Éxito", "Pass rate"),
    withAi: T("Mostrar análisis de IA", "Show AI analysis"),
    roles: { client: T("Cliente", "Client"), admin: T("Administrador", "Admin") },
    openHint: T("Tocá un módulo con fallas para ver el detalle.", "Tap a module with failures to see the detail."),
    ticket: T("Ticket", "Ticket"),
    limit: T(
      "Teams acepta mensajes de unos 28 KB. Si la tarjeta no entra, acorto los textos y corto las listas largas.",
      "Teams accepts messages of about 28 KB. If the card doesn't fit, I shorten the texts and trim long lists.",
    ),
  },
  plugin: {
    intro: T(
      "Armé un plugin de Claude Code para crear y arreglar automatizaciones. Elegí qué le pedís y mirá qué hace paso a paso.",
      "I built a Claude Code plugin to create and fix test automation. Pick what you ask for and see what it does, step by step.",
    ),
    run: T("Ejecutar", "Run"),
    again: T("Repetir", "Replay"),
    cause: T("¿Por qué falla el test?", "Why is the test failing?"),
    agents: T("Los agentes que trabajan por detrás", "The agents working behind the scenes"),
    humanNote: T(
      "Siempre pasa por una persona: revisa el resultado antes de darlo por terminado.",
      "A person always reviews the result before it counts as done.",
    ),
  },
  func: {
    intro: T(
      "Cuando una épica queda lista para QA, otro plugin lee Jira y Figma y deja preparados el análisis y los casos de prueba. Recorré las etapas y tocá una historia.",
      "When an epic is ready for QA, another plugin reads Jira and Figma and prepares the analysis and test cases. Walk through the stages and tap a story.",
    ),
    mode: T("Modo", "Mode"),
    draft: T("Borrador", "Draft"),
    live: T("Real", "Live"),
    draftText: T(
      "Muestra todo lo que haría, pero no crea nada en Jira ni en Xray.",
      "Shows everything it would do, but creates nothing in Jira or Xray.",
    ),
    liveText: T(
      "Crea el ticket de análisis y los casos, en una carpeta “Por revisar”.",
      "Creates the analysis ticket and the test cases, in a “To review” folder.",
    ),
    readOnly: T(
      "No cambia ni comenta los tickets originales: solo los lee.",
      "It never edits or comments on the original tickets: it only reads them.",
    ),
    pickStory: T("Tocá una historia para ver sus casos.", "Tap a story to see its cases."),
    pickCase: T("Tocá un caso para ver cómo queda en Gherkin.", "Tap a case to see how it looks in Gherkin."),
    stories: T("Historias", "Stories"),
    criteria: T("Criterios", "Criteria"),
    manual: T("Manual", "Manual"),
    auto: T("Solo automation", "Automation only"),
    manualWhy: T(
      "Cubre algo que no se ve en otro caso: hay que ejecutarlo a mano.",
      "It covers something no other case shows: it has to be run by hand.",
    ),
    autoWhy: T(
      "Se verifica de paso al ejecutar otro caso manual, o aporta poco hacerlo a mano.",
      "It gets checked along the way when running another manual case, or it adds little by hand.",
    ),
    clarify: T("Puntos a aclarar con la PO", "Points to clear up with the PO"),
    clarifyText: T(
      "¿Cuántos turnos puede reservar una persona por día? La épica no lo dice, así que no se arma un caso con una respuesta inventada.",
      "How many appointments can one person book per day? The epic doesn't say, so no case is written with a made-up answer.",
    ),
    rule: T(
      "Un caso por funcionalidad y una sola validación por caso.",
      "One case per feature and a single check per case.",
    ),
  },
  flow: {
    intro: T(
      "Así se conectan las piezas, de punta a punta. Tocá cada paso.",
      "This is how the pieces connect, end to end. Tap each step.",
    ),
    step: T("Paso", "Step"),
    of: T("de", "of"),
    prev: T("Anterior", "Previous"),
    next: T("Siguiente", "Next"),
    before: T("Antes", "Before"),
    after: T("Ahora", "Now"),
    beforeText: T(
      "Para saber cómo había salido una ejecución había que entrar al pipeline, bajar el reporte y revisarlo a mano. Analizar la regresión de un release podía llevar varios días.",
      "To see how a run went, someone had to open the pipeline, download the report and read it by hand. Analyzing a release regression could take several days.",
    ),
    afterText: T(
      "El análisis está listo apenas termina la ejecución. La IA separa las fallas por cambio de locator de los posibles bugs, y el equipo mira primero lo que importa.",
      "The analysis is ready as soon as the run ends. The AI separates locator changes from possible bugs, and the team looks at what matters first.",
    ),
    steps: [
      {
        title: T("Corre en CI", "Runs in CI"),
        text: T(
          "Las pruebas corren en Bitbucket Pipelines, en paralelo, con reintentos y controles de calidad.",
          "Tests run in Bitbucket Pipelines, in parallel, with retries and quality gates.",
        ),
        chips: ["Bitbucket Pipelines", "Selenium", "Cucumber", "Rest Assured"],
      },
      {
        title: T("Se juntan los resultados", "Results are collected"),
        text: T(
          "Un script en Python toma el reporte de cada ejecución y deja los datos ordenados.",
          "A Python script takes each run's report and leaves the data tidy.",
        ),
        chips: ["Python"],
      },
      {
        title: T("Claude Code analiza las fallas", "Claude Code analyzes failures"),
        text: T(
          "Dentro del pipeline, Claude Code agrupa las fallas, mira la captura, cómo está armada la página y el registro, y las clasifica con un nivel de confianza. Solo puede leer.",
          "Inside the pipeline, Claude Code groups failures, looks at the screenshot, how the page is built and the run log, and classifies them with a confidence level. It can only read.",
        ),
        chips: ["Claude Code", T("Solo lectura", "Read-only")],
      },
      {
        title: T("Respaldo por reglas", "Rule-based fallback"),
        text: T(
          "Si la IA no está disponible, el reporte sale igual con una clasificación por reglas.",
          "If the AI isn't available, the report still goes out with a rule-based classification.",
        ),
        chips: [T("Reglas", "Rules")],
      },
      {
        title: T("Aviso y registro", "Notification and log"),
        text: T(
          "Python y Power Automate mandan el resumen a Teams con el análisis y los links a Jira, y los resultados quedan guardados. Una app en Power Apps muestra los resultados por build, las fallas por módulo y los bugs conocidos.",
          "Python and Power Automate send the summary to Teams with the analysis and Jira links, and the results are saved. A Power Apps app shows results by build, failures by module and known bugs.",
        ),
        chips: ["Python", "Power Automate", "Power Apps", "Teams", "Jira"],
      },
      {
        title: T("Una persona decide", "A person decides"),
        text: T(
          "Las fallas ambiguas y los posibles bugs los revisa alguien del equipo. Lo que es de automation se arregla con el plugin, con un RAG hecho en Java que le da al agente el contexto del proyecto.",
          "Ambiguous failures and possible bugs are reviewed by someone on the team. What's an automation issue gets fixed with the plugin, using a RAG built in Java that gives the agent the project context.",
        ),
        chips: ["Plugin", "RAG", "Java"],
      },
    ],
  },
};
const teamsModules = [
  { id: "login", role: "client", name: T("Login", "Login"), ok: 11, fail: ["login"] },
  { id: "cart", role: "client", name: T("Carrito", "Cart"), ok: 19, fail: ["cart"] },
  { id: "checkout", role: "client", name: T("Checkout", "Checkout"), ok: 16, fail: ["total", "copy"] },
  { id: "users", role: "admin", name: T("Usuarios", "Users"), ok: 30, fail: [] },
  { id: "contact", role: "admin", name: T("Contacto", "Contact"), ok: 10, fail: ["contact"] },
];
const ticketFor = { login: "QA-101", cart: "QA-102", total: "QA-117", copy: "QA-118", contact: "QA-124" };
const pluginCommands = {
  create: {
    label: T("Crear un test", "Create a test"),
    sample: T(
      "Automatizá este caso manual: entrar a “Mis pedidos”, filtrar por estado y verificar que se vean solo los pedidos con ese estado.",
      "Automate this manual case: open “My orders”, filter by status and check that only orders with that status are shown.",
    ),
    summary: T(
      "Se usa para automatizar un caso manual. Si no le pasás el número del ticket, te lo pide antes de escribir.",
      "It automates a manual case. If you don't give it the ticket number, it asks before writing anything.",
    ),
    steps: [
      T("Analiza el caso y busca qué se puede reutilizar", "Analyzes the case and looks for what can be reused"),
      T("Escribe el feature, los steps, las pages y los locators que faltan", "Writes the missing feature, steps, pages and locators"),
      T("Compila el proyecto", "Compiles the project"),
      T("Lo valida con 2 corridas seguidas y 1 en paralelo", "Validates it with 2 runs in a row and 1 in parallel"),
      T("Un agente revisor controla el resultado", "A reviewer agent checks the result"),
      T("Te muestra el resumen para que lo revises", "Shows you the summary for your review"),
    ],
    result: T(
      "Creó 1 feature y 1 page nueva. Reutilizó 7 steps que ya existían. Las 3 corridas pasaron. El revisor lo aprobó.",
      "Created 1 feature and 1 new page. Reused 7 steps that already existed. All 3 runs passed. The reviewer approved it.",
    ),
  },
  repair: {
    label: T("Arreglar un test", "Fix a test"),
    sample: T("Este test falla solo en el pipeline. Fijate por qué y arreglalo si el problema es de la automatización.", "This test only fails in the pipeline. Find out why and fix it if the problem is in the automation."),
    summary: T(
      "Reproduce la falla, la diagnostica y la clasifica. Solo arregla el test si el problema es de automation.",
      "It reproduces the failure, diagnoses and classifies it. It only fixes the test if the problem is in the automation.",
    ),
  },
  locators: {
    label: T("Arreglar locators de un módulo", "Fix a module's locators"),
    sample: T("Corré el módulo de carrito y arreglá solo las fallas que sean de locators.", "Run the cart module and fix only the failures caused by locators."),
    summary: T(
      "Corre un módulo entero y compara con una copia de la pantalla tal como estaba al fallar, para ver cuáles se rompieron por un locator. Arregla solo esos.",
      "It runs a whole module and compares against a copy of the screen as it was when it failed, to see which tests broke because of a locator. It fixes only those.",
    ),
    steps: [
      T("Corre los escenarios del módulo", "Runs the module's scenarios"),
      T("Mira una copia de la pantalla en el momento de cada falla", "Looks at a copy of the screen at the moment of each failure"),
      T("Separa las que son de locator de las demás", "Splits locator failures from the rest"),
      T("Arregla solo las de locator", "Fixes only the locator ones"),
      T("Valida de nuevo", "Validates again"),
      T("Te devuelve el resto con la evidencia, sin tocarlo", "Hands the rest back with the evidence, untouched"),
    ],
    result: T(
      "Arregló 3 locators. Dejó 2 fallas sin tocar: una era un bug y la otra un problema de datos. Las dos vienen con su evidencia.",
      "Fixed 3 locators. Left 2 failures untouched: one was a bug and the other a data issue. Both come with their evidence.",
    ),
  },
  close: {
    label: T("Cerrar un caso", "Close a case"),
    sample: T("Cerrá este caso y guardá cuánto costó hacerlo.", "Close this case and record what it took to get there."),
    summary: T(
      "Cuando confirmás que el caso quedó terminado, lo cierra y guarda cuánto costó hacerlo.",
      "When you confirm the case is done, it closes it and records what it took to get there.",
    ),
    steps: [
      T("Verifica que se cumpla la definición de terminado", "Checks the definition of done"),
      T("Calcula los tokens usados, por agente y por modelo", "Counts the tokens used, per agent and per model"),
      T("Calcula el tiempo total y el activo", "Works out total and active time"),
      T("Agrega una fila al registro de métricas", "Adds a row to the metrics log"),
    ],
    result: T(
      "Caso cerrado. Quedó anotado cuánto tardó y cuánto se usó, para comparar con los próximos.",
      "Case closed. How long it took and how much was used is on record, to compare against the next ones.",
    ),
  },
};
const repairCauses = {
  locator: {
    label: T("Cambió un locator", "A locator changed"),
    fix: true,
    result: T(
      "Es un problema de automation: arregló el locator y lo validó con 3 corridas seguidas, 1 en paralelo y los escenarios relacionados.",
      "It's an automation problem: it fixed the locator and validated with 3 runs in a row, 1 in parallel and the related scenarios.",
    ),
  },
  bug: {
    label: T("Es un bug del producto", "It's a product bug"),
    fix: false,
    result: T(
      "No toca el test: el test está bien, la app falla. Te devuelve un informe con la evidencia para el equipo.",
      "It leaves the test alone: the test is right, the app is failing. You get a report with the evidence for the team.",
    ),
  },
  data: {
    label: T("Los datos de prueba están mal", "The test data is wrong"),
    fix: false,
    result: T(
      "No toca el test: el problema son los datos. Te devuelve un informe con la evidencia.",
      "It leaves the test alone: the problem is the data. You get a report with the evidence.",
    ),
  },
};
const agentList = [
  T("Analiza casos manuales", "Analyzes manual cases"),
  T("Genera tests", "Generates tests"),
  T("Repara tests", "Repairs tests"),
  T("Investiga fallas", "Investigates failures"),
  T("Triage de locators", "Locator triage"),
  T("Revisa el resultado", "Reviews the result"),
];
const epic = {
  title: T("Reserva de turnos", "Appointment booking"),
  stages: [
    {
      name: T("Épica en Jira", "Epic in Jira"),
      text: T(
        "Detecta las épicas y los errores que están listos para QA y lee toda su documentación: descripción, historias, criterios y comentarios.",
        "It finds the epics and bugs that are ready for QA and reads all the documentation: description, stories, criteria and comments.",
      ),
    },
    {
      name: T("Pantallas en Figma", "Screens in Figma"),
      text: T(
        "Mira el recorrido de pantallas para entender qué ve la persona. Los textos esperados salen de Jira o de Figma, nunca del código del producto.",
        "It looks at the screen flow to understand what the user sees. Expected texts come from Jira or Figma, never from the product's code.",
      ),
    },
    {
      name: T("Análisis funcional", "Functional analysis"),
      text: T(
        "Crea un ticket con de qué se trata la épica, todas las historias con sus criterios y sus casos, y los puntos que hay que aclarar.",
        "It creates a ticket with what the epic is about, every story with its criteria and cases, and the points to clear up.",
      ),
    },
    {
      name: T("Casos en Xray", "Cases in Xray"),
      text: T(
        "Escribe los casos en Gherkin, uno por funcionalidad y con una sola validación, listos para probar a mano y para automatizar.",
        "It writes the cases in Gherkin, one per feature and with a single check, ready to test by hand and to automate.",
      ),
    },
  ],
  stories: [
    {
      id: "date",
      name: T("Elegir una fecha", "Pick a date"),
      criteria: [
        T("Solo se pueden elegir fechas disponibles", "Only available dates can be picked"),
        T("Las fechas pasadas aparecen deshabilitadas", "Past dates appear disabled"),
      ],
      cases: [
        {
          id: "c1",
          kind: "manual",
          name: T("Elegir una fecha disponible", "Pick an available date"),
          gherkin: T(
            'Escenario: Elegir una fecha disponible\n  Dado que estoy en "Reservar turno"\n  Cuando elijo una fecha disponible\n  Entonces la fecha queda seleccionada',
            'Scenario: Pick an available date\n  Given I am on "Book appointment"\n  When I pick an available date\n  Then the date is selected',
          ),
        },
        {
          id: "c2",
          kind: "manual",
          name: T("No se puede elegir una fecha pasada", "A past date can't be picked"),
          gherkin: T(
            'Escenario: Fecha pasada deshabilitada\n  Dado que estoy en "Reservar turno"\n  Cuando miro el calendario\n  Entonces las fechas pasadas están deshabilitadas',
            'Scenario: Past date disabled\n  Given I am on "Book appointment"\n  When I look at the calendar\n  Then past dates are disabled',
          ),
        },
        {
          id: "c3",
          kind: "auto",
          name: T("Una fecha ocupada aparece deshabilitada", "A booked date appears disabled"),
          gherkin: T(
            'Escenario: Fecha ocupada deshabilitada\n  Dado que hay una fecha sin turnos libres\n  Cuando miro el calendario\n  Entonces esa fecha está deshabilitada',
            'Scenario: Booked date disabled\n  Given a date has no free slots\n  When I look at the calendar\n  Then that date is disabled',
          ),
        },
      ],
    },
    {
      id: "confirm",
      name: T("Confirmar la reserva", "Confirm the booking"),
      criteria: [
        T("Al confirmar se muestra un mensaje de éxito", "A success message is shown on confirm"),
        T("Al cancelar no se reserva nada", "Nothing is booked on cancel"),
      ],
      cases: [
        {
          id: "c4",
          kind: "manual",
          name: T("Confirmar la reserva", "Confirm the booking"),
          gherkin: T(
            'Escenario: Confirmar la reserva\n  Dado que elegí una fecha disponible\n  Cuando confirmo la reserva\n  Entonces veo el mensaje "Turno reservado"',
            'Scenario: Confirm the booking\n  Given I picked an available date\n  When I confirm the booking\n  Then I see the message "Appointment booked"',
          ),
        },
        {
          id: "c5",
          kind: "auto",
          name: T("Cancelar en la confirmación", "Cancel on the confirmation"),
          gherkin: T(
            'Escenario: Cancelar en la confirmación\n  Dado que estoy en la confirmación\n  Cuando cancelo\n  Entonces no se crea ninguna reserva',
            'Scenario: Cancel on the confirmation\n  Given I am on the confirmation\n  When I cancel\n  Then no booking is created',
          ),
        },
      ],
    },
    {
      id: "mine",
      name: T("Ver mis turnos", "See my appointments"),
      criteria: [
        T("El turno nuevo aparece en la lista", "The new appointment appears in the list"),
        T("La lista se puede filtrar por estado", "The list can be filtered by status"),
      ],
      cases: [
        {
          id: "c6",
          kind: "manual",
          name: T("El turno nuevo aparece en la lista", "The new appointment appears in the list"),
          gherkin: T(
            'Escenario: El turno aparece en la lista\n  Dado que reservé un turno\n  Cuando entro a "Mis turnos"\n  Entonces veo el turno en la lista',
            'Scenario: The appointment shows in the list\n  Given I booked an appointment\n  When I open "My appointments"\n  Then I see the appointment in the list',
          ),
        },
        {
          id: "c7",
          kind: "manual",
          name: T("Filtrar por estado (varios valores)", "Filter by status (several values)"),
          gherkin: T(
            'Esquema del escenario: Filtrar por estado\n  Dado que estoy en "Mis turnos"\n  Cuando filtro por "<estado>"\n  Entonces veo solo turnos "<estado>"\n  Ejemplos:\n    | estado    |\n    | Pendiente |\n    | Cancelado |',
            'Scenario Outline: Filter by status\n  Given I am on "My appointments"\n  When I filter by "<status>"\n  Then I only see "<status>" appointments\n  Examples:\n    | status    |\n    | Pending   |\n    | Cancelled |',
          ),
        },
      ],
    },
  ],
};
const demoRoot = document.getElementById("demo-root");
if (demoRoot) {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const lang = () => (document.documentElement.lang === "en" ? "en" : "es");
  const tr = (value) => (typeof value === "string" ? value : value[lang()]);
  const state = {
    tab: "triage",
    triage: { analyzed: false, running: false, stepText: "", mode: "ai", selected: null, json: false },
    teams: { phase: -1, running: false, ai: true, open: "checkout" },
    plugin: { cmd: "create", cause: "locator", step: -1, running: false, done: false },
    func: { stage: 0, story: null, case: null, mode: "draft" },
    flow: { step: 0, view: "after" },
  };
  const el = (tag, attrs = {}, ...kids) => {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (key === "class") node.className = value;
      else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
      else if (value === true) node.setAttribute(key, "");
      else if (value !== false && value != null) node.setAttribute(key, value);
    }
    kids.flat().forEach((kid) => {
      if (kid == null) return;
      node.append(kid.nodeType ? kid : document.createTextNode(kid));
    });
    return node;
  };
  const live = el("p", { class: "sr-only", role: "status", "aria-live": "polite" });
  demoRoot.after(live);
  const announce = (message) => (live.textContent = message);
  const wait = (ms) => (reduceMotion.matches ? 0 : ms);
  const segmented = (label, options, current, onPick, disabled = false) =>
    el(
      "div",
      { class: "demo-mode", role: "group", "aria-label": label },
      options.map(([value, text]) =>
        el(
          "button",
          {
            type: "button",
            "aria-pressed": String(current === value),
            disabled,
            onclick: () => onPick(value),
          },
          text,
        ),
      ),
    );
  const badge = (kind, text) => el("span", { class: "demo-badge kind-" + kind }, text);
  /* ---------- 1. Report analysis ---------- */
  function resultOf(failure, mode) {
    return mode === "ai" ? failure.ai : { ...failure.rules, conf: null, evidence: [] };
  }
  function renderTriage() {
    const s = state.triage;
    const u = ui.triage;
    const rows = [...failures];
    if (s.analyzed)
      rows.sort(
        (a, b) =>
          kindOrder[resultOf(a, s.mode).kind] - kindOrder[resultOf(b, s.mode).kind] ||
          failures.indexOf(a) - failures.indexOf(b),
      );
    const selected = failures.find((f) => f.id === s.selected);
    const list = el(
      "ul",
      { class: "demo-list", "aria-label": tr(u.run) },
      rows.map((failure) => {
        const info = resultOf(failure, s.mode);
        const active = s.analyzed && failure.id === s.selected;
        return el(
          "li",
          {},
          el(
            "button",
            {
              type: "button",
              class: "demo-row" + (active ? " is-active" : ""),
              "aria-pressed": String(active),
              disabled: !s.analyzed,
              onclick: () => {
                s.selected = failure.id;
                render();
                demoRoot.querySelector(".demo-row.is-active")?.focus();
              },
            },
            el(
              "span",
              { class: "demo-row-main" },
              el("strong", {}, tr(failure.test)),
              el("span", { class: "demo-module" }, tr(failure.module)),
              el("code", {}, failure.error),
            ),
            badge(s.analyzed ? info.kind : "pending", s.analyzed ? tr(kinds[info.kind]) : tr(u.pending)),
          ),
        );
      }),
    );
    let detail;
    if (s.analyzed && selected) {
      const info = resultOf(selected, s.mode);
      const json = JSON.stringify(
        {
          grupo: selected.id,
          clasificacion: { locator: "LOCATOR_CHANGED", bug: "PRODUCT_BUG", env: "ENVIRONMENT", unknown: "INDETERMINADO", none: "SIN_CLASIFICAR" }[info.kind],
          confianza: info.conf ? { high: "alta", medium: "media", low: "baja" }[info.conf] : null,
          titulo: tr(selected.title),
          motivo: tr(selected.reason),
        },
        null,
        2,
      );
      detail = el(
        "div",
        { class: "demo-detail" },
        badge(info.kind, tr(kinds[info.kind])),
        el("h3", {}, tr(selected.title)),
        el("p", {}, tr(selected.reason)),
        el(
          "dl",
          {},
          el("dt", {}, tr(u.confidence)),
          el("dd", {}, info.conf ? tr(conf[info.conf]) : tr(u.noConf)),
          s.mode === "ai"
            ? [
                el("dt", {}, tr(u.evidence)),
                el(
                  "dd",
                  {},
                  el(
                    "ul",
                    { class: "demo-sources" },
                    info.evidence.map((key) => el("li", {}, tr(evidenceNames[key]))),
                  ),
                ),
              ]
            : null,
        ),
        el(
          "button",
          {
            type: "button",
            class: "demo-link",
            "aria-expanded": String(s.json),
            onclick: () => {
              s.json = !s.json;
              render();
            },
          },
          s.json ? tr(u.hideJson) : tr(u.json),
        ),
        s.json ? el("pre", { class: "demo-code" }, json) : null,
      );
    } else {
      detail = el(
        "div",
        { class: "demo-detail is-empty" },
        el("p", {}, s.analyzed ? tr(u.pick) : tr(u.readOnly)),
      );
    }
    return el(
      "div",
      { class: "demo-pane" },
      el("p", { class: "demo-intro" }, tr(u.intro)),
      el(
        "div",
        { class: "demo-controls" },
        el(
          "button",
          { type: "button", class: "btn primary", disabled: s.running || s.analyzed, onclick: runTriage },
          tr(u.analyze),
        ),
        s.analyzed
          ? el(
              "button",
              {
                type: "button",
                class: "btn secondary",
                onclick: () => {
                  Object.assign(s, { analyzed: false, selected: null, stepText: "", json: false });
                  render();
                },
              },
              tr(u.reset),
            )
          : null,
      ),
      el("p", { class: "demo-status" }, s.running ? s.stepText : s.analyzed ? tr(u.done) : ""),
      el("div", { class: "demo-split" }, list, detail),
    );
  }
  function runTriage() {
    const s = state.triage;
    s.running = true;
    s.selected = null;
    let index = 0;
    const tick = () => {
      if (index < ui.triage.steps.length) {
        s.stepText = tr(ui.triage.steps[index++]);
        announce(s.stepText);
        render();
        setTimeout(tick, wait(650));
      } else {
        s.running = false;
        s.analyzed = true;
        announce(tr(ui.triage.done));
        render();
      }
    };
    tick();
  }
  /* ---------- 2. Teams notification ---------- */
  function renderTeams() {
    const s = state.teams;
    const u = ui.teams;
    const posted = s.phase >= u.steps.length - 1 && !s.running;
    const failed = teamsModules.reduce((sum, m) => sum + m.fail.length, 0);
    const passed = teamsModules.reduce((sum, m) => sum + m.ok, 0);
    const stepList = el(
      "ol",
      { class: "demo-steps" },
      u.steps.map((text, index) =>
        el(
          "li",
          { class: index <= s.phase ? "is-done" : index === s.phase + 1 && s.running ? "is-now" : "" },
          el("span", { class: "demo-tick", "aria-hidden": "true" }, index <= s.phase ? "✓" : String(index + 1)),
          tr(text),
        ),
      ),
    );
    let card;
    if (!posted) {
      card = el("div", { class: "teams-empty" }, tr(u.empty));
    } else {
      const roles = ["client", "admin"].map((role) =>
        el(
          "div",
          { class: "teams-role" },
          el("h4", {}, tr(u.roles[role])),
          teamsModules
            .filter((m) => m.role === role)
            .map((m) => {
              const open = s.open === m.id && m.fail.length > 0;
              return el(
                "div",
                { class: "teams-module" },
                el(
                  "button",
                  {
                    type: "button",
                    class: "teams-module-row",
                    "aria-expanded": String(open),
                    disabled: m.fail.length === 0,
                    onclick: () => {
                      s.open = open ? null : m.id;
                      render();
                    },
                  },
                  el("span", {}, tr(m.name)),
                  el(
                    "span",
                    { class: "teams-counts" },
                    el("span", { class: "ok" }, `✓ ${m.ok}`),
                    m.fail.length ? el("span", { class: "ko" }, `✕ ${m.fail.length}`) : null,
                  ),
                ),
                open
                  ? el(
                      "ul",
                      { class: "teams-failures" },
                      m.fail.map((id) => {
                        const f = failures.find((x) => x.id === id);
                        const info = f.ai;
                        return el(
                          "li",
                          {},
                          el("strong", {}, tr(f.test)),
                          el("span", { class: "demo-small" }, ` · ${tr(u.ticket)} ${ticketFor[id]}`),
                          s.ai
                            ? el(
                                "span",
                                { class: "teams-ai" },
                                badge(info.kind, tr(kinds[info.kind])),
                                el("span", {}, tr(f.reason)),
                              )
                            : el("code", {}, f.error),
                        );
                      }),
                    )
                  : null,
              );
            }),
        ),
      );
      card = el(
        "div",
        { class: "teams-card" },
        el("h3", {}, tr(u.cardTitle)),
        el("p", { class: "demo-small" }, tr(u.cardSub)),
        el(
          "div",
          { class: "num-tiles" },
          el("div", { class: "num ok" }, el("strong", {}, String(passed)), tr(u.passed)),
          el("div", { class: "num ko" }, el("strong", {}, String(failed)), tr(u.failed)),
          el("div", { class: "num" }, el("strong", {}, `${Math.round((passed / (passed + failed)) * 100)}%`), tr(u.rate)),
        ),
        roles,
        el("p", { class: "demo-small" }, tr(u.openHint)),
      );
    }
    return el(
      "div",
      { class: "demo-pane" },
      el("p", { class: "demo-intro" }, tr(u.intro)),
      el(
        "div",
        { class: "demo-controls" },
        el(
          "button",
          { type: "button", class: "btn primary", disabled: s.running, onclick: runTeams },
          s.phase < 0 ? tr(u.start) : tr(u.again),
        ),
        posted
          ? [
              el(
                "label",
                { class: "demo-check" },
                el("input", {
                  type: "checkbox",
                  checked: s.ai,
                  onchange: (event) => {
                    s.ai = event.target.checked;
                    render();
                    demoRoot.querySelector(".demo-check input")?.focus();
                  },
                }),
                tr(u.withAi),
              ),
            ]
          : null,
      ),
      el(
        "div",
        { class: "demo-split teams-split" },
        stepList,
        el(
          "div",
          { class: "teams-frame" },
          el("div", { class: "teams-bar" }, el("span", { class: "teams-dot" }), tr(u.channel), el("em", {}, tr(u.bot))),
          card,
        ),
      ),
    );
  }
  function runTeams() {
    const s = state.teams;
    s.running = true;
    s.phase = -1;
    s.open = "checkout";
    const tick = () => {
      s.phase += 1;
      announce(tr(ui.teams.steps[s.phase]));
      if (s.phase >= ui.teams.steps.length - 1) {
        s.running = false;
        render();
        return;
      }
      render();
      setTimeout(tick, wait(600));
    };
    tick();
  }
  /* ---------- 3. Plugin ---------- */
  function pluginSteps() {
    const p = state.plugin;
    if (p.cmd !== "repair") return pluginCommands[p.cmd].steps;
    const cause = repairCauses[p.cause];
    return cause.fix
      ? [
          T("Reproduce la falla", "Reproduces the failure"),
          T("La diagnostica y la clasifica: es un problema de automation", "Diagnoses and classifies it: an automation problem"),
          T("Arregla el test", "Fixes the test"),
          T("3 corridas seguidas y 1 en paralelo", "3 runs in a row and 1 in parallel"),
          T("Corre los escenarios que usan la misma pieza", "Runs the scenarios that use the same piece"),
          T("Un agente revisor lo controla", "A reviewer agent checks it"),
        ]
      : [
          T("Reproduce la falla", "Reproduces the failure"),
          T("La diagnostica y la clasifica: no es de automation", "Diagnoses and classifies it: not an automation problem"),
          T("No toca el test", "Leaves the test alone"),
          T("Te devuelve un informe con la evidencia", "Hands you a report with the evidence"),
        ];
  }
  function pluginResult() {
    const p = state.plugin;
    return p.cmd === "repair" ? repairCauses[p.cause].result : pluginCommands[p.cmd].result;
  }
  function renderPlugin() {
    const p = state.plugin;
    const u = ui.plugin;
    const cmd = pluginCommands[p.cmd];
    const steps = pluginSteps();
    const reset = (patch) => {
      Object.assign(p, { step: -1, running: false, done: false }, patch);
      render();
    };
    return el(
      "div",
      { class: "demo-pane" },
      el("p", { class: "demo-intro" }, tr(u.intro)),
      el(
        "div",
        { class: "cmd-list", role: "group", "aria-label": tr(T("Qué le pedís", "What you ask for")) },
        Object.entries(pluginCommands).map(([key, value]) =>
          el(
            "button",
            {
              type: "button",
              class: "cmd" + (p.cmd === key ? " is-active" : ""),
              "aria-pressed": String(p.cmd === key),
              disabled: p.running,
              onclick: () => reset({ cmd: key }),
            },
            el("span", { class: "cmd-title" }, tr(value.label)),
          ),
        ),
      ),
      el("p", { class: "demo-lead" }, tr(cmd.summary)),
      el("pre", { class: "demo-code prompt" }, tr(cmd.sample)),
      p.cmd === "repair"
        ? el(
            "div",
            { class: "demo-controls" },
            el("span", { class: "demo-small" }, tr(u.cause)),
            segmented(
              tr(u.cause),
              Object.entries(repairCauses).map(([key, value]) => [key, tr(value.label)]),
              p.cause,
              (cause) => reset({ cause }),
              p.running,
            ),
          )
        : null,
      el(
        "div",
        { class: "demo-controls" },
        el(
          "button",
          { type: "button", class: "btn primary", disabled: p.running, onclick: runPlugin },
          p.done ? tr(u.again) : tr(u.run),
        ),
      ),
      el(
        "ol",
        { class: "demo-steps" },
        steps.map((text, index) =>
          el(
            "li",
            { class: index <= p.step ? "is-done" : index === p.step + 1 && p.running ? "is-now" : "" },
            el("span", { class: "demo-tick", "aria-hidden": "true" }, index <= p.step ? "✓" : String(index + 1)),
            tr(text),
          ),
        ),
      ),
      p.done ? el("div", { class: "demo-result" }, el("strong", {}, tr(T("Resultado", "Result")) + ": "), tr(pluginResult())) : null,
      el(
        "div",
        { class: "demo-agents" },
        el("span", { class: "demo-small" }, tr(u.agents)),
        el("ul", { class: "demo-sources" }, agentList.map((a) => el("li", {}, tr(a)))),
      ),
      el("p", { class: "demo-small" }, tr(u.humanNote)),
    );
  }
  function runPlugin() {
    const p = state.plugin;
    p.running = true;
    p.done = false;
    p.step = -1;
    const total = pluginSteps().length;
    const tick = () => {
      p.step += 1;
      announce(tr(pluginSteps()[p.step]));
      if (p.step >= total - 1) {
        p.running = false;
        p.done = true;
        render();
        return;
      }
      render();
      setTimeout(tick, wait(600));
    };
    tick();
  }
  /* ---------- 4. Functional analysis ---------- */
  function renderFunc() {
    const f = state.func;
    const u = ui.func;
    const story = epic.stories.find((x) => x.id === f.story);
    const kase = story?.cases.find((x) => x.id === f.case);
    const stagesNav = el(
      "ol",
      { class: "flow-steps four" },
      epic.stages.map((stage, index) =>
        el(
          "li",
          {},
          el(
            "button",
            {
              type: "button",
              class: "flow-step" + (index === f.stage ? " is-active" : ""),
              "aria-current": index === f.stage ? "step" : null,
              onclick: () => {
                f.stage = index;
                render();
              },
            },
            el("span", { class: "flow-num" }, String(index + 1)),
            el("span", { class: "flow-name" }, tr(stage.name)),
          ),
        ),
      ),
    );
    let body;
    if (f.stage < 2) {
      body = el("div", { class: "demo-detail" }, el("h3", {}, tr(epic.stages[f.stage].name)), el("p", {}, tr(epic.stages[f.stage].text)));
    } else {
      const storyList = el(
        "ul",
        { class: "demo-list" },
        epic.stories.map((st) =>
          el(
            "li",
            {},
            el(
              "button",
              {
                type: "button",
                class: "demo-row" + (f.story === st.id ? " is-active" : ""),
                "aria-pressed": String(f.story === st.id),
                onclick: () => {
                  f.story = st.id;
                  f.case = null;
                  render();
                },
              },
              el(
                "span",
                { class: "demo-row-main" },
                el("strong", {}, tr(st.name)),
                el("span", { class: "demo-small" }, st.criteria.map(tr).join(" · ")),
              ),
              el("span", { class: "demo-badge kind-pending" }, `${st.cases.length}`),
            ),
          ),
        ),
      );
      let right;
      if (!story) {
        right = el("div", { class: "demo-detail is-empty" }, el("p", {}, tr(epic.stages[f.stage].text)), el("p", {}, tr(u.pickStory)));
      } else if (f.stage === 2) {
        right = el(
          "div",
          { class: "demo-detail" },
          el("h3", {}, tr(story.name)),
          el("span", { class: "demo-module" }, tr(u.criteria)),
          el("ul", { class: "demo-bullets" }, story.criteria.map((c) => el("li", {}, tr(c)))),
          el("span", { class: "demo-module" }, tr(u.clarify)),
          el("p", {}, tr(u.clarifyText)),
        );
      } else {
        right = el(
          "div",
          { class: "demo-detail" },
          el("h3", {}, tr(story.name)),
          el(
            "ul",
            { class: "demo-list tight" },
            story.cases.map((c) =>
              el(
                "li",
                {},
                el(
                  "button",
                  {
                    type: "button",
                    class: "demo-row small" + (f.case === c.id ? " is-active" : ""),
                    "aria-pressed": String(f.case === c.id),
                    onclick: () => {
                      f.case = c.id;
                      render();
                    },
                  },
                  el("span", {}, tr(c.name)),
                  badge(c.kind === "manual" ? "locator" : "none", tr(u[c.kind])),
                ),
              ),
            ),
          ),
          kase
            ? [
                el("pre", { class: "demo-code" }, tr(kase.gherkin)),
                el("p", { class: "demo-small" }, tr(kase.kind === "manual" ? u.manualWhy : u.autoWhy)),
              ]
            : el("p", { class: "demo-small" }, tr(u.pickCase)),
        );
      }
      body = el("div", { class: "demo-split" }, storyList, right);
    }
    return el(
      "div",
      { class: "demo-pane" },
      el("p", { class: "demo-intro" }, tr(u.intro)),
      el(
        "div",
        { class: "demo-controls" },
        el("strong", { class: "demo-epic" }, tr(epic.title)),
      ),
      el("p", { class: "demo-small" }, tr(u.liveText) + " " + tr(u.readOnly)),
      stagesNav,
      body,
      f.stage === 3 ? el("p", { class: "demo-small" }, tr(u.rule)) : null,
    );
  }
  /* ---------- 5. Overview ---------- */
  function renderFlow() {
    const f = state.flow;
    const u = ui.flow;
    const steps = u.steps;
    const step = steps[f.step];
    const go = (index) => {
      f.step = (index + steps.length) % steps.length;
      announce(tr(steps[f.step].title));
      render();
      demoRoot.querySelector(".flow-step.is-active")?.focus();
    };
    return el(
      "div",
      { class: "demo-pane" },
      el("p", { class: "demo-intro" }, tr(u.intro)),
      el(
        "ol",
        { class: "flow-steps" },
        steps.map((item, index) =>
          el(
            "li",
            {},
            el(
              "button",
              {
                type: "button",
                class: "flow-step" + (index === f.step ? " is-active" : ""),
                "aria-current": index === f.step ? "step" : null,
                onclick: () => go(index),
              },
              el("span", { class: "flow-num" }, String(index + 1)),
              el("span", { class: "flow-name" }, tr(item.title)),
            ),
          ),
        ),
      ),
      el(
        "div",
        { class: "demo-detail flow-detail" },
        el("span", { class: "demo-module" }, `${tr(u.step)} ${f.step + 1} ${tr(u.of)} ${steps.length}`),
        el("h3", {}, tr(step.title)),
        el("p", {}, tr(step.text)),
        el("div", { class: "skills" }, step.chips.map((chip) => el("span", { class: "chip" }, tr(chip)))),
        el(
          "div",
          { class: "demo-controls" },
          el("button", { type: "button", class: "btn secondary", onclick: () => go(f.step - 1) }, "← " + tr(u.prev)),
          el("button", { type: "button", class: "btn primary", onclick: () => go(f.step + 1) }, tr(u.next) + " →"),
        ),
      ),
      el(
        "div",
        { class: "demo-compare" },
        segmented(
          "",
          [
            ["before", tr(u.before)],
            ["after", tr(u.after)],
          ],
          f.view,
          (view) => {
            f.view = view;
            render();
          },
        ),
        el("p", { class: "demo-status" }, tr(f.view === "before" ? u.beforeText : u.afterText)),
      ),
    );
  }
  const tabs = ["triage", "teams", "plugin", "func", "flow"];
  const renderers = { triage: renderTriage, teams: renderTeams, plugin: renderPlugin, func: renderFunc, flow: renderFlow };
  function render() {
    const focusedTab = document.activeElement?.closest?.("[data-demo-tab]")?.dataset.demoTab;
    demoRoot.replaceChildren(
      el(
        "div",
        { class: "demo-tabs", role: "tablist" },
        tabs.map((tab) =>
          el(
            "button",
            {
              type: "button",
              role: "tab",
              id: "demo-tab-" + tab,
              "data-demo-tab": tab,
              "aria-selected": String(state.tab === tab),
              "aria-controls": "demo-panel",
              tabindex: state.tab === tab ? "0" : "-1",
              onclick: () => {
                state.tab = tab;
                render();
              },
              onkeydown: (event) => {
                const move = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
                if (!move) return;
                event.preventDefault();
                state.tab = tabs[(tabs.indexOf(tab) + move + tabs.length) % tabs.length];
                render();
                demoRoot.querySelector('[role="tab"][aria-selected="true"]').focus();
              },
            },
            tr(ui.tabs[tab]),
          ),
        ),
      ),
      el(
        "div",
        { id: "demo-panel", role: "tabpanel", "aria-labelledby": "demo-tab-" + state.tab },
        renderers[state.tab](),
      ),
      el("p", { class: "demo-note" }, tr(ui.note)),
    );
    if (focusedTab) demoRoot.querySelector(`[data-demo-tab="${focusedTab}"]`)?.focus();
  }
  new MutationObserver(render).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"],
  });
  render();
}
