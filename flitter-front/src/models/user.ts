// modelo de Usuario

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  image: string;
  followers: Array<number>;
  following: Array<number>;
}
