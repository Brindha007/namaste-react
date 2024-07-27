import { CDN_URL } from "../utils/constants";

const RestaurantCards =(props)=>{
    //Destructuring
     const {resData} = props;
     const {name,cuisines,avgRating,areaName,costForTwo,cloudinaryImageId} =resData?.info;
    //console.log(props);
    //console.log(resData);
    return(
      <div className="res-cards">
        <img alt="No image" src={CDN_URL + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h3>{cuisines.join(', ')}</h3>
        <h3>{avgRating} stars</h3>
        <h3>{areaName}</h3>
        <h3>{costForTwo}</h3>
      </div>
    );
  };

  export default RestaurantCards;