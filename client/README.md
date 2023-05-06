This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Install depeendencies

```bash
yarn
```

### Git pre-commit hooks

This project supports a git pre-commit hook which will perform:

- Typescript compilation (without outputting transpiled code)
- Linting according to `.eslintrc.json`
- Prettier formatting according to `.prettierrc.json`

To install, run:

```bash
yarn prepare
```

### Run development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on http://localhost:3000/api
