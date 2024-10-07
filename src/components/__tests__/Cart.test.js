import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_MENU_LIST from "../mocks/resMenuList.json";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../Redux/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU_LIST),
  });
});

it("Should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Recommended (6)");
  expect(accordionHeader).toBeInTheDocument();
});


it("Should load Biryani Half- Newly Launched (Starting @ 139) (5) accordion expanded", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );
  
    const accordionHeader = screen.getByText("Biryani Half- Newly Launched (Starting @ 139) (5)");
    fireEvent.click(accordionHeader);
    const listItems = screen.getAllByTestId("foodItems");
    console.log(listItems.length);
    expect(listItems.length).toBe(5);
  });

it("Should load add btn and cart page list items", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenu />
          <Cart/>
        </Provider>
        </BrowserRouter>
      )
    );
  
    const accordionHeader = screen.getByText("Biryani Half- Newly Launched (Starting @ 139) (5)");
    fireEvent.click(accordionHeader);
    //const listItems = screen.getAllByTestId("foodItems");
    // console.log(listItems.length);
    // expect(listItems.length).toBe(5);
    const addBtn = screen.getAllByRole("button",{name:"ADD"});
    //console.log(addBtn[0]);
    fireEvent.click(addBtn[0]);
    const cartItems = screen.getByText("Cart 🛒 (1 item)");
    expect (cartItems).toBeInTheDocument();

    fireEvent.click(addBtn[2]);
    const cartItem = screen.getByText("Cart 🛒 (2 items)");
    expect (cartItem).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    const clearCart = screen.getByRole("button",{name : "Clear Cart"});
    fireEvent.click(clearCart);
    expect(screen.getAllByTestId("foodItems").length).toBe(5);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });



