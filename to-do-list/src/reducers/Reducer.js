import React from 'react';

export const initialState = {
    data: [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 1
    },
    {
        item: 'Go Grocery Shopping',
        completed: false,
        id: 2
    },
    {
        item: 'Do Homework',
        completed: false,
        id: 3
    },
    {
        item: 'Clean the Kitchen',
        completed: false,
        id: 4
    }
]
}

console.log(initialState);

export function reducer(state, action) {
    switch(action.type) {
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                completed: !state.completed
            }

        default: 
            return state
    }

}

//   export function TaskList() {
    
//     return(
//           <div>
//               {list}
//           </div>
//       )
//   }
