/**
 * Timeline Component
 * Gestiona la línea de tiempo interactiva y el contenido dinámico
 */

class Timeline {
    constructor(data) {
        this.data = data;
        this.activeItemId = data[0].id; // Por defecto, el primer hito
        this.timelineContainer = document.getElementById('timeline');
        this.contentContainer = document.getElementById('timelineContent');
        
        this.init();
    }

    init() {
        this.renderTimelineItems();
        this.renderContent(this.activeItemId);
        this.attachEventListeners();
    }

    /**
     * Renderiza los hitos de la timeline
     */
    renderTimelineItems() {
        const itemsHTML = this.data.map((item) => {
            const isActive = item.id === this.activeItemId;
            
            return `
                <div class="timeline-item ${isActive ? 'active' : ''}" 
                     data-id="${item.id}"
                     style="--item-color: ${item.color}">
                    <div class="timeline-marker">
                        <span class="timeline-year">${item.year}</span>
                    </div>
                    <div class="timeline-label">
                        <h3>${item.title}</h3>
                    </div>
                </div>
            `;
        }).join('');

        this.timelineContainer.innerHTML = itemsHTML;
    }

    /**
     * Renderiza el contenido del hito activo
     */
    renderContent(itemId) {
        const item = this.data.find(d => d.id === itemId);
        if (!item) return;

        // Animación de salida
        this.contentContainer.style.opacity = '0';
        this.contentContainer.style.transform = 'translateY(10px)';

        setTimeout(() => {
            const contentHTML = `
                <div class="content-header" style="border-left-color: ${item.color}">
                    <div class="content-year">${item.year}</div>
                    <h2>${item.title}</h2>
                    ${item.subtitle ? `<p class="content-subtitle">${item.subtitle}</p>` : ''}
                </div>
                
                <div class="content-body">
                    ${item.content}
                    
                    ${item.image ? `
                        <figure class="content-image">
                            <img src="${item.image.src}" alt="${item.title}">
                            <figcaption>${item.image.caption}</figcaption>
                        </figure>
                    ` : ''}
                </div>
            `;

            this.contentContainer.innerHTML = contentHTML;

            // Animación de entrada
            setTimeout(() => {
                this.contentContainer.style.opacity = '1';
                this.contentContainer.style.transform = 'translateY(0)';
            }, 50);
        }, 200);
    }

    /**
     * Actualiza el estado activo
     */
    setActiveItem(itemId) {
        if (this.activeItemId === itemId) return;

        this.activeItemId = itemId;
        
        // Actualizar clases de los items
        const items = this.timelineContainer.querySelectorAll('.timeline-item');
        items.forEach(item => {
            if (item.dataset.id === itemId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Renderizar nuevo contenido
        this.renderContent(itemId);
    }

    /**
     * Adjunta event listeners a los items
     */
    attachEventListeners() {
        this.timelineContainer.addEventListener('click', (e) => {
            const item = e.target.closest('.timeline-item');
            if (item) {
                this.setActiveItem(item.dataset.id);
            }
        });

        // Navegación por teclado (accesibilidad)
        this.timelineContainer.addEventListener('keydown', (e) => {
            const item = e.target.closest('.timeline-item');
            if (item && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                this.setActiveItem(item.dataset.id);
            }
        });

        // Hacer los items focuseables
        const items = this.timelineContainer.querySelectorAll('.timeline-item');
        items.forEach(item => {
            item.setAttribute('tabindex', '0');
            item.setAttribute('role', 'button');
        });
    }
}

// Inicializar timeline cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Verificar que los datos estén disponibles
    if (typeof timelineData !== 'undefined') {
        new Timeline(timelineData);
    } else {
        console.error('Timeline data no disponible');
    }
});

