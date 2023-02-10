// modelo de Usuario
export type UserId = string;
export interface User {
  id: UserId;
  email: string;
  name: string;
  image: string;
  followers: number[];
  following: number[];
}
