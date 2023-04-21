import { SearchProvider } from "./context/SearchProvider";
import { MainRoutes } from "./routes";

export default function App() {
  return (
    <SearchProvider>
      <MainRoutes />
    </SearchProvider>
  );
}
