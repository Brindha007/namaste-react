import RestaurantCards from "./RestaurantCards";
import { useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_CARD_API } from "../utils/constants";
import useRestaurantCard from "../utils/useRestaurantCard";

export const Body = () =>{
/** Create custom hook called "useRestaurantCard" for Restaurant card to fetch api data */
const [resList] = useRestaurantCard();
const [filteredRestaurant,setFilteredRestaurant] = useRestaurantCard();
const [searchText,setSearchText] = useState("");

//Conditional Rendering using Ternary operator --> condition ? exprIfTrue : exprIfFalse
    return resList.length === 0 ? (<Shimmer/>) : (
      
      <div className="body">
        <div className="filter">
            <div className="search">
                  <input type="text" className="inp-search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                  }}/>
                  <button onClick={()=>{
                   const filteredRes = resList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurant(filteredRes);
                   console.log(filteredRes);
                  }}>Search</button>
            </div>
                  <button className="filter-btn" onClick={() => {
                    let filterresList = resList.filter(res => res.info.avgRating > 4.5);
                    setFilteredRestaurant(filterresList);
                  }}> Top Rated Restaurants
                  </button>
        </div>
        <div className="res-container">
        {filteredRestaurant.map((lists) => <Link key={lists.info.id} to={"/restaurants/"+lists.info.id}><RestaurantCards  resData={lists}/></Link>)}
        </div>
      </div>
    );
  };

  export default Body;