import { useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, initial: T | (() => T)) => {
  const _populate = (v: T | (() => T)) => {
    return typeof v === 'function' ? (v as () => T)() : v;
  };

  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : _populate(initial);
    } catch (error) {
      console.error(error);
      return _populate(initial);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  const removeItem = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return [value, setValue, removeItem] as const;
};

export default useLocalStorage;
