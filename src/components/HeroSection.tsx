import { HOME_DATA } from '@/constants/home';
import { motion } from 'framer-motion';
import {
  Code2,
  Cloud,
  Database,
  Layers,
  Monitor,
  Settings,
  Globe,
  Smartphone,
  Shield,
} from 'lucide-react';
import { Button } from './ui/button';

const techIcons = [
  { icon: Code2, label: 'Code' },
  { icon: Cloud, label: 'Cloud' },
  { icon: Database, label: 'Database' },
  { icon: Layers, label: 'Layers' },
  { icon: Monitor, label: 'Monitor' },
  { icon: Settings, label: 'Settings' },
  { icon: Globe, label: 'Globe' },
  { icon: Smartphone, label: 'Mobile' },
  { icon: Shield, label: 'Security' },
];

export function HeroSection() {
  return (
    <section
      id='home'
      className='relative flex min-h-screen items-center overflow-hidden px-6'
    >
      <div className='absolute inset-0 opacity-[0.03]'>
        <div
          className='h-full w-full'
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className='absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px]' />
      <div className='absolute -left-20 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px]' />

      <div className='flex flex-col justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-6'
        >
          <span className='inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm text-cyan-400'>
            <span className='h-1.5 w-1.5 rounded-full bg-cyan-400' />
            {HOME_DATA.title} <br />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl'
        >
          <span className='text-foreground'>
            {HOME_DATA.subtitle.split('and')[0]}
          </span>
          <br />
          <span className='text-foreground'>
            {HOME_DATA.subtitle.split('and')[1]}
          </span>
          <br />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg'
        >
          {HOME_DATA.description}
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
              variant={action.variant === 'primary' ? 'default' : 'outline'}
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
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='h-80 w-80 rounded-full bg-cyan-500/10 blur-[80px]' />
        </div>

        <div className='relative grid grid-cols-3 gap-4'>
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              className='group relative flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-xl border border-[#ffffff08] bg-[#0f1115]/80 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-[#0f1115] glow-border'
            >
              <tech.icon className='h-6 w-6 text-cyan-400/70 transition-colors group-hover:text-cyan-400' />
              <span className='font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-foreground'>
                {tech.label}
              </span>
            </motion.div>
          ))}

          <div className='absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-cyan-500/10 to-transparent' />
          <div className='absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent' />
        </div>
      </motion.div>
    </section>
  );
}
