import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
// import Login from "../pages/Login";
import Login from "../auth/Login";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import { Page404 } from "../pages/Page404";
import { NonAuthRoute } from "./NonAuthRoute";
import Layout from "../layout/Layout";
import ListeTodos from "../pages/todo/index";
import { Edit as EditTodo } from "../pages/todo/Edit";
import { Show as ShowTodo } from "../pages/todo/Show";
import { Create as CreateTodo } from "../pages/todo/Create";
import Store from "../pages/Store";
import Recettes from "../pages/Recettes";
import GenererRecette from "../pages/GenererRecette";

import LandingPage from "../pages/LandingPage";

import Register from "../auth/Register";
import VendreUnProduit from "../pages/VendreUnProduit";
import Panier from "../pages/Panier";

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
    {
      path: "/land",
      element: <LandingPage />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/app/",
      element: (
        <Layout>
          <ProtectedRoute />
        </Layout>
      ),
      children: [
        {
          path: "produits/add",
          element: <VendreUnProduit />,
        },
        {
          path: "recette/genererRecette",
          element: <GenererRecette />,
        },
        {
          path: "recettes",
          element: <Recettes />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "product/:id",
          element: <div>Edit</div>,
        },

        {
          path: "panier",
          element: <Panier />,
        },
        {
          path: "profile",
          element: <div>User Profile</div>,
        },
        {
          path: "landingPage",
          element: <div>LandingPage</div>,
        },
        {
          path: "todos",
          element: (
            <>
              <Outlet />
            </>
          ),
          children: [
            {
              path: "",
              element: <ListeTodos />,
            },
            {
              path: "create",
              element: <CreateTodo />,
            },
            {
              path: "show/:id",
              element: <ShowTodo />,
            },
            {
              path: "edit/:id",
              element: <EditTodo />,
            },
          ],
        },
        {
          path: "logout",
          element: <div>Logout</div>,
        },
        {
          path: "*",
          element: <Page404 />,
          // on doit avoir une redirection vers une page 404
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <NonAuthRoute />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
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
