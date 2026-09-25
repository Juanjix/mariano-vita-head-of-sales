/**
 * All visible copy for the site, written explicitly in Spanish and English.
 * Edit text here — components only read from this file.
 *
 * Content integrity: every fact below comes from the brief. Do not add
 * employers, dates, clients or metrics that have not been confirmed.
 */
import type { ArchiveEntry, Localized, ProcessStep, Stat, TimelineChapter } from "@/types/content";

const L = (es: string, en: string): Localized => ({ es, en });

export const site = {
  name: "Mariano Vita",
  role: L("Emprendedor · Business Development", "Entrepreneur · Business Development"),
  location: L("Medellín, Colombia", "Medellín, Colombia"),
} as const;

export const nav = {
  items: [
    { id: "about", label: L("Perfil", "About") },
    { id: "numbers", label: L("Números", "Numbers") },
    { id: "approach", label: L("Método", "Approach") },
    { id: "experience", label: L("Experiencia", "Experience") },
    { id: "contact", label: L("Contacto", "Contact") },
  ],
  menu: L("Menú", "Menu"),
  close: L("Cerrar", "Close"),
  skip: L("Saltar al contenido", "Skip to content"),
  languageLabel: L("Idioma", "Language"),
  primary: L("Navegación principal", "Main navigation"),
  home: L("Mariano Vita — inicio", "Mariano Vita — home"),
};

export const hero = {
  kicker: L("Emprendedor · Business Development · Ventas", "Entrepreneur · Business Development · Sales"),
  titleLines: [L("Construyo", "I build"), L("negocios.", "business.")],
  route: { from: "Argentina", to: "Colombia" },
  intro: L(
    "Creo oportunidades comerciales desde cero: encuentro el mercado, llego al decisor y convierto conversaciones en negocios.",
    "I create commercial opportunities from zero — finding the market, reaching the decision maker and turning conversations into business.",
  ),
  cta: L("Hablemos", "Let’s talk"),
  scroll: L("Scroll", "Scroll"),
  photoAlt: L(
    "Mariano Vita al aire libre, montando un caballo oscuro. Viste chomba negra, anteojos de sol y pantalón claro.",
    "Mariano Vita outdoors, riding a dark horse. He wears a black polo shirt, sunglasses and neutral trousers.",
  ),
  caption: L("Fig. 01 — Mariano Vita", "Fig. 01 — Mariano Vita"),
};

export const numbers = {
  label: L("Prueba", "Proof"),
  title: L("Resultados, no adjetivos.", "Results, not adjectives."),
  stats: [
    { figure: { value: 16, suffix: "+" }, label: L("Años creando negocios", "Years building businesses") },
    { figure: { value: 150, suffix: "+" }, label: L("Cuentas B2B desarrolladas", "B2B accounts developed") },
    { figure: { prefix: "~", value: 80, suffix: "%" }, label: L("Retención de clientes", "Client retention") },
    {
      figure: { prefix: "USD ", value: 150, suffix: "K" },
      label: L("Mayor negociación individual", "Largest individual negotiation"),
    },
  ] satisfies Stat[],
  note: L("Trayectoria comercial iniciada a los 17 años.", "Commercial trajectory started at age 17."),
};

export const manifesto = {
  label: L("Perfil", "About"),
  lines: [L("No espero", "I don’t wait for"), L("oportunidades.", "opportunities.")],
  emphasis: L("Las creo.", "I create them."),
  body: [
    L(
      "Mi fortaleza es desarrollar negocios nuevos desde cero. No dependo solo de leads entrantes ni de publicidad.",
      "My strength is developing new business from zero. I don’t depend only on inbound leads or advertising.",
    ),
    L(
      "Entiendo el mercado, identifico a los clientes potenciales, llego a quien decide y trabajo la oportunidad hasta que se convierte en negocio.",
      "I understand the market, identify potential customers, reach the people who decide and work the opportunity until it becomes business.",
    ),
  ],
};

