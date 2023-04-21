import { useContext } from "react";
import { SearchContext } from "../context/SearchProvider";

export const useSearch = () => {
  const context = useContext(SearchContext);

  return context;
};
