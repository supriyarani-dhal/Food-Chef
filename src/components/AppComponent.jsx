import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
//import { onAuthStateChanged } from "firebase/auth";
//import { auth } from "../utils/firebase";
//import { addUser, removeUser } from "../utils/userSlice";
//import Login from "./Login";
import Help from "./Help";
import Grocery from "./Grocery";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
import Cart from "./Cart";
import ErrorMessage from "./ErrorMessage";
import Header from "./Header";

const AppComponent = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      errorElement: <ErrorMessage />,
    },
    {
      path: "/help",
      element: (
        <>
          <Header />
          <Help name="Supriya" />
        </>
      ),
      errorElement: <ErrorMessage />,
    },
    {
      path: "/grocery",
      element: (
        <>
          <Header />(
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
          )
        </>
      ),
      errorElement: <ErrorMessage />,
    },
    {
      path: "/restaurant/:resId",
      element: (
        <>
          <Header />
          <RestaurantMenu />
        </>
      ),
      errorElement: <ErrorMessage />,
    },
    {
      path: "/cart",
      element: (
        <>
          <Header />
          <Cart />
        </>
      ),
      errorElement: <ErrorMessage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default AppComponent;
