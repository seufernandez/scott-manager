import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Input } from '../../components/form/input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser() {
  return (
    <Box>
      <Header />
      {/* Cableçalho */}
      <Flex width="100%" maxWidth={1080} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>

          <Divider my="6" borderColor="gray.600" />

          <VStack spacing="6">
            <SimpleGrid minChildWidth="240px" spacing="6" w="100%">
              <Input name="name" label="Name and Last Name" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="6" w="100%">
              <Input name="password" type="password" label="Password" />
              <Input
                name="password_confirmation"
                type="password"
                label="Password Confirmation"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack>
              <Button colorScheme="whiteAlpha">Cancel</Button>
              <Button colorScheme="orange">Create</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
