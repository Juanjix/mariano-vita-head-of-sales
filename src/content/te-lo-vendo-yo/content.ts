/**
 * Te Lo Vendo Yo — all visible copy (ES primary, EN complete), kept apart from
 * presentation. Same Localized-pair system as the personal site.
 *
 * Content integrity: new venture. No clients, cars sold, leads, rates, prices,
 * partnerships or testimonials exist yet — none are stated or implied here.
 */
import { L } from "@/lib/localized";

export const tlvy = {
  brand: "Te Lo Vendo Yo",

  seo: {
    title: L(
      "Te Lo Vendo Yo — Rotación de Inventario para Concesionarios",
      "Te Lo Vendo Yo — Automotive Inventory Sales",
    ),
    description: L(
      "Ayudamos a concesionarios a generar demanda, trabajar oportunidades comerciales y aumentar las posibilidades de rotación de su inventario.",
      "We help dealerships generate demand for their inventory, work every inquiry commercially and improve the chances of moving slow units.",
    ),
  },

  nav: {
    items: [
      { id: "problema", label: L("Problema", "Problem") },
      { id: "solucion", label: L("Solución", "Solution") },
      { id: "como-funciona", label: L("Cómo funciona", "How it works") },
      { id: "casos", label: L("Casos", "Cases") },
      { id: "servicios", label: L("Servicios", "Services") },
      { id: "faq", label: L("FAQ", "FAQ") },
    ],
    cta: L("Hablemos", "Let’s talk"),
    home: L("Te Lo Vendo Yo — inicio", "Te Lo Vendo Yo — home"),
    byMariano: L("por Mariano Vita", "by Mariano Vita"),
    menu: L("Menú", "Menu"),
    close: L("Cerrar", "Close"),
    primary: L("Navegación de Te Lo Vendo Yo", "Te Lo Vendo Yo navigation"),
    skip: L("Saltar al contenido", "Skip to content"),
  },

  ctas: {
    inventory: L("Quiero mover mi inventario", "I want to move my inventory"),
    talkInventory: L("Hablemos de tu inventario", "Let’s talk about your inventory"),
    reviewInventory: L("Analicemos tu inventario", "Let’s review your inventory"),
    privateSeller: L(
      "¿Querés vender tu auto particular? Conocé cómo funciona",
      "Want to sell your own car? See how it works",
    ),
    marianoProfile: L("Conocé más sobre Mariano", "Learn more about Mariano"),
  },

  hero: {
    label: L("Para concesionarios", "For dealerships"),
    location: L("Medellín · Colombia", "Medellín · Colombia"),
    wordmark: ["Te lo", "vendo yo"],
    propositionLines: [L("Convertimos inventario", "We turn inventory"), L("en ventas.", "into sales.")],
    support: L(
      "Tu concesionario ya tiene los autos. Nosotros creamos el contenido, generamos demanda y trabajamos las oportunidades comerciales para ayudar a convertir ese inventario en ventas.",
      "Your dealership already has the inventory. We create the content, generate demand and work the commercial opportunities to help turn that inventory into sales.",
    ),
    mechanismLabel: L("El recorrido completo", "The full path"),
    mechanism: [L("Contenido", "Content"), L("Demanda", "Demand"), L("Seguimiento", "Follow-up"), L("Venta", "Sale")],
  },

  differentiator: {
    lines: [
      L("No somos solamente una agencia de marketing.", "We’re not just a marketing agency."),
      L(
        "Somos una solución comercial enfocada en vender vehículos.",
        "We’re a commercial solution focused on selling vehicles.",
      ),
    ],
  },

  problem: {
    index: "01",
    label: L("El problema", "The problem"),
    titleLines: [L("Tener buenos autos", "Good cars"), L("no garantiza venderlos.", "don’t guarantee sales.")],
    body: L(
      "Muchos concesionarios tienen capital inmovilizado en vehículos que siguen publicados durante semanas o meses. El auto está; lo que falta es que el mercado lo vuelva a mirar y que cada interesado se trabaje hasta el final.",
      "Many dealerships have capital tied up in vehicles that stay listed for weeks or months. The car is there — what’s missing is getting the market to look at it again, and working every interested buyer all the way through.",
    ),
    items: [
      L("Inventario con baja rotación", "Low-turnover inventory"),
      L("Publicaciones que no generan suficiente interés", "Listings that fail to generate enough interest"),
      L("Contenido poco diferenciador", "Undifferentiated content"),
      L("Falta de alcance", "Insufficient reach"),
      L("Consultas que no se convierten", "Inquiries that don’t convert"),
      L("Leads sin seguimiento", "Leads without follow-up"),
      L("Tiempo comercial desperdiciado", "Wasted commercial time"),
    ],
    chainLabel: L("La consecuencia", "The consequence"),
    chain: [
      L("Inventario parado", "Slow inventory"),
      L("Capital inmovilizado", "Immobilized capital"),
      L("Menor rotación", "Lower turnover"),
      L("Menor rentabilidad", "Lower profitability"),
    ],
  },

  solution: {
    index: "02",
    label: L("La solución", "The solution"),
    titleLines: [L("Nos encargamos", "We take charge"), L("de mover ese inventario.", "of moving that inventory.")],
    body: L(
      "Trabajamos cada unidad seleccionada como una oportunidad comercial: contenido pensado para vender, exposición donde están los compradores y seguimiento de cada interesado. No garantizamos ventas; trabajamos para aumentar las posibilidades de que ocurran.",
      "We treat every selected unit as a commercial opportunity: content made to sell, exposure where buyers actually are, and follow-up on every interested person. We don’t guarantee sales — we work to increase the chances that they happen.",
    ),
    pillars: [
      {
        title: L("Contenido que vende", "Content built to sell"),
        body: L(
          "El objetivo no es producir contenido por producir: es aumentar el interés comercial alrededor de cada vehículo.",
          "The point isn’t content for its own sake — it’s increasing commercial interest around each vehicle.",
        ),
        points: [
          L("Fotografía profesional", "Professional photography"),
          L("Videos específicos del vehículo", "Vehicle-specific video"),
          L("Contenido vertical y Reels", "Vertical content & Reels"),
          L("Piezas listas para TikTok", "TikTok-ready assets"),
          L("Contenido para marketplaces", "Marketplace-ready content"),
        ],
      },
      {
        title: L("Distribución y publicidad", "Distribution & advertising"),
        body: L(
          "Ponemos cada unidad frente a compradores reales, combinando canales según el vehículo.",
          "We put each unit in front of real buyers, combining channels to suit the vehicle.",
        ),
        points: [
          L("Redes sociales", "Social networks"),
          L("Marketplaces", "Marketplaces"),
          L("Publicidad paga", "Paid advertising"),
          L("Distribución orgánica", "Organic distribution"),
        ],
      },
      {
        title: L("Generación de compradores", "Buyer generation"),
        body: L(
          "El objetivo no son las visualizaciones ni los likes. Buscamos personas con intención real de compra.",
          "The objective isn’t views or likes. We look for people with actual purchase intent.",
        ),
        points: [],
      },
      {
        title: L("Gestión comercial", "Commercial management"),
        body: L(
          "Cada consulta se trabaja: no queda esperando en una bandeja de entrada.",
          "Every inquiry gets worked — none are left waiting in an inbox.",
        ),
        points: [
          L("Responder consultas", "Answer inquiries"),
          L("Calificar prospectos", "Qualify prospects"),
          L("Hacer seguimiento", "Follow up"),
          L("Reactivar oportunidades", "Reactivate opportunities"),
          L("Identificar objeciones", "Identify objections"),
          L("Ayudar a avanzar la negociación", "Help move the negotiation forward"),
        ],
      },
      {
        title: L("Cierre", "Closing support"),
        body: L(
          "El trabajo comercial no se detiene en la generación del lead. El objetivo es ayudar a transformar el interés en una oportunidad comercial concreta con el concesionario.",
          "The commercial work doesn’t stop at lead generation. The goal is helping turn interest into a concrete commercial opportunity with the dealership.",
        ),
        points: [],
      },
    ],
  },

  comparison: {
    index: "03",
    label: L("La diferencia", "The difference"),
    titleLines: [L("Marketing + ventas", "Marketing + sales"), L("en un mismo servicio.", "in one service.")],
    intro: L(
      "No se trata de competir con las agencias. Se trata del alcance: dónde termina el trabajo.",
      "This isn’t about competing with agencies. It’s about scope — where the work ends.",
    ),
    agencyLabel: L("Agencia tradicional", "Traditional agency"),
    ourLabel: L("Te Lo Vendo Yo", "Te Lo Vendo Yo"),
    shared: [L("Contenido", "Content"), L("Publicidad", "Advertising"), L("Leads", "Leads")],
    agencyEnd: L("Entrega de contactos", "Contact handoff"),
    agencyStop: L("Acá termina el alcance", "Scope ends here"),
    ours: [
      L("Filtrado", "Qualification"),
      L("Seguimiento", "Follow-up"),
      L("Negociación", "Negotiation"),
      L("Venta", "Sale"),
    ],
    conclusion: L("No terminamos en el lead.", "We don’t stop at the lead."),
  },

  process: {
    index: "04",
    label: L("Cómo funciona", "How it works"),
    titleLines: [L("Cómo", "How it"), L("funciona.", "works.")],
    steps: [
      {
        key: L("Seleccionar", "Select"),
        title: L("Seleccionamos el inventario", "We select the inventory"),
        body: L("Analizamos qué vehículos tiene sentido impulsar.", "We analyze which vehicles make sense to push."),
      },
      {
        key: L("Crear", "Create"),
        title: L("Producimos el contenido", "We produce the content"),
        body: L(
          "Fotografías y videos profesionales específicos para las unidades seleccionadas.",
          "Professional photos and videos made specifically for the selected units.",
        ),
      },
      {
        key: L("Distribuir", "Distribute"),
        title: L("Generamos exposición", "We generate exposure"),
        body: L(
          "Distribución orgánica, marketplaces y campañas pagas cuando corresponda.",
          "Organic distribution, marketplaces and paid campaigns where it makes sense.",
        ),
      },
      {
        key: L("Seguir", "Follow up"),
        title: L("Trabajamos los leads", "We work the leads"),
        body: L(
          "Respondemos, calificamos y hacemos seguimiento de los interesados.",
          "We respond to, qualify and follow up with every interested buyer.",
        ),
      },
      {
        key: L("Vender", "Sell"),
        title: L("Buscamos la operación", "We move toward the sale"),
        body: L(
          "El objetivo final es generar compradores calificados y ayudar a mover la oportunidad hacia una venta.",
          "The end goal is qualified buyers, and helping move each opportunity toward a sale.",
        ),
      },
    ],
  },

  tools: {
    index: "05",
    label: L("Producción y herramientas", "Production & tools"),
    titleLines: [L("Las herramientas", "The tools"), L("están al servicio de la venta.", "serve the sale.")],
    body: L(
      "Utilizamos tecnología, contenido y herramientas profesionales para aumentar las posibilidades comerciales de cada vehículo.",
      "We use technology, content and professional tools to increase the commercial potential of each vehicle.",
    ),
    headers: { tool: L("Herramienta", "Tool"), purpose: L("Para qué sirve en la venta", "What it does for the sale") },
    rows: [
      {
        tool: L("Equipo de cámara propio", "Our own camera equipment"),
        purpose: L(
          "Mostrar cada unidad con el nivel de detalle que un comprador necesita.",
          "Show each unit with the detail a buyer needs.",
        ),
      },
      {
        tool: L("Producción de video", "Video production"),
        purpose: L(
          "Recorridos que responden preguntas antes de la primera consulta.",
          "Walkarounds that answer questions before the first inquiry.",
        ),
      },
      {
        tool: L("Edición profesional", "Professional editing"),
        purpose: L("Piezas cortas, claras y pensadas para cada canal.", "Short, clear pieces made for each channel."),
      },
      {
        tool: L("Contenido vertical", "Vertical content"),
        purpose: L(
          "Reels y formatos verticales para donde hoy mira el comprador.",
          "Reels and vertical formats for where buyers actually look.",
        ),
      },
      {
        tool: L("Meta Ads", "Meta Ads"),
        purpose: L(
          "Llegar a personas con intención de compra, no solo a audiencias.",
          "Reach people with purchase intent, not just audiences.",
        ),
      },
      {
        tool: L("Herramientas de IA", "AI tools"),
        purpose: L(
          "Agilizar la producción y el seguimiento de cada interesado.",
          "Speed up production and the follow-up of every lead.",
        ),
      },
    ],
  },

  cases: {
    index: "06",
    label: L("Casos", "Cases"),
    titleLines: [L("Vehículos que", "Vehicles"), L("pusimos en movimiento.", "we put in motion.")],
    empty: L(
      "Estamos empezando a documentar cada vehículo, estrategia y resultado real de Te Lo Vendo Yo.",
      "We’re beginning to document every real vehicle, strategy and result from Te Lo Vendo Yo.",
    ),
    emptyNote: L(
      "Cada caso se publicará con datos reales. Si un dato no existe, no se muestra.",
      "Every case will be published with real data. If a figure doesn’t exist, it isn’t shown.",
    ),
    structureLabel: L("Cómo se va a documentar cada caso", "How each case will be documented"),
    structure: [
      L("Vehículo", "Vehicle"),
      L("Contenido creado", "Content created"),
      L("Estrategia", "Strategy"),
      L("Resultados", "Results"),
      L("Venta", "Sale"),
    ],
    metricLabels: {
      previousDaysListed: L("Días publicado antes", "Days listed before"),
      campaignDays: L("Días de campaña", "Campaign days"),
      inquiries: L("Consultas", "Inquiries"),
      qualifiedLeads: L("Leads calificados", "Qualified leads"),
      dealershipVisits: L("Visitas al concesionario", "Dealership visits"),
      offers: L("Ofertas", "Offers"),
      daysToSale: L("Días hasta la venta", "Days to sale"),
    },
    sold: L("Vendido", "Sold"),
  },

  lowTurnover: {
    titleLines: [
      L("¿Tenés vehículos", "Have vehicles"),
      L("que no se están", "that aren’t"),
      L("moviendo?", "moving?"),
    ],
    body: L(
      "Seleccionamos unidades con baja rotación y desarrollamos una estrategia específica para volver a ponerlas frente al mercado.",
      "We select low-turnover units and develop a specific strategy to put them back in front of the market.",
    ),
  },

  why: {
    index: "07",
    label: L("Por qué", "Why"),
    titleLines: [L("¿Por qué", "Why"), L("Te Lo Vendo Yo?", "Te Lo Vendo Yo?")],
    principles: [
      {
        title: L("Mentalidad comercial", "Commercial mindset"),
        body: L(
          "Nuestro objetivo no son los likes. Son las oportunidades comerciales y las ventas.",
          "Our objective isn’t likes. It’s commercial opportunities and sales.",
        ),
      },
      {
        title: L("Contenido propio", "Purpose-built content"),
        body: L(
          "Creamos material específico para cada vehículo seleccionado.",
          "We create specific material for every selected vehicle.",
        ),
      },
      {
        title: L("Seguimiento", "Follow-up"),
        body: L(
          "No abandonamos un lead simplemente porque no compró en el primer contacto. Un lead solamente muere cuando se deja de trabajar.",
          "We don’t abandon a lead simply because they didn’t buy after the first contact. A lead only dies when you stop working it.",
        ),
      },
      {
        title: L("Transparencia", "Transparency"),
        body: L(
          "Si una unidad aparece comercialmente difícil por precio, posicionamiento u otra fricción evidente, te lo decimos de forma directa.",
          "If a unit looks commercially difficult because of price, positioning or another obvious friction, we’ll tell you directly.",
        ),
      },
      {
        title: L("Intereses alineados", "Aligned incentives"),
        body: L(
          "Podemos trabajar con modelos donde la compensación está vinculada a los resultados comerciales.",
          "We can work with models where compensation is tied to commercial outcomes.",
        ),
      },
    ],
  },

  services: {
    index: "08",
    label: L("Servicios", "Services"),
    titleLines: [L("Una solución", "A solution"), L("adaptada al inventario.", "built around the inventory.")],
    body: L(
      "No hay paquetes cerrados. El alcance y el modelo se definen después de mirar tu inventario.",
      "There are no fixed packages. Scope and model are defined after looking at your inventory.",
    ),
    items: [
      L("Vehículos individuales", "Individual vehicles"),
      L("Paquetes de inventario", "Inventory packages"),
      L("Producción mensual de contenido", "Monthly content production"),
      L("Inventario de baja rotación", "Low-turnover inventory"),
      L("Publicidad y generación de leads", "Advertising & lead generation"),
      L("Gestión comercial integral", "Full commercial management"),
      L("Comisión por resultados", "Performance-based models"),
      L("Modelos híbridos personalizados", "Custom hybrid models"),
    ],
  },

  founder: {
    index: "09",
    label: L("Fundador", "Founder"),
    titleLines: [L("Detrás de", "Behind"), L("Te Lo Vendo Yo.", "Te Lo Vendo Yo.")],
    paragraphs: [
      L(
        "Soy Mariano y mi carrera siempre estuvo vinculada a vender.",
        "I’m Mariano, and my career has always been connected to selling.",
      ),
      L(
        "Tengo experiencia en comercialización, negociación, importación, comercio electrónico, desarrollo B2B y operaciones de alto valor.",
        "My experience spans commercialization, negotiation, imports, e-commerce, B2B development and high-value transactions.",
      ),
      L(
        "Hoy aplico esa experiencia al mercado automotor combinando áreas que normalmente trabajan separadas:",
        "Today I apply that experience to the automotive market by combining areas that are often treated separately:",
      ),
    ],
    stack: [
      L("Ventas", "Sales"),
      L("Contenido", "Content"),
      L("Publicidad", "Advertising"),
      L("Seguimiento comercial", "Commercial follow-up"),
    ],
    closing: L(
      "Mi trabajo no termina cuando conseguimos un lead. El objetivo es transformar ese interés en una oportunidad comercial real.",
      "My work doesn’t stop when we generate a lead. The objective is turning that interest into a real commercial opportunity.",
    ),
    proofLabel: L("Trayectoria previa de Mariano", "Mariano’s previous track record"),
    proofNote: L(
      "Cifras de la experiencia comercial anterior de Mariano. No son resultados de Te Lo Vendo Yo.",
      "Figures from Mariano’s previous commercial experience. They are not Te Lo Vendo Yo results.",
    ),
    proof: [
      { figure: "16+", label: L("años de trayectoria comercial", "years of commercial trajectory") },
      {
        figure: "150+",
        label: L(
          "cuentas B2B desarrolladas en una distribución anterior",
          "B2B accounts developed in a previous distribution business",
        ),
      },
      { figure: "~80%", label: L("retención estimada en esa operación", "estimated retention in that operation") },
      { figure: "USD 150K", label: L("mayor negociación individual", "largest individual negotiation") },
    ],
    route: L("Argentina → Colombia", "Argentina → Colombia"),
    photoCaption: L("Mariano Vita, fundador", "Mariano Vita, founder"),
  },

  faq: {
    index: "10",
    label: L("Preguntas frecuentes", "FAQ"),
    title: L("Preguntas frecuentes.", "Frequently asked questions."),
    items: [
      {
        id: "faq-vehiculos",
        q: L("¿Trabajan con cualquier vehículo?", "Do you work with any vehicle?"),
        a: L(
          "El primer paso es analizar el inventario y determinar qué unidades tiene sentido trabajar activamente.",
          "The first step is analyzing the inventory and deciding which units make sense to work actively.",
        ),
      },
      {
        id: "faq-contenido",
        q: L("¿Solo producen contenido?", "Do you only produce content?"),
        a: L(
          "No. La propuesta combina contenido, distribución, generación de interesados y seguimiento comercial.",
          "No. The service combines content, distribution, buyer generation and commercial follow-up.",
        ),
      },
      {
        id: "faq-baja-rotacion",
        q: L("¿Trabajan con vehículos de baja rotación?", "Do you work with low-turnover vehicles?"),
        a: L(
          "Sí. Es uno de los principales casos de uso de Te Lo Vendo Yo.",
          "Yes. It’s one of the main use cases for Te Lo Vendo Yo.",
        ),
      },
      {
        id: "faq-cobro",
        q: L("¿Cómo se cobra el servicio?", "How is the service priced?"),
        a: L(
          "Podemos trabajar con diferentes modelos según el inventario y el alcance, incluyendo esquemas fijos, vinculados a resultados o híbridos. El modelo se define después de analizar la situación del concesionario.",
          "We can work with different models depending on the inventory and scope, including fixed, results-linked or hybrid arrangements. The model is defined after analyzing the dealership’s situation.",
        ),
      },
      {
        id: "faq-particulares",
        q: L("¿Trabajan con particulares?", "Do you work with private sellers?"),
        a: L(
          "El foco principal está en concesionarios, aunque también podemos evaluar oportunidades de vehículos particulares.",
          "The main focus is dealerships, although we can also evaluate opportunities for privately owned vehicles.",
        ),
      },
      {
        id: "faq-ubicacion",
        q: L("¿Dónde están ubicados?", "Where are you based?"),
        a: L("En Medellín, Colombia.", "In Medellín, Colombia."),
      },
    ],
  },

  final: {
    titleLines: [
      L("¿Cuántos autos tenés publicados", "How many cars do you have listed"),
      L("que todavía no vendiste?", "that still haven’t sold?"),
    ],
    body: L(
      "Mostrame tu inventario y analicemos cuáles podemos empezar a mover.",
      "Show me your inventory and let’s identify which units we can start working on.",
    ),
    whatsapp: L("Hablar con Mariano por WhatsApp", "Talk to Mariano on WhatsApp"),
    fallbackCta: L("Hablar con Mariano", "Talk to Mariano"),
    fallbackVia: L("Por Instagram", "On Instagram"),
    fallbackNote: L(
      "El número de WhatsApp directo se publica próximamente. Mientras tanto, escribile a Mariano por Instagram.",
      "A direct WhatsApp number will be published soon. In the meantime, message Mariano on Instagram.",
    ),
    external: L("(se abre en una pestaña nueva)", "(opens in a new tab)"),
  },

  footer: {
    tagline: L("Convertimos inventario en ventas.", "We turn inventory into sales."),
    byline: L("Un proyecto de Mariano Vita", "A Mariano Vita venture"),
    backToTop: L("Volver arriba", "Back to top"),
  },

  mobileCta: L("Mover mi inventario", "Move my inventory"),
};
