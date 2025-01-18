import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import Home from "./pages/Home/Home";
import ForUs from "./pages/ForUs/ForUs";
import MonAnGanDay from "./pages/MonAnGanDay/MonAnGanDay";
import QuanLyMonAn from "./pages/QuanLyMonAn/QuanLyMonAn";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile/Profile";
import LoginSocial from "./components/LoginSocial/LoginSocial";

function ProtectedRoute() {
  const isAuthenticated = useSelector(
    (state) => state.userSlice.isAuthenticated
  );

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
function RejectedRoute() {
  const isAuthenticated = useSelector(
    (state) => state.userSlice.isAuthenticated
  );

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

const router = createBrowserRouter([
  {
    path: "",
    element: <RejectedRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/auth/google/callback",
        element: <LoginSocial />,
      },
    ],
  },
  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/quan-ly-mon-an",
        element: <QuanLyMonAn />,
      },
      {
        path: "/mon-an-gan-day",
        element: <MonAnGanDay />,
      },
    ],
  },

  {
    path: "/for-us",
    element: <ForUs />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
