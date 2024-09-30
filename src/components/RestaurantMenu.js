import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_LIST_IMG } from "../utils/constants";
import RestaurantMenuCatagories from "./RestaurantMenuCatagories";
import { useState } from "react";

const RestaurantMenu = () => {
  /** useParams hooks is used to fetch parameter from url */
  const { resID } = useParams();

  /** Created custom hook called useRestaurantMenu for fetching menu data from api */
  const resMenuInfo = useRestaurantMenu(resID);

  const [showIndex,setShowIndex] = useState(0);

  // Toggle function
  const toggleShowItems = (index) => {
    if (showIndex === index) {
      setShowIndex(null);  // If clicked item is already shown, hide it
    } else {
      setShowIndex(index);  // Else, set the clicked index
    }
  };
  if (resMenuInfo === null) return <Shimmer />;

  const { name, cuisines } = resMenuInfo?.cards[2]?.card?.card?.info;
  const { itemCards, title } =
    resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  // const {imageId} = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info;
  //console.log(resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  /**Filter types of catagories using filter method.*/
  const catagories =
    resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(catagories);

  return (
    <div className="resMenu text-center">
      <h1 className="font-bold text-2xl m-2">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")}</p>
      {/* Catagories accordions */}
      {catagories.map((catagory, index) => (
        //Controlled Component
        <RestaurantMenuCatagories
          key={catagory?.card?.card?.title}
          index={index}
          data={catagory?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => toggleShowItems (index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
