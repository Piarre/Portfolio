import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

const ArticleSection = ({ children }: any) => {
  return (
    <Center w={[350, 350, 400, 500]}>
      <Box>
        <Text>
          {children}
        </Text>
      </Box>
    </Center>
  );
};

export default ArticleSection;
