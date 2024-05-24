import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import ContactUs from "./Contact US/ContactUs";
import SignUp from "./Account/Sign Up/SignUp";
import Login from "./Account/Login/Login";
import Profile from "./Account/Profile/Profile";
import Menu from "./Our Menu/Menu";
import Order from "./Our Shop/Order";
import AuthProvider from "./Account/Provider/AuthProvider";
import PrivateRoute from "./Account/Private Route/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import PurchaseHistory from "./Dashboard/Buyer/Purchase History/PurchaseHistory";
import MyCart from "./Dashboard/Buyer/My Cart/MyCart";
import AddFood from "./Dashboard/Seller/Add Food/AddFood";
import AddedFoodHistory from "./Dashboard/Seller/Added Food History/AddedFoodHistory";
import Admin from "./Dashboard/Admin/Admin";
import NotFound from "./404/NotFound";
import AdminRoute from "./Account/Admin Route/AdminRoute";
import SellerRoute from "./Account/Seller Route/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/order",
        element: <PrivateRoute><Order></Order></PrivateRoute>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: "/dashboard/purchaseHistory",
        element: <PrivateRoute><PurchaseHistory></PurchaseHistory></PrivateRoute>
      },
      {
        path: "/dashboard/addFood",
        element: <SellerRoute><AddFood></AddFood></SellerRoute>
      },
      {
        path: "/dashboard/addedFoodHistory",
        element: <SellerRoute><AddedFoodHistory></AddedFoodHistory></SellerRoute>
      },
      {
        path: "/dashboard/admin",
        element: <AdminRoute><Admin></Admin></AdminRoute>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
