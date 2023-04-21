import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DetailsUser } from "../pages/DetailsUser";
import { PageErrors } from "../pages/PageErrors";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="user/profile" element={<DetailsUser />} />
      <Route
        path="/404"
        element={
          <PageErrors
            message="go back to the home page through the link in the header."
            title="Page Not Found"
          />
        }
      />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
