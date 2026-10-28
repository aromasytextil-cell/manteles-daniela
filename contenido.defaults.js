/* Reyna Isabel — contenido semilla
 * Todo el copy editorial vive acá. El HTML es la estructura; este archivo es la voz.
 * El panel admin escribirá sobre la copia en localStorage; si no hay copia, el sitio cae acá.
 *
 * fotos{} es el PUNTO ÚNICO DE REEMPLAZO de imágenes: cuando tengas las fotos reales,
 * cambiá la URL por la ruta local (ej. 'assets/mantel-lino.jpg') y nada más.
 */

window.CONTENIDO_DEFECTO = {

  marca: {
    nombre: 'Reyna Isabel',
    tagline: 'Mantelería artesanal',
    whatsapp: '549356570626',
    instagram: '@reynaisabeltextiles',
    email: 'hola@reynaisabel.com',
    ciudad: 'Buenos Aires, Argentina'
  },

  hero: {
    eyebrow: 'Mantelería artesanal',
    titulo: 'La mesa como un lienzo.',
    subtitulo: 'Telas naturales, cortadas y terminadas a mano. Pocas piezas, elegidas una por una.',
    cta: 'Ver la colección'
  },

  manifiesto: {
    pullQuote: 'Una mesa bien puesta no necesita levantar la voz.',
    parrafos: [
      'Trabajo con lino, algodón y telas crudas. Nada de estampas estridentes ni temporadas: piezas que van a seguir estando bien dentro de diez años.',
      'Cada mantel se corta, se cose y se plancha en casa. Por eso hay pocas unidades y cada una tiene su propia mano.'
    ]
  },

  catalogo: {
    eyebrow: 'Colección',
    titulo: 'Piezas disponibles',
    bajada: 'Lo que ves hoy es lo que hay. Se repone despacio, a medida que vuelve la tela.',
    filtros: {
      todo: 'Todo',
      manteles: 'Manteles',
      caminos: 'Caminos de Mesa',
      accesorios: 'Accesorios de Centro',
      aromas: 'Aromas y Velas'
    },
    vacio: 'No hay piezas en esta categoría por ahora.'
  },

  aMedida: {
    eyebrow: 'A medida',
    titulo: 'Contanos tu mesa',
    bajada: 'Si las medidas que necesitás no están en la colección, se hace. Decime cómo es tu mesa y te contesto con una propuesta.',
    campos: {
      medidas: { label: 'Medidas de tu mesa', placeholder: 'Ej.: 1,60 × 2,40 m' },
      ocasion: { label: 'Ocasión', placeholder: 'Casa de todos los días, casamiento, regalo…' },
      fecha: { label: 'Fecha en la que la necesitás', placeholder: '' }
    },
    cta: 'Enviar por WhatsApp',
    nota: 'Te contesto con una propuesta dentro de las 24 horas.'
  },

  trust: [
    'Hecho a mano, pieza por pieza',
    'Telas naturales, sin estampas',
    'Envíos a todo el país'
  ],

  footer: {
    frase: 'Piezas de mesa para todos los días.',
    legal: 'Los precios están expresados en pesos argentinos.'
  },

  // Punto único de reemplazo de imágenes.
  fotos: {
    hero: 'assets/post-10.webp',
    p1:   'assets/post-08.webp',
    p2:   'assets/post-04.webp',
    p3:   'assets/post-01.webp',
    p4:   'assets/post-11.webp',
    p5:   'assets/post-02.webp',
    p6:   'assets/post-07.webp'
  }
};
