// modelo de Usuario
export type UserId = string;
export interface User {
  id: UserId;
  firstName: string;
  lastName: string;
  email: string;
  name: string;
  image: string;
  followers: number[];
  following: number[];
}
