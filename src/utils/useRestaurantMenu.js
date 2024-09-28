import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID) =>{

    const[resMenuInfo,setResMenuInfo] = useState(null);

    useEffect(()=>{
        fetchMenuData();
    },[]);

    const fetchMenuData = async() =>{
        const data = await fetch(MENU_API + resID);
        const json = await data.json();
        setResMenuInfo(json?.data);
    }
    return  resMenuInfo;
}

export default useRestaurantMenu;