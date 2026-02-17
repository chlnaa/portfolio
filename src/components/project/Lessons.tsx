interface LessonsProps {
  learned: string;
}

export function Lessons({ learned }: LessonsProps) {
  return (
    <p className='text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap'>
      {learned}
    </p>
  );
}
