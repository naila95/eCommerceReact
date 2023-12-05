import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import Home from "./layouts/main/pages/Home";
import AuthLayout from "./layouts/auth/AuthLayout";
import Login from "./layouts/auth/pages/Login";
import Details from "./layouts/main/pages/Details";
import Register from "./layouts/auth/pages/Register";
import AuthRoute from "./helpers/AuthRoute";
import { useContext, useEffect } from "react";
import { ProfileCall } from "./services/auth";
import { UserContext } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home/:id",
        element: (
          <AuthRoute>
            <Details />
          </AuthRoute>
        ),
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "",
        element: <Login />,
      },
    ],
  },
]);

export const MainRouter = () => {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    ProfileCall()
      .then(({ data }) => {
        console.log(data.data.client);
        setUser(data.data.client);
      })
      .catch((err) => {
        setUser(false);
      });
  }, []);
  return <RouterProvider router={router} />;
};
