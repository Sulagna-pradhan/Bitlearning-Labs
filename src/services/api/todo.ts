import { useSuspenseQuery } from '@tanstack/react-query';

const fetchTodoById = async (id: string) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
    const data = await res.json();

    // simulate network delay by 2s
    return new Promise((resolve) => setTimeout(() => resolve(data), 1000));
  } catch (error) {
    throw new Error(`API Error: ${error}`);
  }
};

export const useTodo = (id: string) => {
  const key = 'todo:' + id;
  const query = {
    queryKey: [key],
    queryFn: () => fetchTodoById('1'),
  };

  return useSuspenseQuery(query);
};
