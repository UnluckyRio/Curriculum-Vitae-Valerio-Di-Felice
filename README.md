# Curriculum Vitae - Valerio Di Felice

## 📋 Descrizione

Sito web professionale che presenta il curriculum vitae di Valerio Di Felice, sviluppatore Full Stack e Game Designer. Il sito include una pagina principale con il CV completo e una sezione portfolio che mostra i progetti realizzati.

## ✨ Caratteristiche

- **Design Responsive**: Ottimizzato per desktop, tablet e dispositivi mobili
- **Tema Scuro/Chiaro**: Toggle dinamico tra modalità chiara e scura con persistenza delle preferenze
- **Stampa CV**: Funzionalità di stampa ottimizzata per il curriculum
- **Portfolio Interattivo**: Sezione dedicata ai progetti con descrizioni e tecnologie utilizzate
- **Animazioni Fluide**: Transizioni CSS smooth per un'esperienza utente migliorata
- **SEO Ottimizzato**: Meta tag e struttura HTML semantica

## 🛠️ Tecnologie Utilizzate

### Frontend
- **HTML5**: Struttura semantica e accessibile
- **CSS3**: Styling avanzato con Flexbox e Grid
- **JavaScript ES6+**: Logica interattiva e gestione del tema
- **Tailwind CSS**: Framework CSS utility-first per styling rapido
- **Font Awesome**: Libreria di icone vettoriali
- **Google Fonts**: Tipografia professionale (Inter)

### Build Tools
- **Vite**: Build tool moderno e veloce
- **PostCSS**: Processore CSS con autoprefixer
- **Terser**: Minificazione JavaScript per produzione

### Deploy & CI/CD
- **GitHub Pages**: Hosting gratuito
- **GitHub Actions**: Deploy automatico con workflow CI/CD
- **Multi-page Support**: Configurazione Vite per gestire più pagine HTML

## 🚀 Funzionalità Implementate

### Pagina Principale (index.html)
- Informazioni personali e contatti
- Profilo professionale
- Esperienze lavorative e formative
- Competenze tecniche organizzate per categoria
- Certificazioni e lingue
- Pulsante per accesso al portfolio
- Funzione stampa CV ottimizzata

### Portfolio (portfolio.html)
- Griglia responsive di progetti
- Descrizioni dettagliate con tecnologie utilizzate
- Link a demo e codice sorgente
- Design cards con hover effects
- Sezione contatti integrata

### Gioco Integrato
- **Foxy Dash**: Gioco HTML5 sviluppato con Godot Engine
- Completamente integrato nel sito
- Accessibile dalla sezione portfolio

## 📁 Struttura del Progetto

```
Curriculum-Vitae-Valerio-Di-Felice/
├── .github/workflows/          # GitHub Actions per deploy automatico
├── assets/                     # Risorse statiche (immagini, CSS)
├── dist/                       # Build di produzione
├── public/                     # File statici copiati nel build
│   ├── script/                 # JavaScript files
│   └── Foxy Dash HTML/         # Gioco integrato
├── index.html                  # Pagina principale CV
├── portfolio.html              # Pagina portfolio
├── package.json                # Dipendenze e scripts
├── tailwind.config.js          # Configurazione Tailwind
├── vite.config.js              # Configurazione Vite
└── README.md                   # Documentazione
```

## 🔧 Installazione e Sviluppo

### Prerequisiti
- Node.js (versione 16 o superiore)
- npm o yarn

### Setup Locale

```bash
# Clona il repository
git clone https://github.com/UnluckyRio/Curriculum-Vitae-Valerio-Di-Felice.git

# Entra nella directory
cd Curriculum-Vitae-Valerio-Di-Felice

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

### Scripts Disponibili

```bash
# Sviluppo con hot reload
npm run dev

# Build per produzione
npm run build

# Preview del build di produzione
npm run preview
```

## 🌐 Deploy su GitHub Pages

Il sito è configurato per il deploy automatico su GitHub Pages tramite GitHub Actions.

### Deploy Automatico
1. Push del codice sul branch `main` o `master`
2. GitHub Actions esegue automaticamente il build
3. Deploy su GitHub Pages
4. Sito disponibile all'URL: `https://unluckyrio.github.io/Curriculum-Vitae-Valerio-Di-Felice/`

### Configurazione GitHub Pages
1. Vai nelle impostazioni del repository
2. Sezione "Pages"
3. Source: "GitHub Actions"
4. Il workflow si attiverà automaticamente

## 🎨 Personalizzazione

### Modifica del Tema
Il sistema di temi è gestito tramite:
- **CSS**: Classi Tailwind con varianti `dark:`
- **JavaScript**: Toggle dinamico e persistenza in localStorage
- **Icone**: Cambio automatico luna/sole in base al tema attivo

### Aggiunta di Progetti
Per aggiungere nuovi progetti al portfolio:
1. Modifica `portfolio.html`
2. Aggiungi una nuova card nella griglia progetti
3. Includi descrizione, tecnologie e link

## 📱 Responsive Design

Il sito è ottimizzato per:
- **Desktop**: Layout a colonne con sidebar
- **Tablet**: Layout adattivo con riorganizzazione elementi
- **Mobile**: Layout verticale single-column

## 🔍 SEO e Performance

- Meta tag ottimizzati per motori di ricerca
- Immagini ottimizzate e compresse
- CSS e JavaScript minificati
- Font loading ottimizzato
- Lazy loading per immagini

## 📄 Licenza

© 2025 Valerio Di Felice. Tutti i diritti riservati.

## 📞 Contatti

- **Email**: valesmile.99@gmail.com
- **LinkedIn**: [Valerio Di Felice](https://www.linkedin.com/in/valerio-di-felice/?originalSubdomain=it)
- **GitHub**: [UnluckyRio](https://github.com/UnluckyRio)

---

*Curriculum Vitae realizzato con ❤️ utilizzando Vite, Tailwind CSS e moderne tecnologie web.*