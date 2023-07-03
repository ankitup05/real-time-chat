import { ViewIcon } from '@chakra-ui/icons'
import {  IconButton,ModalFooter,ModalHeader ,useDisclosure ,ModalCloseButton,Modal,ModalOverlay,ModalBody,ModalContent,Button, useToast, Box, FormControl, Input} from '@chakra-ui/react'
import React, { useState } from 'react'
import { ChatState } from '../../Context/ChatProvider'
import UserBadgeItem from '../UserAvatar/UserBadgeItem'

const UpdateGroupChatModal = ({fetchAgain,setFetchAgain}) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [groupChatName,setgroupChatName]=useState();
  const [search,setSearch]=useState("");
  const [searchResult,setSearchResult]=useState([]);
  const [loading,setLoading]=useState(false);
  const [renameloading,setRenameloading]=useState(false);

 const toast =useToast()

   const {selectedChat,setSelectedChat,user}=ChatState();
const handleRemove=()=>{

}
const handleRename=()=>{

}

     return (
    <>
      <IconButton display={{base:"flex"}} icon={<ViewIcon/>} onClick={onOpen}/>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader 
          fontSize={"35px"}
          fontFamily={"Work sans"}
          display={"flex"}
          justifyContent={"center"}
          >{selectedChat.chatName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w="100%" display={"flex"} flexWrap={"wrap"} pb={3}>
            
            {selectedChat.users.map(u=>(
               <UserBadgeItem key={user._id}
              user={u}
              handleFunction={()=>handleRemove(u)}
              />
            )) }
          </Box>
          <Box>
            <FormControl display={"flex"}>
                <Input 
                placeholder='Chat Name'
                mb={3}
                value={groupChatName}
                onChange={(e)=>setgroupChatName(e.target.value)}
                />
                <Button 
                variant={"solid"}
                colorScheme='teal'
                ml={1}
                isLoading={renameloading}
                onClick={handleRemove}
                >
                    Update
                </Button>
            </FormControl>


            <FormControl >
                <Input 
                placeholder='Add User TO group'
                mb={1}
                
                onChange={(e)=>handleSearch(e.target.value)}
                />
                <Button 
                variant={"solid"}
                colorScheme='teal'
                ml={1}
                isLoading={renameloading}
                onClick={handleRemove}
                >
                    Update
                </Button>
            </FormControl>


          </Box>
          </ModalBody>
          

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
  
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UpdateGroupChatModal
