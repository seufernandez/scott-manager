import { Button, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/form/input';

type SingInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email Obrigatório').email('Email Invalido'),
  password: yup.string().required('Senha obrigatoria'),
});

export default function SigIn(): JSX.Element {
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SingInFormData> = async data => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  };
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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              name="email"
              type="email"
              label="E-mail"
              error={errors.email}
              ref={register}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              error={errors.password}
              ref={register}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="orange"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
