import { cn } from '@/lib/css';

export interface LinkProps {
  children: string;
  className?: string;
}

export function PrettyText({ className, children }: LinkProps) {
  return (
    <span
      className={cn(
        'heading gradient block w-full text-center text-5xl font-bold leading-tight text-[#33d2ff] hover:no-underline',
        className
      )}
    >
      {children}
    </span>
  );
}
