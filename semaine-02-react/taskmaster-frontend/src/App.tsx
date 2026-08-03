import TaskCard from './components/taskCard';
import { type Tache, Priorite } from './types';
import './App.css'

function App() {
  const maTache: Tache = {
    id: 1,
    titre: "Apprendre React + TS",
    priorite: Priorite.HAUTE,
    terminee: false,
    tags: ["Frontend", "Urgent"],
    responsable: "Benjy"
  };

  return (
    <div>
      <h1>Taskmaster Pro</h1>
      <TaskCard tache={maTache}/>
    </div>
  )
}

export default App
