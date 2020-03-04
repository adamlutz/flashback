import React from 'react';

const CardContext = React.createContext();

// this is a named export
// chilcren is basically 'App'
export const CardProvider = ({ children }) => {

  const cards = [
    { question: 'test', answer: 'test' },
    { question: 'test2', answer: 'test' }
  ];

  return <CardContext.Provider value={cards}>
    {children}
  </CardContext.Provider>;
}

export default CardContext;
