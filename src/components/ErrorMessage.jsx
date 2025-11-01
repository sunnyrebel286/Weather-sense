import React from 'react';

export default function ErrorMessage({ error }) {
  return (
    <div className="p-6 mt-8 text-red-100 bg-red-700/80 rounded-xl shadow-xl backdrop-blur-sm max-w-lg mx-auto">
      <p className="font-bold text-xl mb-2">Error</p>
      <p>{error}</p>
      <p className="text-sm mt-2">Try searching for a major city like 'Mumbai' or 'Bengaluru' to see mock data.</p>
    </div>
  );
}