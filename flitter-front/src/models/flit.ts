import { UserId } from "./user";

// Modelo de posteo / flit
export interface Flit {
  _id: string;
  text: string;
  author: string;
  images: string | null;
  date: string;
  kudos: string[];
}
