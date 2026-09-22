import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="灵研 AI" width={28} height={28} priority />
          <span>灵研AI 帮助中心</span>
        </span>
      ),
      url: '/docs',
    },
  };
}
