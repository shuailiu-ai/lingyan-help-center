import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { withBasePath } from './site';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2.5">
          {/* Static export serves this file from the Pages base path. next/image leaves that prefix off when unoptimized. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBasePath('/logo.png')} alt="灵研 AI" width={28} height={28} />
          <span>灵研AI 帮助中心</span>
        </span>
      ),
      url: '/docs',
    },
  };
}
