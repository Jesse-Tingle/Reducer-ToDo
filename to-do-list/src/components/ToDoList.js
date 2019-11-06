import React from 'react'

export default function ToDoList(props) {
console.log('todo list props',props.state.tasks)
    const toggleTodos = (item) => {
        // e.preventDefault();
        props.dispatch({ type: 'TOGGLE_COMPLETE', payload: item  })
    }

    return (
        <div>
            {props.state.tasks.map(item => {
                return <p className={item.completed ? "completed": ''} key={item.id} onClick={() => toggleTodos(item)} >{item.item}</p>
            })}
            
        </div>
    )
}
