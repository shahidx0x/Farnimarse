import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blogs from "@/pages/Blogs";
import Furnitures from "@/pages/Furnitures";
import Contacts from "@/components/Contacts";
import ProductReviews from "@/pages/ProductReviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/furnitures",
        element: <Furnitures />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/product-reviews",
        element: <ProductReviews />,
      },
    ],
  },
]);
