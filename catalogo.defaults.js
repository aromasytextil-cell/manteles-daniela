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
  }
];
