import { ChangeEvent, ReactNode, createContext, useState } from "react";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextData {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error: boolean;
}

export const SearchContext = createContext({} as SearchContextData);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setError(event?.target?.value.length < 0);
    setValue(event.target.value);
  };

  return (
    <SearchContext.Provider value={{ value, error, onChangeSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
