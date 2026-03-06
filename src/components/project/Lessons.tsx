interface LessonsProps {
  learned: string[];
}

export function Lessons({ learned }: LessonsProps) {
  return (
    <ul className='space-y-2'>
      {learned.map((item, index) => (
        <li
          key={index}
          className='text-sm text-muted-foreground leading-relaxed flex gap-2'
        >
          <span className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500/60 shrink-0' />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
