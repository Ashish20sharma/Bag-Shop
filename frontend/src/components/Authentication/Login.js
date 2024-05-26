import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function Login() {
  const [hide,setHide]=useState(false);
  return (

    <VStack>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input type={hide?"text":"password"} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={()=>setHide(!hide)}>{hide?"Hide":"Show"}</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
        <Button colorScheme='blue' width="100%" style={{ marginTop: 15 }} >Login</Button>

    </VStack>

  )
}

export default Login
