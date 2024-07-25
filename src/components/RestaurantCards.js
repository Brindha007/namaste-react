
const RestaurantCards =(props)=>{
    //Destructuring
     const {resData} = props;
     const {name,cuisines,rating,duration,location,food_pics} =resData;
    //console.log(props);
    //console.log(resData);
    return(
      <div className="res-cards">
        <img alt="No image" src={food_pics}></img>
        <h3>{name}</h3>
        <h3>{cuisines.join(', ')}</h3>
        <h3>{rating} stars</h3>
        <h3>{duration}</h3>
        <h3>{location}</h3>
      </div>
    );
  };

  export default RestaurantCards;