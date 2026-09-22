export const appName = '灵研帮助中心';

export const appDescription =
  '灵研 AI 产品帮助中心，提供浏览器插件安装、功能使用与常见问题指南。';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!configuredSiteUrl) {
  throw new Error('NEXT_PUBLIC_SITE_URL is required. See .env.example.');
}

export const siteUrl = configuredSiteUrl.replace(/\/$/, '');

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

export function withBasePath(path: string) {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  if (!basePath || path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//.test(path)) return path;

  const relativePath = path.replace(/^\//, '');
  return new URL(relativePath, `${siteUrl}/`).toString();
}
