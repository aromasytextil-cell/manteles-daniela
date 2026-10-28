/* Reyna Isabel — catálogo semilla
 * Mismo contrato que el proyecto base: window.CATALOGO_DEFECTO es el seed y el fallback.
 * El panel admin (admin.html) escribirá sobre la copia en localStorage; si no hay copia,
 * el sitio cae acá.
 *
 * Reglas de negocio (ver .planning/decisions/2026-10-18-manteles-daniela-estetica.md):
 *  - precio: número entero en pesos, SIEMPRE visible, nunca en rango.
 *  - piezas "a medida" no van acá: se piden desde la franja "Contanos tu mesa".
 *  - foto: clave del mapa fotos{} en contenido.defaults.js (punto único de reemplazo).
 */

window.CATALOGO_DEFECTO = [
  {
    id: 'md_001',
    categoria: 'manteles',
    titulo: 'Mantel Lino Natural',
    descripcion: 'Lino lavado en piedra, caída suave. Tono crudo.',
    medidas: '1,40 × 2,20 m · hasta 8 cubiertos',
    precio: 48900,
    estado: 'disponible',
    destacado: true,
    foto: 'p1'
  },
  {
    id: 'md_002',
    categoria: 'caminos',
    titulo: 'Camino de Mesa Oliva',
    descripcion: 'Verde oliva profundo, bordes al tono.',
    medidas: '0,45 × 1,80 m',
    precio: 19500,
    estado: 'disponible',
    destacado: false,
    foto: 'p2'
  },
  {
    id: 'md_003',
    categoria: 'accesorios',
    titulo: 'Set de Centro Tienda',
    descripcion: 'Tres piezas que ordenan la mesa sin taparla.',
    medidas: '3 piezas · bandeja 30 × 20 cm',
    precio: 24800,
    estado: 'disponible',
    destacado: false,
    foto: 'p3'
  },
  {
    id: 'md_004',
    categoria: 'manteles',
    titulo: 'Mantel Algodón Avena',
    descripcion: 'Algodón peinado, mate, no se plancha del todo.',
    medidas: '1,40 × 1,80 m · hasta 6 cubiertos',
    precio: 39400,
    estado: 'disponible',
    destacado: true,
    foto: 'p4'
  },
  {
    id: 'md_005',
    categoria: 'caminos',
    titulo: 'Camino Crudo y Blush',
    descripcion: 'Base cruda con veta blush. El acento de la casa.',
    medidas: '0,45 × 2,40 m',
    precio: 22300,
    estado: 'disponible',
    destacado: false,
    foto: 'p5'
  },
  {
    id: 'md_006',
    categoria: 'accesorios',
    titulo: 'Individuales Kerala (×4)',
    descripcion: 'Cuatro individuales con terminación a mano.',
    medidas: '0,35 × 0,45 m c/u',
    precio: 27900,
    estado: 'disponible',
    destacado: false,
    foto: 'p6'
  },

  /* ---------- Aromas y velas (pedido Lazos del Alma 28-10-2026) ----------
   * precio: null => la card muestra "Consultar precio" hasta definir venta.
   * sin foto asignada: la card cae al fondo beige (el HTML ya lo maneja).
   * ids: ar_001... (la parte de aromas se compra lista, pieza por pieza)
   */
  {
    id: 'ar_001',
    categoria: 'aromas',
    titulo: 'Esencia Concentrada para Hornillos — Berry Kiss',
    descripcion: 'Esencia Aromanza para hornillos. Frutos rojos, dulce y envolvente.',
    medidas: 'Frasco concentrado',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_002',
    categoria: 'aromas',
    titulo: 'Esencia Concentrada para Hornillos — Coco Vainilla',
    descripcion: 'Esencia Aromanza para hornillos. Coco y vainilla, cálido y cremoso.',
    medidas: 'Frasco concentrado',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_003',
    categoria: 'aromas',
    titulo: 'Esencia Concentrada para Hornillos — Pasión Rosa',
    descripcion: 'Esencia Aromanza para hornillos. Floral dulce y luminoso.',
    medidas: 'Frasco concentrado',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_004',
    categoria: 'aromas',
    titulo: 'Hornito Libélulas y Flores',
    descripcion: 'Hornito de cerámica con relieve de libélulas y flores.',
    medidas: '7 cm de alto',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_005',
    categoria: 'aromas',
    titulo: 'Hornito Flores Labradas — Gris Vintage',
    descripcion: 'Hornito con labrado de flores, terminación gris vintage.',
    medidas: '7 cm de alto',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_006',
    categoria: 'aromas',
    titulo: 'Hornito Flores Labradas — Verde Vintage',
    descripcion: 'Hornito con labrado de flores, terminación verde vintage.',
    medidas: '7 cm de alto',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_007',
    categoria: 'aromas',
    titulo: 'Hornito Hojas',
    descripcion: 'Hornito con relieve de hojas, terminación a mano.',
    medidas: '8,7 cm de alto',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_008',
    categoria: 'aromas',
    titulo: 'Roció Áurico Protector Personal — Armonizador de Chakras',
    descripcion: 'Roció energético personal, aroma para armonizar los chakras.',
    medidas: 'Frasco atomizador',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_009',
    categoria: 'aromas',
    titulo: 'Roció Áurico Protector Personal — Prosperidad',
    descripcion: 'Roció energético personal, aroma a prosperidad.',
    medidas: 'Frasco atomizador',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_010',
    categoria: 'aromas',
    titulo: 'Roció Áurico Protector Personal — Protección Energética',
    descripcion: 'Roció energético personal, aroma a protección.',
    medidas: 'Frasco atomizador',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_011',
    categoria: 'aromas',
    titulo: 'Roció Áurico Protector Personal — Regenerador de Aura',
    descripcion: 'Roció energético personal, aroma a regeneración.',
    medidas: 'Frasco atomizador',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_012',
    categoria: 'aromas',
    titulo: 'Sahumerio Artesano en Bolsa ×20 — Lavanda',
    descripcion: 'Sagrada Madre. Sahumerio artesano, varillas de lavanda.',
    medidas: 'Bolsa ×20 varillas',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_013',
    categoria: 'aromas',
    titulo: 'Sahumerio Artesano en Bolsa ×20 — Palo Santo con Rosas',
    descripcion: 'Sagrada Madre. Sahumerio artesano, palo santo con rosas.',
    medidas: 'Bolsa ×20 varillas',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_014',
    categoria: 'aromas',
    titulo: 'Sahumerio Botánico — Gardenias y Caléndula',
    descripcion: 'Sagrada Madre, línea Botánico. Floral suave y cálido.',
    medidas: 'Caja cerrada',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_015',
    categoria: 'aromas',
    titulo: 'Sahumerio Botánico — Magnolias',
    descripcion: 'Sagrada Madre, línea Botánico. Floral intenso y elegante.',
    medidas: 'Caja cerrada',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_016',
    categoria: 'aromas',
    titulo: 'Sahumerio Patagonia — Lavanda Silvestre',
    descripcion: 'Sagrada Madre, línea Patagonia. Lavanda lavada, aire de montaña.',
    medidas: 'Caja cerrada',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_017',
    categoria: 'aromas',
    titulo: 'Sahumerio Ritual — Gratitud',
    descripcion: 'Sagrada Madre, línea Ritual. Intención de agradecer.',
    medidas: 'Caja cerrada',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_018',
    categoria: 'aromas',
    titulo: 'Sahumerio Ritual — Limpieza Energética',
    descripcion: 'Sagrada Madre, línea Ritual. Intención de limpiarenergía.',
    medidas: 'Caja cerrada',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_019',
    categoria: 'aromas',
    titulo: 'Sahumerio Ritual — Manifestar',
    descripcion: 'Sagrada Madre, línea Ritual. Intención de manifestar.',
    medidas: 'Caja cerrada',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_020',
    categoria: 'aromas',
    titulo: 'Sahumerio Tibetano Gold Edition ×5 — Pasión Rosa',
    descripcion: 'Aromanza. Fascinación, edición Gold, 5 varillas.',
    medidas: 'Caja ×5 varillas',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_021',
    categoria: 'aromas',
    titulo: 'Sahumerio Tibetano Gold Edition ×5 — Sweet Home',
    descripcion: 'Aromanza. Regocijo, edición Gold, 5 varillas.',
    medidas: 'Caja ×5 varillas',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_022',
    categoria: 'aromas',
    titulo: 'Vela de Noche Blanca ×12',
    descripcion: 'Conjunto de velas blancas, para mesas largas o escenas.',
    medidas: 'Caja ×12',
    precio: null,
    estado: 'disponible',
    destacado: true,
    foto: ''
  },
  {
    id: 'ar_023',
    categoria: 'aromas',
    titulo: 'Vela Torneada 15 cm — Rojo',
    descripcion: 'Vela torneada a mano, cája de 6 unidades.',
    medidas: 'Caja ×6 · 15 cm',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_024',
    categoria: 'aromas',
    titulo: 'Vela Torneada 15 cm — Verde',
    descripcion: 'Vela torneada a mano, cája de 6 unidades.',
    medidas: 'Caja ×6 · 15 cm',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_025',
    categoria: 'aromas',
    titulo: 'Veloncito Navideño — Blanco',
    descripcion: 'Veloncito pequeño para escenas navideñas.',
    medidas: '5,5 × 3,5 cm',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_026',
    categoria: 'aromas',
    titulo: 'Veloncito Navideño — Rojo',
    descripcion: 'Veloncito pequeño para escenas navideñas.',
    medidas: '5,5 × 3,5 cm',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_027',
    categoria: 'aromas',
    titulo: 'Veloncito Navideño — Verde',
    descripcion: 'Veloncito pequeño para escenas navideñas.',
    medidas: '5,5 × 3,5 cm',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  },
  {
    id: 'ar_028',
    categoria: 'aromas',
    titulo: 'Apagavelas de Bronce',
    descripcion: 'Pieza de bronce para apagar velas sin ahogar el aroma.',
    medidas: 'Pieza indiv.',
    precio: null,
    estado: 'disponible',
    destacado: false,
    foto: ''
  }
];
