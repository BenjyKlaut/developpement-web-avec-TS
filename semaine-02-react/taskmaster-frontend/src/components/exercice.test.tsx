interface UserProps {
  nom: string;
  age: number;
}

export function UserCard({ nom, age }: UserProps) {
  return (
    <div>
      <h2>{nom}</h2>
      <p>Âge : {age} ans</p>
    </div>
  );
}