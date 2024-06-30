import { createContext, useState } from "react";

interface TaskProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface FiltersContextType {
  filters: {
    status: string;
    priority: string;
  };
  setFilters: (filters: { status?: string; priority?: string }) => void;
}

const INITIAL_STATE: FiltersContextType = {
  filters: {
    status: "all",
    priority: "all",
  },
  setFilters: () => {},
};

export const FiltersContext = createContext<FiltersContextType>(INITIAL_STATE);

export function FiltersProvider({ children }: TaskProviderProps) {
  const [filters, setFilters] = useState({ status: "all", priority: "all" });

  const handleSetFilters = (newFilters: {
    status?: string;
    priority?: string;
  }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <FiltersContext.Provider value={{ filters, setFilters: handleSetFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
