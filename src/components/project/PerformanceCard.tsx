import { Card, CardContent } from '../ui/card';

type PerformanceCardProps = {
  label: string;
  value: string;
};

export function PerformanceCard({ label, value }: PerformanceCardProps) {
  return (
    <Card className='rounded-xl border border-white/10 bg-[#0f1115] p-2'>
      <CardContent>
        <span className='text-xs uppercase text-muted-foreground'>{label}</span>
        <div className='mt-1 text-lg font-bold text-white'>{value}</div>
      </CardContent>
    </Card>
  );
}
