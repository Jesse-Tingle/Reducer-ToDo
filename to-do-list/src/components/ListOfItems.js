import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/Reducer';

export default function ListofItems() {

    const [state, dispatch] =  useReducer(reducer, initialState)

    return (
        <div>
            
        </div>
    )
}