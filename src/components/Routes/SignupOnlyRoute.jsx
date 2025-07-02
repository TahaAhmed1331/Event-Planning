import { Navigate } from "react-router-dom";

const SignupOnlyRoute = ({ children }) => {
  const canAccess = localStorage.getItem("canAccessDetailsPage") === "true";

  if (!canAccess) {
    return <Navigate to="/sign-up" replace />;
  }

  return children;
};

export default SignupOnlyRoute;
