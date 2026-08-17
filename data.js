/**
 * cafeConfig — single source of truth for Naif Café Las Condes.
 * Update everything here; no data should be hardcoded elsewhere in the site.
 *
 * NOTE ON SOURCES:
 * - Menu items/prices below are taken directly from the official PDF carta
 *   provided by the client ("Menú_Naif_Café_Las_Condes.pdf"), which is the
 *   most current source. A handful of Google Maps photo-menu captures (Feb
 *   2026) exist with slightly older prices — the PDF was treated as
 *   authoritative since it's the client-provided source.
 * - Reviews are left as placeholders (isPlaceholder: true) because no live
 *   connection to Google Places/Business Profile is wired up yet. Replace
 *   with real fetched reviews before launch — never fabricate review text.
 * - Gallery images are placeholders (real photography is required — see
 *   PLACEHOLDER_NOTE in main.js). Swap `src` values for real photo paths.
 */

const cafeConfig = {
  name: "Naif Café",
  fullName: "Naif Café Las Condes",
  tagline: "café en el barrio",
  address: {
    street: "Av. Presidente Errázuriz 3471",
    comuna: "Las Condes",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    full: "Av. Presidente Errázuriz 3471, Las Condes, Santiago",
  },
  coordinates: {
    lat: -33.4212164,
    lng: -70.5921681,
  },
  phone: {
    display: "+56 9 9822 2648",
    href: "tel:+56998222648",
    whatsapp: "https://wa.me/56998222648",
  },
  email: "lascondes@naifcafe.cl",
  instagram: {
    handle: "@naifcafe_lascondes",
    url: "https://www.instagram.com/naifcafe_lascondes",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=-33.4212164,-70.5921681&query_place_id=Naif+Cafe+Las+Condes",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=-33.4212164,-70.5921681",
  menuPdfUrl: "Carta-Naif-Cafe.pdf",

  hours: [
    { day: "Lunes", open: "07:30", close: "20:00" },
    { day: "Martes", open: "07:30", close: "20:00" },
    { day: "Miércoles", open: "07:30", close: "20:00" },
    { day: "Jueves", open: "07:30", close: "20:00" },
    { day: "Viernes", open: "07:30", close: "20:00" },
    { day: "Sábado", open: "09:00", close: "20:00" },
    { day: "Domingo", open: "09:00", close: "20:00" },
  ],
  hoursSummary: [
    { label: "Lun — Vie", value: "07:30 – 20:00" },
    { label: "Sáb — Dom", value: "09:00 – 20:00" },
  ],

  // Editorial hero copy — easy to swap.
  hero: {
    eyebrow: "Naif Café · Las Condes",
    title: "Un lugar para\nquedarse un poco más.",
    subtitle: "Café, brunch y una pausa que no tiene apuro.",
    cta: "Ver la carta",
    ctaSecondary: "Cómo llegar",
  },

  experience: {
    eyebrow: "01 — La experiencia",
    title: "Más que café.",
    body: "Un espacio para comenzar el día, encontrarse con alguien, trabajar un rato o simplemente sentarse y disfrutar. Naif nace en el barrio y se queda ahí: cercano, sin prisa, hecho para volver.",
  },

  coffeeSection: {
    eyebrow: "02 — El café",
    title: "El café es\nel comienzo.",
    body: "Filtrados en Chemex, V60 y Origami. Espresso trabajado con cuidado, taza a taza. Cada preparación puede cambiarse por granos diferenciados, seleccionados como los que se usan en competencias de barismo.",
  },

  whyNaif: {
    eyebrow: "03 — Por qué Naif",
    items: [
      { title: "Café", body: "Para comenzar bien el día." },
      { title: "Brunch", body: "Para quedarse un poco más." },
      { title: "Espacio", body: "Para conversar, trabajar o desconectarse." },
      { title: "Barrio", body: "Un lugar al que se vuelve." },
    ],
  },

  finalCta: {
    title: "Tu próxima pausa\nempieza aquí.",
    ctaPrimary: "Ver menú",
    ctaSecondary: "Cómo llegar",
  },

  // Menu — curated highlights per category, sourced verbatim from the
  // official PDF carta. Full carta available via menuPdfUrl.
  menu: {
    categories: [
      {
        id: "brunch",
        label: "Brunch",
        items: [
          {
            name: "Brunch Naif",
            price: "13.200",
            description: "4 panqueques americanos + plato con selección de frutas mixtas + mantequilla + syrup de maple.",
          },
          {
            name: "Brunch Açaí",
            price: "14.200",
            description: "Bowl de açaí helado + granola artesanal + selección de frutas de estación. Incluye jugo natural + café o té de la carta.",
          },
          {
            name: "Bacon Brunch",
            price: "15.200",
            description: "Paila de huevos con crumble de tocino + palta fileteada, tostadas de pan artesanal. Incluye jugo natural + café o té de la carta.",
          },
        ],
      },
      {
        id: "panes",
        label: "Panes y tostadas",
        items: [
          {
            name: "Tostadas Huevo Pochado, Salmón y Palta",
            price: "10.900",
            description: "Huevos frescos pochados, palta hass y láminas de salmón ahumado en frío, sobre pan masa madre.",
          },
          {
            name: "Tostadas Huevo Pochado / Jamón Serrano / Ricotta",
            price: "8.900",
            description: "Huevos frescos pochados sobre una cama de ricotta y jamón serrano.",
          },
          {
            name: "Paila de Huevos",
            price: "5.500",
            description: "Huevos revueltos de gallina feliz (4), acompañados con tostadas de pan artesanal.",
          },
        ],
      },
      {
        id: "arepas",
        label: "Arepas y cachapas",
        items: [
          {
            name: "Arepa Pollo / Palta (Reina)",
            price: "6.500",
            description: "Rellena con pechuga de pollo mechada, palta hass y un toque de mayonesa.",
          },
          {
            name: "Cachapa con Mechada / Queso",
            price: "8.600",
            description: "Tortilla de choclo a la plancha, rellena con queso blanco bajo en grasas y mechada de la casa.",
          },
          {
            name: "Arepa Pulled Pork / Queso",
            price: "6.900",
            description: "Rellena con mechada de lomo de cerdo ahumado y queso gouda laminado.",
          },
        ],
      },
      {
        id: "sandwiches",
        label: "Sandwiches",
        items: [
          {
            name: "Sandwich de Mechada",
            price: "11.400",
            description: "Mechada de la casa, queso gouda, palta laminada, mix de lechugas, tomate y mayo — en pan kaiser blanco con semillas.",
          },
          {
            name: "Sandwich Roast Beef",
            price: "10.800",
            description: "Roast beef de filete de vacuno, peras pochadas y crocante de nueces.",
          },
          {
            name: "Sandwich de Pulled Pork",
            price: "10.200",
            description: "Pulled pork cocinado por varias horas a baja temperatura, coleslaw y mix de lechugas.",
          },
        ],
      },
      {
        id: "cafeteria",
        label: "Café",
        items: [
          {
            name: "Filtrado V60 / Chemex / Origami",
            price: "4.800",
            description: "250ml de extracción de café filtrado. Cambiable por granos diferenciados de competencia (+$2.700).",
          },
          {
            name: "Latte",
            price: "3.900 / 4.400",
            description: "Espresso + leche texturizada + poca espuma de leche.",
          },
          {
            name: "Cold Brew",
            price: "4.200 / 4.900",
            description: "Extracción de café en frío por más de 12 horas.",
          },
        ],
      },
      {
        id: "dulces",
        label: "Postres",
        items: [
          {
            name: "Tres Texturas Chocolate",
            price: "5.500",
            description: "Torta con tres presentaciones de chocolate belga: bizcocho, ganache y mousse, bañada en cobertura de chocolate.",
          },
          {
            name: "Carrot Cake",
            price: "5.500",
            description: "Torta de zanahoria y azúcar morena con nueces claras, rellena y decorada con frosting de queso crema.",
          },
          {
            name: "Quesillo Venezolano",
            price: "4.900",
            description: "Suave flan acaramelado, receta venezolana (leche asada).",
          },
        ],
      },
    ],
  },

  // Real photography required — see main.js PLACEHOLDER note. Replace
  // `src` with real image paths once client/brand photography is available.
  gallery: [
    { id: "g1", alt: "Fachada de Naif Café Las Condes", tag: "Fachada", size: "wide", src: null },
    { id: "g2", alt: "Espresso preparándose en la barra de Naif", tag: "Café", size: "tall", src: null },
    { id: "g3", alt: "Brunch servido en mesa de Naif", tag: "Brunch", size: "square", src: null },
    { id: "g4", alt: "Interior cálido de Naif Café", tag: "Interior", size: "wide", src: null },
    { id: "g5", alt: "Pastelería artesanal de Naif", tag: "Pastelería", size: "square", src: null },
    { id: "g6", alt: "Terraza de Naif en Las Condes", tag: "Terraza", size: "tall", src: null },
  ],

  // Placeholder reviews — REPLACE with a live Google Places/Business Profile
  // fetch before launch. Do not hand-write review text.
  reviews: {
    isPlaceholder: true,
    aggregateNote: "Naif Café Las Condes mantiene una valoración alta en Google, pero el sitio debe consultar la fuente oficial (Google Places API) para mostrar el rating y el número de reseñas actualizados — no deben quedar hardcodeados.",
    googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=-33.4212164,-70.5921681",
    items: [
      // Intentionally empty. Populate via Google Places API / Business
      // Profile integration — see the comment above. No fabricated reviews.
    ],
  },

  nav: [
    { label: "Menú", href: "#menu" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Reseñas", href: "#resenas" },
    { label: "Ubicación", href: "#ubicacion" },
  ],
};
