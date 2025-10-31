Quiz App (React + Vite)

Lightweight quiz application built with React and Vite. Uses the Open Trivia DB (opentdb.com) to fetch questions and Tailwind CSS for styling. Designed for quick local development and simple per-user history stored in localStorage.

Key points (short):

- Select username, category, and difficulty
- Timed questions, answer feedback, and score tracking
- Per-user history (localStorage), limited to 10 entries
- Tailwind CSS (v4) with PostCSS adapter; migration to utilities completed for main UI

Prerequisites

- Node.js (recommended >= 20.19 — some environments may require >= 22.12)
- npm (or compatible client)

Quick start (Windows cmd)

```cmd
npm install
npm run dev
```

Build / Preview

```cmd
npm run build
npm run preview
```

Project structure (high level)

- `src/` — React source files
  - `api/opentdb.js` — API helpers to fetch categories and questions
  - `components/` — UI components (QuestionCard, Timer, HistoryList, etc.)
  - `pages/` — App pages (Login, Quiz, Result)
  - `context/QuizContext.jsx` — quiz state management
  - `utils/storage.js` — localStorage helpers (saveData, getData, removeData, clearAll)
- `tailwind.config.cjs`, `postcss.config.cjs` — Tailwind/PostCSS config
- `scripts/build_tailwind.cjs` — helper to generate `temp.css` for Tailwind verification

LocalStorage keys

- `quizUser` — current username
- `quizCategory` — selected category object ({ id })
- `quizDifficulty` — selected difficulty string
- `quizData` — transient quiz progress (cleared on restart)
- `quizHistory_<username>` — array of past results (most recent first, max 10)

Notes & troubleshooting

- Tailwind v4 requires the `@tailwindcss/postcss` adapter in `postcss.config.cjs`. If you see missing utilities in dev/build, ensure the content globs in `tailwind.config.cjs` include all JSX/TSX files.
- If utilities appear missing, you can regenerate a diagnostic CSS file with:

```cmd
node scripts/build_tailwind.cjs
```

- If you change Node versions, restart your terminal/IDE to pick up the active Node in PATH.

License

- MIT

Contact / next steps

- For UI changes, edit components in `src/components` and `src/pages`.
- For API or quiz behavior, see `src/api/opentdb.js` and `src/context/QuizContext.jsx`.

---

Concise, focused, and ready for local development.
