# Portfolio V2 - Architecture

## Projekt-Übersicht
Modernes Cybersecurity Portfolio für EminSecurity

## Design-System: Cyberpunk-Gold

### Farben
| Name | Hex | CSS Variable | Verwendung |
|------|-----|--------------|------------|
| Primary | `#FFD700` | `--color-primary` | Gold - Akzente, Buttons, Highlights |
| Secondary | `#0D0D0D` | `--color-secondary` | Dunkler Background |
| Accent | `#00D4FF` | `--color-accent` | Cyan - Links, Glow-Effekte |
| Surface | `#1A1A1A` | `--color-surface` | Cards, Sections |
| Text | `#FFFFFF` | `--color-text` | Haupttext |
| Text Muted | `#A0A0A0` | `--color-text-muted` | Sekundärtext |
| Border | `#333333` | `--color-border` | Subtile Grenzen |

### Typografie
| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 (Hero) | Orbitron | 700 | 4rem / 6rem desktop |
| H2 (Section) | Orbitron | 700 | 2.5rem |
| H3 (Card) | Orbitron | 600 | 1.5rem |
| Body | Inter | 400 | 1rem |
| Code/Mono | JetBrains Mono | 400 | 0.875rem |
| Button | Inter | 600 | 1rem |

### Animationen
```css
/* Fade In Up */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Glow Pulse */
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.6); }
}

/* Typing Cursor */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Slide In */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
```

### Effects
- **Glow:** Goldener Schatten auf Primary-Elementen
- **Glass:** `backdrop-filter: blur(10px)` mit halbtransparentem Hintergrund
- **Gradient:** Linear-gradient von Primary zu Accent
- **Hover:** Scale 1.02 + enhanced glow

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Build:** Vite 5
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Orbitron, Inter, JetBrains Mono)

## Projektstruktur
```
src/
├── sections/
│   ├── Hero.tsx           # Hero mit Typing-Animation
│   ├── About.tsx          # Über mich + Bild
│   ├── Skills.tsx         # CompTIA + Tech Stack
│   ├── Certifications.tsx # Zertifikate Grid
│   ├── Projects.tsx       # Projekt-Karten
│   └── Contact.tsx        # Kontaktformular
├── components/
│   ├── Navbar.tsx         # Sticky Navigation
│   ├── Card.tsx           # Wiederverwendbare Card
│   ├── Button.tsx         # Primary/Secondary Buttons
│   ├── Badge.tsx          # Skill-Badges
│   ├── ProgressBar.tsx    # Animated Progress
│   ├── GlowEffect.tsx     # Wrapper für Glow
│   └── TypeWriter.tsx     # Typing-Animation
├── hooks/
│   ├── useInView.ts       # Intersection Observer
│   └── useScrollProgress.ts
├── utils/
│   └── animations.ts      # Reusable Variants
└── styles/
    └── globals.css        # Custom Animations
```

## Sections Breakdown

### 1. Hero Section
- **Inhalt:** Name "Emami", Titel "Cybersecurity Expert", Subtitle mit Typing-Effekt
- **CTA:** "View Projects" + "Contact Me"
- **Visual:** Abstract cyber pattern oder Particles
- **Animation:** Fade in + Typing

### 2. About Section
- **Inhalt:** Profiltext, Foto-Platzhalter, Stats (Jahre Erfahrung, Projekte, Zertifikate)
- **Layout:** 2-Spalten (Text links, Bild rechts)
- **Animation:** Slide in from sides

### 3. Skills Section
- **Inhalt:** Programming Languages (mit Level-Bars), Tools, Technologies
- **Layout:** Grid mit Progress-Bars
- **Animation:** Bars fill on scroll

### 4. Certifications Section
- **Inhalt:** CompTIA Stack (Security+, Pentest+, Network+, Linux+, A+)
- **Layout:** 5 Cards in Grid
- **Visual:** Badge-Stil mit Icons
- **Animation:** Staggered fade in

### 5. Projects Section
- **Inhalt:** 4-6 Featured Projects mit Beschreibung, Tech-Stack, Links
- **Layout:** Card Grid
- **Hover:** Card lift + glow

### 6. Contact Section
- **Inhalt:** Email, GitHub, LinkedIn Links + Kontaktformular
- **Layout:** Centered, minimalistisch

## Kanban-Ticket
**ID:** OC-PORTFOLIO-001  
**Status:** In Dev  
**Assignee:** KimiCoder

### Sub-Tasks
- [ ] OC-001-1: Vite + React + Tailwind Setup
- [ ] OC-001-2: Design System (Colors, Fonts, Animations)
- [ ] OC-001-3: Navbar Component
- [ ] OC-001-4: Hero Section mit TypeWriter
- [ ] OC-001-5: About Section
- [ ] OC-001-6: Skills Section mit ProgressBars
- [ ] OC-001-7: Certifications Section
- [ ] OC-001-8: Projects Section
- [ ] OC-001-9: Contact Section + Footer
- [ ] OC-001-10: Responsive Design + Mobile
- [ ] OC-001-11: GitHub Pages Deploy

## Test-Strategie
- **Unit Tests:** Components rendern korrekt
- **Integration:** Sections laden in Reihenfolge
- **Visual:** Responsive Breakpoints (320px - 4K)
- **Animation:** Framer Motion Variants testen
