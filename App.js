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

const RestaurantCards =({resName,rating,duration})=>{
  //const [resName,rating,duration] = props;
  //console.log(props);
  return(
    <div className="res-cards">
      <img alt="No image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pi79pzy2suorndvulzkb"></img>
      <h3>{resName}</h3>
      <h4>{rating}</h4>
      <h4>{duration}</h4>
      <h4>South indian, Biriyani ,..</h4>
    </div>
  );
};


const Body = () =>{
  return(
    <div className="body">
      <div className="res-container">
        <RestaurantCards resName="Magadhi" rating="4.6 starts" duration="35 mins" cuisines="South indian, Biriyani ,.."/>
        <RestaurantCards resName="Ajanta Foods" rating="4.2 starts" duration="25 mins" cuisines="South indian, Veg ,.."/>
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
