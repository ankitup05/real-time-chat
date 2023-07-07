import React from 'react'
import { Container,Box,Text,Tab,Tabs,TabList,TabPanel,TabPanels} from "@chakra-ui/react"
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useEffect } from "react";
import { useHistory } from "react-router";


const Homepage = () => {

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return <Container maxW='xl' centerContent='true'>
    <Box d="flex" justifyContent={"center"} p={3} bg={"white"} w="100%"
      m= "40px 0 15px 0" borderRadius="lg" borderwidth="1px"
      className='Container'>
      <Text fontSize={"4xl"} fontFamily={"Work sans"} color={"black"}>ChatterBox</Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderwidth="1px">
      <Tabs variant='soft-rounded' >
        <TabList>
          <Tab width={"50%"}>Login</Tab>
          <Tab width={"50%"}>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel><Login/></TabPanel>
          <TabPanel><Signup/></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>

  </Container>
}

export default Homepage