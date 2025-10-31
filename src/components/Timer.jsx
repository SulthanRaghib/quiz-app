import { useEffect, useState } from "react";
import { saveData } from "../utils/storage";
import { useQuiz } from "../context/QuizContext";

export default function Timer({ duration, onTimeUp }) {
  const [time, setTime] = useState(duration);
  const { setRemainingTime } = useQuiz();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        setRemainingTime(t - 1);
        saveData("remainingTime", t - 1);
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-right text-lg font-semibold mb-2">Waktu: {time}s</div>
  );
}
