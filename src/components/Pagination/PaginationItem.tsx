/* eslint-disable react/require-default-props */
import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  onPageChange,
  number,
}: PaginationItemProps): JSX.Element {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="orange"
        disable
        _disabled={{ bgColor: 'orange.500', cursor: 'default' }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => {
        onPageChange(number);
      }}
    >
      {number}
    </Button>
  );
}
