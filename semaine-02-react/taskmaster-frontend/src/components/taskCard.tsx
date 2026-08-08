  import { type Tache, Priorite } from '../types';
  import './taskCard.css';

interface TaskCardProps {
  tache: Tache;
  onMarquerFaite: (id: number) => void;
}

function TaskCard({ tache, onMarquerFaite }: TaskCardProps) {
  const statut = tache.terminee ? "FAITE" : "NON FAITE";
  const prioriteNom = Priorite[tache.priorite];

  return (
    <div className="task-card">
      <h3>[#{tache.id}] {tache.titre}</h3>
      <p>Priorité: {prioriteNom}</p>
      <p>Tags: {tache.tags.join(', ')}</p>
      <p>Statut: {statut}</p>
      {tache.responsable && <p>Responsable : {tache.responsable}</p>}

      {!tache.terminee && <button onClick={() => onMarquerFaite(tache.id)}>Marquer comme faite</button>}
    </div>
  );
}

export default TaskCard;