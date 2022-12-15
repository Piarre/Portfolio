import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import Sidebar from '~/components/Layouts/Sidebar';
import Footer from '~/components/Layouts/Footer';
import Header from '~/components/Header';
import { motion } from 'framer-motion';
import Me from '~/components/Me';

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <Sidebar />
        <Header />
        <Me />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
