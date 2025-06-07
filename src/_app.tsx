import { useState, useMemo } from "react";
import { Post } from "@/types/post";
import { PostList } from "@/components/PostList";
import { PostDetail } from "@/components/PostDetail";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { usePosts } from "@/hooks/usePosts";
import { Filters } from "@/components/Filters";
import { Error } from "@/components/Error";
import { Header } from "@/components/Header";
import { NotFound } from "@/components/NotFound";
import { Footer } from "@/components/Footer";

function App() {
  const {
    posts,
    selectedPost,
    isLoading,
    error,
    selectPost,
    clearSelectedPost,
    refreshPosts,
  } = usePosts();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState<string>("");

  const userIds = useMemo(() => {
    const uniqueIds = new Set<number>();
    posts.forEach((post) => uniqueIds.add(post.userId));
    return Array.from(uniqueIds).sort((a, b) => a - b);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesUser =
        !selectedUserId || post.userId.toString() === selectedUserId;

      return matchesSearch && matchesUser;
    });
  }, [posts, searchTerm, selectedUserId]);

  const handlePostClick = (post: Post) => {
    selectPost(post.id);
  };

  const handleBack = () => {
    clearSelectedPost();
  };

  if (isLoading && !selectedPost) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Error error={error} refreshPosts={refreshPosts} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 grid grid-rows-[auto_minmax(0,1fr)_auto] w-full">
      <Header />

      <main className="max-w-7xl w-full mx-auto px-4 py-6 sm:px-6 flex-1">
        {selectedPost ? (
          <PostDetail post={selectedPost} onBack={handleBack} />
        ) : (
          <>
            <Filters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedUserId={selectedUserId}
              onUserFilterChange={setSelectedUserId}
              userIds={userIds}
            />

            {filteredPosts.length > 0 ? (
              <PostList posts={filteredPosts} onPostClick={handlePostClick} />
            ) : (
              <NotFound />
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
export default App;
