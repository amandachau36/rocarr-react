import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../config.js';


class Search extends Component {
  constructor(){
    super();

    this.state = {
      query: '',
      participants: [],
      errorMessage: '',

  };

  } // constructor

  componentDidMount(){

    if(!localStorage.getItem('token')){
      this.props.history.push('/login');
    }


  } // componentDidMount

  handleInputChange = event => {
    // clear error message
    this.setState({
      errorMessage: '',
    });

    const query = event.target.value;

    this.setState({
      query: query
    });


  } // handleInput change


  searchParticipants = () => {

    axios.get(`${ BACKEND_URL }/participants/search/${this.state.query}`,
    {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
    .then( res => {
      console.log('success from axios');
      console.log('res from axios', res.data);
      this.setState({ participants: res.data});
    })
    .catch( err => {
      console.log(err);
        this.setState({ errorMessage: err.message});

    });
  } // getParticipantInfo

  render(){
    return(
      <div className="component">
        <form onSubmit={ this.searchParticipants }>
          <label><h2> Find Participant </h2><br/>
            <input type="text" placeholder="Enter first or last name" onChange={ this.handleInputChange } ></input>
            <input type="submit" value="Search"></input>
          </label>
        </form>
        {
        this.state.participants.length > 0
        ?
        <div className="searchResults">
          <div className="five-col tableHeader">
            <div>Study ID</div>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Study</div>
          </div>
          {
            this.state.participants.map( participant => (
            <div className="five-col">
              <Link to={`/participant/${participant.id}`}><div>{participant.id}</div></Link>
              <div>{participant.name}</div>
              <div>{participant.email}</div>
              <div>{participant.homePhone}</div>
              <div>{participant.researchStudy}</div>
            </div>
            ))
          }
        </div>
        :
        null
      }

      </div>
    )
  }

} // search


export default Search;
