// modelo de Usuario
export type UserId = string;
export interface User {
  _id: UserId;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  profilePic: string;
  followers: UserId[];
  following: UserId[];
}
