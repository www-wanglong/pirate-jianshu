import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import theme from '@chakra-ui/theme';
import App from "./components/App";
import './index.css'

ReactDOM.render(
  <Router>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </Router>,
  document.getElementById('root')
);
