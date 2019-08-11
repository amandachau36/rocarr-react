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
              <div>
                <Link to="/">ROCARR</Link>
              </div>
            </div><div className='nav-right'>
            {localStorage.getItem('token')
            ?
              <div>
                <Link to="/search">Search </Link>

                <button onClick={this.logOut}>Log out</button>

              </div>
              :
              <div>
                <Link to="/create_account">Create account  </Link>
                |
                <Link to="/login">  Log in</Link>
              </div>
            }
          </div>
        </nav>
      </div>
    )

  }


}

export default Nav;
