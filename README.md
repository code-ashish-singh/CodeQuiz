# CodeQuiz

A quiz-taking app redesigned to match the CodeQuiz reference UI: a split
auth flow, a colourful category picker, a 5-question quiz, and a results
screen — all on a brand-purple stage with rounded white cards.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run lint      # eslint
```

## Project structure

```
src/
  components/      Reusable UI building blocks (Button, Card, FormField,
                    SubjectCard, OptionCard, DashboardHeader, UserMenu, …)
  illustrations/    Hand-built SVG illustrations (auth hero, celebration)
  hooks/            useAuthUser — reactive view of the local session
  utils/            authStorage (localStorage helpers), quiz (sampling/scoring)
  data/             subjects.js — category catalogue + accent colours
  pages/            Home, LogIn, SignIn, TestPage (route-level screens)
```

## How auth works

There's no backend — `src/utils/authStorage.js` persists a single account
to `localStorage` under the `user` key (`{ name, email, password, islogin }`).
Sign up writes the account, login validates against it and flips
`islogin`, and a 30-minute inactivity timer in `App.jsx` logs the session
out automatically. `useAuthUser()` gives any component a live read of that
state without re-implementing the storage logic.

## How quizzes work

Each subject in `src/data/subjects.js` points at a JSON question bank in
`public/JSON`. `TestPage` fetches the bank, randomly samples 5 questions
per attempt (`utils/quiz.js`), and walks through them one at a time before
showing a scored results screen. "Play Again" re-samples a fresh set of 5
from the same bank.

## Design tokens

Brand colours, the category accent palette, and font families are defined
once as Tailwind v4 `@theme` variables in `src/index.css`, so every
component pulls from the same source of truth (e.g. `var(--color-brand-500)`).
