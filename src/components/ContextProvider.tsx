import { createContext, useState, useEffect } from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [allExpanded, setAllExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const allExpandedFromLocalStorage = localStorage.getItem("allExpanded");
  const darkModeFromLocalStorage = localStorage.getItem("darkMode");

  useEffect(() => {
    if (allExpandedFromLocalStorage) {
      setAllExpanded(allExpandedFromLocalStorage === "true");
    }
    if (darkModeFromLocalStorage) {
      setDarkMode(darkModeFromLocalStorage === "true");
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ allExpanded, setAllExpanded, darkMode, setDarkMode }}
    >
      {children}
    </AppContext.Provider>
  );
};

interface AppContextProps {
  allExpanded: boolean;
  setAllExpanded: (allExpanded: boolean) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);
