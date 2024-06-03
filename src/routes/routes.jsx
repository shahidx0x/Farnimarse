import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blogs from "@/pages/Blogs";
import Furnitures from "@/pages/Furnitures";
import Contacts from "@/components/Contacts";
import ProductReviews from "@/pages/ProductReviews";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import FAQ from "@/pages/Faq";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/registration",
        element: <Registration />,
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
