import React from 'react';

import { Flex, useBreakpointValue, Icon, IconButton } from '@chakra-ui/react';

import { RiMenuLine } from 'react-icons/ri';
import Logo from './Logo';
import Searchbox from './Searchbox';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth="1120px"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideScreen && (
        <IconButton
          aria-label="Open Nav bar"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />
      {isWideScreen && <Searchbox />}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  );
}
