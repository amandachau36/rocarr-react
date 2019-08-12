import React from 'react';
import { Link } from 'react-router-dom';


function SideNav(){
  return(
    <div>

        {
          localStorage.getItem('token')
          ?
          <div className="container">
            <input data-function="swipe" id="swipe" type="checkbox"></input>
            <label data-function="swipe" for="swipe"><img alt="close-icon" src={process.env.PUBLIC_URL + '/images/icons-close.png'} /></label>
            <label data-function="swipe" for="swipe"><img alt="open-icon" src={process.env.PUBLIC_URL + '/images/icons-menu.png'} /></label>

            <div className="sidebar">
              <nav className="menu">
                <li><Link to="/dashboard">MY DASHBOARD</Link></li>
                <li><Link to="/search">SEARCH PARTICIPANTS </Link></li>
                <li><a href="#">ALL PARTICIPANTS</a></li>
                <li><a href="#">ADD PARTICIPANTS</a></li>
              </nav>
            </div>
          </div>
          :
          <span></span>


        }



    </div>
  )
}



export default SideNav;
