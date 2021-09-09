/* eslint-disable no-nested-ternary */
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { useQuery } from 'react-query';

import { Header } from '../../components/Header';
import Pagination from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../services/api';
import { useUsers } from '../../services/hooks/useUsers';

export default function UserList(): JSX.Element {
  const { data, isLoading, isFetching, error } = useUsers();

  return (
    <Box>
      <Header />
      <Flex width="100%" maxWidth={1080} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
              {!isLoading && isFetching && (
                <Spinner
                  size="sm"
                  color="gray.500"
                  emptyColor="gray.700"
                  ml="4"
                />
              )}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                href=""
                colorScheme="orange"
                leftIcon={<Icon as={RiAddLine} fontSize="18" />}
              >
                New User
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>ERROR: user data was not loaded</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px="6" color="gray.300" w="8">
                      <Checkbox colorScheme="orange" />
                    </Th>
                    <Th>User</Th>
                    <Th>Joined At</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px="6">
                          <Checkbox colorScheme="orange" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="small" color="gray.500">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        <Td>{user.created_at}</Td>
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="small"
                            href=""
                            colorScheme="purple"
                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                          >
                            Edit
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
