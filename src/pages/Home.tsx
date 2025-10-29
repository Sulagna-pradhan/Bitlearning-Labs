import React, { useEffect, useState } from 'react';
import {
  useDebounce,
  useIsMobile,
  useLocalStorage,
  useTheme,
} from '../lib/hooks';
import { useTodo } from '../services/api/todo';

const Homepage: React.FC = () => {
  const [storeName, setNameToStore] = useLocalStorage('userName', '');
  const [name, setName] = useState<string>(storeName);
  const debouncedName = useDebounce(name);
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setNameToStore(debouncedName);
  }, [debouncedName]);

  useTodo('1');

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8f5eb] via-[#f0ead8] to-[#b5ccbf]/20 dark:from-[#3a3625] dark:via-[#40584a]/40 dark:to-[#2a2818] overflow-x-hidden flex items-center justify-center">
      <div className="container bg-amber-50 dark:bg-lime-500 w-fit p-4">
        <h2 className="text-3xl font-bold">Home Page</h2>
        <p>IsMobile: {isMobile ? 'true' : 'false'}</p>
        <p>Name: {storeName}</p>
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

// export const Loader = () => {
//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
//       <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-transparent border-blue-500" />
//       <span className="ml-3 text-lg font-medium">Loading...</span>
//     </div>
//   );
// };

export default Homepage;
