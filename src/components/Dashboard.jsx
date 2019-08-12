import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../config.js'

class DashBoard extends Component {
  constructor(){
    super();
    this.state = {
      errorMessage: '',
      followUpArray: [],
    }


    this.actionsRequiredLookup = {
      AR1: "Referral",
      AR2: "Follow-up call",
    };

  }

  componentDidMount(){
    this.getFollowUp();

  }

  getFollowUp = () => {

  // get FollowUp list for the logged in User
  axios.get(`${ BACKEND_URL }/participants/followup`,
  {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      })
  .then( res => {
    console.log('success from axios');
    console.log('res from axios', res.data);
    this.setState({ followUpArray: res.data});

  })
  .catch( err => {
    console.log(err);
      this.setState({ errorMessage: err.message});
      this.props.history.push('/login');


  });
}

  render(){
    // create a new followUp array which includes follow up for particular user
    const followUps = [];
    const email = localStorage.getItem('email');

    this.state.followUpArray.forEach( participant => {
      participant.contactLog.forEach( log => {
        if( log.followUp ){
          if( log.followUp.openAssignment || log.followUp.assignTo.includes(email) ){

            // console.log('actionsRequired:', participant.name, logIndex, log.followUp.actionsRequired);

            const dateFormatted = new Date(log.followUp.dateDue)
            .toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            });

            followUps.push(
              (<Link to={`/participant/${participant.id}`}>
                <div key={participant._id} className="threeColGrid gridRow">
                  <div className="followName">
                    { participant.name }
                  </div>
                  <div className="followActions">
                    {
                      log.followUp.actionsRequired.map( a => (
                        <div key={ a }>{ this.actionsRequiredLookup[a] }</div>
                      ))
                    }
                  </div>
                  <div className="followDate">
                    { dateFormatted }
                  </div>

              </div>
              </Link>)
            );
          }
        }
      });
    });

    // {new Intl.DateTimeFormat(
    // }).format()

// toLocaleDateString()
//
// <td>
// {new Intl.DateTimeFormat('en-GB', {
//     year: 'numeric',
//     month: 'long',
//     day: '2-digit'
// }).format(customer.firstSale)}
// </td>

    return(
      <div className="component dashboard">
        <h1>Dashboard</h1>
        <h3>My Follow-up List</h3>
        <div>{this.state.errorMessage}</div>

        <div className="threeColGrid tableHeader">
          <div>Name</div>
          <div>Follow-up Actions Required</div>
          <div>Date Due</div>
        </div>
          { followUps }


      </div>
    )
  }
} // DashBoard

export default DashBoard;
