import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_LIST_IMG } from "../utils/constants";

const RestaurantMenu = () => {
 
  /** useParams hooks is used to fetch parameter from url */
  const {resID} = useParams();

  /** Created custom hook called useRestaurantMenu for fetching menu data from api */
  const resMenuInfo = useRestaurantMenu(resID);

  if (resMenuInfo === null) return <Shimmer />;

  const { name, cuisines } = resMenuInfo?.cards[2]?.card?.card?.info;
  const { itemCards, title } =resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 // const {imageId} = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info;

  return (
    <div className="resMenu mx-72 p-4">
      <h1 className="font-bold text-2xl">
        {name} - {cuisines.join(",")}
      </h1>
      <ul>
        {/* <h2>{title}</h2> */}
        {itemCards?.map((menuItems) => (
          <li key={menuItems?.card?.info?.id}>
            <div className="flex justify-between m-5">
              <div className="menu-items">
                <h2 className="font-bold">{menuItems?.card?.info?.name} </h2>
                <h2 className="font-bold">{"₹"} {menuItems?.card?.info?.price / 100}</h2> 
                <h2 className="font-normal">{menuItems?.card?.info?.description}</h2> 
                <h2 className="font-normal">{menuItems?.card?.info?.ratings?.aggregatedRating?.rating} ({menuItems?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</h2> 
              </div>
              <div className="image-menu">
                <img className="rounded-lg w-[140px] h-[150px] " alt="No image" src={MENU_LIST_IMG + menuItems?.card?.info?.imageId}></img>
                <button className="rounded-lg border text-green-700 w-20 h-10 font-bold mx-7 ">ADD</button>
              </div>
            </div>
            <div className="border-solid border-gray-400 border "></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
