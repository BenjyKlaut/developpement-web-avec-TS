import { type Tache, Priorite } from '../types';

interface TaskCardProps {
  tache: Tache;
}

export function TaskCard({ tache }: TaskCardProps) {
  const statut = tache.terminee ? "FAIT" : "NON FAIT";
  const prioriteNom = Priorite[tache.priorite];

  return (
    <div className="task-card">
      <h3>[#{tache.id}] {tache.titre}</h3>
      <p>Priorité: {prioriteNom}</p>
      <p>Tags: {tache.tags.join(', ')}</p>
      <p>Statut: {statut}</p>
      {tache.responsable && <p>Responsable : {tache.responsable}</p>}
    </div>
  );
}

export default TaskCard;