import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Kontakt
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted max-w-2xl mx-auto">
            Offen für Projekte in Cybersecurity und Entwicklung
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron text-2xl font-bold mb-6">
              Lass uns verbinden
            </h3>
            
            <p className="text-muted mb-8">
              Ob du einen Security-Audit brauchst, Hilfe bei einem Projekt suchst 
              oder einfach über Tech quatschen willst – ich freue mich immer über 
              neue Herausforderungen und spannende Gespräche.
            </p> 
              new opportunities and challenges.
            </p>

            <div className="space-y-4">
              {[
                { 
                  icon: Mail, 
                  label: 'Email', 
                  value: 'contact@emami.de',
                  href: 'mailto:contact@emami.de'
                },
                { 
                  icon: Github, 
                  label: 'GitHub', 
                  value: 'github.com/eminSecurity',
                  href: 'https://github.com/eminSecurity'
                },
                { 
                  icon: Linkedin, 
                  label: 'LinkedIn', 
                  value: 'linkedin.com/in/emami',
                  href: '#'
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border rounded-xl 
                           hover:border-primary hover:glow-gold transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <GlowCard delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg 
                           focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                           text-white placeholder-muted transition-colors"
                  placeholder="Dein Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg 
                           focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                           text-white placeholder-muted transition-colors"
                  placeholder="deine@email.de"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg 
                           focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                           text-white placeholder-muted transition-colors resize-none"
                  placeholder="Erzähl mir von deinem Projekt..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 
                         bg-primary text-secondary font-semibold rounded-lg
                         hover:bg-primary/90 transition-all duration-300
                         hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-5 h-5" />
                Nachricht senden
              </button>
            </form>
          </GlowCard>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted text-sm">
            © 2024 <span className="text-primary">Emami</span>. Entwickelt mit React + Tailwind + Framer Motion
          </p>
        </div>
      </footer>
    </section>
  );
}
