import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type ActionButtonProps = ComponentPropsWithoutRef<'a'>;

export function ActionButton({ className, children, ...props }: ActionButtonProps) {
  return (
    <a
      className={cn(
        'not-prose my-5 inline-flex h-9 items-center justify-center rounded-md border border-fd-foreground bg-fd-foreground px-3.5 text-sm font-medium text-fd-background no-underline shadow-sm transition-colors hover:bg-fd-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
