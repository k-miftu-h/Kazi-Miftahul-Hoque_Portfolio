'use client';

import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export default function AnimatedSection({ children, className = '', delay = 0, style }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
