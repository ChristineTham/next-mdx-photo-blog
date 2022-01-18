# next-mdx-photo-blog

A statically generated photo gallery and blog starter using Next.js, MDX, TailwindCSS, Photoswipe, and TypeScript.

Based on NextJS [blog-starter-typescript](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript), but markdown processing is replaced by MDX processing using mdx-bundler.

# Enhancements

The following was added to *blog-starter-typescript*:

1. `yarn create next-app --example blog-starter-typescript next-mdx-photo-blog`
2. `yarn upgrade --latest`
3. `yarn add -D tslib eslint eslint-config-next eslint-config-prettier`
4. `yarn remove remark remark-html`
5. `yarn add mdx-bundler esbuild`
6. `yarn add @headlessui/react @heroicons/react`
7. `yarn add -D @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio @tailwindcss/line-clamp`
8. `yarn add photoswipe react-photoswipe-gallery`

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter-typescript)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript&project-name=blog-starter-typescript&repository-name=blog-starter-typescript)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example blog-starter-typescript blog-starter-typescript-app
# or
yarn create next-app --example blog-starter-typescript blog-starter-typescript-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

`blog-starter-typescript` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
