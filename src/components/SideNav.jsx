import React, { Component } from 'react';


function SideNav(){
  return(
    <div>

        {
          localStorage.getItem('token')
          ?
          <div className="side-nav">
            hi from side nav
          </div>
          :
          <span></span>


        }



    </div>
  )
}



export default SideNav;
