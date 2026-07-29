export interface Projet {
  id: number;
  nom: string;
  actif: boolean;
  membres: string[];
  description?: string; // optionnelle
}

export interface Tache {
  id: number;
  titre: string;
  priorite: number; // 1 = haute, 2 = moyenne, 3 = basse
  terminee: boolean;
  tags: string[];
  responsable?: string; // optionnelle
}

export interface Utilisateur {
  id: number;
  nom: string;
  email: string;
  role: string;
}