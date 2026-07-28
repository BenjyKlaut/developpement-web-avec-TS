interface Tache {
  id: number;
  titre: string;
  priorite: number;
  terminee: boolean;
  tags: string[];
}

function nouvelleTache(
  id: number,
  titre: string,
  priorite: number = 2,
  terminee: boolean = false,
  tags: string[] = []
): Tache {
  return { id, titre, priorite, terminee, tags };
}