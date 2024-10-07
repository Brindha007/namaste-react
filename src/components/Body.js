import RestaurantCards, { withTopMostRatedLabel } from "./RestaurantCards";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Body = () => {
  /** Create custom hook called "useRestaurantCard" for Restaurant card to fetch api data */
  const [resList] = useRestaurantCard();
  const [filteredRestaurant, setFilteredRestaurant] = useRestaurantCard();
  const [searchText, setSearchText] = useState("");

  const RestaurantTopMostRatedLabel = withTopMostRatedLabel(RestaurantCards);

  const onlineStatus = useOnlineStatus();

  //useContext for accessing setUserName function from App.js
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline. Please check your internet connection.</h1>
    );
  }

  //Conditional Rendering using Ternary operator --> condition ? exprIfTrue : exprIfFalse
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-blue-300 m-4 rounded-lg"
            onClick={() => {
              const filteredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
          {/* Updating input text field using useContext from App.js */}
          <label>Lively updating name using useContext : </label>
          <input
            type="text"
            className="rounded-sm p-1 border border-black "
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="search m-4 p-4">
          <button
            className="filter-btn px-4 py-1 bg-blue-300 m-4 rounded-lg"
            onClick={() => {
              let filterresList = resList.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filterresList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((lists) => (
          <Link key={lists.info.id} to={"/restaurants/" + lists.info.id}>
            {/**If the restaurant has more than 4.5 rating then add Top most reataurant label.*/}
            {lists.info.avgRating >= 4.5 ? (
              <RestaurantTopMostRatedLabel resData={lists} />
            ) : (
              <RestaurantCards resData={lists} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
