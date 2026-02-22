import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: { label: string; href: string }[];
  activeSection: string;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  navItems,
  activeSection,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='w-full flex flex-col items-center gap-2 overflow-hidden pt-4 bg-zinc-900'
        >
          {navItems.map((item) => (
            <li key={item.href} className='w-full text-center'>
              <a
                href={item.href}
                onClick={onClose}
                className={cn(
                  'block rounded-md px-3 py-2 text-sm hover:text-cyan-400 hover:bg-zinc-800',
                  activeSection === item.href.slice(1)
                    ? 'text-cyan-400 bg-zinc-800'
                    : 'text-muted-foreground',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
