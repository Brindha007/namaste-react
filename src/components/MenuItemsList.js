import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { MENU_LIST_IMG } from "../utils/constants";
import { addItem } from "../Redux/cartSlice";

const MenuItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    //Dispatch an action
    dispatch(addItem(item));
  }

  //console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div 
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex  justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-bold">
              <span className="text-lg">{item.card.info.name}</span> <br></br>
              <span className="text-base">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>{" "}
              <br></br>
              {item.card.info.ratings.aggregatedRating.rating && (
                <span className="font-bold text-sm text-green-950 ">
                  ⭐{item.card.info.ratings.aggregatedRating.rating} (
                  {item.card.info.ratings.aggregatedRating.ratingCountV2})
                </span>
              )}
            </div>
            <div>
              <span className="text-base text-gray-500">
                {item.card.info.description}
              </span>
            </div>
          </div>
          <div className="w-3/12">
            {item.card.info.showImage && (
              <img
                src={MENU_LIST_IMG + item.card.info.imageId}
                className="w-full rounded-xl p-1"
              />
            )}
            <button className="rounded-lg border border-green-900 text-green-700 w-20 h-10 font-bold  ml-16 mr-12 " 
            onClick={() => handleAddItem(item)}>
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
