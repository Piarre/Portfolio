import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';

const ArticleTitle = ({ children }: any) => {
  return (
    <Center w={[350, 350, 400, 500]}>
      <Box>
        <Heading as="h3" variant="section-title">
          {children}
        </Heading>
      </Box>
    </Center>
  );
};

export default ArticleTitle;
