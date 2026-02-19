import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='max-w-7xl m-auto items-center justify-between px-6 py-4'>
      <div className='h-px w-full bg-linear-to-r from-transparent via-cyan-500/20 to-transparent' />
      <div className='flex flex-col items-center justify-between gap-4 pt-8 md:flex-row'>
        <div className='flex items-center gap-2.5'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-linear-to-br from-cyan-500/20 to-blue-600/20'>
            <Code2 className='h-3.5 w-3.5 text-cyan-400' />
          </div>

          <span className='text-sm font-bold text-foreground'>
            Copyrignt &copy; Choi. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
