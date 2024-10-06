import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render,screen } from '@testing-library/react';
import appStore from "../../Redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



test ("Should render Header component with login button", () => {
 render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
);
    /**To findout specific button by name */
    const loginButton = screen.getByRole("button", {name: "Login"});

    //const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
});

test ("Should render Header component with Cart 0 items ", () => {
    render(
       <BrowserRouter>
           <Provider store={appStore}>
               <Header/>
           </Provider>
       </BrowserRouter>
   );
         const cartItems = screen.getByText("Cart 🛒 (0 items)");
         //const cartItems = screen.getByText(/Cart/);

   
       expect(cartItems).toBeInTheDocument();
   });

test ("Should render Header component with Cart ", () => {
    render(
       <BrowserRouter>
           <Provider store={appStore}>
               <Header/>
           </Provider>
       </BrowserRouter>
   );
       const cartItems = screen.getByText(/Cart/);
       expect(cartItems).toBeInTheDocument();
   });

test ("Should change Login button to logout button on click ", () => {
render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
);
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    const logoutButton = screen.getByText("Logout");

    expect(logoutButton).toBeInTheDocument();
});
