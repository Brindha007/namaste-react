import MenuItemList from "./MenuItemsList";
import { useState } from "react";

const RestaurantMenuCatagories = ({data,showItems,setShowIndex}) =>{

    const handleClick = () =>{
        setShowIndex();
    }
    
    return (
        <div>
            {/* Accordion Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  ">  
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
                    {showItems ? <span>🔼</span> : <span>🔽</span>} 
                </div>
                {/* Accordion Body*/}
                {showItems && <MenuItemList items={data.itemCards}/>} 
            </div>
        </div>
    );
}

export default RestaurantMenuCatagories;