import { UserId } from "./user";

// Modelo de posteo / flit
export interface Flit {
  id: string;
  text: string;
  author: string;
  images: string | null;
  date: Date;
  kudos: Set<UserId> | null;
}
