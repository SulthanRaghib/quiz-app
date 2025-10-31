# Quiz App

A modern quiz application built with React, Vite, and Zustand. This app allows users to log in, take quizzes, and view results, all while maintaining state using localStorage.

## Features

- User authentication (mocked for demonstration purposes).
- Dynamic quiz questions fetched from Open Trivia Database (OpenTDB).
- Timer for each quiz question.
- State management using Zustand.
- Responsive design with Tailwind CSS.

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SulthanRaghib/quiz-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quiz-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality.

## Project Structure

```
quiz-app/
├── public/               # Static assets
├── src/                  # Source code
│   ├── api/              # API helpers
│   │   └── opentdb.js    # OpenTDB API integration
│   ├── assets/           # Images and other assets
│   │   └── react.svg     # React logo
│   ├── components/       # Reusable components
│   │   ├── HistoryList.jsx
│   │   ├── QuestionCard.jsx
│   │   └── Timer.jsx
│   ├── context/          # Context for global state
│   │   └── QuizContext.jsx
│   ├── pages/            # Application pages
│   │   ├── Login.jsx
│   │   ├── Quiz.jsx
│   │   └── Result.jsx
│   ├── utils/            # Utility functions
│   │   └── storage.js    # LocalStorage helpers
│   ├── App.css           # Global styles
│   ├── App.jsx           # Main app component
│   ├── index.css         # Tailwind CSS imports
│   └── main.jsx          # Application entry point
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Project metadata and scripts
├── postcss.config.cjs    # PostCSS configuration
├── tailwind.config.cjs   # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## LocalStorage Keys

- `quiz-app-user`: Stores user authentication data.
- `quiz-app-answers`: Stores user answers for the quiz.

## Notes

- This project uses Zustand for state management and Axios for API calls.
- Tailwind CSS is configured but not fully utilized in the current design.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
