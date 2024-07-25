import RestaurantCards from "./RestaurantCards";
import restaurantList from "../utils/mockData";
import { useState , useEffect} from "react";

export const Body = () =>{


const [resList,setResList] = useState(restaurantList);

useEffect(() => {
     fetchData();
},[]);

const fetchData = async() => {
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.787553&lng=78.6727745&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
}

    return(
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
              let filterresList = resList.filter(res => res.rating > 4);
              setResList(filterresList);
            }}> Top Rated Restaurants
            </button>
        </div>
        <div className="search">
              <label>Search</label>
              <input type="text" className="inp-search"></input>
        </div>
        <div className="res-container">
        {resList.map((lists) => <RestaurantCards key={lists.id} resData={lists}/>)}
        </div>
      </div>
    );
  };

  export default Body;