import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const Chatpage = () => {
    const fetchChats=async ()=>{
        const data=await axios.get('/api/chat');
        console.log(data);
    };
useEffect(()=>{
    fetchChats();
},[])
  return (
    <div>Chat page</div>
  )
}

export default Chatpage