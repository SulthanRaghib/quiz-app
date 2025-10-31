import { useMemo, useState, useEffect } from "react";

export default function QuestionCard({ question, current, total, onAnswer }) {
  // Shuffle answers once per question to avoid re-shuffling on every render.
  const allAnswers = useMemo(() => {
    const arr = [...question.incorrect_answers, question.correct_answer];
    // Fisher-Yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [question.correct_answer, question.incorrect_answers.join("|")]);

  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  // Reset local selection state whenever the question changes
  useEffect(() => {
    setSelected(null);
    setLocked(false);
  }, [
    question.correct_answer,
    question.incorrect_answers.join("|"),
    question.question,
  ]);

  const handleClick = (answer) => {
    if (locked) return;
    setSelected(answer);
    setLocked(true);
    onAnswer(answer === question.correct_answer);
  };

  return (
    <div className="card">
      <h2 className="text-lg font-bold mb-2">
        Soal {current}/{total}
      </h2>
      <p
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      <div className="flex flex-col gap-3">
        {allAnswers.map((ans) => {
          const stateClass = locked
            ? ans === question.correct_answer
              ? "correct"
              : ans === selected
              ? "wrong"
              : ""
            : "";
          return (
            <button
              key={ans}
              onClick={() => handleClick(ans)}
              className={`answer-btn ${stateClass}`}
              disabled={locked}
              dangerouslySetInnerHTML={{ __html: ans }}
            />
          );
        })}
      </div>
    </div>
  );
}
