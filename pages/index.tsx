import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import Sidebar from '../components/Layouts/Sidebar';
import Footer from '../components/Layouts/Footer';
import Articles from '~/components/Articles';
import Header from '~/Layouts/Header';

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <Sidebar />
        <Header />

        <Footer />
      </Box>
    </>
  );
};

export default Home;
