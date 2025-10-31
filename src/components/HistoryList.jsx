import React from "react";

export default function HistoryList({ history = [] }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="mt-6 text-left">
      <h2 className="text-lg font-semibold mb-2">Riwayat Kuis</h2>
      <div className="space-y-2">
        {history.map((h, idx) => (
          <div
            key={idx}
            className="border rounded-xl bg-white/70"
            style={{ padding: "10px", marginBottom: "10px" }}
          >
            <div className="text-sm text-gray-600">
              {new Date(h.date).toLocaleString()}
            </div>
            <div className="font-medium">
              Skor: {h.correct} / {h.total}
            </div>
            <div>Terjawab: {h.answered}</div>
            <div className="text-sm text-gray-700">
              Kategori: {h.categoryName || (h.category ? h.category : "All")} •
              Difficulty: {h.difficulty || "Any"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
