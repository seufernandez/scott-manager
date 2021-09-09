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
import Link from 'next/link';

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';

import { Input } from '../../components/form/input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome Obrigatório'),
  email: yup.string().required('Email Obrigatório').email('Email Invalido'),
  password: yup
    .string()
    .required('Senha obrigatoria')
    .min(6, 'A senha precisa ter no mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senha precisam ser idênticas'),
});

export default function CreateUser() {
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async data => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(data);
  };

  return (
    <Box>
      <Header />
      {/* Cableçalho */}
      <Flex width="100%" maxWidth={1080} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>

          <Divider my="6" borderColor="gray.600" />

          <VStack spacing="6">
            <SimpleGrid minChildWidth="240px" spacing="6" w="100%">
              <Input
                name="name"
                label="Name and Last Name"
                error={errors.name}
                ref={register}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                ref={register}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="6" w="100%">
              <Input
                name="password"
                type="password"
                label="Password"
                error={errors.password}
                ref={register}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Password Confirmation"
                error={errors.password_confirmation}
                ref={register}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack>
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="orange"
                isLoading={formState.isSubmitting}
              >
                Create
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
