/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import { useQuery } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

async function getUsers(currentPage: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page: currentPage,
    },
  });

  const totalCount = Number(headers['x-total-count']);

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

  return { users, totalCount };
}

export function useUsers(currentPage: number) {
  return useQuery(['users', currentPage], () => getUsers(currentPage), {
    staleTime: 1000 * 5, // 5 seconds
  });
}
