import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import logo from '../../public/images/garvan.png';
//
// <img className="logo" src={logo} />

class Nav extends Component {

  logOut = () => {
    console.log('hello, logging out');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.props.history.push('/');
  }

  render(){
    return(
      <div>
        <nav className='nav-bar'>
            <div className='nav-left'>
              <a href="https://www.garvan.org.au/">
                <img className="logo" src={process.env.PUBLIC_URL + '/images/garvan.png'} />
              </a>
              <div className="rocarr-url">
                <Link to="/">ROCARR</Link>
              </div>
            </div><div className='nav-right'>
            {localStorage.getItem('token')
            ?
              <div>
                <Link to="/search">SEARCH </Link>

                <button onClick={this.logOut}>SIGN OUT</button>

              </div>
              :
              <div clName="nav-btns">
                <div className="small-btn">
                  <Link to="/create_account">REGISTER</Link>
                </div>
                <div className="small-btn">
                  <Link to="/login">SIGN IN</Link>
                </div>
              </div>
            }
          </div>
        </nav>
      </div>
    )

  }


}

export default Nav;
