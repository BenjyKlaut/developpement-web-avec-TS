interface UserProps {
  nom: string;
  age: number;
}
/*
function toggleTerminee(id: number) {
  setTaches(taches.map(t => 
    t.id === id ? { ...t, terminee: !t.terminee } : t
  ));
}
*/

export function UserCard({ nom, age }: UserProps) {
  return (
    <div>
      <h2>{nom}</h2>
      <p>Âge : {age} ans</p>
    </div>
  );
}
