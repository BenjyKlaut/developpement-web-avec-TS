import { Tache } from "./type";

function nouvelleTache(
  id: number,
  titre: string,
  priorite: number = 2,
  terminee: boolean = false,
  tags: string[] = []
): Tache {
  return { id, titre, priorite, terminee, tags };
}

// Complète cette fonction pour qu'elle retourne le bon type et gère le cas null
function getPremiereTache(taches: Tache[]): Tache | null {
  if (taches.length === 0) {
    return null;
  }
  return taches[0];
}