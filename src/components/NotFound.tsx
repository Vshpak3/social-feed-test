import { Search } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="text-center py-12 bg-white rounded-lg shadow-sm p-6">
      <Search className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-medium">No posts found</h3>
      <p className="mt-1 text-sm text-gray-500">
        Try adjusting your search or filter to find what you're looking for.
      </p>
    </div>
  );
};
