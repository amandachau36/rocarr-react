import React, { Component } from 'react';
import axios from 'axios';

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

    axios.post('https://rocarr-backend.herokuapp.com/user', { name, email, password, role
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
      <div className="login component">
        <h3>Create a new account</h3>


        <p style={{color: 'red'}}>{this.state.errorMessage}</p>



        <form onSubmit={ this.handleSubmit }>
          <label> Name
            <input type="text" name="name" onChange={ this.handleInputChange }></input>
          </label><br/>
          <label> Email
            <input type="text" name="email" onChange={ this.handleInputChange }></input>
          </label><br/>
          <label> Password
            <input type="password" name="password" onChange={ this.handleInputChange }></input>
          </label><br/>
          <label> What is your role?
            <select name="role" defaultValue="" onChange={this.handleInputChange}>
              <option value="" disabled>Select one</option>
              <option>Genetic Counsellor</option>
              <option>ROCARR Evaluator</option>
              <option>Researcher</option>
            </select>
          </label><br/>
          <input type="submit" value="Create new account"></input>
        </form>

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
