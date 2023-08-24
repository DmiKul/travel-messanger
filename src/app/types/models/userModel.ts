import { IFriend } from "./friendModel";
import { IGroup } from "./groupModel";
import { IPost } from "./postModel";

export interface IUser {
  id: string;
  email: string;
  password: string; // hash
  isVerified: boolean;
  fname: string;
  lname: string;
  age: number;
  city: string;
  avatar: string; // source (link) image
  chats: string[]; // chat id list
  posts: IPost[]; // post id list
  photos: string[]; // photo id list
  followers: IFriend[]; // followers id list
  gifts: string[];
  groups: IGroup[];
}
