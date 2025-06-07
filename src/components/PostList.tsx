import { useMemo } from "react";
import { Post } from "../types/post";

interface PostListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-teal-500",
];

export const PostList = ({ posts, onPostClick }: PostListProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onPostClick={onPostClick} />
        ))}
      </div>
    </div>
  );
};

const PostItem = ({
  post,
  onPostClick,
}: {
  post: Post;
  onPostClick: (post: Post) => void;
}) => {
  const bgColor = useMemo(() => colors[post.userId % colors.length], [post]);
  return (
    <div
      key={post.id}
      onClick={() => onPostClick(post)}
      className="p-6 bg-white rounded-lg shadow-sm hover:shadow-sm transition-shadow cursor-pointer"
    >
      <div className="flex items-center space-x-4 mb-2">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full ${bgColor} text-white font-semibold`}
        >
          {post.userId}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold">User {post.userId}</span>
            <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
              ID: {post.id}
            </span>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-md mb-2 line-clamp-2">{post.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-3">{post.body}</p>
    </div>
  );
};
