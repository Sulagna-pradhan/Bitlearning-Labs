import React, { useEffect, useState } from 'react';
import {
  useDebounce,
  useIsMobile,
  useLocalStorage,
  useTheme,
} from '../lib/hooks';
import { useSuspenseQuery } from '@tanstack/react-query';

const Homepage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const debouncedName = useDebounce(name);
  const [storeName, setNameToStore] = useLocalStorage('userName', '');
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setNameToStore(debouncedName);
  }, [debouncedName]);

  const fetchTodoById = async (id: string) => {
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/todos/' + id,
      );
      const data = await res.json();
      // simulate network delay by 2s
      return new Promise((resolve) => setTimeout(() => resolve(data), 2000));
    } catch (error) {
      throw new Error(`API Error: ${error}`);
    }
  };

  const { error, isFetching } = useSuspenseQuery({
    queryKey: ['testing'],
    queryFn: () => fetchTodoById('1'),
  });

  if (!isFetching && error) {
    return <h1>Error while fetching data!!</h1>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2e8] to-[#e7e3c2] dark:from-[#2a2818] dark:to-[#45422a] overflow-x-hidden flex items-center justify-center">
      <div className="container bg-amber-50 dark:bg-amber-400 w-fit p-4">
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

export default Homepage;
