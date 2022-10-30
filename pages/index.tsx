import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import Sidebar from '../components/Layouts/Sidebar';
import Footer from '../components/Layouts/Footer';
import Header from '~/components/Header';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ y: 50 }}
        transition={{ duration: 1.2 }}
      >
        <Box>
          <Sidebar />
          <Header />

          <Footer />
        </Box>
      </motion.div>
    </>
  );
};

export default Home;
