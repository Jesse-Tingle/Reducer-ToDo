import React from 'react';
import './App.css';

import { initialState } from './reducers/Reducer';

function App() {
  return (
    <div className="App">
     <h1>To Do App</h1>
     <initialState />
    </div>
  );
}

export default App;
