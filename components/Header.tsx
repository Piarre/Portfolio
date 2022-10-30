import { PropsWithChild } from '~/lib/Types';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
const Header = (props: PropsWithChild) => {
  return (
    <>
      
        <Box
          paddingLeft={375}
          paddingRight={375}
          paddingTop={120}
          fontSize="5xl"
          fontWeight={'semibold'}
          fontFamily={"'Calibre', sans-serif;"}
          color={'gray.400'}
        >
          Hi, I&apos;m <Text color={'orange'}>Pierre</Text>a big brain young
          developer !
        </Box>
      
    </>
  );
};

export default Header;
