import { Comments } from "./comment";
export interface Post {
  id?: number;
  post?: string;
  userId?: number;
  img?: string;
  comments?: Comments[];
  like?: number;
}
