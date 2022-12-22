export interface Post {
  _id: string;
  user: string;
  type: ['feed' | 'team'];
  text: string;
  username: string;
  pic: string;
  team: string;
  likes: Array<string>;
  comments: [
    {
      post: string;
      user: string;
      comment: string;
      pic: string;
      username: string;
      _id: string;
      createdAt: string;
    }
  ];
  createdAt: string;
  updatedAt?: string;
}

export interface PostState {
  posts: Post[];
  post: Post | null;
  teamPosts: Post[];
  likedPosts: Post[];
  userPosts: Post[];
}

export interface CreatePost {
  text: string;
  type: 'feed' | 'team';
}

export interface SearchPosts {
  searchTerm: string;
}

export interface SearchUserPosts {
  searchTerm: string;
  username: string;
}
