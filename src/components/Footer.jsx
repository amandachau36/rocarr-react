import React, {Component} from 'react';
// import axios from 'axios';
import io from 'socket.io-client';

class Footer extends Component {
  constructor(props){
    super(props);

    // this.state = {
    //   socket: null
    // };

    this.socket = null;

  } // constructor

  startChat = () => {


    console.log('starting socket connection....');

    this.socket = io(`localhost:3333`);

    // listen for certain websockets messages:
   // this.socket.on('hello',data => {
   //   console.log('got  message', data)
   //
  }
  componentDidUpdate(oldProps){

    console.log('componentDidUpdate');

    // only try to start socket connection after successful login
    if( oldProps.location.pathname !== this.props.location.pathname ){

      console.log('route changed!');

      const token = localStorage.getItem('token');
      if( token ){

        let tokenParam = token ? `?token=${token}` : '';

        console.log('starting socket connection....');

        this.socket = io(`localhost:3333${tokenParam}`);

        // listen for certain websockets messages:
       this.socket.on('ping',data => {
         console.log('got a ping message', data)
       });

       this.socket.on('participant-joined', data => {
         console.log('Participant joined!', data)
       });

     } // logged in

   } // route has changed

 } // componentDidMount()



  render(){

    return(




        <div>
          {
            localStorage.getItem('token')
            ?
            <span></span>
            :
            <div className="contact-us">
              <div className="contact-us-left">
                <p>Speak with a Genetic Counsellor now <br/> Call 1-800-222-7777</p>
              </div>
              <div className="contact-us-right">
                <button className="chat" onClick={this.startChat}>Live Chat</button>
                <button>Email Us</button>
              </div>
           </div>

          }

        </div>







    )
  } //render

} // footer

export default Footer;
