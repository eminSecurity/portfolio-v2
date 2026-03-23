import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface Certification {
  id: string;
  name: string;
  fullName: string;
  icon: typeof Shield;
  color: string;
  description: string;
}

const certifications: Certification[] = [
  {
    id: 'sec+',
    name: 'Security+',
    fullName: 'CompTIA Security+',
    icon: Shield,
    color: '#FFD700',
    description: 'Core security skills including threat management, cryptography, and network security',
  },
  {
    id: 'pentest+',
    name: 'Pentest+',
    fullName: 'CompTIA Pentest+',
    icon: Award,
    color: '#00D4FF',
    description: 'Penetration testing, vulnerability assessment, and ethical hacking',
  },
  {
    id: 'net+',
    name: 'Network+',
    fullName: 'CompTIA Network+',
    icon: Shield,
    color: '#FF6B6B',
    description: 'Network infrastructure, operations, security, and troubleshooting',
  },
  {
    id: 'linux+',
    name: 'Linux+',
    fullName: 'CompTIA Linux+',
    icon: Shield,
    color: '#4ECDC4',
    description: 'Linux system administration, security, and automation',
  },
  {
    id: 'a+',
    name: 'A+',
    fullName: 'CompTIA A+',
    icon: CheckCircle,
    color: '#95E1D3',
    description: 'IT fundamentals, hardware, software, and troubleshooting',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">CompTIA</span> Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted max-w-2xl mx-auto">
            Professional certifications validating expertise in cybersecurity and IT
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <GlowCard key={cert.id} delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <Icon 
                      className="w-8 h-8" 
                      style={{ color: cert.color }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-orbitron text-xl font-bold mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-muted mb-2 font-mono">{cert.fullName}</p>
                    <p className="text-sm text-muted leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2">
                      <span 
                        className="px-2 py-1 rounded text-xs font-semibold"
                        style={{ 
                          backgroundColor: `${cert.color}20`,
                          color: cert.color 
                        }}
                      >
                        Verified
                      </span>
                      <span className="text-xs text-muted">2024</span>
                    </div>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted text-sm">
            * All certifications obtained in 2024 • <a href="#" className="text-primary hover:underline">View Credentials</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
