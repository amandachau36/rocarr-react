import React, { Component } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config.js';

// let jwt;


// need to redirect to another page
// consider passing back token.
// Frontend JS to not submit if fields are not completed
// what about backend validation? - difficult to do without Mongoose .. . .
class CreateUser extends Component {
  constructor(){
    super();
    this.state={
      name: '',
      email: '',
      password: '',
      role: '',
      errorMessage: '',
    }
  } // end of constructor


  handleInputChange = event => {
    // clear error message
    this.setState({
      errorMessage: '',
    });

    const name = event.target.name;
    const value = event.target.value

    this.setState({
      [name]: value,
    });
  } // handle Input



  handleSubmit = event => {
    event.preventDefault();
    console.log('hello create user')
    this.createUser();

  } // end of handleSubmit

  createUser = () => {
    const {name, email, password, role} = this.state;

    console.log({email});

    axios.post(`${ BACKEND_URL }/user`, { name, email, password, role
    }).then( res => {
      console.log(res);

      // this.getToken();

      this.setState({
        errorMessage: res.data.error
      })


    }).catch( err => {
      console.log(err);
      // console.log(err.response.data.errors);
      // this.setState({
      // //   errorMessage: err.response.data.errors
      // })
    })
  }



  render(){
    return(
      <div className="log-in-background">
        <div className="login">
          <div style={{color: 'red'}}>
            {this.state.errorMessage}
          </div>
          <form onSubmit={ this.handleSubmit }>
            <input className="log-in-form" type="text" name="name" placeholder="Full Name" onChange={ this.handleInputChange }></input>
            <br/>
            <input className="log-in-form" type="text" name="email" placeholder="Email" onChange={ this.handleInputChange }></input>
            <br/>
            <input className="log-in-form" type="password" name="password" placeholder="Password" onChange={ this.handleInputChange }></input>
            <br/>
            <div className="role">
              <label> What is your role? &nbsp;
                <select name="role" defaultValue=""  onChange={this.handleInputChange}>
                  <option value="" disabled>Select one</option>
                  <option>Genetic Counsellor</option>
                  <option>ROCARR Evaluator</option>
                  <option>Researcher</option>
                </select>
              </label>
            </div>
            <br/>
            <input type="submit" value="REGISTER" className="small-btn submit"></input>
          </form>
        </div>

      </div>
    )
  }

} // end of CreateAccount


export default CreateUser;

//
// <div style={{color: 'red'}}>
//   <ul>
//   {
//       this.state.errorMessage.map( error => (
//       <li>{error}</li>
//       ))
//   }
//
//   </ul>
//
// </div>
