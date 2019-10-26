import React, { useReducer } from 'react'

// Reducer
import { reducer, initialState } from '../reducers/Reducer';


export default function ToDoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('todo list state', state)

    return (
        <div>
            {state.item}
            {state.map(item => {
                return <p>{item.item}</p>
            })}
            
        </div>
    )
}
