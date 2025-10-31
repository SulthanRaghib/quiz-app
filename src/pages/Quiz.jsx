import { useEffect, useState } from "react";
import { fetchQuestions } from "../api/opentdb";
import { useQuiz } from "../context/QuizContext";
import { saveData, getData } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";

export default function Quiz() {
  const {
    questions,
    setQuestions,
    currentIndex,
    setCurrentIndex,
    answers,
    setAnswers,
    score,
    setScore,
    remainingTime,
    setRemainingTime,
    resetQuiz,
  } = useQuiz();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Fetch data only once
  useEffect(() => {
    const saved = getData("quizData");
    if (saved) {
      setQuestions(saved.questions);
      setCurrentIndex(saved.currentIndex);
      setAnswers(saved.answers);
      setScore(saved.score);
      setRemainingTime(saved.remainingTime);
      setLoading(false);
    } else {
      // read selected category and difficulty from storage (saved at login)
      const savedCat = getData("quizCategory");
      const categoryId = savedCat && savedCat.id ? savedCat.id : null;
      const savedDiff = getData("quizDifficulty");
      const difficulty = savedDiff || null;
      fetchQuestions(10, "multiple", categoryId, difficulty).then((res) => {
        setQuestions(res);
        setLoading(false);
      });
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (questions.length > 0) {
      saveData("quizData", {
        questions,
        currentIndex,
        answers,
        score,
        remainingTime,
      });
    }
  }, [questions, currentIndex, answers, score, remainingTime]);

  const handleAnswer = (isCorrect) => {
    setAnswers((prev) => [...prev, isCorrect]);
    if (isCorrect) setScore((s) => s + 1);

    // Wait a short moment to show feedback in QuestionCard, then advance.
    if (currentIndex + 1 < questions.length) {
      setTimeout(() => setCurrentIndex((i) => i + 1), 700);
    } else {
      setTimeout(() => navigate("/result"), 700);
    }
  };

  if (loading) return <div className="text-center mt-10">Memuat Soal...</div>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="app-bg">
      <div className="container">
        <div className="card">
          <div className="mb-4">
            <Timer
              duration={remainingTime}
              onTimeUp={() => navigate("/result")}
            />
          </div>
          <QuestionCard
            question={currentQuestion}
            current={currentIndex + 1}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        </div>
      </div>
    </div>
  );
}
