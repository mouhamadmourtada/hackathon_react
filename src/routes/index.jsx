import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {useAuth} from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { Page404 } from "../pages/Page404";
import { NonAuthRoute } from "./NonAuthRoute";
import Layout from "../layout/Layout";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: 
      <Layout>
        <ProtectedRoute />
      </Layout>,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
            path: "dashboard",
            element: <Dashboard />,
        },
        {
          path: "profile",
          element: <div>User Profile</div>,
        },
        {
          path: "logout",
          element: <div>Logout</div>,
        },
        {
            path: "*",
            element: <Page404/>,
            // on doit avoir une redirection vers une page 404
        }
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <NonAuthRoute/>,
      children : [
        {
          path: "/",
          element: <Login />,
        },
        {
            path: "/login",
            element: <Login />,
          },
      ]
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;