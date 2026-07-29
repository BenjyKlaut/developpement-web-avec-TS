import { Projet } from "./type";

function creerTache(
  titre: string,
  duree: number,
  terminee: boolean,
  participants: string[],
): string {
  const nbParticipants = participants.length;
  return `Tâche "${titre}" (${duree}min) — ${nbParticipants} participant(s) — ${terminee ? "FAIT" : "À FAIRE"}`;
}

// Teste avec cette tâche :
const maTache = creerTache("Configurer TypeScript", 90, false, [
  "Alice",
  "Bob",
]);

console.log(maTache);

function resumeProjet(projet: Projet): string {
  const statut = projet.actif ? "EN COURS" : "ARCHIVÉ";
  return `${projet.nom} (${statut}) — ${projet.membres.length} membre(s)`;
}
