import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export default function Searchbox(): JSX.Element {
  return (
    <Flex
      as="label"
      flex="1"
      h="10"
      // py="4"
      // px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="16px"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        h="10"
        px="4"
        mr="4"
        placeholder="Search"
        _placeholder={{ color: 'gray.400' }}
      />

      <Icon as={RiSearchLine} fontSize="20" alignSelf="center" mr="4" />
    </Flex>
  );
}
