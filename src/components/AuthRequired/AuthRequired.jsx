import { Navigate, Outlet } from "react-router";

export function AuthRequired() {
  const authenticated = localStorage.getItem("token") ? true : false;
  if (!authenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
