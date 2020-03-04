import React, { useReducer } from 'react';

const CardContext = React.createContext();

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'add_card':
      return [...state, { title: `my card # ${state.length + 1}` }]
    default:
      return state;
  }
}


// this is a named export
// chilcren is basically 'App'
export const CardProvider = ({ children }) => {

  // cards == state
  const [cards, dispatch] = useReducer(cardReducer, []);

  // rather than creating multiple methods for each crud
  // operation, use reducers instead!
  const addCard = () => {
    dispatch({ type: 'add_card', payload: 'title' })
  };

  return <CardContext.Provider value={{ data: cards, addCard }}>
    {children}
  </CardContext.Provider>;
}

export default CardContext;
