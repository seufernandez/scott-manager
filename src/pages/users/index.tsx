import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import Pagination from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList(): JSX.Element {
  return (
    <Box>
      <Header />
      {/* Cableçalho */}
      <Flex width="100%" maxWidth={1080} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
            </Heading>
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
          </Flex>

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
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Fernandez</Text>
                    <Text fontSize="small" color="gray.500">
                      seufernandez@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>May 22, 2021</Td>
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
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Fernandez</Text>
                    <Text fontSize="small" color="gray.500">
                      seufernandez@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>May 22, 2021</Td>
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

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Fernandez</Text>
                    <Text fontSize="small" color="gray.500">
                      seufernandez@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>May 22, 2021</Td>
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

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Fernandez</Text>
                    <Text fontSize="small" color="gray.500">
                      seufernandez@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>May 22, 2021</Td>
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
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
