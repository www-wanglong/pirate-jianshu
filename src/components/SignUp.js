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
import { FaUserAlt, FaLock, FaCheck, FaMobileAlt } from 'react-icons/fa'
import { AiFillWechat, AiOutlineQq, AiFillWeiboCircle } from "react-icons/ai"
import API from '../api'
import axios from 'axios'
import InputContainer from './InputContainer'

function SignUp() {
  const toast = useToast()
  const [user, setUser] = useState({username: '', email: '', password: ''})
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeEmail = (event) => setUser({
    ...user,
    email: event.target.value
  })

  const handleChangePassword= (event) => setUser({
    ...user,
    password: event.target.value
  })

  const handleChangeUsername = (event) => setUser({
    ...user,
    username: event.target.value
  })

  const submit = () => {
    if (!user.username) {
      toast({
        title: '请输入你的昵称',
        status: 'warning',
        position: 'top',
        duration: 1000,
      })
      return
    }
    if (!user.email) {
      toast({
        title: '请输入手机号',
        status: 'warning',
        position: 'top',
        duration: 1000,
      })
      return
    }
    if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(user.email)) {
      toast({
        title: '请正确填写您的手机号码！',
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
    axios.post(`${API}users`, {
      user,
    }).then( () => {
      setIsLoading(false)
      toast({
        title: '注册成功！',
        status: 'success',
        position: 'top',
        isClosable: true,
      })
    }, (error) => {
      console.log(error)
      setIsLoading(false)
      toast({
        title: `注册失败！${error}`,
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
          <InputContainer
            showTopBorder={true}
            leftIcon={<FaUserAlt />}
            value={user.username}
            onChange={handleChangeUsername}
            placeholder="你的昵称"
          />
          <InputContainer
            leftIcon={<FaMobileAlt />}
            value={user.email}
            type="tel"
            onChange={handleChangeEmail}
            placeholder="手机号"
          />
          <InputContainer
            leftIcon={<FaLock />}
            value={user.password}
            onChange={handleChangePassword}
            placeholder="设置密码"
            type="password"
          />
          <Button
            mt="20px"
            isLoading={isLoading}
            onClick={submit}
            loadingText="注册中"
            borderRadius="25px"
            w="100%"
            bg="#42c02e"
            color="#FFF"
            _hover={{ bg: "#4bcc37" }}
          >注册</Button>

        </Box>
      </form>

      <Text my="10px" p="0" textAlign="center" fontSize="12px" lineHight="20px" color="#969696">
        点击 “注册” 即表示您同意并愿意遵守简书
        <br></br>
        <Link color="#3194d0" target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</Link>
        和
        <Link color="#3194d0" target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</Link>
      </Text>

      <VStack mt="50px">
        <Box display="flex" alignItems="center" direction="row"  mb="10px" justifyContent="center">
          <Divider w="60px"/>
          <Box color="#b5b5b5" fontSize="12px" fontWeight={500} mx="10px" as="h6">社交帐号直接注册</Box>
          <Divider w="60px" ml="0 " />
        </Box>
        <HStack justifyContent="center" spacing="27px">
          <AiFillWechat fontSize={28} color="#00bb29" />
          <AiOutlineQq fontSize={28} color="#498ad5" />
        </HStack>
      </VStack>
    </>
  )
};

export default SignUp;