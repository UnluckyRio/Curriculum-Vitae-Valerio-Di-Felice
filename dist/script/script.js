// Script per il Curriculum Vitae di Valerio Di Felice
// Aggiunge interattività e animazioni alla pagina

document.addEventListener('DOMContentLoaded', function() {
    // Inizializzazione delle funzionalità
    initScrollAnimations();
    initSmoothScrolling();
    initSkillHover();
    initPrintFunction();
    initThemeToggle();
});

/**
 * Gestisce le animazioni durante lo scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Osserva tutte le sezioni
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

/**
 * Aggiunge smooth scrolling per i link interni
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Aggiunge effetti hover alle skill tags
 */
function initSkillHover() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * Aggiunge funzionalità di stampa
 */
function initPrintFunction() {
    // Non creare il pulsante stampa nella pagina portfolio
    if (window.location.pathname.includes('portfolio.html')) {
        return;
    }
    
    // Crea un pulsante per la stampa
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Stampa CV';
    printButton.className = 'fixed bottom-6 right-6 bg-primary-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-200 print:hidden';
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    document.body.appendChild(printButton);
}

/**
 * Aggiunge toggle per tema scuro/chiaro
 */
function initThemeToggle() {
    // Controlla se il tema scuro è già attivo
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    }
    
    // Non creare il pulsante floating nella pagina portfolio
    if (window.location.pathname.includes('portfolio.html')) {
        return;
    }
    
    // Crea il pulsante per il toggle del tema
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'fixed bottom-6 left-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-200 print:hidden';
    themeToggle.setAttribute('aria-label', 'Toggle tema scuro');
    
    if (isDarkMode) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
            document.documentElement.classList.remove('dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'false');
        } else {
            document.documentElement.classList.add('dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'true');
        }
    });
    
    document.body.appendChild(themeToggle);
}

/**
 * Aggiunge effetto di typing per il titolo
 */
function initTypingEffect() {
    const title = document.querySelector('h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid #3b82f6';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
}

/**
 * Gestisce il caricamento progressivo delle immagini
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Aggiunge animazione di conteggio per le statistiche
 */
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000; // 2 secondi
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Gestione degli errori JavaScript
window.addEventListener('error', function(e) {
    console.error('Errore JavaScript:', e.error);
});

// Ottimizzazione delle performance
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registrato con successo:', registration.scope);
            })
            .catch(function(error) {
                console.log('Registrazione ServiceWorker fallita:', error);
            });
    });
}