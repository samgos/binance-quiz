import React, { createContext, useReducer } from 'react'

const initialState = { glossaries: [], score: 0 }
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'INIT':
        return { ...state, glossaries: action.payload }
      case 'ANS':
        return { ...state, score: state.score++ }
      default:
        return state
    };
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
};

export { store, StateProvider }
