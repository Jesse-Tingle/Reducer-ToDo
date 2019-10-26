import React, { useReducer } from 'react'

// Reducer
import { reducer, initialState } from '../reducers/Reducer';


export default function ToDoList() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            {/* {console.log("state and dispatch", state, dispatch)} */}
            {state.item}
        </div>
    )
}
