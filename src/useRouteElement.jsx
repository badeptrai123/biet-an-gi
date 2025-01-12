import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForUs from "./pages/ForUs/ForUs"
import MonAnGanDay from "./pages/MonAnGanDay/MonAnGanDay"
import QuanLyMonAn from "./pages/QuanLyMonAn/QuanLyMonAn"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/for-us",
    element: <ForUs /> 
  },
  {
    path: "/mon-an-gan-day",
    element: <MonAnGanDay />,
  },
  {
    path: "/quan-ly-mon-an",
    element: <QuanLyMonAn />,
  },
]);

export default router;
