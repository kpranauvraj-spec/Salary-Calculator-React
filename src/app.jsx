import { useState } from "react";

export default function App() {
  const [current, setCurrent] = useState("");
  const [offered, setOffered] = useState("");
  const [minHike, setMinHike] = useState(30);

  const hike =
    current && offered ? ((offered - current) / current) * 100 : null;

  return (
    <div style={styles.card}>
      <h2>Salary Comparison Calculator</h2>

      <label>Current CTC (₹)</label>
      <input type="number" onChange={(e) => setCurrent(e.target.value)} />

      <label>Offered CTC (₹)</label>
      <input type="number" onChange={(e) => setOffered(e.target.value)} />

      <label>Minimum % Hike</label>
      <input
        type="number"
        value={minHike}
        onChange={(e) => setMinHike(e.target.value)}
      />

      {hike !== null && (
        <p style={{ color: hike >= minHike ? "green" : "red" }}>
          {hike >= minHike ? "✅ Acceptable" : "❌ Low"} offer (
          {hike.toFixed(1)}% hike)
        </p>
      )}
    </div>
  );
}

const styles = {
  card: {
    maxWidth: 400,
    margin: "40px auto",
    padding: 24,
    borderRadius: 10,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
  },
};
