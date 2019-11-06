export const initialState = {
    tasks: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn about redux',
            completed: false,
            id: 3892987
        },
    ]
}

export const reducer = (state, action) => {
    console.log('reducer', state, action)
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            }
            return {
                ...state,
                tasks: [...state.tasks, newItem]
            }
        case 'TOGGLE_COMPLETE': 
            const newCompletedTask = state.tasks.map(task => (
                task.id === action.payload.id ? {...task, completed: !task.completed} : task
            ))
            return {
                ...state,
                tasks: newCompletedTask 
            }

        case 'CLEAR_COMPLETED':
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.completed)
            }    

        default:
            return state;
    }
}