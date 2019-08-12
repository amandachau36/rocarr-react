import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function SideNav(){
  return(
    <div>

        {
          localStorage.getItem('token')
          ?
          <div class="container">
            <input data-function="swipe" id="swipe" type="checkbox"></input>
            <label data-function="swipe" for="swipe"><img className="logo" src={process.env.PUBLIC_URL + '/images/icons-close.png'} /></label>
            <label data-function="swipe" for="swipe"><img className="logo" src={process.env.PUBLIC_URL + '/images/icons-menu.png'} /></label>

            <div class="sidebar">
              <nav class="menu">
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
