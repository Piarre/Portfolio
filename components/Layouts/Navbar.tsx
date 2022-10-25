import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Box w="100%" p="8" paddingRight="65" textAlign="end" position="fixed" >
      <Button variant="outline" colorScheme="orange">
        Me
      </Button>{' '}
      <Button variant="outline" colorScheme="orange">
        Projects
      </Button>
    </Box>
  );
};
export default Navbar;
