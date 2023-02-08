// Modelo de posteo / flit
export interface Flit {
  id: number;
  text: string;
  author:string;
  images: string;
  creation: Date;
  kudos: Set<string>;
}
