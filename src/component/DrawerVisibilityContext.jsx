// DrawerVisibilityContext.js
import React, { createContext, useState, useContext } from 'react';

const DrawerVisibilityContext = createContext();

export const DrawerVisibilityProvider = ({ children }) => {
  const [isDrawerVisible, setDrawerVisible] = useState(true);

  return (
    <DrawerVisibilityContext.Provider value={{ isDrawerVisible, setDrawerVisible }}>
      {children}
    </DrawerVisibilityContext.Provider>
  );
};

export const useDrawerVisibility = () => useContext(DrawerVisibilityContext);
