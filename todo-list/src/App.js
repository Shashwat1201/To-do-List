// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { FormControl, Input, InputLabel } from '@mui/material';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import DeleteIcon from '@mui/icons-material/Delete'; 

function App() {
  const [todos, setTodos]=useState([]);
  const [input,setInput]=useState('');

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc =>( { id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  

  const addTodo=(event)=>{
      event.preventDefault();
      db.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setTodos([...todos,input]);
      setInput(' ');
  }
  return (
    <div className="App">
      
     <h1>Siddhartha weds Shivani Dhavi at Hotel Taj</h1>
     <form>
     
    <FormControl>
    <InputLabel >✅Add Todo</InputLabel>
    <Input value={input} onChange={event => setInput(event.target.value)}/>
  
    </FormControl>

     
     <Button disabled={!input} type="submit" onClick={addTodo} variant="contained">Add Todo</Button>
     
     </form>
    

     <ul>
      {todos.map(todo =>(
        <Todo todo={todo}/>
         ))}
      
     </ul>
    </div>
  );
}

export default App;