export const approach = {
  label: L("Método", "Approach"),
  title: L("Cómo construyo negocios", "How I build business"),
  intro: L(
    "Un recorrido, no una lista de habilidades. Cada etapa prepara la siguiente.",
    "A journey, not a list of skills. Each stage sets up the next.",
  ),
  steps: [
    { verb: L("Entender", "Understand"), line: L("Entender el mercado.", "Understand the market.") },
    {
      verb: L("Encontrar", "Find"),
      line: L("Detectar la necesidad y la oportunidad.", "Identify the need and the opportunity."),
    },
    { verb: L("Llegar", "Reach"), line: L("Llegar al verdadero decisor.", "Reach the real decision maker.") },
    {
      verb: L("Construir", "Build"),
      line: L("Construir confianza y entender la fricción.", "Build trust and understand the friction."),
    },
    { verb: L("Resolver", "Solve"), line: L("Diseñar una solución comercial.", "Structure a commercial solution.") },
    { verb: L("Cerrar", "Close"), line: L("Negociar y cerrar.", "Negotiate and close.") },
    {
      verb: L("Crecer", "Grow"),
      line: L("Desarrollar la cuenta y la relación.", "Develop the account and the relationship."),
    },
  ] satisfies ProcessStep[],
  stageLabel: L("Etapa", "Stage"),
};

export const caseStudy = {
  label: L("Caso", "Case study"),
  sector: L(
    "Distribución B2B · Electrónica y accesorios para celulares",
    "B2B distribution · Electronics & mobile accessories",
  ),
  title: L("Construir una red de distribución B2B desde cero.", "Building a B2B distribution network from zero."),
  context: L(
    "Un sistema de distribución de electrónica y accesorios para celulares, con comercios minoristas como clientes. El desafío no era el producto: era la fricción comercial.",
    "A distribution system for electronics and mobile phone accessories, with retail stores as customers. The challenge wasn’t the product — it was commercial friction.",
  ),
  chapters: [
    {
      tag: L("El problema", "The problem"),
      heading: L(
        "Para el comercio, el inventario era riesgo financiero.",
        "Retailers saw inventory as financial risk.",
      ),
      body: L(
        "Los comercios no querían inmovilizar capital en mercadería sin saber si se iba a vender.",
        "Stores didn’t want to tie up capital in stock without knowing whether it would sell.",
      ),
    },
    {
      tag: L("El insight", "The insight"),
      heading: L("Eliminar la fricción de la primera compra.", "Remove the initial purchasing friction."),
      body: L(
        "Si el riesgo frenaba la decisión, había que sacar el riesgo de la ecuación.",
        "If risk was blocking the decision, risk had to come out of the equation.",
      ),
    },
    {
      tag: L("El modelo", "The model"),
      heading: L("Consignación.", "Consignment."),
      body: L(
        "Los productos se colocaban en el local sin que el comercio tuviera que comprar todo el inventario por adelantado.",
        "Products were placed in stores without requiring the retailer to buy the full inventory upfront.",
      ),
    },
  ],
  cycle: {
    title: L("El ciclo, aproximadamente cada 15 días", "The cycle, roughly every 15 days"),
    days: L("días", "days"),
    steps: [
      L("Visitar el local", "Visit the store"),
      L("Verificar ventas", "Verify sales"),
      L("Cobrar lo vendido", "Collect sold inventory"),
      L("Reponer productos", "Replenish products"),
      L("Sostener la relación", "Maintain the relationship"),
      L("Detectar nuevas necesidades", "Identify additional needs"),
    ],
  },
  execution: {
    tag: L("La ejecución", "The execution"),
    heading: L("Calle, teléfono y relación.", "Street, phone and relationship."),
    items: [
      L("Prospección directa en campo", "Direct field prospecting"),
      L("Llegar a quien decide", "Reaching decision makers"),
      L("Relaciones personales", "Personal relationships"),
      L("Seguimiento telefónico", "Telephone follow-up"),
      L("Desarrollo de cuentas", "Account development"),
    ],
  },
  result: {
    tag: L("El resultado", "The result"),
    stats: [
      { figure: { value: 150, suffix: "+" }, label: L("clientes B2B activos", "active B2B clients") },
      { figure: { prefix: "~", value: 80, suffix: "%" }, label: L("retención estimada", "estimated retention") },
      {
        figure: { value: 3 },
        label: L("personas entre ventas y cobranza", "people across sales and collection"),
      },
    ] satisfies Stat[],
  },
};

