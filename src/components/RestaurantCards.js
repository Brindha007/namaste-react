import { CDN_URL } from "../utils/constants";

const RestaurantCards =(props)=>{
    //Destructuring
     const {resData} = props;
     const {name,cuisines,avgRating,areaName,costForTwo,cloudinaryImageId} =resData?.info;
    //console.log(props);
    //console.log(resData);
    return(
      <div className="res-cards m-4 p-4 w-[230px] h-[480px] bg-slate-100 rounded-md hover:bg-gray-200">
        <img className="rounded-lg w-56 h-[200px]" alt="No image" src={CDN_URL + cloudinaryImageId}></img>
        <h3 className="font-bold py-5  text-lg">{name}</h3>
        <h3>{cuisines.join(', ')}</h3>
        <h3>{avgRating} stars</h3>
        <h3>{areaName}</h3>
        <h3>{costForTwo}</h3>
      </div>
    );
  };

  export default RestaurantCards;