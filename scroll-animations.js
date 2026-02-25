/**
 * Animaciones suaves al hacer scroll
 * Fade-in sutil para las secciones de Análisis y Reflexión
 */

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar las secciones a animar
    const sections = document.querySelectorAll('.analisis-section, .reflexion-section, .referencias-section');
    
    // Opciones del Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% de la sección es visible
    };
    
    // Callback cuando una sección entra en viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                // Opcional: dejar de observar una vez que ya se animó
                observer.unobserve(entry.target);
            }
        });
    };
    
    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observar cada sección
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
});



