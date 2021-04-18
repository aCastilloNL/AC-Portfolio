import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();
const MenuUpdateContext = createContext();

export const useMenu = () => useContext(MenuContext);
export const useMenuUpdate = () => useContext(MenuUpdateContext);

export const MenuProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const clickButton = () => setShowNav((showNav) => !showNav);

  return (
    <MenuContext.Provider value={showNav}>
      <MenuUpdateContext.Provider value={clickButton}>
        {children}
      </MenuUpdateContext.Provider>
    </MenuContext.Provider>
  );
};
