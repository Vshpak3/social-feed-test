export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

export interface PostDetailProps {
  post: Post | null;
  onBack: () => void;
}
