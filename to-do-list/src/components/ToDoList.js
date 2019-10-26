import React from 'react'

export default function ToDoList(props) {

    const toggleTodos = (e, id) => {
        e.preventDefault();
        props.dispatch({ type: 'TOGGLE_COMPLETE', payload: id  })
    }

    return (
        <div>
            {props.state.map(item => {
                return <p className={item.completed ? "completed": ''} key={item.id} onClick={(e) => toggleTodos(e ,item.id)} >{item.item}</p>
            })}
            
        </div>
    )
}
