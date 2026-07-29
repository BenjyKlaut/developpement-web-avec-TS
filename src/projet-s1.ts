// Import de l'interface Tache depuis le fichier type.ts
import { Tache } from "./type";

// Création d'un tableau de taches vide au depart
const taches: Tache[] = [];
let id: number = 1;

// Définition d'une énumération pour les priorités des tâches
enum Priorite {
  Haute = 1,
  Moyenne = 2,
  Basse = 3,
}

// ajoute une nouvelle tâche au tableau et la retourne.
// id auto-incrémenté (commence à 1)
function ajouterTache(
  titre: string,
  priorite: Priorite,
  tags: string[],
  responsable?: string,
): Tache {
  const tache: Tache = {
    id: id++,
    titre: titre,
    priorite: priorite,
    terminee: false,
    tags: tags,
    responsable: responsable,
  };
  taches.push(tache);

  return tache;
}

// affiche toutes les tâches
// (si terminee est true, affiche FAITE à la place)
function listerTache(): void {
  if (taches.length === 0) {
    console.log("Aucune tâche à afficher.");
    return;
  } else {
    console.log("=== LISTE DES TÂCHES ===\n");
    taches.forEach((tache) => {
      afficherTache(tache);
    });
  }
}

function afficherTache(tache: Tache): void {
  console.log(
    `[#${tache.id}] "${tache.titre}" [${Priorite[tache.priorite]}] - Tags: ${tache.tags.join(", ")} - ${tache.terminee ? "FAITE" : "NON FAITE"} ${tache.responsable ? ` - Responsable: ${tache.responsable}` : ""}`,
  );
}

// cherche par ID
function trouverTache(idRecherche: number): Tache | undefined {
  const tache = taches.find((t) => t.id === idRecherche);

  if (!tache) {
    console.log(`Tâche avec ID ${idRecherche} introuvable.`);
    return undefined;
  }

  afficherTache(tache);
  return tache;
}

// trouve la tâche, passe terminee à true, retourne true si trouvée, false sinon
function marquerFaite(id: number): boolean {
  const tache = trouverTache(id);
  if (tache) {
    tache.terminee = true;
    return true;
  }
  return false;
}

// Teste avec ce scénario :
// Ajoute 3 tâches (dont une avec responsable, une sans)
ajouterTache("Tâche 1", Priorite.Haute, ["config"], "Bob");
ajouterTache("Tâche 2", Priorite.Moyenne, ["model"]);
ajouterTache("Tâche 3", Priorite.Basse, ["review"], "Michael");

// Liste toutes les tâches
listerTache();

// Marque la tâche 2 comme faite
marquerFaite(2);

// Liste à nouveau
listerTache();

// Cherche la tâche ID 99 (inexistante) et affiche "Introuvable"
trouverTache(99);
