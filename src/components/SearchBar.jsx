import React from 'react';

export default function SearchBar({ searchInput, setSearchInput, onSearch, loading }) {
  return (
    <form onSubmit={onSearch} className="flex w-full max-w-lg mx-auto shadow-2xl">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter City Name (e.g., Mumbai, Patna, Chennai)"
        className="w-full p-4 text-gray-800 bg-white border border-r-0 border-gray-300 rounded-l-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="px-6 font-semibold text-white transition duration-300 bg-blue-600 rounded-r-xl hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}