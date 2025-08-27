import React, { useState, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export const RouteAuthController = () => {
  const [authedUser, setAutherUser] = useState<boolean>(false);

  if (authedUser) {
    return <Outlet />;
  } else {
    return <Navigate to="login" />;
  }
};
