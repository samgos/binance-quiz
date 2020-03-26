import React, { createContext, useReducer } from 'react'

const initialState = { glossaries: [] }
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'INIT':
        return { ...state, glossaries: action.payload }
      default:
        return state
    };
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
};

export { store, StateProvider }
