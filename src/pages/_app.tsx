import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { makeServer } from '../services/mirage';

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

import { theme } from '../styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
