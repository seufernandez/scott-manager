import React from 'react';

import { Flex, useBreakpointValue } from '@chakra-ui/react';

import Logo from './Logo';
import Searchbox from './Searchbox';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';

export function Header() {
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
      <Logo />
      <Searchbox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  );
}
