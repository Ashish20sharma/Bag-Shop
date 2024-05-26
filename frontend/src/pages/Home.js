import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import Login from '../components/Authentication/Login'
import Register from '../components/Authentication/Register'

export default function Home() {
  return (
    <Container maxWidth="xl" centerContent display="flex" alignItems="center" justifyContent="center">
      <Box d="flex" justifyContent='center' textAlign="center" p={3} bg={"white"} w='100%' m="40px 0 15px 0" borderRadius="lg" borderWidth="1px">
        <Text fontSize="4xl" fontFamily="Work sans" color="black">Let`s Shop</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Register/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}
