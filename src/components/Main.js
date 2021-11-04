import React from 'react';
import { Box } from "@chakra-ui/core";
import { Route } from "react-router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Main() {
  return (
    <Box>
      <Route path="/" component={SignIn} />
      <Route path="/sign_in" component={SignIn} />
      <Route path="/sign_up" component={SignUp} />
    </Box>
  )
};

export default Main;