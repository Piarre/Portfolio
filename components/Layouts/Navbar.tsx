import { Box } from '@chakra-ui/layout';
import React from 'react'
import Button from '../../lib/Button';

const Navbar = () => {
  return (
    <Box w='100%' p={5} textAlign="end" position="fixed">
      <Button> Me </Button> 
      {" "}
      <Button>Projects</Button>
    </Box>
  )
}
export default Navbar;  