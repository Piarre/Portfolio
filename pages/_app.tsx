import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';
import Fonts from '~/lib/Fonts';
import theme from '~/lib/Theme';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
