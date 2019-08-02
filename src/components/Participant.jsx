import React, { Component } from 'react';
import axios from 'axios';
import AddContactLog from './AddContactLog';

class Participant extends Component {
  constructor(){
    super();
    this.state = {
      participant: {},
      errorMessage: '',
      childVisible: false,

    };


    this.actionsTakenLookup = {
      AT1: "Discussed research results",
      AT2: "Discussed family implications",
      AT3: "Discussed referral options",
      AT4: "Referred patient",
      AT5: "Followed-up on referral",
      AT6: "Discussed ROCARR",
    };

    this.documentsSentLookup = {
      D1: "About ROCARR",
      D2: "Types of research and testing",
      D3: "Risks and benegits of genome research",
      D4: "Privacy, security and data sharing",
      D5: "Implications for you and your family",
      D6: "Interpreting results",
    };

    this.actionsRequiredLookup = {
      AR1: "Referral",
      AR2: "Follow-up call",
    };

  } // constructor

  componentDidMount(){
    this.getParticipantInfo();

  } // componentDidMount

  //Why are these colours off . . .
  getParticipantInfo = () => {

    axios.get(`http://localhost:3333/participant/${this.props.match.params.id}`,
    {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
    .then( res => {
      console.log('success from axios');
      console.log('res from axios', res.data);
      this.setState({ participant: res.data});
    })
    .catch( err => {
      console.log(err);
        this.setState({ errorMessage: err.message});
        this.props.history.push('/login');
    });
  } // getParticipantInfo



  openContactLogForm = () => {
    this.setState(prevState => ({
      childVisible: !prevState.childVisible
    }));
  } // openContactLogFrom


  updateContactLog = () => {
    this.getParticipantInfo();

    // this doesn't work - I don't know why
    // this.setState({
    //   participant: {
    //     //make copy of participant;
    //     ...this.state.participant,
    //     //make a copy of the contactLog
    //     contactLog: [...this.state.participant.contactLog, newLog]
    //   }
    // });

    //close contactLogForm
    this.openContactLogForm();

  } // updateContactLog


  render(){

    const { name, email, contactLog, id, homePhone, researchStudy } = this.state.participant;

    // const contactLogDateFormatted = new Date(log.date)
    // .toLocaleDateString('en-GB', {
    //     year: 'numeric',
    //     month: 'long',
    //     day: '2-digit'
    // });

    if( !('_id' in this.state.participant) ){
      return <p>Loading...</p>;
    }

    console.log('LOG', contactLog);

    contactLog.forEach( (log, index) => {
      if( log.followUp ) {
        console.log(index, log);
      } else {
        console.log('NO FOLLOWUP', log);
      }
    });


    return(
      <div className="component">
        <div>{this.state.errorMessage}</div>

        <h4 className="participant-headers">Participant profile</h4>
        <div className="profile">
          <p><strong>Study ID: </strong>{ id }</p>
          <p><strong>Name: </strong>{ name }</p>
          <p><strong>Email: </strong>{ email }</p>
          <p><strong>Phone: </strong>{ homePhone }</p>
          <p><strong>Research Study: </strong>{ researchStudy }</p>
        </div>

        <h4 className="participant-headers">Follow-up Required</h4>
        <div className="contact-log tableHeader">
          <div>Date Due</div>
          <div>Action Required</div>
          <div>Description</div>
          <div>Assigned to</div>
        </div>

        {
          contactLog.map( (log, index) => (
            log.followUp
            ?
            <div className="contact-log" key={index}>
              <div>{new Date(log.followUp.dateDue)
              .toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
              })}</div>
              <div>
                { log.followUp.actionsRequired.map( a => (
                    <p key={a}>{
                      this.actionsRequiredLookup[a]
                    }</p>
                  ))
                }
              </div>
              <div>{log.followUp.description}</div>
              <div>
              {
               log.followUp.openAssignment
               ?
               log.followUp.openAssignment
               :
               log.followUp.assignTo.map( counsellor => ( <p key={counsellor}>{counsellor}</p> ))
              }
              </div>
            </div>
            :
            <span key="keyRequired"></span>
          ))
        }

        <div className="log">
          <h4 className="participant-headers">Contact Log</h4>
          <button onClick={this.openContactLogForm}>Add log</button>
        </div>
        <div>
          {
          this.state.childVisible
          ? <AddContactLog studyId={this.state.participant.id} onAddContactLog={this.updateContactLog} />
          : null
          }
          </div>
        <div className="contact-log tableHeader">
          <div>Date</div>
          <div>Reason for interaction</div>
          <div>Actions Taken</div>
          <div>Signed by</div>
        </div>

        <div>
        {

          contactLog.map( (log, index) => (
            <div key={index} className="contact-log">

              <div>{new Date(log.date)
              .toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
              })}</div>
              <div>{log.interactionReason}</div>
              <div>
              { log.actionsTaken.map( a => (
                  <p key={a}>{
                    this.actionsTakenLookup[a]
                  }</p>
                ))
              }
              </div>
              <div>{log.createdBy.name}</div>

            </div>

          ))
        }
        </div>

      </div>

  )

}
}//participant


export default Participant;
