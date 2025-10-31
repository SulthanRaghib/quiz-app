import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, saveData } from "../utils/storage";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim() === "") return alert("Masukkan nama terlebih dahulu");
    saveData("quizUser", username);
    navigate("/quiz");
  };

  const existingUser = getData("quizUser");
  if (existingUser) navigate("/quiz");

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
            <button onClick={handleLogin} className="btn-primary btn-full">
              Mulai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
