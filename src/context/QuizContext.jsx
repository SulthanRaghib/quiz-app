import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(60);

  const resetQuiz = () => {
    setQuestions([]);
    setAnswers([]);
    setCurrentIndex(0);
    setScore(0);
    setRemainingTime(60);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        answers,
        setAnswers,
        currentIndex,
        setCurrentIndex,
        score,
        setScore,
        remainingTime,
        setRemainingTime,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
