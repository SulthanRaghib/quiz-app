import { useQuiz } from "../context/QuizContext";
import { clearAll } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const { answers, score, resetQuiz, questions } = useQuiz();
  const navigate = useNavigate();

  const total = questions.length;
  const correct = score;
  const wrong = answers.length - score;

  const handleRestart = () => {
    resetQuiz();
    clearAll();
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
        </div>
      </div>
    </div>
  );
}
