import { Button, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import { Input } from '../components/form/input';

export default function SigIn(): JSX.Element {
  return (
    <>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxWidth="360px"
          bg="gray.800"
          p="8"
          borderRadius={16}
          flexDir="column"
        >
          <Stack spacing="4">
            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="Senha" />
          </Stack>

          <Button type="submit" mt="6" colorScheme="orange" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