export const prospecting = {
  label: L("En la calle", "In the field"),
  title: L("Prospección de campo.", "Field prospecting."),
  contacts: {
    figure: "25",
    label: L(
      "contactos directos en jornadas intensivas de prospección",
      "direct contacts during intensive prospecting days",
    ),
  },
  accounts: {
    prefix: L("Hasta", "Up to"),
    figure: "8",
    label: L(
      "nuevas cuentas en jornadas comerciales de alto rendimiento",
      "new accounts during strong field-sales days",
    ),
  },
  legend: L("Cada marca, un contacto directo.", "Each mark, one direct contact."),
  note: L(
    "Experiencia histórica en venta de campo. Cifras aproximadas: dependen del mercado, el producto y el contexto. No es una tasa de conversión garantizada.",
    "Historical field-sales experience. Approximate figures that depend on market, product and context. Not a guaranteed conversion rate.",
  ),
};

export const leads = {
  label: L("Filosofía", "Philosophy"),
  quote: L("Un lead solamente muere cuando se deja de trabajar.", "A lead only dies when you stop working it."),
  attribution: "— Mariano Vita",
  lead: L(
    "Un primer “no” no siempre significa que no hay oportunidad. Los prospectos valiosos se revisitan con:",
    "A first “no” doesn’t necessarily mean there’s no opportunity. Valuable prospects get revisited through:",
  ),
  levers: [
    L("otra propuesta", "a different proposal"),
    L("productos alternativos", "alternative products"),
    L("nuevas condiciones", "new conditions"),
    L("mejor timing", "better timing"),
    L("objeciones resueltas", "resolved objections"),
    L("otra estructura comercial", "a different commercial structure"),
  ],
  stat: { prefix: "~", value: 50, suffix: "%" },
  statLabel: L(
    "de los leads fuertes que se daban por perdidos, recuperados.",
    "of strong leads initially considered lost, recovered.",
  ),
  statNote: L(
    "Estimación propia basada en experiencia histórica, cuando existía una necesidad real y una posibilidad comercial.",
    "Mariano’s own estimate from historical experience, where a real need and commercial possibility existed.",
  ),
};

