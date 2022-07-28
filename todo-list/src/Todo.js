import { Button, List, ListItem, ListItemText } from '@mui/material'
import React from 'react';
import './Todo.css';
import db from './firebase'
import DeleteIcon from '@mui/icons-material/Delete';

function Todo(props) {
  return (
    <List className="todo__List">
    <ListItem>
     <ListItemText primary="Todo" secondary={props.todo.todo} />
    </ListItem>
    <DeleteIcon  onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
    </List>
    

    
  )
}

export default Todo   