# Andrea Valle — Personal Site

A public personal site built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The static site is generated in `dist/`.

## Cloudflare Pages

- Production branch: `main`
- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js version: `22.16.0` (declared in `.node-version`)

After the Pages project is deployed, add the desired domain under **Custom domains** in Cloudflare.
