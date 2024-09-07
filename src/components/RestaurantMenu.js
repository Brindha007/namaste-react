import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
 
  /** useParams hooks is used to fetch parameter from url */
  const {resID} = useParams();

  /** Created custom hook called useRestaurantMenu for fetching menu data from api */
  const resMenuInfo = useRestaurantMenu(resID);

  if (resMenuInfo === null) return <Shimmer />;

  const { name, cuisines } = resMenuInfo?.cards[2]?.card?.card?.info;
  const { itemCards, title } =resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  return (
    <div className="resMenu">
      <h1>
        {name} - {cuisines.join(",")}
      </h1>
      <ul>
        <h2>{title}</h2>
        {itemCards?.map((menuItems) => (
          <li key={menuItems?.card?.info?.id}>
            {menuItems?.card?.info?.name} {"-- ₹"}
            {menuItems?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
