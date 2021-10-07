import React, { useState } from 'react';
import {
  Box,
  HStack,
  VStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  Stack,
  FormHelperText,
  Flex,
  Button,
  FormControl,
  Checkbox,
  Link,
  useToast,
  Divider,
  Text
} from '@chakra-ui/core';
import { FaUserAlt, FaLock, FaCheck,  } from 'react-icons/fa'
import { AiFillWechat, AiOutlineQq, AiFillWeiboCircle } from "react-icons/ai"
import API from '../api'
import axios from 'axios'
import InputContainer from './InputContainer'

function SignIn() {
  const toast = useToast()
  const [user, setUser] = useState({email: '', password: ''})
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeEmail = (event) => setUser({
    ...user,
    email: event.target.value
  })

  const handleChangePassword= (event) => setUser({
    ...user,
    password: event.target.value
  })

  const submit = () => {
    if (!user.email) {
      toast({
        title: '请输入手机号或邮箱',
        status: 'warning',
        position: 'top',
        duration: 1000,
      })
      return
    }
    if (!user.password) {
      toast({
        title: '请输入密码',
        status: 'warning',
        position: 'top',
        duration: 1000,
      })
      return
    }
    setIsLoading(true)
    axios.post(`${API}users/login`, {
      user,
    }).then( () => {
      setIsLoading(false)
      toast({
        title: '登陆成功！',
        status: 'success',
        position: 'top',
        isClosable: true,
      })
    }, (error) => {
      console.log(error)
      setIsLoading(false)
      toast({
        title: `登陆失败！${error}`,
        status: 'error',
        position: 'top',
        isClosable: true,
      })
    })

  }

  return (
    <>
      <form>
        <Box>
          <FormControl>
            <InputContainer
              showTopBorder={true}
              leftIcon={<FaUserAlt />}
              value={user.email}
              onChange={handleChangeEmail}
              placeholder="手机号或邮箱"
            />
          </FormControl>


          <InputContainer
            leftIcon={<FaLock />}
            value={user.password}
            onChange={handleChangePassword}
            placeholder="密码"
            type="password"
          />

          <Box my="15px" w='100%' display="flex" justifyContent="space-between">
            <Checkbox>记住我</Checkbox>
            <Link>登录遇到问题?</Link>
          </Box>

          <Button
            isLoading={isLoading}
            onClick={submit}
            loadingText="登录中"
            borderRadius="25px"
            w="100%"
            colorScheme="blue"
          >登录</Button>

        </Box>
      </form>
      <VStack mt="50px">
        <Box display="flex" justify="center" direction="row" alignItems="center" mb="10px" justifyContent="center">
          <Divider w="60px"/>
          <Box mx="10px" color="#b5b5b5" fontSize="12px" fontWeight={500} mx="10px" as="h6">社交帐号登录</Box>
          <Divider w="60px" ml="0 " />
        </Box>
        <HStack justifyContent="center" spacing="27px">
          <AiFillWeiboCircle fontSize={28} color="#e05244" />
          <AiFillWechat fontSize={28} color="#00bb29" />
          <AiOutlineQq fontSize={28} color="#498ad5" />
        </HStack>
      </VStack>
    </>
  )
};

export default SignIn;