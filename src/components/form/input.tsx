/* eslint-disable react/require-default-props */
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps): JSX.Element {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="orange.500"
        bg="gray.700"
        variant="filled"
        _hover={{
          bgColor: 'gray.700',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
