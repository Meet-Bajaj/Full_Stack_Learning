import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};

export const Todos = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <ul>
      {data?.slice(0, 10).map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
