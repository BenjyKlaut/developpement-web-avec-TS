import { Utilisateur } from "./type";

function inscrireUtilisateur(
  id: number,
  nom: string,
  email: string,
  role: string = "membre",
): Utilisateur {
  return { id, nom, email, role };
}

function afficherUtilisateur(utilisateur: Utilisateur): string {
  return `${utilisateur.nom} (${utilisateur.role}) — ${utilisateur.email}`;
}

const u1 = inscrireUtilisateur(1, "Alice", "alice@taskmaster.pro");
const u2 = inscrireUtilisateur(2, "Bob", "bob@taskmaster.pro", "admin");

console.log(afficherUtilisateur(u1));
console.log(afficherUtilisateur(u2));