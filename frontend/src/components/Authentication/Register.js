import React, { useState} from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import axios from "axios";
import { useToast } from '@chakra-ui/react';

function Register() {
  const [hide,setHide]=useState(false);
  const [input,setInput]=useState({email:"",name:"",password:"",Cpassword:""});
//  const navigate=useNavigate();
 const toast = useToast();

  const handleRegister=async()=>{
    if(input.password!==input.Cpassword){
      return toast({
        title: 'Please correct your password.',
        description: "Password and Comform Password is not same",
        status: 'error',
        duration: 9000,
        position: 'top-left',
        isClosable: true,
      })
    }
    try {
       axios.post("/api/v1/users/register",input).then((result,err)=>{
        if(result.status===200){
          toast({
          title: 'Account created.',
          description: "Now you can login.",
          status: 'success',
          duration: 9000,
          position: 'top-left',
          isClosable: true,
        })
        setInput({email:"",name:"",password:"",Cpassword:""});
        }else if(result.status===201){
          toast({
            title: `${result.data.message}`,
            description: "Please check details you field,something went wrong.",
            status: 'error',
            duration: 9000,
            position: 'top-left',
            isClosable: true,
          })
        }
      })

    } catch (error) {
      toast({
        title: 'Failed to sign up.',
        description: "Something went wrong in your account creation.",
        status: 'error',
        duration: 9000,
        position: 'top-left',
        isClosable: true,
      })
    }
  }
  return (
    <div>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type='text' value={input.name} onInput={(e)=>setInput({...input,name:e.target.value})}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type='email' value={input.email} onInput={(e)=>setInput({...input,email:e.target.value})}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={hide?"text":"password"} value={input.password} onInput={(e)=>setInput({...input,password:e.target.value})}/>
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm"  onClick={()=>setHide(!hide)}>{hide?"Hide":"Show"}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Conform Password</FormLabel>
          <InputGroup>
            <Input type={hide?"text":"password"} value={input.Cpassword} onInput={(e)=>setInput({...input,Cpassword:e.target.value})}/>
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
