/* eslint-disable camelcase */
import { useQuery } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

async function getUsers() {
  const { data } = await api.get('users');

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.createdAt).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    };
  });

  return users;
}

export function useUsers() {
  return useQuery<User[]>('users', getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  });
}
