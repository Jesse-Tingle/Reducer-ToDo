import React, { useState } from 'react'



export default function ToDoForm(props) {
    const [newToDo, setToDo] = useState('')
    

    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch({ type: 'ADD_ITEM', payload: newToDo })
    }

    const handleChange = e => {
        setToDo(e.target.value)
    }

    const clearCompleted = e => {
        e.preventDefault();
        props.dispatch({ type: 'CLEAR_COMPLETED' })
    }

    return (
        <form onSubmit={handleSubmit} >
            <input value={newToDo}  onChange={handleChange} />
            <button type="submit" >Add Item</button>
            <button onClick={clearCompleted} >Clear Completed</button>
        </form>
    )
}
