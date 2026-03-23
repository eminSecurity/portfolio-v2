import { motion } from 'framer-motion';
import { GlowCard } from '../components/GlowCard';

interface Skill {
  name: string;
  level: number;
  category: 'language' | 'framework' | 'tool';
}

const skills: Skill[] = [
  { name: 'Kotlin', level: 95, category: 'language' },
  { name: 'Java', level: 95, category: 'language' },
  { name: 'JavaScript', level: 90, category: 'language' },
  { name: 'TypeScript', level: 85, category: 'language' },
  { name: 'React', level: 90, category: 'framework' },
  { name: 'Swift', level: 80, category: 'language' },
  { name: 'C#', level: 80, category: 'language' },
  { name: 'Python', level: 75, category: 'language' },
  { name: 'C/C++', level: 60, category: 'language' },
];

const tools = [
  'Git', 'Docker', 'Linux', 'Wireshark', 'Burp Suite', 
  'Metasploit', 'Nmap', 'VS Code', 'IntelliJ'
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted max-w-2xl mx-auto">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <GlowCard>
            <h3 className="font-orbitron text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Programming Languages
            </h3>
            
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-accent font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </GlowCard>

          {/* Tools & Technologies */}
          <GlowCard delay={0.2}>
            <h3 className="font-orbitron text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              Tools & Technologies
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: '#FFD700' }}
                  className="px-4 py-2 bg-secondary border border-border rounded-full 
                           text-sm text-muted hover:text-primary hover:border-primary
                           transition-all duration-300 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-orbitron text-lg font-semibold mb-4 text-accent">
                Focus Areas
              </h4>
              <ul className="space-y-2 text-muted">
                {[
                  'Penetration Testing & Ethical Hacking',
                  'Network Security & Infrastructure',
                  'Web Application Security',
                  'IoT & Embedded Security',
                  'Secure Software Development',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
