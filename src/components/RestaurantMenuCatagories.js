import MenuCatagoriesItemList from "./MenuCatagoriesItemsList";
import { useState } from "react";

const RestaurantMenuCatagories = ({data}) =>{

    const [showItem, setShowItem] = useState(false);

    const handleClick = () =>{
        setShowItem(!showItem) //Toggle
    }
    
    return (
        <div>
            {/* Accordion Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  ">  
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{data.title} ({data.itemCards.length}) </span>
                    {showItem ? <span>🔼</span> : <span>🔽</span>} 
                </div>
                {/* Accordion Body*/}
                {showItem && <MenuCatagoriesItemList items={data.itemCards}/>} 
            </div>
        </div>
    );
}

export default RestaurantMenuCatagories;