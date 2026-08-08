import TaskCard from "./components/taskCard";
import { type Tache, Priorite } from "./types";
import "./App.css";
import { useState } from "react";

function App() {
  const [taches, setTaches] = useState<Tache[]>([
    {
      id: 1,
      titre: "Faire les courses",
      priorite: Priorite.HAUTE,
      tags: ["courses", "urgent"],
      terminee: false,
      responsable: "Alice",
    },
    {
      id: 2,
      titre: "Nettoyer la maison",
      priorite: Priorite.MOYENNE,
      tags: ["maison"],
      terminee: true,
    },
    {
      id: 3,
      titre: "Préparer le dîner",
      priorite: Priorite.BASSE,
      tags: ["cuisine"],
      terminee: false,
      responsable: "Bob",
    },
  ]);

  function marquerFaite(id: number) {
    setTaches(taches.map((t) => (t.id === id ? { ...t, terminee: true } : t)));
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Taskmaster Pro</h1>
      {taches.map((tache) => (
        <TaskCard key={tache.id} tache={tache} onMarquerFaite={marquerFaite} />
      ))}
    </div>
  );
}

export default App;
