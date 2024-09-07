import { useEffect,useState } from "react";
import { RESTAURANT_CARD_API } from "./constants";

const useRestaurantCard = () =>{
    const [resList,setResList] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch(RESTAURANT_CARD_API);
        const json = await data.json();
        //Optional Chaining
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    /** We should return state variables in same order as given  */
    return [resList,setResList,filteredRestaurant,setFilteredRestaurant];
}

export default useRestaurantCard;