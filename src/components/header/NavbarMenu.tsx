import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Code2, X, Menu } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageProvider';
import MobileMenu from './MobileMenu';
import { Button } from '../ui/button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Project', href: '#project' },
  { label: 'Contact', href: '#contact' },
];

export default function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', ...navItems.map((item) => item.href.slice(1))];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-[#ffffff08] bg-[#0a0a0a]/90 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <nav className='mx-auto flex flex-col max-w-7xl justify-between px-0 py-4 md:px-6'>
        <div className='flex items-center justify-between px-6'>
          <a href='#home' className='flex items-center gap-2.5'>
            <div className='flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-linear-to-br from-cyan-500/20 to-blue-600/20'>
              <Code2 className='h-4 w-4 text-cyan-400' />
            </div>
            <span className='text-lg font-bold text-foreground'>
              Choi&apos;s Portfolio
            </span>
          </a>

          <div className='flex items-center gap-3'>
            <div className='hidden items-center gap-8 md:flex'>
              <ul className='flex items-center gap-1'>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={cn(
                        'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        activeSection === item.href.slice(1)
                          ? 'text-cyan-400 border border-cyan-500/30  shadow-lg shadow-cyan-500/20'
                          : 'text-muted-foreground hover:text-cyan-400',
                      )}
                    >
                      {activeSection === item.href.slice(1) && (
                        <motion.span
                          layoutId='activeNav'
                          className='absolute inset-0 rounded-md bg-[#ffffff08]'
                          transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <span className='relative z-10'>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <LanguageSwitcher current={language} onChange={setLanguage} />
            </div>

            <div className='md:hidden flex items-center gap-2'>
              <LanguageSwitcher current={language} onChange={setLanguage} />
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsOpen(!isOpen)}
                aria-label='Open menu'
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        <div>
          <MobileMenu
            isOpen={isOpen}
            navItems={navItems}
            activeSection={activeSection}
            onClose={() => setIsOpen(false)}
          />
        </div>
      </nav>
    </motion.header>
  );
}
