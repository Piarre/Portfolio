import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
