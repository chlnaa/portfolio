import { Card, CardContent } from '../ui/card';

type PerformanceCardProps = {
  label: string;
  value: string;
};

export function PerformanceCard({ label, value }: PerformanceCardProps) {
  return (
    <Card className='rounded-xl border border-white/10 bg-[#0f1115] p-2'>
      <CardContent>
        <div className='mt-1 text-lg font-bold text-cyan-500'>{value}</div>
        <span className='text-xs uppercase text-muted-foreground'>{label}</span>
      </CardContent>
    </Card>
  );
}
