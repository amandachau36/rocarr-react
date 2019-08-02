import React, {Component } from 'react';
import axios from 'axios';



class LogIn extends Component {
  constructor(){
    super();
    this.state = {
      email: 'jane@gc.co',
      password: '',
      errorMessage: '',
      jwt: '',
    }
  } // end of constructor

  componentDidMount(){
    const token = localStorage.getItem('token');
    if(token){
      this.props.history.push('/dashboard');
    }

  }

  handleInputChange = event => {
    // clear error message
    this.setState({
      errorMessage: '',
    });

    const value = event.target.value;
    const name = event.target.name

    this.setState({
      [name]: value
    });
  } // handleInput change



  handleSubmit = (event) => {
    // prevents page reload
  event.preventDefault();

  console.log(this.state.email);
  console.log(this.state.password);

  //make a post request to the backend, if user exists and password is correct
  console.log('POST to /login');
  axios.post('http://localhost:3333/login', {
    email:   this.state.email,
    password: this.state.password
  })
  .then( res => {
    console.log(res);

    // axios.defaults.headers.common = {'Authorization': `bearer ${res.data.token}`};

    // store email address in localStorage
    // (needed to filter some MongoDB results)
    // TODO: make this unnecessary?
    // (Use MongoDB aggregrates/$filter ?)
    localStorage.setItem('email', res.data.email);
    localStorage.setItem('token', res.data.token);

    // //store UserToken in localStorage
    // // which allows for stored data is saved across browser sessions.
    // //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    // //In console: localStorage.getItem('userToken')
    // localStorage.setItem('userToken', jwt);

    this.props.history.push('/dashboard');
  })
  .catch( err => {
    console.log(err.response);
    if( err.response.status === 400 || err.response.status === 401 ){
      this.setState({ errorMessage: 'Invalid email or password'});
    } else {
      console.warn('OTHER ERROR', err);
    }
  } )

} //end of handleSubmit

  render(){
    return(
      <div className="component login">
        <h3>Log in</h3>
        <div style={{color: 'red'}}>
          {this.state.errorMessage}
        </div>
        <form onSubmit={ this.handleSubmit }>
          <label> Email:
            <input type="text" name="email" onChange={ this.handleInputChange } value={ this.state.email }></input>
          </label>
          <br/>
          <label> Password:
            <input name="password" type="password" onChange={ this.handleInputChange }></input>
          </label>
          <br/>
          <input type="submit" value="Log In"></input>
        </form>

      </div>
    )
  }

}

export default LogIn;
