import React, { createContext, useContext, useState } from "react";

const SoundContext = createContext();
const SoundUpdateContext = createContext();

export const useSound = () => useContext(SoundContext);
export const useSoundUpdate = () => useContext(SoundUpdateContext);

export const SoundProvider = ({ children }) => {
  const [sound, setSound] = useState(true);

  const toggleSound = () => setSound((sound) => !sound);

  return (
    <SoundContext.Provider value={sound}>
      <SoundUpdateContext.Provider value={toggleSound}>
        {children}
      </SoundUpdateContext.Provider>
    </SoundContext.Provider>
  );
};
