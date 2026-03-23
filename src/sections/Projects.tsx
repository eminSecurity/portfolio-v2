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
    title: 'Security Audit Platform',
    description: 'Automated vulnerability scanner with customizable reporting dashboards. Built for enterprise penetration testing workflows.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'IoT Device Manager',
    description: 'Secure management platform for IoT devices with real-time monitoring and firmware updates.',
    tech: ['Kotlin', 'Spring Boot', 'MQTT', 'InfluxDB'],
    github: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Network Analyzer',
    description: 'Wireshark-like packet analyzer built in Python with custom protocol detection.',
    tech: ['Python', 'Scapy', 'PyQt5', 'SQLite'],
    github: '#',
  },
  {
    id: '4',
    title: 'Portfolio V2',
    description: 'This portfolio website - Modern React application with cyberpunk design aesthetics.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/eminSecurity/portfolio-v2',
    demo: 'https://emami-114.github.io/portfolio-v2/',
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
            A selection of my recent work in cybersecurity and development
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
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