export const archive = {
  label: L("Mercados y emprendimientos", "Markets & ventures"),
  titleLines: [
    L("Productos diferentes.", "Different products."),
    L("El mismo desafío comercial.", "Same commercial problem."),
  ],
  intro: L(
    "No se trata de ser experto en cada industria. Se trata de resolver el mismo problema en cada una.",
    "This isn’t about being an expert in every industry. It’s about solving the same problem in each one.",
  ),
  entries: [
    {
      name: L("Perfumes", "Perfumes"),
      detail: L("importados de China", "imported from China"),
      category: L("Importación", "Import"),
    },
    {
      name: L("Piedras preciosas y semipreciosas", "Precious & semi-precious stones"),
      detail: L("Rio Grande do Sul, Brasil → Buenos Aires", "Rio Grande do Sul, Brazil → Buenos Aires"),
      category: L("Sourcing", "Sourcing"),
    },
    {
      name: L("Proveedores", "Suppliers"),
      detail: L("búsqueda y negociación", "sourcing and negotiation"),
      category: L("Negociación", "Negotiation"),
    },
    {
      name: L("Paraguay ↔ Argentina", "Paraguay ↔ Argentina"),
      detail: L("operaciones comerciales", "commercial operations"),
      category: L("Comercio regional", "Regional trade"),
    },
    {
      name: L("Celulares y electrónica", "Mobile phones & electronics"),
      detail: L("importados de China", "imported from China"),
      category: L("Importación", "Import"),
    },
    {
      name: L("Accesorios para celulares", "Mobile accessories"),
      detail: L("red de comercios minoristas", "retail store network"),
      category: L("Distribución B2B", "B2B distribution"),
    },
    {
      name: L("Tiendas en MercadoLibre", "MercadoLibre stores"),
      detail: L("venta directa al consumidor", "direct-to-consumer sales"),
      category: L("E-commerce B2C", "B2C e-commerce"),
    },
    {
      name: L("Venta en consignación", "Consignment sales"),
      detail: L("modelo sin compra inicial", "no upfront purchase model"),
      category: L("Modelo comercial", "Commercial model"),
    },
    {
      name: L("Desarrollo de canales", "Channel development"),
      detail: L("y prospección de campo", "and field prospecting"),
      category: L("Canal", "Channel"),
    },
    {
      name: L("Bienes raíces", "Real estate"),
      detail: L("negociaciones", "negotiations"),
      category: L("Negociación", "Negotiation"),
    },
  ] satisfies ArchiveEntry[],
  capital: {
    figure: L("USD 15.000", "USD 15,000"),
    unit: L("/ mes", "/ month"),
    label: L(
      "de capital asignado a mercadería en operaciones de importación (aprox.)",
      "in capital allocated to merchandise for import operations (approx.)",
    ),
  },
  constantLabel: L("Lo que no cambia", "What stays the same"),
  constant: [
    L("Encontrar la oportunidad.", "Find the opportunity."),
    L("Encontrar el mercado.", "Find the market."),
    L("Encontrar al cliente.", "Find the customer."),
    L("Abrir la conversación.", "Open the conversation."),
    L("Entender la necesidad.", "Understand the need."),
    L("Construir confianza.", "Build trust."),
    L("Reducir la fricción.", "Reduce friction."),
    L("Negociar.", "Negotiate."),
    L("Hacer seguimiento.", "Follow up."),
    L("Cerrar.", "Close."),
  ],
};

/**
 * Verified chronology (2009–2026). Told as evolution, not employment history.
 * Restaurant period intentionally concise: no verified details beyond the role area.
 */
export const timeline = {
  label: L("Trayectoria", "Trajectory"),
  titleLines: [L("Negocios a través", "Built across"), L("de distintos mercados.", "markets.")],
  statement: [
    L("El producto fue cambiando.", "The product kept changing."),
    L("El instinto no.", "The instinct didn’t."),
  ],
  body: L(
    "Desde perfumes y piedras preciosas hasta gastronomía, importaciones y e-commerce: cada etapa implicó entender un mercado, un cliente y un problema comercial diferente.",
    "From perfumes and precious stones to restaurants, imports and e-commerce — each chapter required understanding a different market, customer and commercial problem.",
  ),
  chapters: [
    {
      from: 2009,
      to: 2012,
      title: L("Perfumes", "Perfumes"),
      sector: L("Emprendimiento comercial", "Commercial venture"),
      tags: [
        L("Perfumes importados de China", "Perfumes imported from China"),
        L("Abastecimiento de producto", "Product sourcing"),
        L("Captación de clientes y ventas", "Customer acquisition & sales"),
      ],
    },
    {
      from: 2012,
      to: 2015,
      title: L("Importación de piedras preciosas", "Precious stone imports"),
      sector: L("Importación", "Import"),
      tags: [
        L("Rio Grande do Sul → Buenos Aires", "Rio Grande do Sul → Buenos Aires"),
        L("Búsqueda y negociación con proveedores", "Supplier sourcing & negotiation"),
        L("Comercialización", "Commercialization"),
      ],
    },
    {
      from: 2016,
      to: 2020,
      title: L("Gerencia de restaurantes", "Restaurant management"),
      sector: L("Gastronomía", "Hospitality"),
    },
    {
      from: 2020,
      to: 2026,
      title: L("Importaciones & MercadoLibre", "Imports & MercadoLibre"),
      sector: L("Importación · E-commerce · B2B", "Import · E-commerce · B2B"),
      tags: [
        L("Celulares, electrónica y accesorios", "Mobile phones, electronics & accessories"),
        L("MercadoLibre y venta B2C", "MercadoLibre & B2C sales"),
        L("Distribución B2B en consignación", "B2B distribution on consignment"),
        L("Prospección de campo y desarrollo de cuentas", "Field prospecting & account development"),
      ],
      note: L(
        "Capital asignado a mercadería: aprox. USD 15.000 / mes.",
        "Capital allocated to merchandise: approx. USD 15,000 / month.",
      ),
    },
  ] satisfies TimelineChapter[],
  today: L("Hoy", "Today"),
  todayPlace: L("Medellín, Colombia", "Medellín, Colombia"),
  yearsLabel: L("Período", "Period"),
};

