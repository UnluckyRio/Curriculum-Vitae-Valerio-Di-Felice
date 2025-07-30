// Script per il Curriculum Vitae di Valerio Di Felice
// Aggiunge interattività e animazioni alla pagina

document.addEventListener('DOMContentLoaded', function() {
    // Inizializzazione delle funzionalità
    initScrollAnimations();
    initSmoothScrolling();
    initSkillHover();
    initPrintFunction();
    initThemeToggle();
    initBotpressWebchat();
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

/**
 * Inizializza la webchat di Botpress
 */
function initBotpressWebchat() {
    // Configurazione del client Botpress
    const clientId = "41d1e2a6-1d58-4b12-b761-11204ddae018";
    
    // Crea il contenitore per la webchat
    const webchatContainer = document.createElement('div');
    webchatContainer.id = 'botpress-webchat';
    webchatContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        font-family: inherit;
    `;
    
    // Crea il pulsante FAB (Floating Action Button)
    const fabButton = document.createElement('button');
    fabButton.innerHTML = '<i class="fas fa-comments"></i>';
    fabButton.className = 'webchat-fab';
    fabButton.style.cssText = `
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    `;
    
    // Effetti hover per il FAB
    fabButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
    });
    
    fabButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    });
    
    // Crea il contenitore della chat
    const chatWindow = document.createElement('div');
    chatWindow.style.cssText = `
        position: absolute;
        bottom: 70px;
        right: 0;
        width: 350px;
        height: 500px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        display: none;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid #e1e5e9;
    `;
    
    // Header della chat
    const chatHeader = document.createElement('div');
    chatHeader.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    
    const headerTitle = document.createElement('div');
    headerTitle.innerHTML = `
        <div style="font-weight: 600; font-size: 16px;">Assistente Virtuale</div>
        <div style="font-size: 12px; opacity: 0.9;">Chiedimi informazioni su Valerio</div>
    `;
    
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: background-color 0.2s;
    `;
    
    closeButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(255,255,255,0.1)';
    });
    
    closeButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });
    
    chatHeader.appendChild(headerTitle);
    chatHeader.appendChild(closeButton);
    
    // Area messaggi
    const messagesArea = document.createElement('div');
    messagesArea.style.cssText = `
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        background: #f8f9fa;
    `;
    
    // Messaggio di benvenuto
    const welcomeMessage = document.createElement('div');
    welcomeMessage.style.cssText = `
        background: white;
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 12px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        font-size: 14px;
        line-height: 1.4;
    `;
    welcomeMessage.innerHTML = `
        <strong>👋 Ciao!</strong><br>
        Sono l'assistente virtuale di Valerio. Puoi chiedermi informazioni su:
        <ul style="margin: 8px 0 0 0; padding-left: 16px;">
            <li>Esperienza lavorativa</li>
            <li>Competenze tecniche</li>
            <li>Progetti realizzati</li>
            <li>Formazione</li>
        </ul>
    `;
    
    messagesArea.appendChild(welcomeMessage);
    
    // Area input
    const inputArea = document.createElement('div');
    inputArea.style.cssText = `
        padding: 16px;
        border-top: 1px solid #e1e5e9;
        background: white;
        display: flex;
        gap: 8px;
    `;
    
    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.placeholder = 'Scrivi un messaggio...';
    messageInput.style.cssText = `
        flex: 1;
        padding: 10px 12px;
        border: 1px solid #e1e5e9;
        border-radius: 20px;
        outline: none;
        font-size: 14px;
        transition: border-color 0.2s;
    `;
    
    messageInput.addEventListener('focus', function() {
        this.style.borderColor = '#667eea';
    });
    
    messageInput.addEventListener('blur', function() {
        this.style.borderColor = '#e1e5e9';
    });
    
    const sendButton = document.createElement('button');
    sendButton.innerHTML = '<i class="fas fa-paper-plane"></i>';
    sendButton.style.cssText = `
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s;
    `;
    
    sendButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    sendButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    inputArea.appendChild(messageInput);
    inputArea.appendChild(sendButton);
    
    // Assembla la finestra chat
    chatWindow.appendChild(chatHeader);
    chatWindow.appendChild(messagesArea);
    chatWindow.appendChild(inputArea);
    
    // Assembla il contenitore principale
    webchatContainer.appendChild(chatWindow);
    webchatContainer.appendChild(fabButton);
    
    // Aggiungi al DOM
    document.body.appendChild(webchatContainer);
    
    // Variabile per tracciare lo stato della chat
    let isChatOpen = false;
    
    // Gestione apertura/chiusura chat
    function toggleChat() {
        isChatOpen = !isChatOpen;
        if (isChatOpen) {
            chatWindow.style.display = 'flex';
            fabButton.style.transform = 'rotate(45deg)';
            messageInput.focus();
        } else {
            chatWindow.style.display = 'none';
            fabButton.style.transform = 'rotate(0deg)';
        }
    }
    
    // Event listeners
    fabButton.addEventListener('click', toggleChat);
    closeButton.addEventListener('click', toggleChat);
    
    // Aggiungi event listener per i link "Demo" nel portfolio
    // Usa un timeout per assicurarsi che il DOM sia completamente caricato
    setTimeout(() => {
        const demoLinks = document.querySelectorAll('a');
        let demoLinksFound = 0;
        
        demoLinks.forEach(link => {
            // Controlla se il link contiene "Demo" nel testo
            if (link.textContent && link.textContent.trim().includes('Demo')) {
                demoLinksFound++;
                // Rimuovi eventuali event listener esistenti
                link.removeEventListener('click', handleDemoClick);
                // Aggiungi il nuovo event listener
                link.addEventListener('click', handleDemoClick, true);
            }
        });
        
        // console.log('Configurati', demoLinksFound, 'link Demo per aprire la webchat');
    }, 100);
    
    // Funzione per gestire il click sui link Demo
    function handleDemoClick(e) {
        e.preventDefault();
        e.stopPropagation();
        // console.log('Link Demo cliccato - apertura webchat');
        if (!isOpen) {
            toggleChat();
        }
        return false;
    }
    
    // Funzione per aggiungere messaggi
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            background: ${isUser ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
            color: ${isUser ? 'white' : '#333'};
            padding: 10px 12px;
            border-radius: 12px;
            margin-bottom: 8px;
            max-width: 80%;
            align-self: ${isUser ? 'flex-end' : 'flex-start'};
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            font-size: 14px;
            line-height: 1.4;
            margin-left: ${isUser ? 'auto' : '0'};
            margin-right: ${isUser ? '0' : 'auto'};
        `;
        messageDiv.textContent = text;
        messagesArea.appendChild(messageDiv);
        messagesArea.scrollTop = messagesArea.scrollHeight;
    }
    
    // Risposte predefinite
    const responses = {
        'esperienza': 'Valerio ha esperienza come Sviluppatore Full-Stack presso Nexsoft dal 2023, dove si occupa di sviluppo web e mobile utilizzando tecnologie moderne.',
        'competenze': 'Le competenze principali includono: JavaScript, TypeScript, React, Node.js, Python, PHP, MySQL, MongoDB, Git, Docker e molto altro.',
        'progetti': 'Ha realizzato diversi progetti tra cui applicazioni web, giochi, e-commerce e sistemi di gestione. Puoi vedere alcuni esempi nella sezione portfolio.',
        'formazione': 'Diplomato in Informatica e Telecomunicazioni presso l\'I.T.I.S. "Enrico Fermi" di Francavilla Fontana con votazione 84/100.',
        'contatti': 'Puoi contattare Valerio via email: valeriodifelice.dev@gmail.com o tramite LinkedIn.',
        'default': 'Grazie per la domanda! Per informazioni più dettagliate, ti consiglio di esplorare le sezioni del curriculum o di contattare direttamente Valerio.'
    };
    
    // Gestione invio messaggi
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, true);
            messageInput.value = '';
            
            // Simula typing indicator
            setTimeout(() => {
                const lowerMessage = message.toLowerCase();
                let response = responses.default;
                
                if (lowerMessage.includes('esperienza') || lowerMessage.includes('lavoro')) {
                    response = responses.esperienza;
                } else if (lowerMessage.includes('competenze') || lowerMessage.includes('skill') || lowerMessage.includes('tecnologie')) {
                    response = responses.competenze;
                } else if (lowerMessage.includes('progetti') || lowerMessage.includes('portfolio')) {
                    response = responses.progetti;
                } else if (lowerMessage.includes('formazione') || lowerMessage.includes('studio') || lowerMessage.includes('diploma')) {
                    response = responses.formazione;
                } else if (lowerMessage.includes('contatti') || lowerMessage.includes('email') || lowerMessage.includes('contatto')) {
                    response = responses.contatti;
                }
                
                addMessage(response);
            }, 1000);
        }
    }
    
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Chiudi chat cliccando fuori
    document.addEventListener('click', function(e) {
        if (isChatOpen && !webchatContainer.contains(e.target)) {
            toggleChat();
        }
    });
}

// ServiceWorker rimosso temporaneamente per evitare errori
// TODO: Implementare ServiceWorker quando necessario
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('/sw.js')
//             .then(function(registration) {
//                 console.log('ServiceWorker registrato con successo:', registration.scope);
//             })
//             .catch(function(error) {
//                 console.log('Registrazione ServiceWorker fallita:', error);
//             });
//     });
// }