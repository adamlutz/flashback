import React, { useState } from 'react';

const CardContext = React.createContext();

// this is a named export
// chilcren is basically 'App'
export const CardProvider = ({ children }) => {

  const [cards, setCards] = useState([]);
  const addCard = () => {
    setCards([...cards, { title: `my card # ${cards.length + 1}` }]);
  };

  return <CardContext.Provider value={{ data: cards, addCard }}>
    {children}
  </CardContext.Provider>;
}

export default CardContext;
