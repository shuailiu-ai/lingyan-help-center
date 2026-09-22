import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || '';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // GitHub Pages serves the exported `out` directory and cannot run a Node server.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default withMDX(config);
