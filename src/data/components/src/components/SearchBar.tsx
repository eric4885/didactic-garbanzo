 'use client';

  import { useState } from 'react';
  import { useRouter } from 'next/navigation';

  export default function SearchBar() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = () => {
      if (query.trim()) {
        alert(`搜索功能开发中...\n搜索词：${query}`);
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };

    return (
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search for AI tools, models, or applications..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full px-6 pr-14 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800    
   focus:outline-none focus:border-blue-500 transition-all"
        />
        <button
          onClick={handleSearch}
          className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 border-none rounded-full w-12 text-white hover:bg-blue-700 
  transition-all flex items-center justify-center"
        >
          🔍
        </button>
      </div>
    );
  }
