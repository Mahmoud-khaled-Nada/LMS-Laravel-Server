import React, { useState, useMemo, ReactNode, createContext, useContext } from 'react';

// Define the shape of the context value
interface SidebarContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

// Create context with a default value of undefined
export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Define the props for the SidebarProvider
interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  function toggleSidebar() {
    setIsSidebarOpen((prevState) => !prevState);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const value = useMemo<SidebarContextType>(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    [isSidebarOpen]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
