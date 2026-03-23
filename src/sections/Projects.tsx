import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Kanban Board Pro',
    description: 'Full-Stack Kanban-Board mit React, Node.js und MongoDB. Features: Drag-and-Drop, Real-time Updates, GitHub-Integration für automatische Ticket-Erstellung.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/eminSecurity/kanban-board-pro',
    featured: true,
  },
  {
    id: '2',
    title: 'Portfolio V2',
    description: 'Diese Portfolio-Website – Modernes React mit Cyberpunk-Gold Design, Framer Motion Animationen und voller Responsive-Unterstützung.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite'],
    github: 'https://github.com/eminSecurity/portfolio-v2',
    demo: 'https://emami-114.github.io/portfolio-v2/',
    featured: true,
  },
  {
    id: '3',
    title: 'IoT Security Scanner',
    description: 'Python-basiertes Tool zum Scannen von IoT-Geräten auf bekannte Schwachstellen. Nutzt Nmap und Metasploit-Module für automatisierte Tests.',
    tech: ['Python', 'Nmap', 'Metasploit', 'SQLite', 'AsyncIO'],
    github: 'https://github.com/eminSecurity/iot-security-scanner',
  },
  {
    id: '4',
    title: 'OpenClaw Agent Hub',
    description: 'Multi-Agent System für automatisierte Software-Entwicklung mit KI-Agents (Kimi, Qwen, DeepSeek) – Von Planung bis Deployment.',
    tech: ['TypeScript', 'Node.js', 'OpenAI API', 'Docker'],
    github: 'https://github.com/eminSecurity/openclaw-agent-hub',
  },
  {
    id: '5',
    title: 'CompTIA Study App',
    description: 'Lern-App für CompTIA-Zertifizierungen mit Quiz-Modus, Flashcards und Prüfungssimulation.',
    tech: ['Kotlin', 'Android', 'Room DB', 'Material Design'],
    github: 'https://github.com/eminSecurity/comptia-study-app',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted max-w-2xl mx-auto">
            Eine Auswahl meiner Projekte in Cybersecurity und Entwicklung
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <GlowCard key={project.id} delay={index * 0.1} className={project.featured ? 'md:col-span-2' : ''}>
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Folder className="w-8 h-8 text-primary" />
                    <h3 className="font-orbitron text-xl font-bold">{project.title}</h3>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-muted hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-muted hover:text-accent transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/eminSecurity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary 
                     rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Mehr auf GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
