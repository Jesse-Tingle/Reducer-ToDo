export const initialState = [
    {
    item: 'Learn about reducers', 
    completed: false,
    id: 3892987589
    }
]

export const reducer = (state, action) => {
    console.log('reducer', state, action)
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            }
            return {
                ...state,
                newItem
            }
    default:
        return state;
    }
}