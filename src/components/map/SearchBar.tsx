
import { useState } from 'react';
import { Search, MapPin, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Central Park',
    'Times Square',
    'Brooklyn Bridge'
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      // Add to recent searches if not already present
      if (!recentSearches.includes(searchTerm)) {
        setRecentSearches(prev => [searchTerm, ...prev].slice(0, 5));
      }
    }
  };

  const handleRecentSearch = (search: string) => {
    setSearchTerm(search);
    onSearch(search);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search locations..."
            className="w-full pl-10 pr-10 py-3 rounded-full border-none glass focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        
        {recentSearches.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-xl glass overflow-hidden z-10 animate-fade-in">
            <div className="py-2">
              <p className="px-4 py-1 text-xs font-medium text-muted-foreground">
                Recent Searches
              </p>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleRecentSearch(search)}
                  className="flex items-center w-full px-4 py-2 text-sm hover:bg-primary/10 transition-colors text-left"
                >
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
