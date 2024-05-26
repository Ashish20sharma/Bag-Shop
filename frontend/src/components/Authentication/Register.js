import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'

function Register() {
  const [hide,setHide]=useState(false);
  const [input,setInput]=useState({});
 
  const handleRegister=()=>{
    try {
      
    } catch (error) {
      
    }
  }
  return (
    <div>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type='text' onInput={(e)=>setInput({...input,name:e.target.value})}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type='email' onInput={(e)=>setInput({...input,email:e.target.value})}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={hide?"text":"password"} onInput={(e)=>setInput({...input,password:e.target.value})}/>
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={()=>setHide(!hide)}>{hide?"Hide":"Show"}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Conform Password</FormLabel>
          <InputGroup>
            <Input type={hide?"text":"password"} onInput={(e)=>setInput({...input,Cpassword:e.target.value})}/>
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={()=>setHide(!hide)}>{hide?"Hide":"Show"}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
          <Button colorScheme='blue' width="100%" style={{ marginTop: 15 }} onClick={()=>handleRegister()}>Sign Up</Button>
      </VStack>
    </div>
  )
}

export default Register
