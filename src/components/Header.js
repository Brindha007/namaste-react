import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    return(
      <div className="header" id="header_container">
        <div className="logo-container">
          <img alt="No image" src={LOGO_URL}/>
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

  export default Header;