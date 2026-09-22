# 灵研帮助中心

灵研 AI 的产品帮助文档与教程网站。项目基于 Next.js、TypeScript、Fumadocs 和 MDX，内容面向科研用户，通过 Markdown 文件维护。

正式站点发布到 GitHub Pages：<https://shuailiu-ai.github.io/lingyan-help-center/>。推送到 `main` 后，`.github/workflows/pages.yml` 会构建静态文件并部署。仓库的 Pages 来源需要选择 GitHub Actions。

## Docker 启动

项目根目录执行：

```bash
docker compose up --build
```

浏览器访问 [http://localhost:3000](http://localhost:3000)。代码目录已挂载到容器，修改页面或文档后会自动刷新。Docker Desktop 上启用了文件轮询，以提升热更新稳定性。

当前 Compose 默认通过 DaoCloud 镜像代理获取 `node:22-alpine`，用于解决本地网络无法连接 Docker Hub 的问题。如果你的网络可直连 Docker Hub，可以这样使用官方地址：

```bash
NODE_IMAGE=node:22-alpine docker compose up --build
```

后台启动可使用：

```bash
docker compose up --build -d
```

查看日志：

```bash
docker compose logs -f help-center
```

停止项目：

```bash
docker compose down
```

如需同时删除 Docker 生成的依赖和缓存卷：

```bash
docker compose down -v
```

## 本机直接运行

需要 Node.js 22 和 pnpm 10：

```bash
pnpm install
pnpm dev
```

## 新增教程

文档位于 `content/docs/`。普通教程使用 Markdown，需要 Fumadocs 组件时使用 MDX。

新建普通页面，例如 `content/docs/plugin/troubleshooting.md`：

```md
---
title: 插件故障排查
description: 常见插件故障的处理方法。
order: 6
---

## 检查插件状态

在扩展程序页面确认插件已启用。
```

需要组件时，将扩展名改为 `.mdx`。项目已全局提供 `Card`、`Cards`、`Callout`、`Steps`、`Step`、`Tabs`、`Tab` 和 `ActionButton` 等组件。

需要添加主要操作按钮时，统一使用 `ActionButton`：

```mdx
<ActionButton href="https://example.com">
  打开功能
</ActionButton>
```

需要触发站内文件下载时，可以传入 `download`：

```mdx
<ActionButton href="/downloads/lingyan-ai-browser-extension.zip" download="灵研AI浏览器插件.zip">
  下载安装包
</ActionButton>
```

浏览器插件安装包固定存放在 `public/downloads/lingyan-ai-browser-extension.zip`。发布新版本时直接替换这个同名文件，页面链接无需修改。

文件路径会生成对应路由：

```text
content/docs/plugin/troubleshooting.md
-> /docs/plugin/troubleshooting
```

## 修改左侧导航

每个目录的 `meta.json` 控制分组名称和页面顺序。例如 `content/docs/plugin/meta.json`：

```json
{
  "title": "安装灵研插件",
  "defaultOpen": true,
  "pages": ["chrome", "edge", "manual-install"]
}
```

新增页面后，把不含扩展名的文件名加入对应 `pages` 数组。Frontmatter 的 `order` 用于记录建议顺序，当前导航的实际顺序以 `meta.json` 为准，避免隐式排序。

## Frontmatter 与 SEO

支持以下字段：

```yaml
title: 页面标题
description: 页面摘要
order: 1
seoTitle: 可选的 SEO 标题
seoDescription: 可选的 SEO 描述
canonical: 可选的规范链接
```

全站域名由 `NEXT_PUBLIC_SITE_URL` 控制，子路径由 `NEXT_PUBLIC_BASE_PATH` 控制。复制 `.env.example` 为 `.env` 后修改即可。这两项用于 canonical、Open Graph、`robots.txt` 和 `sitemap.xml`。GitHub Pages 项目站点的公开地址是 `https://shuailiu-ai.github.io/lingyan-help-center`，对应子路径 `/lingyan-help-center`。本地 Docker 会把地址覆盖为 `http://localhost:3000`，并清空子路径。

## 修改名称、Logo 与主题

- 网站名称和默认描述：`lib/site.ts`
- 导航 Logo 和标题：`lib/layout.shared.tsx`
- Logo 文件：`public/logo.png`
- favicon：`app/icon.png`
- 主题色和中文字体：`app/global.css`
- Fumadocs 布局：`app/docs/layout.tsx`

当前只在 Fumadocs 默认主题上调整了品牌色、Logo 和中文字体。Light / Dark Mode 由 Fumadocs 内置主题切换控制。

## Docker 文件

- `Dockerfile`：定义可配置的 Node.js 22 基础镜像、pnpm 依赖安装和开发服务器。
- `docker-compose.yml`：映射 3000 端口、挂载代码、保留依赖缓存、开启热更新轮询，并为当前网络配置基础镜像代理。
- `.dockerignore`：避免把依赖、构建缓存和本地环境变量复制进镜像。
- `.env.example`：记录可配置的网站公开 URL，不包含敏感信息。

## 常用检查

```bash
pnpm lint
pnpm types:check
pnpm build
```

项目由 Fumadocs 官方脚手架生成，内容源定义在 `lib/source.ts`。站点以静态导出方式构建，搜索索引在构建时写入 `app/api/search`，由浏览器在本地完成检索。`pnpm build` 的产物在 `out/`，GitHub Pages 直接托管这个目录。
