import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const ProtecedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo) {
    return (
      <div className="container unauthorized">
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to="/sign-in">Sign in</NavLink> to gain access
        </span>
      </div>
    );
  }
  return <Outlet />;
};

export default ProtecedRoute;
