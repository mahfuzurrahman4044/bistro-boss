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
import Admin from "./Dashboard/Seller/Admin/Admin";

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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/myCart",
        element: <MyCart></MyCart>
      },
      {
        path: "/dashboard/purchaseHistory",
        element: <PurchaseHistory></PurchaseHistory>
      },
      {
        path: "/dashboard/addFood",
        element: <AddFood></AddFood>
      },
      {
        path: "/dashboard/addedFoodHistory",
        element: <AddedFoodHistory></AddedFoodHistory>
      },
      {
        path: "/dashboard/admin",
        element: <Admin></Admin>
      }
    ]
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
