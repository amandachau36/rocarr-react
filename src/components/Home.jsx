import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import participant from '../../public/images/participant.jpg';
// import researcher from '../../public/images/researcher.jpg';
// import staff from '../../public/images/staff.jpg';


// this can probably be functional only component  . .

class Home extends Component {
  render(){
    return(

        <div className="component">
          <div className="header">
            <h1>Return of Clinically Actionable Research Results</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>

        <div className="homepage">
          <div className="threecol">
            <img src={process.env.PUBLIC_URL + '/images/researcher.jpg'}></img>
            <div className="threecol-description">
              <p><strong>Researchers</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <p className="smaller-font">Learn more</p>
            </div></div>
          <div className="threecol">
            <img src={ process.env.PUBLIC_URL + '/images/participant.jpg'}></img>
            <div className="threecol-description">
              <p><strong>Research Participants</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <p className="smaller-font">Learn more</p>
            </div>
          </div><div className="threecol">
            <Link to="/login">
              <img src={process.env.PUBLIC_URL + '/images/counselling.jpg'}></img>
              <div className="threecol-description">
                <p><strong>ROCARR Staff</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p className="smaller-font">Learn more</p>
              </div>
            </Link>
          </div>
        </div>


      </div>
    )
  } //end of render
} // end of Home


export default Home;
