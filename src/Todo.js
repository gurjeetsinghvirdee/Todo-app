import React from 'react';
import { db } from './firebase.config';
import { Button, ListItem, ListItemText } from '@material-ui/core';

export default function TodoListItem({ todo, inprogress, id }) {
    function toggleInProgress() {
        db.collection("tools").doc(id).update({
            inprogress: !inprogress,
        });
    }

    function deleteTodo() {
        db.collection("todos").doc(id).delete();
    }

    return (
        <div style={{ display: "flex" }}>
            <ListItem>
                <ListItemText
                    primary = {todo}
                    secondary = {inprogress ? "In Progress" : "Completed"} 
                />
            </ListItem>
            <Button onClick={toggleInProgress}>
                {inprogress ? "Done" : "Remove"}
            </Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    );
}
