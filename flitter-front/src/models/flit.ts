// Modelo de posteo / flit
export interface Flit {
  id: number;
  text: string;
  author: { string };
  images: string;
  category: Category;
  creation: Date;
  kudos: Set<string>;
}

export interface Category {
  id: number;
  name: string;
}
