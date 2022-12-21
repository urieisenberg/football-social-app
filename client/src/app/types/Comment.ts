export interface Comment {
  _id: string;
  user: string;
  post: string;
  comment: string;
  pic: string;
  username: string;
  createdAt: string;
  updatedAt?: string;
}

export interface CommentState {
  comments: Comment[];
  comment: Comment | null;
}

export interface CreateComment {
  postId: string;
  comment: string;
}

export interface DeleteComment {
  postId: string;
  commentId: string;
}
