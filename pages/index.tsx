import { Box, Container } from "@chakra-ui/react";
import { NextPage } from "next";
import Navbar from "../components/Layouts/Navbar";



const Home: NextPage = () => {
  return (
    <Box>
      <Navbar />
    </Box>
  );
}

export default Home

