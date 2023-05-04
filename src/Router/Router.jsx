import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Blogs from "../Blogs";
import Home from "../Home/Home";
import Chefs from "../HomeComponents/Chefs/Chefs";
import ChefRecipes from "../HomeComponents/Chefs/ChefRecipes";
import ErrorPage from "../shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chefs",
        element: <Chefs></Chefs>,
      },

      {
        path: "chef/:chefId",
        element: <ChefRecipes></ChefRecipes>,

        loader: ({ params }) =>
          fetch(
            `https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/chefs/${params.chefId}`
          ),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
