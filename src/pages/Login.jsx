import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, saveData, clearAll } from "../utils/storage";
import { fetchCategories } from "../api/opentdb";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [difficulty, setDifficulty] = useState("");

  const handleLogin = () => {
    if (username.trim() === "") return alert("Masukkan nama terlebih dahulu");
    const savedUser = getData("quizUser");
    // If a different user logs in, clear previous user's stored data
    if (savedUser && savedUser !== username) {
      clearAll();
    }
    saveData("quizUser", username);
    saveData("quizCategory", { id: Number(categoryId) || 0 });
    saveData("quizDifficulty", difficulty || "");
    navigate("/quiz");
  };

  useEffect(() => {
    fetchCategories().then((cats) => setCategories(cats || []));
    const savedCat = getData("quizCategory");
    if (savedCat && savedCat.id) setCategoryId(savedCat.id);
    const savedDiff = getData("quizDifficulty");
    if (savedDiff) setDifficulty(savedDiff);
    const savedUser = getData("quizUser");
    if (savedUser) setUsername(savedUser);
  }, []);

  return (
    <div className="app-bg flex items-center justify-center">
      <div className="container">
        <div className="card mx-auto max-w-md">
          <h1 className="text-3xl font-bold">Login Kuis</h1>
          <div className="form-stack mt-4">
            <input
              type="text"
              className="input"
              placeholder="Masukkan Nama"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <select
              className="input"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value={0}>All Categories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <select
              className="input"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <button onClick={handleLogin} className="btn-primary btn-full">
              Mulai
            </button>
          </div>
          {/* History is shown only on the Result page */}
        </div>
      </div>
    </div>
  );
}
