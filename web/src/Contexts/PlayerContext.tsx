import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for the context state
interface PlayerContextType {
  player: any;
  setPlayer: React.Dispatch<React.SetStateAction<any>>;
}

// Create the context with a default value
const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

// Create a provider component
export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [player, setPlayer] = useState<any>(null);

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

// Custom hook to use the PlayerContext
export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};