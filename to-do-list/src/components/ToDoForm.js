import React, { useState, useReducer } from 'react'

// Reducer 
import { initialState, reducer } from '../reducers/Reducer';

export default function ToDoForm() {
    const [newToDo, setToDo] = useState()
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: newToDo })
    }

    const handleChange = e => {
        setToDo(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit} >
            <input type='text' value={newToDo}  onChange={handleChange} />
            {/* <button onClick={(e) => dispatch({type: 'ADD_ITEM', payload: e.target.value }) } >Add</button> */}
            <button type="submit" >Add Item</button>
            {console.log("Form state",state)}
        </form>
    )
}
