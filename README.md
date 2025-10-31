# Quiz App (React + Vite)

Ringkas: aplikasi kuis ringan yang mengambil soal dari Open Trivia DB dan memakai Tailwind CSS untuk styling.

## Fitur

- Pilih nama pengguna, kategori, dan tingkat kesulitan
- Soal berdurasi (timer), umpan balik jawaban, dan perhitungan skor
- Riwayat per pengguna (localStorage), dipangkas hingga 10 entri terbaru

## Prasyarat

- Node.js (direkomendasikan >= 20.19)
- npm

## Instalasi & Jalankan (Windows cmd)

```cmd
npm install
npm run dev
```

## Build & Preview

```cmd
npm run build
npm run preview
```

## Struktur proyek (ringkas)

```text
├── src/
│   ├── api/
│   │   └── opentdb.js
│   ├── components/
│   │   ├── QuestionCard.jsx
│   │   ├── Timer.jsx
│   │   └── HistoryList.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Quiz.jsx
│   │   └── Result.jsx
│   ├── context/
│   │   └── QuizContext.jsx
│   └── utils/
│       └── storage.js
├── tailwind.config.cjs
├── postcss.config.cjs
└── package.json
```

## Kunci localStorage

- `quizUser` — username saat ini
- `quizCategory` — objek kategori yang dipilih ({ id })
- `quizDifficulty` — string kesulitan
- `quizData` — progres kuis sementara (dihapus saat restart)
- `quizHistory_<username>` — array hasil kuis (terbaru di depan, max 10)

## Catatan singkat

- `tailwind.config.cjs` dan `postcss.config.cjs` ada di repo; jika ingin membangun Tailwind secara manual, pastikan adapter `@tailwindcss/postcss` terpasang.
- Tidak ada helper `scripts/build_tailwind.cjs` di repo saat ini.

## Lisensi

MIT
