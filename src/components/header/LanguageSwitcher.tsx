import { Globe } from 'lucide-react';
import type { Language } from '@/context/LanguageProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';

const LANGUAGE_MAP: Record<Language, { label: string; flag?: string }> = {
  en: { label: 'English' },
  ko: { label: '한국어' },
  ja: { label: '日本語' },
};

interface LanguageSwitcherProps {
  current: Language;
  onChange: (lang: Language) => void;
}

export default function LanguageSwitcher({
  current,
  onChange,
}: LanguageSwitcherProps) {
  const languages = Object.keys(LANGUAGE_MAP) as Language[];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='group focus:outline-none focus:ring-0 focus-visible:ring-0 transition-all duration-300 bg-transparent hover:bg-muted'
          variant='default'
          size='icon'
          aria-label='Select language'
        >
          <Globe className='w-5 h-5 text-muted-foreground transition-colors duration-300 group-hover:text-cyan-500' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-28'>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => onChange(lang)}
            className={`cursor-pointer ${
              current === lang ? 'font-semibold' : ''
            }`}
          >
            {LANGUAGE_MAP[lang].label}

            {current === lang && (
              <div className='w-1.5 h-1.5 rounded-full bg-cyan-400/70' />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
