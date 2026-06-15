# ICICSCET 2026

Official website for the **International Conference on Intelligent Computing, Secure Communications and Emerging Technologies (ICICSCET 2026)**.

- **Date:** 19 December 2026
- **Mode:** Hybrid (on-site & online)
- **Venue:** Malineni Lakshmaiah Women's Engineering College, Guntur, Andhra Pradesh, India
- **In Association with:** UCSI University, Kuala Lumpur, Malaysia
- **Paper submission deadline:** 19 November 2026

## Tech stack

- [Vite](https://vitejs.dev/)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) & [lucide-react](https://lucide.dev/)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

## Project structure

All conference content lives in a single source of truth: [`src/data/conference.ts`](src/data/conference.ts). Every UI component reads from it, so updating dates, names, committee members, tracks, etc. only requires editing that file.
