import { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { clearAll, removeData, getData, saveData } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import HistoryList from "../components/HistoryList";

export default function Result() {
  const { answers, score, resetQuiz, questions } = useQuiz();
  const navigate = useNavigate();

  const total = questions.length;
  const correct = score;
  const wrong = answers.length - score;
  const [history, setHistory] = useState([]);

  // Save result to per-user history (localStorage) when Result mounts
  useEffect(() => {
    const user = getData("quizUser");
    if (!user) return;

    const catObj = getData("quizCategory");
    const category = catObj && catObj.id ? catObj.id : null;
    const difficulty = getData("quizDifficulty") || "";

    const entry = {
      date: new Date().toISOString(),
      total,
      correct,
      wrong,
      answered: answers.length,
      category,
      difficulty,
    };

    const key = `quizHistory_${user}`;
    const existing = getData(key) || [];

    // Avoid storing duplicate consecutive entries
    const first = existing[0];
    if (first && JSON.stringify(first) === JSON.stringify(entry)) {
      // still set history from existing
      setHistory(existing.slice(0, 10));
      return;
    }

    // Prepend new entry and keep only the 10 most recent
    const next = [entry, ...existing].slice(0, 10);
    saveData(key, next);
    setHistory(next);
  }, []);

  const handleRestart = () => {
    resetQuiz();
    // keep selected category and difficulty — only remove saved quiz progress
    removeData("quizData");
    navigate("/quiz");
  };

  const handleLogout = () => {
    resetQuiz();
    clearAll();
    navigate("/"); // Navigate to login page
  };

  return (
    <div className="app-bg flex items-center justify-center">
      <div className="container">
        <div className="card text-center">
          <h1 className="text-2xl font-bold mb-4">Hasil Kuis</h1>
          <p>Total Soal: {total}</p>
          <p>Benar: {correct}</p>
          <p>Salah: {wrong}</p>
          <p>Terjawab: {answers.length}</p>

          <div className="flex gap-4 mt-6 justify-center">
            <button onClick={handleRestart} className="btn-primary">
              Main Lagi
            </button>
            <button onClick={handleLogout} className="btn-secondary">
              Logout
            </button>
          </div>
          <div className="mt-6">
            <HistoryList history={history} />
          </div>
        </div>
      </div>
    </div>
  );
}
