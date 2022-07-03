import React, { lazy } from "react";
export const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Home")), 4000);
  });
});
export const FeedBack = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/FeedBack")), 4000);
  });
});
export const ProductDetails = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/ProductDetails")), 4000);
  });
});
export const Authentication = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Authentication")), 4000);
  });
});
export const Forget = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../Components/Authentication/Forget")),
      4000
    );
  });
});
export const Payment = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Payment")), 4000);
  });
});

export const Admin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Admin")), 4000);
  });
});
export const ProfileAdmin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../Components/AdminComponent/ProfileAdmin")),
      4000
    );
  });
});
