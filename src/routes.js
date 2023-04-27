import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
import DashboardLayout from "src/layouts/DashboardLayout";
import LoginLayout from "src/layouts/LoginLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/index")),
  },
  {
    exact: true,
    // guard: true,
    path: "/dashboard",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/DashboardMain/DashboardIndex")
    ),
  },
  {
    exact: true,
    // guard: true,
    path: "/CreateOrder",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/DashboardMain/Ordercreate")
    ),
  },
 
  {
    exact: true,
    // guard: true,
    path: "/edit-profile",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/EditProfile/Profile")
    ),
  },
  {
    exact: true,
    // guard: true,
    path: "/my-profile",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/EditProfile/Profile")
    ),
  },
  {
    exact: true,
    path: "/login",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/Login")),
  },
  {
    exact: true,
    // guard: true,
    path: "/reset-password",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/ResetPassword")),
  },
  {
    exact: true,
    // guard: true,
    path: "/verify-otp",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/VerifyOTP")),
  },
  {
    exact: true,
    // guard: true,
    path: "/verify-password-otp",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/VerifyPasswordOtp")),
  },
  {
    exact: true,
    path: "/register",
    component: lazy(() => import("src/views/auth/Register")),
  },
  {
    exact: true,
    path: "/forgotpassword",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/ForgotPassword")),
  },
  {
    exact: true,
    path: "/contactlist",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Contactus/index")),
  },
  {
    exact: true,
    path: "/Items",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Itemsstock/Items")),
  },
  {
    exact: true,
    path: "/Shiping-process",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Itemsstock/ShippingProcess")),
  },
  {
    exact: true,
    path: "/contactus",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/ContactUs/ContactUs")),
  },
  {
    exact: true,
    path: "/getintouch",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/GetInTouch/GetInTouch")),
  },
  {
    exact: true,
    path: "/termscondition",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/StaticContent/Termscondition")
    ),
  },
  {
    exact: true,
    path: "/privacy-policy",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/StaticContent/PrivacyPolicy")
    ),
  },
  {
    exact: true,
    path: "/risk-disclosure",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/StaticContent/RiskDisclosure")
    ),
  },
  {
    exact: true,
    path: "/aml-Policy",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticContent/AmlPolicy")),
  },
  {
    exact: true,
    path: "/terms-service",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticContent/TermsService")),
  },

  {
    exact: true,
    path: "/about-us",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticContent/AboutUs")),
  },
 
  {
    exact: true,
    path: "/notification",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Home/Notification/Notification")
    ),
  },
  
  

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
