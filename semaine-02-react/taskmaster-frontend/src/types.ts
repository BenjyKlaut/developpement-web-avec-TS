export interface Tache {
  id: number;
  titre: string;
  priorite: number; // 1 = haute, 2 = moyenne, 3 = basse
  terminee: boolean;
  tags: string[];
  responsable?: string; // optionnelle
};

export enum Priorite {
  HAUTE: 1,
  MOYENNE: 2,
  BASSE: 3
};
