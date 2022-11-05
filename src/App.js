import React, {useState,useEffect} from "react";
import io from 'socket.io-client';
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";


const connectSocketServer = ()=>{
  const socket= io.connect("http://localhost:8080/",{
    transpors:["websocket"]});
  return socket;
}

function App() {
  const [socket, setSocket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  const [band,setBand]=useState([]);


  // useEffect(() => {
  //   console.log(socket)
  //   setOnline(socket.connected);
  //   console.log('estamos online',online)
  // }, [socket]);

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

  useEffect(() => {
    socket.on('current-bands',(bands)=>{
      setBand(bands);
    })
  }, []);



  return (
    <div className="container">

    <div className="alert">
      <p>
        Service Status:
        {online?<span className="text-success">Online</span>:
        <span className="text-danger">Ofline</span>}
      </p>
    </div>
    <h1>BandNames</h1>
    <hr/>
    <div className="row"> 
    <div className="col-8">
      <BandList data={band}/>
    </div>
    <div className="col-4">
      <BandAdd/>
    </div>
      
    </div>
    </div>
  );
}

export default App;
