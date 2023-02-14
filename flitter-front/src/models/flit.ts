import { User } from "./user";

// Modelo de posteo / flit
export interface Flit {
  _id: string;
  text: string;
  author: User;
  images: string | null;
  date: string;
  kudos: string[];
}
