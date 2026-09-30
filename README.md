# Portfolio

Personal portfolio for Emil Aune Holthe. The project currently contains a simple
placeholder page while the portfolio is under development.

## Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- ESLint
- npm

Application code lives in `src/`. The `@/*` import alias points to `src/*`.

## Run locally

Use Node.js 20.9 or newer and npm. The initial setup was verified with Node.js
22.14.0 and npm 10.9.2.

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks and production build

```sh
npm run lint
npm run build
```

To serve the production build locally:

```sh
npm start
```

Environment files such as `.env.local` are ignored by Git. Never commit secrets
or credentials.
