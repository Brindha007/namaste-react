import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_RES_LIST from "../mocks/mockResList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_LIST);
    },
  });
});

test("Should render Body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const allCards = screen.getAllByTestId("resCard");
  console.log(allCards.length);
  expect(allCards.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "suvai" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
});

test("Should render Top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const beforeCardsFilter = screen.getAllByTestId("resCard");
  expect(beforeCardsFilter.length).toBe(20);

  const topFilterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topFilterBtn);

  const afterCardsFilter = screen.getAllByTestId("resCard");
  
  expect(afterCardsFilter.length).toBe(5);
});
