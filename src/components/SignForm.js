import React from 'react';
import { Box } from "@chakra-ui/core";
import Main from './Main';
import Header from './Header'

function SignForm() {
  return (
    <Box borderRadius="4px" boxShadow="0 0 8px rgb(0 0 0 / 10%)" mx="auto" mt="50px" bg="white" w="400px" p={50}>
      <Header />
      <Main />
    </Box>
  );
}

export default SignForm;
