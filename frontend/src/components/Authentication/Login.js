import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [hide, setHide] = useState(false);
  const [input, setInput] = useState({})
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      axios.post("/api/v1/users/login", input).then((result, err) => {
        if (result.status === 200) {
          toast({
            title: 'Login Successfully.',
            description: "Welcome to the BagShop.",
            status: 'success',
            duration: 9000,
            position: 'top-left',
            isClosable: true,
          })
          navigate("/shop");
        } else if (result.status === 201) {
          toast({
            title: `${result.data.message}`,
            description: "Please field right details.",
            status: 'error',
            duration: 9000,
            position: 'top-left',
            isClosable: true,
          })
        }
      })
    } catch (error) {
      toast({
        title: `Somethig went wrong in Login account.`,
        description: "Please field right details.",
        status: 'error',
        duration: 9000,
        position: 'top-left',
        isClosable: true,
      })
    }
  }

  return (

    <VStack>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type='email' onInput={(e) => setInput({ ...input, email: e.target.value })} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input type={hide ? "text" : "password"} onInput={(e) => setInput({ ...input, password: e.target.value })} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setHide(!hide)}>{hide ? "Hide" : "Show"}</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme='blue' width="100%" style={{ marginTop: 15 }} onClick={() => handleLogin()} >Login</Button>
    </VStack>

  )
}

export default Login
