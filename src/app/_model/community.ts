import { Post } from "./posts";
// import { User } from "./user";
export interface Community {
  id?: number;
  post?: Post;
  userId?: number;
  isLiked?: boolean;
  showComments?: boolean;
}
