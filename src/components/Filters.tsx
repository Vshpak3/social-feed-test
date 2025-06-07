import { Search, Filter } from "lucide-react";

interface FiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedUserId: string;
  onUserFilterChange: (userId: string) => void;
  userIds: number[];
}

export const Filters = ({
  searchTerm,
  onSearchChange,
  selectedUserId,
  onUserFilterChange,
  userIds,
}: FiltersProps) => {
  return (
    <div className="mb-6 space-y-2 sm:space-y-0 sm:flex sm:items-center sm:space-x-4 bg-white shadow-sm rounded-lg px-2 py-4 sm:px-4 sm:py-6">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search posts..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Filter className="h-5 w-5 text-gray-400" />
        </div>
        <select
          className="block w-full pl-10 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={selectedUserId}
          onChange={(e) => onUserFilterChange(e.target.value)}
        >
          <option value="">All Users</option>
          {userIds.map((userId) => (
            <option key={userId} value={userId}>
              User {userId}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
