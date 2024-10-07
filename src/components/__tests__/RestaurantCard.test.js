import { render, screen } from "@testing-library/react";
import RestaurantCards from "../RestaurantCards";
import MOCK_DATA from "../mocks/resCardMock.json";
import MOCK_LABEL_DATA from "../mocks/topLabelMock.json";
import "@testing-library/jest-dom";
import { withTopMostRatedLabel } from "../RestaurantCards";

test("Should render Restaurant cards component with props data", () => {
    render(<RestaurantCards resData={MOCK_DATA}/>);

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();
});

test("Should render Restaurant cards component with Top most Rated label", () => {
    const RestaurantCardTopRated = withTopMostRatedLabel(RestaurantCards)
    render(<RestaurantCardTopRated {...MOCK_LABEL_DATA}/>);
    const CardData = screen.getByText("Top Most Rated");
    expect(CardData).toBeInTheDocument();
});