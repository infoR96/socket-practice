import {useState,useEffect} from "react";
import { useMemo } from "react"
import io from 'socket.io-client';
export const useSocket = (serverPath) => {
  
  const socket= useMemo(()=>io.connect(serverPath,{
    transports:['websocket']}),[serverPath]);
    
    useEffect(()=>{
        socket.on('connect',()=>{
          console.log('connect funcional')
          setOnline(true)
        })
      },[socket])
      useEffect(()=>{
        socket.on('disconnect',()=>{
          setOnline(false)
          console.log('disconnect not funcional')
        })
      },[socket])
    
    const [online, setOnline] = useState(false);
    return {
    socket,
    online
    }
}
