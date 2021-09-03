import { Flex, Image, Text } from '@chakra-ui/react';

export default function Logo() {
  return (
    <Flex>
      <Image
        boxSize={['10', '8']}
        src="/logo/dunder-logo.png"
        stroke="orange.500"
        mr="2"
        alignSelf="center"
      />
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Scott Manager
      </Text>
    </Flex>
  );
}
