import React from 'react';

const CardContext = React.createContext();

// this is a named export
// chilcren is basically 'App'
export const CardProvider = ({ children }) => {
  return <CardContext.Provider value={5}>
    {children}
  </CardContext.Provider>;
}

export default CardContext;
