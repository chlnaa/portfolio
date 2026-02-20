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
          <span className='shrink-0'>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
