import { PropsWithChild } from '~/lib/Types';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
const Header = (props: PropsWithChild) => {
  return (
    <>
      <motion.div>
        <Heading>
          Hi, I&apos;m <Text color={'orange'}>Pierre</Text>a big brain young
          developer !
        </Heading>
      </motion.div>
    </>
  );
};

const Heading = styled.div`
  padding-left: 350px;
  padding-top: 120px;
  font-weight: 600 ;
  font-family: 'Calibre', sans-serif;
  color: #A0AEC0; 
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
    padding-left: 0; 
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 1.6rem;
  }
`;

export default Header;
