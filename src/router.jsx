

import { createBrowserRouter,Navigate } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./Layout"
import Shop from "./pages/Shop"
import About from "./pages/about"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        
        path: "",
        element: <Navigate to="home" />, // chuyển hướng từ "/" sang "/home"
        index: true
      },
      {
        
        path: "home",
        element: <Home />,
        index: true,
      },
      {
        path: "shop",
        element: <Shop />,

      },
      {
        path: "about",
        element: <About />,

      },
    ]
  },
]);

  export default router;