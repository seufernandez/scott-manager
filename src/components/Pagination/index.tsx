import { Box, Button, Stack } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

export default function Pagination(): JSX.Element {
  return (
    <Stack
      direction={['column', 'row', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>5</strong> of 25
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number="1" isCurrent />
        <PaginationItem number="2" />
        <PaginationItem number="3" />
        <PaginationItem number="4" />
        <PaginationItem number="5" />
      </Stack>
    </Stack>
  );
}
