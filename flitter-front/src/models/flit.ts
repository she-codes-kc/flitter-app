import { UserId } from "./user";

// Modelo de posteo / flit
export interface Flit {
  id: string;
  text: string;
  author: {id:string, name: string}
  images: string | null;
  creation: string;
  kudos: Set<UserId> | null;
}
