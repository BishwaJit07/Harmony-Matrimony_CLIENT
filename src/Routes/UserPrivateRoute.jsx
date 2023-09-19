import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Shared/Loading";

const UserPrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  if (!loading) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return <div className="text-center h-screen"><Loading></Loading></div>;
};

export default UserPrivateRoute;