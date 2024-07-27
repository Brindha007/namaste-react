import RestaurantCards from "./RestaurantCards";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";

export const Body = () =>{


const [resList,setResList] = useState([]);

useEffect(() => {
     fetchData();
},[]);

const fetchData = async() => {
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.787553&lng=78.6727745&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log(json);
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    //Optional Chaining
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
}

//Conditional Rendering using Ternary operator --> condition ? exprIfTrue : exprIfFalse
    return resList.length === 0 ? (<Shimmer/>) : (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
              let filterresList = resList.filter(res => res.info.avgRating > 4);
              setResList(filterresList);
            }}> Top Rated Restaurants
            </button>
        </div>
        <div className="search">
              <label>Search</label>
              <input type="text" className="inp-search"></input>
        </div>
        <div className="res-container">
        {resList.map((lists) => <RestaurantCards key={lists.info.id} resData={lists}/>)}
        </div>
      </div>
    );
  };

  export default Body;