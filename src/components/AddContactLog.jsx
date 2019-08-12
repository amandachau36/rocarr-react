import React, { Component } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config.js'

//https://reactjs.org/docs/forms.html

class AddContactLog extends Component {

  constructor(props){
    super(props);
    this.state={
      date: null,
      interactionType: null,
      interactionReason: null,
      interactionDuration: null,
      actionsTaken: null,
      documentsSentVia: null,
      documentsSent: null,
      notes: null,
      followUpRequired: false,
      fActionsRequired: null,
      fDescription: null,
      fDateDue: null,
      fAssignTo: null,
      fOpenAssignment: false,
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // console.log(event, value, name);

    // Set values for all states without an array
    this.setState({
      [name]: value
    });
  } //handleInputChange


  handleMultipleInputChange = event => {
    const options = event.target.options;
    const name = event.target.name;
    // console.log('OPTIONS', event.target.options);

    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
    // if selected is true, add value to array
    if (options[i].selected) {
      value.push(options[i].value);
      }
    }
    // console.log('value',value);
    //Set vallues for all states with an array
    this.setState({
      [name]: value,
    })
  }//handleMultipleInputChange

  handleSubmit = event => {
    event.preventDefault();
    this.createNewContactLog();

  } // handleSubmit

  createNewContactLog = event => {
    // destructuring
    const { date, interactionType, interactionReason, interactionDuration, actionsTaken, documentsSentVia, documentsSent, notes, followUpRequired, fActionsRequired, fDescription, fDateDue, fAssignTo, fOpenAssignment} = this.state;

    console.log({notes});

    axios.post(
      `${ BACKEND_URL }/participant/${this.props.studyId}/contact_log`,
      {
        date, interactionType, interactionReason, interactionDuration, actionsTaken, documentsSentVia, documentsSent, notes, followUpRequired,
        actionsRequired: fActionsRequired,
        description: fDescription,
        dateDue: fDateDue,
        assignTo: fAssignTo,
        openAssignment: fOpenAssignment
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      },
    ).then(res => {
      // res.data.newLog
      this.props.onAddContactLog();
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  } //createNewContactLog

//
// https://w3bits.com/css-floating-labels/

  render(){
    return(
      <div className="add-log">


        <div className="new-contact-log">
          <form onSubmit={ this.handleSubmit }>

            <div className="two-cols-container">
              <div>
                <label>
                  <strong> Date and time: </strong>
                </label>
                <input type="datetime-local" name="date"
                    onChange={this.handleInputChange}/>
                <br/>
                <br/>
                <label>
                  <strong>Type of interaction: </strong>
                </label>
                <br/>
                <select name="interactionType" defaultValue="" onChange={this.handleInputChange}>
                  <option value="" disabled>Select one</option>
                  <option>email</option>
                  <option>phone</option>
                  <option>live chat</option>
                </select>
                <br/>
                <br/>
                <label>
                  <strong>Reason for interaction: </strong>
                </label>
                <br/>
                <select name="interactionReason" defaultValue="" onChange={this.handleInputChange}>
                  <option value="" disabled>Select one</option>
                  <option>Initial contact (by participant)</option>
                  <option>Follow-up contact to discuss results</option>
                  <option>Follow-up contact to discuss referral</option>
                </select>
                <br/>
                <br/>
                <label>
                  <strong>Interaction duration (min): </strong>
                </label>
                  <input type="number" min="0" name="interactionDuration" onChange={this.handleInputChange}/>
                <br/>
                <br/>
              </div>

              <div>
                <label>
                  <strong> Actions taken: </strong>
                </label>
                <br/>
                <select multiple name="actionsTaken" defaultValue={[]} onChange={this.handleMultipleInputChange}>
                  <option value="" disabled>Select all actions taken</option>
                  <option value='AT1'>Discussed research results</option>
                  <option value='AT2'> Discussed family implications</option>
                  <option value='AT3'>Discussed referral options</option>
                  <option value='AT4'>Referred patient</option>
                  <option value='AT5'>Followed-up on referral</option>
                  <option value='AT6'>Discussed ROCARR</option>
                </select>
                <br/>
                <br/>
                <label>
                  <strong>Documents sent via: </strong>
                </label>
                <br/>
                <select name="documentsSentVia" defaultValue="" onChange={this.handleInputChange}>
                  <option value="" disabled>Select one</option>
                  <option>none sent</option>
                  <option>email</option>
                  <option>mail</option>
                  <option>fax</option>
                </select>
                <br/>
                <br/>
                <label>
                  <strong>Documents sent: </strong>
                </label>
                <br/>
                  <select multiple name="documentsSent" defaultValue={[]} onChange={this.handleMultipleInputChange}>
                    <option value="" disabled>Select all documents sent</option>
                    <option value='D1'>About ROCARR</option>
                    <option value='D2'>Types of research and testing </option>
                    <option value='D3'>Risks and benegits of genome research</option>
                    <option value='D4'>Privacy, security and data sharing</option>
                    <option value='D5'>Implications for you and your family</option>
                    <option value='D6'>Interpreting results</option>
                  </select>
                <br/>
                </div>
              </div>
              <br/>
          <label>
            <strong>Notes: </strong>
          </label>
          <input type="text"
          name="notes"
          style={{height:5+'em', width: 100+'%'}}
          onChange={this.handleInputChange}/>
          <br/>
          <br/>
          <label>
            <strong>Follow up required: </strong>
          </label>
          <input type="checkbox" name="followUpRequired" onChange={this.handleInputChange}/>
          <br/>
          <br/>

          {
          this.state.followUpRequired
          ?
          <div>
            <label>
              <strong>Follow up actions required: </strong>
            </label>
            <br/>
            <select multiple name="fActionsRequired" defaultValue={[]} onChange={this.handleMultipleInputChange}>
              <option value="" disabled>Select all follow-up actions required</option>
              <option value='AR1'>Referral</option>
              <option value='AR2'>Follow-up call</option>
            </select>
            <br/>
            <br/>
            <label>
              <strong>Follow-up description: </strong>
            </label>
            <input type="text" name="fDescription" style={{height:5+'em', width: 100+'%'}} onChange={this.handleInputChange} />
            <br/>
            <br/>
            <label> <strong>Follow up due: </strong>
              <input type="datetime-local" name="fDateDue"
                onChange={this.handleInputChange}/>
            </label>

            <br/>
            <br/>
            <label>
              <strong>Assign to all Genetic Counsellors: </strong>
            </label>
            <input type="checkbox" name="fOpenAssignment" onChange={this.handleInputChange}/>
            <br/>
            <br/>
            { this.state.fOpenAssignment
              ?
              null
              :
              <div>
                <label>
                  <strong>Assign follow-up to: </strong>
                </label>
                <select name="fAssignTo" defaultValue="" onChange={this.handleInputChange}>
                  <option value="" disabled>Select one</option>
                  <option value="jane@ga.co">Jane</option>
                  <option value="ruby@ga.co">Ruby</option>
                </select>
              </div>
            }
          </div>


          : null
          }

          <br/>
          <br/>
          <input className="btn search add" type="submit" value="SUBMIT"/>
          </form>
        </div>
      </div>
    )
  }

} // end of AddContactLog


export default AddContactLog;
