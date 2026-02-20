import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '@/constants/experience';
import { SectionHeader } from './header/SectionHeader';
import CondensedExperienceCard from './experience/CondensedExperienceCard';
import FullExperienceCard from './experience/FullExperienceCard';
import { useLanguage } from '@/context/LanguageProvider';

export function ExperienceSection() {
  const { language } = useLanguage();
  return (
    <section id='experience' className='relative px-6 py-24 md:py-32'>
      <div className='absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />

      <div className='mx-auto max-w-7xl'>
        <SectionHeader eyebrow='Experience' title='Professional Experience' />

        <div className='flex flex-col gap-10'>
          {EXPERIENCE_DATA.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {exp.isCondensed ? (
                <CondensedExperienceCard exp={exp} language={language} />
              ) : (
                <FullExperienceCard exp={exp} language={language} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
