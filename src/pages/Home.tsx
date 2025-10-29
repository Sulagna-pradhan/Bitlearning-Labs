import React from 'react';
import { useIsMobile, useLocalStorage, useTheme } from '../hooks';

const Homepage: React.FC = () => {
  const [name, setName] = useLocalStorage('userName', '');
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2e8] to-[#e7e3c2] dark:from-[#2a2818] dark:to-[#45422a] overflow-x-hidden flex items-center justify-center">
      <div className="container bg-amber-50 dark:bg-amber-400 w-fit p-4">
        <h2 className="text-3xl font-bold">Home Page</h2>
        <p>IsMobile: {isMobile ? 'true' : 'false'}</p>
        <p>Name: {name}</p>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <div>Theme: {theme}</div>
        <button
          className="px-4 py-2 bg-amber-400 dark:bg-amber-600 cursor-pointer"
          onClick={() => toggleTheme()}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Homepage;
