import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { TypeWriter } from '../components/TypeWriter';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid"
    >
      <!-- Background Gradient -->
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-surface" />
      
      <!-- Floating Elements -->
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-mono text-sm md:text-base mb-4 tracking-widest">
            <TypeWriter text="<Cybersecurity_Expert />" speed={80} />
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-primary glow-text">E</span>
          <span className="text-white">mami</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-8"
        >
          Full-Stack Developer <span className="text-primary">|</span> CompTIA Certified 
          <span className="text-primary">|</span> IoT Security
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group px-8 py-3 bg-primary text-secondary font-semibold rounded-full 
                       hover:bg-primary/90 transition-all duration-300 hover:scale-105
                       animate-glow-pulse"
          >
            Projekte ansehen
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full 
                       hover:bg-primary hover:text-secondary transition-all duration-300"
          >
            Kontakt
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/eminSecurity', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:contact@emami.de', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-full text-muted hover:text-primary 
                       hover:border-primary hover:glow-gold transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <!-- Scroll Indicator -->
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted hover:text-primary transition-colors">
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
