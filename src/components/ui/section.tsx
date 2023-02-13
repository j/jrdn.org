import { cn } from '@/lib/css';

export interface SectionProps {
  headline: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ headline, className, children }: SectionProps) {
  return (
    <section
      className={cn(
        'flex flex-col items-start justify-between md:flex-row',
        className
      )}
    >
      <h2 className="mb-4 w-[15rem] text-2xl font-semibold uppercase">
        {headline}
      </h2>
      <div className="w-full">{children}</div>
    </section>
  );
}
