import { RefreshCw } from "lucide-react";

export const Error = ({
  error,
  refreshPosts,
}: {
  error: string;
  refreshPosts: () => void;
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 max-w-md">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
      <button
        onClick={refreshPosts}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Retry
      </button>
    </div>
  );
};
