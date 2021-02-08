import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";

function Nav() {
// /////////////////
    
  const [show, handelShow] = useState(false);
  const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY < 100) {
            handelShow(true);
        } else {
            handelShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);



    return (
      <div className={`nav ${show && "nav-black"}`}>
        <div className="nav-container">
          <img
            onClick={() => history.push("/")}
            className="nav-logo"
            src="https://th.bing.com/th/id/Rbaa9d567cb5e5b68a65d76cc6910a48a?rik=WKD8P9%2brmwC5CA&riu=http%3a%2f%2fwww.worldtvpc.com%2fblog%2fwp-content%2fuploads%2f2013%2f09%2fnetflix_logo_white_transparent.png&ehk=v5ifRP8PceUUIV%2fYxQFB5i218RJChF77mMLDSeLWGCk%3d&risl=&pid=ImgRaw"
            alt=""
          />
          <img
            onClick={() => history.push("/profile")}
            className="nav-avatar"
            src="https://th.bing.com/th/id/OIP.A_FZ9Kf0WnJdqJATNsi8vwHaHa?pid=Api&rs=1"
            alt=""
          />
          <div className="nav-search-waper">
            <input className="nav-search" type="text" placeholder="search" />
            <button><SearchIcon /></button>
          </div>
          <div className='nav-nav-container'>
            <h3>Filters</h3>
            <p><Link to='/about'>About</Link></p>
          </div>
        </div>
      </div>
    );
}

export default Nav;
