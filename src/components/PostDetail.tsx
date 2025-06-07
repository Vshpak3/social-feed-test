import { Post } from "@/types/post";
import {
  ArrowLeft,
  MessageSquare,
  User as UserIcon,
  Mail,
  Send,
} from "lucide-react";

interface PostDetailProps {
  post: Post | null;
  onBack: () => void;
}

export const PostDetail = ({ post, onBack }: PostDetailProps) => {
  if (!post) return null;
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to posts
        </button>
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-500">
            <UserIcon className="w-4 h-4 mr-1" />
            <span>User {post.userId}</span>
            <span className="mx-2">•</span>
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>Post {post.id}</span>
          </div>
        </div>
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
          </p>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
            Comments
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <UserIcon className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-medium">User Name</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Mail className="w-3.5 h-3.5 mr-1" />
                      user@example.com
                    </span>
                  </div>
                  <p className="text-gray-700">
                    This is a comment on the post. It provides additional
                    context or feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <UserIcon className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-medium">Another User</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Mail className="w-3.5 h-3.5 mr-1" />
                      another@example.com
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Here's another comment with some thoughts on the post
                    content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Add a comment
            </label>
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <UserIcon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <textarea
                  id="comment"
                  rows={3}
                  className="p-2 shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Write a comment..."
                  defaultValue={""}
                />
                <div className="mt-2 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
