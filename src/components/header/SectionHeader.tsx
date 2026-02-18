import { fadeInUp } from '@/lib/animations';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <motion.div {...fadeInUp} className='mb-10'>
      {eyebrow && (
        <span className='mb-3 block font-mono text-sm text-cyan-400'>
          {eyebrow}
        </span>
      )}
      <h2 className='text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
        {title}
      </h2>
    </motion.div>
  );
}
