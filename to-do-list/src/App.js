import React, { useReducer } from 'react';
import './App.css';

// Components 
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

// Reducer 
import { initialState, reducer } from './reducers/Reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
     <h1>To Do App</h1>
     <ToDoForm state={state} dispatch={dispatch} />
     <ToDoList state={state} dispatch={dispatch} />
     
    </div>
  );
}

export default App;
