import { Tache } from "./type";

function afficheTache(tache: Tache): string {
  const responsableText = tache.responsable
    ? ` — Responsable: ${tache.responsable}`
    : "";

  return `[#${tache.id}] "${tache.titre}" [Priorité: ${tache.priorite}] — Tags: ${tache.tags.join(", ")}${responsableText} — ${tache.terminee ? "FAITE" : "NON FAITE"}`;
}

const tache1: Tache = {
  id: 1,
  titre: "Apprendre TS",
  priorite: 1,
  terminee: true,
  tags: ["dev", "urgent"],
  responsable: "Alice",
};

const tache2: Tache = {
  id: 2,
  titre: "Relire le code",
  priorite: 3,
  terminee: false,
  tags: ["review"],
};

console.log(afficheTache(tache1));
console.log(afficheTache(tache2));
