import { useState, useEffect, useCallback } from "react";
import { Post } from "@/types/post";
import { fetchPosts, fetchPostById } from "@/services/api";

type UsePostsResult = {
  posts: Post[];
  selectedPost: Post | null;
  isLoading: boolean;
  error: string | null;
  selectPost: (id: number) => Promise<void>;
  clearSelectedPost: () => void;
  refreshPosts: () => Promise<void>;
};

export const usePosts = (): UsePostsResult => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load posts");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const selectPost = useCallback(async (id: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const post = await fetchPostById(id);
      setSelectedPost(post);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load post");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearSelectedPost = useCallback(() => {
    setSelectedPost(null);
  }, []);

  const refreshPosts = useCallback(async () => {
    await loadPosts();
  }, [loadPosts]);

  return {
    posts,
    selectedPost,
    isLoading,
    error,
    selectPost,
    clearSelectedPost,
    refreshPosts,
  };
};
