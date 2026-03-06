import { HOME_DATA } from '@/constants/home';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FaGithub, FaReact, FaFigma } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiD3Dotjs,
  SiReactquery,
  SiSupabase,
  SiShadcnui,
} from 'react-icons/si';
import { RiBearSmileFill } from 'react-icons/ri';
import { useLanguage } from '@/context/LanguageProvider';

const techIcons = [
  { icon: FaReact, label: 'React' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiVite, label: 'Vite' },
  { icon: SiReactquery, label: 'Tanstack Query' },
  { icon: RiBearSmileFill, label: 'Zustand' },
  { icon: SiSupabase, label: 'Supabase' },
  { icon: SiD3Dotjs, label: 'D3.js' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: SiShadcnui, label: 'Shadcn UI' },
  { icon: FaFigma, label: 'Figma' },
  { icon: FaGithub, label: 'Git/GitHub' },
];

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section
      id='home'
      className='relative flex min-h-screen items-center overflow-hidden px-6'
    >
      <div className='absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[120px]' />
      <div className='absolute -left-20 top-1/2 h-[400px] w-[400px] rounded-full bg-cyan-600/15 blur-[100px]' />

      <div className='relative mx-auto flex w-full max-w-7xl items-center justify-between gap-8'>
        <div className='max-w-2xl flex flex-col justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mb-6'
          >
            <span className='inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm text-cyan-400'>
              <span className='h-1.5 w-1.5 rounded-full bg-cyan-400' />
              {HOME_DATA.title}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-balance text-4xl font-bold whitespace-pre-line leading-[1.1] tracking-tight md:text-4xl lg:text-5xl'
          >
            {HOME_DATA.subtitle[language]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='mt-6 max-w-2xl text-pretty whitespace-pre-line text-base leading-relaxed text-muted-foreground md:text-lg'
          >
            {HOME_DATA.description[language]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='mt-10 flex flex-wrap gap-4'
          >
            {HOME_DATA.actions.map((action) => (
              <Button
                key={action.label}
                variant={action.variant === 'primary' ? 'primary' : 'outline'}
                size='lg'
                asChild
              >
                <a href={action.href}>{action.label}</a>
              </Button>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className='relative hidden items-center justify-center lg:flex'
        >
          <div className='relative grid grid-cols-4 gap-5'>
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                className='group relative z-10 flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-500/5 backdrop-blur-sm'
              >
                <motion.span
                  className='absolute -inset-3 -z-10 rounded-xl bg-cyan-400/60 blur-2xl'
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                />
                <tech.icon className='relative z-10 h-6 w-6 text-cyan-400 transition-transform duration-300 group-hover:scale-125' />
                <span className='absolute bottom-3 text-[10px] font-medium text-cyan-100 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
