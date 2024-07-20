import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Home
 *  -About us
 *  -Sign In
 *  -Cart
 * Body
 *  -Restaurant Container
 *  -Restaurant Cards
 *    -Food Img
 *    -Name of the Restaurant
 *    -Rating,Duration,Cuisine
 * Footer
 *  -CopyRights
 *  -Terms and Conditions
 */

const restaurantList =[
  {
    "name": "Spice Heaven",
    "cuisines": ["Indian", "Chinese", "Thai"],
    "rating": 4.5,
    "duration": "30 mins",
    "location": "Downtown",
    "food_pics": [
      "https://as1.ftcdn.net/v2/jpg/01/17/97/62/1000_F_117976275_RtssFfh9kkodgYgCUJCkdIi4EV7mHZKY.jpg"
    ]
  },
  {
    "name": "Pasta Paradise",
    "cuisines": ["Italian", "Mediterranean"],
    "rating": 4.7,
    "duration": "25 mins",
    "location": "Uptown",
    "food_pics": [
      "https://as1.ftcdn.net/v2/jpg/03/02/21/92/1000_F_302219263_NDP2Cfs8uacAeOAcaV7cppbbd2LrDoEQ.jpg"
    ]
  },
  {
    "name": "Sushi World",
    "cuisines": ["Japanese", "Korean"],
    "rating": 4.6,
    "duration": "35 mins",
    "location": "Midtown",
    "food_pics": [
      "https://as1.ftcdn.net/v2/jpg/00/53/35/38/1000_F_53353803_17AM3erTyvSB29TquOFNk2KLxLIu4quv.jpg"
    ]
  },
  {
    "name": "Burger Barn",
    "cuisines": ["American", "Fast Food"],
    "rating": 4.2,
    "duration": "20 mins",
    "location": "West End",
    "food_pics": [
      "https://as1.ftcdn.net/v2/jpg/07/88/27/84/1000_F_788278439_W1VTze36svaJJtcSTVQkY1ZqrZZk0HxL.jpg"
    ]
  },
  {
    "name": "Green Delight",
    "cuisines": ["Vegan", "Vegetarian"],
    "rating": 4.8,
    "duration": "30 mins",
    "location": "East Side",
    "food_pics": [
      "https://as1.ftcdn.net/v2/jpg/01/67/50/20/1000_F_167502049_xsTCWIheY3z8RRHAdc5ZiIzckBkVoysb.jpg"
    ]
  }
];




const Header = () =>{
  return(
    <div className="header" id="header_container">
      <div className="logo-container">
        <img alt="No image" src="https://www.clipartmax.com/png/middle/111-1118804_android-food-delivery-apps.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCards =(props)=>{
  //Destructuring
   const {resData} = props;
   const {name,cuisines,rating,duration,location} =resData;
  //console.log(props);
  //console.log(resData);
  return(
    <div className="res-cards">
      <img alt="No image" src={props.resData.food_pics}></img>
      <h3>{name}</h3>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{rating} stars</h3>
      <h3>{duration}</h3>
      <h3>{location}</h3>
    </div>
  );
};


const Body = () =>{
  return(
    <div className="body">
      <div className="res-container">
      {restaurantList.map((lists) => <RestaurantCards resData={lists}/>)}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return(
      <div className="app-layout">
        <Header/>
        <Body/>
      </div>
    );
  };


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
