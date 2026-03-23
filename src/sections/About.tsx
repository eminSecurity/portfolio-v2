import { motion } from 'framer-motion';
import { Award, Briefcase, Calendar, Code } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

const stats = [
  { icon: Calendar, value: '3+', label: 'Years Experience' },
  { icon: Briefcase, value: '10+', label: 'Projects Completed' },
  { icon: Award, value: '5', label: 'CompTIA Certs' },
  { icon: Code, value: '8+', label: 'Technologies' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <div className="relative bg-surface border border-border rounded-3xl p-8 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                      <span className="font-orbitron text-4xl font-bold text-primary">E</span>
                    </div>
                  </div>
                  <p className="font-orbitron text-2xl font-bold">Emami</p>
                  <p className="text-accent font-mono text-sm mt-2">Cybersecurity Expert</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted leading-relaxed mb-6">
              I'm a passionate <span className="text-primary">Fachinformatiker</span> specializing in 
              cybersecurity and full-stack development. With my complete <span className="text-primary">CompTIA 
              certification stack</span>, I bring both theoretical knowledge and practical experience 
              to every project.
            </p>
            
            <p className="text-lg text-muted leading-relaxed mb-8">
              My expertise spans from <span className="text-accent">penetration testing</span> and 
              <span className="text-accent">network security</span> to building modern web applications 
              with React and Kotlin. I'm particularly interested in IoT security and embedded systems.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <GlowCard key={stat.label} delay={index * 0.1}>
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="font-orbitron text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
