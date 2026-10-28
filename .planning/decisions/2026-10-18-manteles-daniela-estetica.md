# Decisión: dirección estética y comercial del sitio — Manteles Daniela

- **Fecha:** 2026-10-18
- **Estado:** decidida, pendiente de gate GO/NO-GO con la dueña (viernes 23/10)
- **Método:** skill `board-asesor`, modo CONSEJO (3 rondas: posiciones independientes → cruce con disenso forzado → voto final)

## El problema real

Tensión de instrucciones: la dueña pidió "paleta pasteles en el fondo"; el brief pedía blanco puro / neutro chiza tipo Apple. Ambos no caben en el mismo canvas sin destruir uno.

## Veredicto

**Opción C — híbrido gobernado. 8.6/10.**

| Opción | Descripción | Score |
|---|---|---|
| A | Blanco puro literal | 6.0 |
| B | Pastel total (fondo pastel) | 4.5 |
| **C** | **Blanco como canvas + pastel en dosis** | **8.6** |

### Condiciones de C (no negociables)

1. Fondo del sitio = blanco `#FFFFFF`.
2. El pastel aparece **solo** como: banda full-bleed de sección, chip/hover/subrayado, fondo de la franja "A medida" y footer.
3. El pastel **nunca** va en: canvas general, CTA primario, texto, badges de precio.
4. El pastel **nunca** como caja flotante.
5. Máximo **1 banda pastel cada 3 secciones**.
6. Pastel firma: Blush `#F3E3DE`.

### A favor (1 línea por silla)

- **HORMOZI:** el color no vende, la oferta sí; el pastel solo es rentable si no ensucia la percepción de precio.
- **GRAHAM:** el brief dio un brief; un brief se defiende con criterio, no se diluye por pedido suelto.
- **BEZOS:** reversible. Los tokens permiten girar a B en un commit sin rehacer fotos.
- **Cliente Pyme (contrapeso):** el pedido de la dueña entra completo en una sección donde importa (a medida), así no se siente ignorada.
- **Directora de Arte (silla agregada):** el blanco es lo que hace que la tela sea la protagonista; el pastel es acento, no atmósfera.

### En contra

- La dueña puede leer la decisión como "no me escucharon". **Mitigación:** la franja "A medida" va en blush y es la sección de mayor ticket.
- El pastel es un camino de ida si ella insiste (obligaría a re-shootear fotos).

### Puerta de una vía

Opción **B queda armada pero sin ejecutar**: solo en 2 secciones (hero y franja "A medida"), nunca en catálogo. Se dispara únicamente si el gate del viernes falla.

## Gate GO/NO-GO

**Viernes 23/10.** Se muestra: 1 pantalla de hero + 3 productos.
- Si la dueña insiste en fondo pastel → ejecutar B en 2 secciones máximo.
- Si no → C queda firme y se sigue a página completa.

## Métrica de éxito

- **3 consultas "a medida" reales por semana** (con nombre + teléfono) a los 30 días.
- **Primera consulta en menos de 10 días.**

## Postura comercial

"Lujo accesible artesanal": 3–5x el precio de bazar, sin pedir permiso.

- Precio **visible siempre** en el catálogo estándar (tabular-nums, tinta, número único).
- Prohibido el rango: nunca "desde $X".
- WhatsApp reservado a **alto ticket**: a medida, eventos, mesa completa.
- Botón flotante de WhatsApp recién **después del 3er producto**.
- Único CTA del hero: **"Ver la colección"**.
- Ancla de lujo = servicio **"A medida"** ("Contanos tu mesa": medidas, ocasión, fecha).
- Trust strip de una línea.
- Fotos reales, nunca stock.

## Decisiones técnicas

- **Tailwind por CDN** (`cdn.tailwindcss.com`) + `tailwind.config` inline con `theme.extend`. Sin build step, deadline-safe. Migrar a build después.
- Patrón de datos: `*.defaults.js` como semilla + fallback (`window.CATALOGO_DEFECTO`, `window.CONTENIDO_DEFECTO`), igual que La Fábrica Insaciable.
- Ninguna decisión de arquitectura nueva: se reutiliza estructura del proyecto base.

## Riesgos / señales de template a evitar

Hero slider full-width · grilla de 4 columnas parejas · pastel como caja de color · candy pastels y gradientes · Playfair en todo · franjas tipo "¡Envío gratis!" · badges "¡Oferta!" · emojis ✨ · sombras fuertes · precios en rango.

Riesgo fotográfico: foto cálida sobre pastel se ensucia — el producto va siempre sobre blanco o tiza.

## Próximos pasos

| Fecha | Paso |
|---|---|
| mar 20/10 | Tokens + hero de una pantalla (commit) |
| jue 22/10 | Página completa con catálogo y filtros |
| vie 23/10 | Revisión con la dueña — **gate GO/NO-GO** |

## Archivos

- `Manteles Daniela/index.html` — tokens, nav frosted, hero, manifiesto, catálogo asimétrico, franja a medida, trust, footer.
- `Manteles Daniela/catalogo.defaults.js` — semilla de 6 piezas con precio visible.
- `Manteles Daniela/contenido.defaults.js` — copy editorial + mapa de fotos (punto único de reemplazo).
