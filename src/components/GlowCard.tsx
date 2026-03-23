import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className = '', delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 40px rgba(255, 215, 0, 0.2)"
      }}
      className={`
        relative overflow-hidden
        bg-surface border border-border rounded-xl
        hover:border-primary/50
        transition-colors duration-300
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 p-6">{children}</div>
    </motion.div>
  );
}
