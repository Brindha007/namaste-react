import RestaurantCards from "./RestaurantCards";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export const Body = () =>{
const [resList,setResList] = useState([]);
const [filteredRestaurant,setFilteredRestaurant] = useState([]);
const [searchText,setSearchText] = useState("");

useEffect(() => {
     fetchData();
},[]);

const fetchData = async() => {
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.787553&lng=78.6727745&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log(json);
    //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    //Optional Chaining
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
  
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