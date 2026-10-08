import type { ReactNode } from 'react';
import { FilePenLine } from 'lucide-react';
import { cn } from '@/lib/cn';

type EmptyStateProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
};

export function EmptyState({
  title = '内容整理中',
  children = '这篇教程的详细步骤还在编写，整理完成后会补充到这里。',
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'not-prose my-8 flex flex-col items-center rounded-xl border border-fd-border bg-fd-card px-6 py-14 text-center',
        className,
      )}
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-fd-primary/10 text-fd-primary">
        <FilePenLine className="size-5" aria-hidden="true" strokeWidth={1.75} />
      </div>
      <p className="text-base font-medium text-fd-foreground">{title}</p>
      <div className="mt-2 max-w-md text-sm leading-relaxed text-fd-muted-foreground">{children}</div>
    </div>
  );
}
