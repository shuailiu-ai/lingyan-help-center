import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { appDescription, appName, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: appDescription,
  applicationName: appName,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: appName,
    title: appName,
    description: appDescription,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: appName,
    description: appDescription,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: 'zh-CN',
            translations: {
              'Search(search dialog)': '搜索文档',
              'Search(search trigger)': '搜索',
              'No results found(search dialog)': '没有找到相关内容',
              'Close Search(search dialog)(aria-label)': '关闭搜索',
              'On this page(table of contents)': '本页目录',
              'No Headings(table of contents)': '本页暂无目录',
              'Previous Page(pagination)': '上一篇',
              'Next Page(pagination)': '下一篇',
              'Copy Text(code block)(aria-label)': '复制',
              'Copied Text(code block)(aria-label)': '已复制',
              'Copy Anchor Link(heading anchor)(aria-label)': '复制标题链接',
              'Copy Markdown(page actions)': '复制 Markdown',
              'Open(page actions)': '更多操作',
              'View as Markdown(page actions)': '查看 Markdown',
              'Toggle Theme(theme switcher)(aria-label)': '切换主题',
              'Light(theme switcher)(aria-label)': '浅色模式',
              'Dark(theme switcher)(aria-label)': '深色模式',
              'System(theme switcher)(aria-label)': '跟随系统',
              'Open Search(search trigger)(aria-label)': '打开搜索',
              'Open Sidebar(sidebar)(aria-label)': '打开侧栏',
              'Close Sidebar(sidebar)(aria-label)': '关闭侧栏',
              'Collapse Sidebar(sidebar)(aria-label)': '收起侧栏',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
