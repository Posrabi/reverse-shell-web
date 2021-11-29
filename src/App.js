import './App.css';
import React, {useEffect, useState} from 'react';
import { Status } from './components/status';
import { CommandForm } from './components/form';
import {Container} from "semantic-ui-react"

function App() {
  const [status, setStatus] = useState([])
  useEffect(()=>{
    fetch("http://127.0.0.1:5000/").then(response => response.json().then(data => {
      setStatus([data])
    }))
    .catch((err)=> {
      console.log(err)
    })
  }, [])
  console.log(status)
  return (
    <div className="App">
      <Container style = {{marginTop:40}} >
      <CommandForm onNewStatus={status => setStatus(curStatus => [...curStatus,status])} />
      <Status statuses={status}/>
      </Container>
    </div>

  );
}


export default App;
