import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SidebarDrawerProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SidebarDrawerProvider>
  );
}

export default MyApp;
