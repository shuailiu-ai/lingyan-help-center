import Link from 'next/link';
import { withBasePath } from '@/lib/site';

export default function HomePage() {
  const docsUrl = withBasePath('/docs/');

  return (
    <main className="flex flex-1 items-center justify-center p-8 text-sm">
      <meta httpEquiv="refresh" content={`0; url=${docsUrl}`} />
      <p>
        正在进入文档。如果没有自动跳转，请
        <Link href="/docs">打开帮助文档</Link>
        。
      </p>
    </main>
  );
}
