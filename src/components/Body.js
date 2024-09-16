import RestaurantCards from "./RestaurantCards";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_CARD_API } from "../utils/constants";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  /** Create custom hook called "useRestaurantCard" for Restaurant card to fetch api data */
  const [resList] = useRestaurantCard();
  const [filteredRestaurant, setFilteredRestaurant] = useRestaurantCard();
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return(
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
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-1 bg-blue-300 m-4 rounded-lg"
            onClick={() => {
              const filteredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
              console.log(filteredRes);
            }}
          >
            Search
          </button>
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
          {" "}
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((lists) => (
          <Link key={lists.info.id} to={"/restaurants/" + lists.info.id}>
            <RestaurantCards resData={lists} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
