import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";

const AppLayout = () => {
  const [userName,setUserName] = useState();

  useEffect(() => {
    //Make an API call to fetch user name
    const data = {
      name :  "Brindha Dhorairaju",
    };
    setUserName(data.name);
  },[]);


  return (
    <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

// const About = lazy(() => {
//   import("./components/About");
// });
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
