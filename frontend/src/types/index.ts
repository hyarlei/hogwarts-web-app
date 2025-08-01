export interface House {
  id: number;
  name: string;
  founder: string;
  colors: string;
  animal: string;
  element: string;
  traits: string;
  points: number;
  createdAt: string;
  characters?: Character[];
}

export interface Character {
  id: number;
  name: string;
  house?: House;
  houseId?: number;
  bloodStatus?: string;
  species: string;
  occupation?: string;
  patronus?: string;
  boggart?: string;
  wand?: string;
  isAlive: boolean;
  description?: string;
  imageUrl?: string;
  createdAt: string;
}

export interface Spell {
  id: number;
  name: string;
  incantation?: string;
  type: string;
  effect: string;
  difficulty: string;
  description?: string;
  createdAt: string;
}

export interface Potion {
  id: number;
  name: string;
  effect: string;
  difficulty: string;
  ingredients: string;
  brewing?: string;
  description?: string;
  createdAt: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  description?: string;
  createdAt: string;
}
