import { cn } from '@/lib/css';
import { PrettyText } from './pretty-text';

export interface LinkProps {
  href: string;
  rel?: string;
  target?: string;
  children?: string;
  className?: string;
}

export function PrettyLink({
  href,
  children,
  target,
  rel,
  className,
  ...props
}: LinkProps) {
  return (
    <a
      {...props}
      className={cn('block w-full', className)}
      href={href}
      target={target}
      rel={rel || 'noreferrer'}
    >
      <PrettyText>{children ?? href}</PrettyText>
    </a>
  );
}