export const venture = {
  label: L("Lo que sigue", "What’s next"),
  kicker: L("¿Qué sigue?", "What’s next?"),
  dateline: "Medellín · Colombia · 2026",
  status: L("En desarrollo", "In development"),
  titleLines: [
    L("Convertir inventario", "Turning slow-moving"),
    L("de baja rotación", "inventory"),
    L("en oportunidades.", "into opportunity."),
  ],
  body: [
    L(
      "Estoy explorando un modelo comercial para ayudar a concesionarios a generar demanda sobre vehículos que tradicionalmente rotan más lento.",
      "I’m exploring a commercial model designed to help car dealerships generate demand for vehicles that traditionally turn over more slowly.",
    ),
    L(
      "El mismo principio de siempre: encontrar la ineficiencia comercial y construir el negocio a su alrededor.",
      "The same principle as always: find the commercial inefficiency and build the business around it.",
    ),
  ],
  sector: L("Industria automotriz", "Automotive industry"),
};

export const geography = {
  label: L("Ruta", "Route"),
  from: "Argentina",
  to: "Medellín",
  toCountry: "Colombia",
  coordinates: "6.2442° N, 75.5812° W",
  body: L(
    "Emprendedor argentino radicado actualmente en Medellín, construyendo su próximo capítulo en Latinoamérica.",
    "Argentine entrepreneur currently based in Medellín, building the next chapter across Latin America.",
  ),
};

export const contact = {
  label: L("Contacto", "Contact"),
  title: L("¿Tenés un problema de ventas?", "Have a sales problem?"),
  subtitle: L("Construyamos la solución.", "Let’s build the solution."),
  body: L(
    "Si tenés un buen producto pero necesitás desarrollar el mercado, conseguir clientes o generar movimiento comercial, hablemos.",
    "If you have a strong product but need to develop the market, acquire customers or build commercial momentum, let’s talk.",
  ),
  audiences: [
    L("Dueños de negocio", "Business owners"),
    L(
      "Empresas que buscan Head of Sales o Business Development",
      "Companies hiring Head of Sales or Business Development",
    ),
    L("Emprendedores y socios", "Entrepreneurs & partners"),
  ],
  channelsLabel: L("Escribime", "Reach out"),
  external: L("(se abre en una pestaña nueva)", "(opens in a new tab)"),
};

export const footer = {
  rights: L("Todos los derechos reservados.", "All rights reserved."),
  backToTop: L("Volver arriba", "Back to top"),
};

export const seo = {
  title: L("Mariano Vita — Emprendedor & Business Development", "Mariano Vita — Entrepreneur & Business Development"),
  description: L(
    "Emprendedor argentino en Medellín. Business development, ventas B2B y desarrollo de mercados desde cero en Latinoamérica: 150+ cuentas B2B desarrolladas.",
    "Argentine entrepreneur based in Medellín. Business development, B2B sales and building markets from zero across Latin America: 150+ B2B accounts developed.",
  ),
};
