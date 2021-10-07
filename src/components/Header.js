import React from 'react';
import { Box, Text } from "@chakra-ui/core";
import { Route } from "react-router";
import { Link } from 'react-router-dom';
import {
  useLocation
} from "react-router-dom";

function useActive (currentPath, path): string {
  return currentPath === path ? "active" : ""
}

function Header() {

  let location = useLocation();

  const isSigIn = useActive(location.pathname, '/sign_in')
  const isSigUp = useActive(location.pathname, '/sign_up')

  return (
    <Box mb={50} mx='auto' textAlign="center">
      <Box className="sign" color="#969696" fontSize={18}>
        <Link to="/sign_in">
          <Text className={isSigIn} p='10px' as="span" >登陆</Text>
        </Link>
        <Text p='10px' as="b">·</Text>
        <Link to="/sign_up">
          <Text className={isSigUp} p='10px' as="span">注册</Text>
        </Link>
      </Box>

    </Box>
  )
};

export default Header;