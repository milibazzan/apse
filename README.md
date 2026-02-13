# La transformación del modelo de atención de la enfermedad mental en Buenos Aires (1902-1920)

Micrositio web académico con línea de tiempo interactiva para presentar la transición paradigmática en salud mental durante las primeras décadas del siglo XX.

## 📁 Estructura del proyecto

```
apse/
├── index.html           # Estructura HTML principal
├── styles.css          # Estilos con paleta cromática académica
├── timeline.js         # Lógica de la línea de tiempo interactiva
├── timeline-data.js    # Datos de los tres momentos históricos
└── README.md          # Documentación
```

## 🎨 Diseño y paleta cromática

### Colores principales
- **Azul profundo** (`#1e3a5f`) - Representa el periodo positivista (1902)
- **Terracota** (`#8b4513`) - Representa las tensiones y Reforma Universitaria (1916)
- **Verde oscuro** (`#2d5f4f`) - Representa la emergencia de la higiene mental (1920)
- **Crema cálido** (`#f5f1eb`) - Color de fondo de página

### Tipografía
- Fuente principal: **Georgia** (serif)
- Uso consistente en todo el sitio
- Enfoque en legibilidad académica

## 🔄 Funcionalidad de la línea de tiempo

### Desktop (> 768px)
- Línea de tiempo **horizontal**
- Tres hitos conectados con líneas visuales
- Marcadores circulares con años
- Click en cualquier hito para ver su contenido

### Mobile (≤ 768px)
- Línea de tiempo **vertical**
- Hitos dispuestos en tarjetas
- Sin conectores visuales
- Touch-friendly

### Interactividad
- Estado activo destacado visualmente
- Transiciones suaves entre contenidos (fade + slide)
- Animaciones sutiles en hover
- Navegación por teclado (accesibilidad)

## 📝 Cómo modificar el contenido

### Editar los momentos históricos

Abrí `timeline-data.js` y modificá el array `timelineData`. Cada objeto representa un momento:

```javascript
{
    id: 'identificador-unico',      // ID único para el hito
    year: '1902',                    // Año a mostrar
    title: 'Título del momento',     // Título principal
    subtitle: 'Subtítulo opcional',  // Subtítulo descriptivo
    color: '#1e3a5f',                // Color asociado al momento
    content: `...`,                  // Contenido HTML
    image: {                         // Imagen opcional
        src: 'ruta/a/imagen.jpg',
        caption: 'Pie de imagen'
    }
}
```

### Agregar contenido HTML

Dentro de la propiedad `content`, podés usar HTML estándar:

```javascript
content: `
    <p>Párrafo de texto académico...</p>
    
    <h3>Subtítulo</h3>
    <p>Más contenido...</p>
    
    <ul>
        <li>Punto 1</li>
        <li>Punto 2</li>
    </ul>
`
```

### Agregar o modificar imágenes

1. Creá una carpeta `imagenes/` en el directorio raíz
2. Guardá tus imágenes allí
3. Actualizá la ruta en `timeline-data.js`:

```javascript
image: {
    src: 'imagenes/mi-foto.jpg',
    caption: 'Descripción según estilo APA.'
}
```

### Modificar referencias bibliográficas

Editá directamente el HTML en `index.html`, sección `referencias-section`:

```html
<p class="referencia">
    Autor, A. (2020). Título del trabajo. Editorial.
</p>
```

## 🎯 Características técnicas

### Responsive
- Adaptación automática a desktop, tablet y mobile
- Cambio de layout horizontal → vertical
- Optimización de tamaños de texto e imágenes

### Accesibilidad
- Navegación por teclado (Tab + Enter/Space)
- Atributos ARIA para lectores de pantalla
- Focus states visibles
- Soporte para `prefers-reduced-motion`

### Performance
- Sin dependencias externas
- JavaScript vanilla (sin frameworks)
- CSS moderno con variables
- Carga rápida y eficiente

## 🌐 Uso

Simplemente abrí `index.html` en tu navegador web. No requiere servidor ni instalación.

## 🔧 Personalización avanzada

### Cambiar colores

Editá las variables CSS en `styles.css` (líneas 13-22):

```css
:root {
    --color-primary: #1e3a5f;
    --color-secondary: #8b4513;
    --color-tertiary: #2d5f4f;
    /* ... más variables */
}
```

### Cambiar tipografía

Modificá las variables de fuente:

```css
:root {
    --font-main: 'Georgia', 'Times New Roman', serif;
    --font-headings: 'Georgia', 'Times New Roman', serif;
}
```

Para usar fuentes de Google Fonts, agregá en el `<head>` de `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Nombre+Fuente" rel="stylesheet">
```

### Agregar más momentos históricos

1. Agregá un nuevo objeto en `timeline-data.js`
2. El sistema detectará automáticamente el nuevo hito
3. Los estilos se adaptarán automáticamente

## 📱 Compatibilidad

- Chrome/Edge (últimas versiones)
- Firefox (últimas versiones)
- Safari (últimas versiones)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Licencia

Proyecto académico para la Universidad Nacional Autónoma de México (UNAM).
