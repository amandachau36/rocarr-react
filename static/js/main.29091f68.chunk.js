(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t){},114:function(e,t,a){"use strict";a.r(t);var n=a(55),l=a.n(n);a(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(0),o=a.n(r),c=a(7),i=a(13),s=a(1),m=a(2),u=a(4),p=a(3),d=a(5),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"component"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Return of Clinically Actionable Research Results"),o.a.createElement("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam")),o.a.createElement("div",{className:"homepage"},o.a.createElement("div",{className:"threecol"},o.a.createElement("img",{alt:"researcher",src:"/rocarr-react/images/researcher.jpg"}),o.a.createElement("div",{className:"threecol-description"},o.a.createElement("p",null,o.a.createElement("strong",null,"Researchers")),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),o.a.createElement("p",{className:"smaller-font"},"Learn more"))),o.a.createElement("div",{className:"threecol"},o.a.createElement("img",{alt:"participant",src:"/rocarr-react/images/participant.jpg"}),o.a.createElement("div",{className:"threecol-description"},o.a.createElement("p",null,o.a.createElement("strong",null,"Research Participants")),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),o.a.createElement("p",{className:"smaller-font"},"Learn more"))),o.a.createElement("div",{className:"threecol"},o.a.createElement(c.b,{to:"/login"},o.a.createElement("img",{alt:"staff",src:"/rocarr-react/images/counselling.jpg"}),o.a.createElement("div",{className:"threecol-description"},o.a.createElement("p",null,o.a.createElement("strong",null,"ROCARR Staff")),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),o.a.createElement("p",{className:"smaller-font"},"Learn more"))))))}}]),t}(r.Component),h=a(14),g=a(10),f=a.n(g),b="https://rocarr-backend.herokuapp.com",v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(h.a)({},l,n))},a.handleMultipleInputChange=function(e){for(var t=e.target.options,n=e.target.name,l=[],r=0,o=t.length;r<o;r++)t[r].selected&&l.push(t[r].value);a.setState(Object(h.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault(),a.createNewContactLog()},a.createNewContactLog=function(e){var t=a.state,n=t.date,l=t.interactionType,r=t.interactionReason,o=t.interactionDuration,c=t.actionsTaken,i=t.documentsSentVia,s=t.documentsSent,m=t.notes,u=t.followUpRequired,p=t.fActionsRequired,d=t.fDescription,E=t.fDateDue,h=t.fAssignTo,g=t.fOpenAssignment;console.log({notes:m}),f.a.post("".concat(b,"/participant/").concat(a.props.studyId,"/contact_log"),{date:n,interactionType:l,interactionReason:r,interactionDuration:o,actionsTaken:c,documentsSentVia:i,documentsSent:s,notes:m,followUpRequired:u,actionsRequired:p,description:d,dateDue:E,assignTo:h,openAssignment:g},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(e){a.props.onAddContactLog(),console.log(e)}).catch(function(e){console.log(e)})},a.state={date:null,interactionType:null,interactionReason:null,interactionDuration:null,actionsTaken:null,documentsSentVia:null,documentsSent:null,notes:null,followUpRequired:!1,fActionsRequired:null,fDescription:null,fDateDue:null,fAssignTo:null,fOpenAssignment:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"add-log"},o.a.createElement("div",{className:"new-contact-log"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"two-cols-container"},o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null," Date and time: ")),o.a.createElement("input",{type:"datetime-local",name:"date",onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("strong",null,"Type of interaction: ")),o.a.createElement("br",null),o.a.createElement("select",{name:"interactionType",defaultValue:"",onChange:this.handleInputChange},o.a.createElement("option",{value:"",disabled:!0},"Select one"),o.a.createElement("option",null,"email"),o.a.createElement("option",null,"phone"),o.a.createElement("option",null,"live chat")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("strong",null,"Reason for interaction: ")),o.a.createElement("br",null),o.a.createElement("select",{name:"interactionReason",defaultValue:"",onChange:this.handleInputChange},o.a.createElement("option",{value:"",disabled:!0},"Select one"),o.a.createElement("option",null,"Initial contact (by participant)"),o.a.createElement("option",null,"Follow-up contact to discuss results"),o.a.createElement("option",null,"Follow-up contact to discuss referral")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("strong",null,"Interaction duration (min): ")),o.a.createElement("input",{type:"number",min:"0",name:"interactionDuration",onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null," Actions taken: ")),o.a.createElement("br",null),o.a.createElement("select",{multiple:!0,name:"actionsTaken",defaultValue:[],onChange:this.handleMultipleInputChange},o.a.createElement("option",{value:"",disabled:!0},"Select all actions taken"),o.a.createElement("option",{value:"AT1"},"Discussed research results"),o.a.createElement("option",{value:"AT2"}," Discussed family implications"),o.a.createElement("option",{value:"AT3"},"Discussed referral options"),o.a.createElement("option",{value:"AT4"},"Referred patient"),o.a.createElement("option",{value:"AT5"},"Followed-up on referral"),o.a.createElement("option",{value:"AT6"},"Discussed ROCARR")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("strong",null,"Documents sent via: ")),o.a.createElement("br",null),o.a.createElement("select",{name:"documentsSentVia",defaultValue:"",onChange:this.handleInputChange},o.a.createElement("option",{value:"",disabled:!0},"Select one"),o.a.createElement("option",null,"none sent"),o.a.createElement("option",null,"email"),o.a.createElement("option",null,"mail"),o.a.createElement("option",null,"fax")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("strong",null,"Documents sent: ")),o.a.createElement("br",null),o.a.createElement("select",{multiple:!0,name:"documentsSent",defaultValue:[],onChange:this.handleMultipleInputChange},o.a.createElement("option",{value:"",disabled:!0},"Select all documents sent"),o.a.createElement("option",{value:"D1"},"About ROCARR"),o.a.createElement("option",{value:"D2"},"Types of research and testing "),o.a.createElement("option",{value:"D3"},"Risks and benegits of genome research"),o.a.createElement("option",{value:"D4"},"Privacy, security and data sharing"),o.a.createElement("option",{value:"D5"},"Implications for you and your family"),o.a.createElement("option",{value:"D6"},"Interpreting results")),o.a.createElement("br",null))),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("strong",null,"Notes: ")),o.a.createElement("input",{type:"text",name:"notes",style:{height:"5em",width:"100%"},onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("strong",null,"Follow up required: ")),o.a.createElement("input",{type:"checkbox",name:"followUpRequired",onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("br",null),this.state.followUpRequired?o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Follow up actions required: ")),o.a.createElement("br",null),o.a.createElement("select",{multiple:!0,name:"fActionsRequired",defaultValue:[],onChange:this.handleMultipleInputChange},o.a.createElement("option",{value:"",disabled:!0},"Select all follow-up actions required"),o.a.createElement("option",{value:"AR1"},"Referral"),o.a.createElement("option",{value:"AR2"},"Follow-up call")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("strong",null,"Follow-up description: ")),o.a.createElement("input",{type:"text",name:"fDescription",style:{height:"5em",width:"100%"},onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null," ",o.a.createElement("strong",null,"Follow up due: "),o.a.createElement("input",{type:"datetime-local",name:"fDateDue",onChange:this.handleInputChange})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("strong",null,"Assign to all Genetic Counsellors: ")),o.a.createElement("input",{type:"checkbox",name:"fOpenAssignment",onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("br",null),this.state.fOpenAssignment?null:o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,"Assign follow-up to: ")),o.a.createElement("select",{name:"fAssignTo",defaultValue:"",onChange:this.handleInputChange},o.a.createElement("option",{value:"",disabled:!0},"Select one"),o.a.createElement("option",{value:"jane@ga.co"},"Jane"),o.a.createElement("option",{value:"ruby@ga.co"},"Ruby")))):null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{className:"btn search add",type:"submit",value:"SUBMIT"}))))}}]),t}(r.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleInputChange=function(t){e.setState({errorMessage:""});var a=t.target.value,n=t.target.name;e.setState(Object(h.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state.email),console.log(e.state.password),console.log("POST to /login"),f.a.post("".concat(b,"/login"),{email:e.state.email,password:e.state.password}).then(function(t){console.log(t),localStorage.setItem("email",t.data.email),localStorage.setItem("token",t.data.token),e.props.history.push("/dashboard")}).catch(function(t){console.log(t.response),400===t.response.status||401===t.response.status?e.setState({errorMessage:"Invalid email or password"}):console.warn("OTHER ERROR",t)})},e.state={email:"jane@gc.co",password:"",errorMessage:"",jwt:""},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("token")&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return o.a.createElement("div",{className:"log-in-background"},o.a.createElement("div",{className:"login"},o.a.createElement("div",{style:{color:"red"}},this.state.errorMessage),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"log-in-form",type:"text",name:"email",placeholder:"Email",onChange:this.handleInputChange,value:this.state.email}),o.a.createElement("br",null),o.a.createElement("input",{className:"log-in-form",name:"password",placeholder:"Password",type:"password",onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"SIGN IN",className:"small-btn submit"}))))}}]),t}(r.Component),w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).getFollowUp=function(){f.a.get("".concat(b,"/participants/followup"),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(t){console.log("success from axios"),console.log("res from axios",t.data),e.setState({followUpArray:t.data})}).catch(function(t){console.log(t),e.setState({errorMessage:t.message}),e.props.history.push("/login")})},e.state={errorMessage:"",followUpArray:[]},e.actionsRequiredLookup={AR1:"Referral",AR2:"Follow-up call"},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getFollowUp()}},{key:"render",value:function(){var e=this,t=[],a=localStorage.getItem("email");return this.state.followUpArray.forEach(function(n){n.contactLog.forEach(function(l){if(l.followUp&&(l.followUp.openAssignment||l.followUp.assignTo.includes(a))){var r=new Date(l.followUp.dateDue).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"2-digit"});t.push(o.a.createElement(c.b,{to:"/participant/".concat(n.id),key:n._id},o.a.createElement("div",{className:"threeColGrid gridRow"},o.a.createElement("div",{className:"followName"},n.name),o.a.createElement("div",{className:"followActions"},l.followUp.actionsRequired.map(function(t){return o.a.createElement("div",{key:t},e.actionsRequiredLookup[t])})),o.a.createElement("div",{className:"followDate"},r))))}})}),o.a.createElement("div",{className:"component dashboard"},o.a.createElement("h1",null,"Dashboard"),o.a.createElement("h3",null,"My Follow-up List"),o.a.createElement("div",null,this.state.errorMessage),o.a.createElement("div",{className:"threeColGrid tableHeader"},o.a.createElement("div",null,"Name"),o.a.createElement("div",null,"Follow-up Actions Required"),o.a.createElement("div",null,"Date Due")),t)}}]),t}(r.Component),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleInputChange=function(t){e.setState({errorMessage:""});var a=t.target.name,n=t.target.value;e.setState(Object(h.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),console.log("hello create user"),e.createUser()},e.createUser=function(){var t=e.state,a=t.name,n=t.email,l=t.password,r=t.role;console.log({email:n}),f.a.post("".concat(b,"/user"),{name:a,email:n,password:l,role:r}).then(function(t){console.log(t),e.setState({errorMessage:t.data.error})}).catch(function(e){console.log(e)})},e.state={name:"",email:"",password:"",role:"",errorMessage:""},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"log-in-background"},o.a.createElement("div",{className:"login"},o.a.createElement("div",{style:{color:"red"}},this.state.errorMessage),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"log-in-form",type:"text",name:"name",placeholder:"Full Name",onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("input",{className:"log-in-form",type:"text",name:"email",placeholder:"Email",onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("input",{className:"log-in-form",type:"password",name:"password",placeholder:"Password",onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("div",{className:"role"},o.a.createElement("label",null," What is your role? \xa0",o.a.createElement("select",{name:"role",defaultValue:"",onChange:this.handleInputChange},o.a.createElement("option",{value:"",disabled:!0},"Select one"),o.a.createElement("option",null,"Genetic Counsellor"),o.a.createElement("option",null,"ROCARR Evaluator"),o.a.createElement("option",null,"Researcher")))),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"REGISTER",className:"small-btn submit"}))))}}]),t}(r.Component),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).logOut=function(){console.log("hello, logging out"),localStorage.removeItem("token"),localStorage.removeItem("email"),a.props.history.push("/")},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"nav-bar"},o.a.createElement("div",{className:"nav-left"},o.a.createElement("a",{href:"https://www.garvan.org.au/"},o.a.createElement("img",{alt:"garvan-logo",className:"logo",src:"/rocarr-react/images/garvan.png"})),o.a.createElement("div",{className:"rocarr-url"},o.a.createElement(c.b,{to:"/"},"ROCARR"))),o.a.createElement("div",{className:"nav-right"},localStorage.getItem("token")?o.a.createElement("div",{className:"nav-btns"},o.a.createElement("div",{className:"small-btn",onClick:this.logOut},"SIGN OUT")):o.a.createElement("div",{className:"nav-btns"},o.a.createElement("div",{className:"small-btn"},o.a.createElement(c.b,{to:"/create_account"},"REGISTER")),o.a.createElement("div",{className:"small-btn"},o.a.createElement(c.b,{to:"/login"},"SIGN IN"))))))}}]),t}(r.Component),R=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).getParticipantInfo=function(){f.a.get("".concat(b,"/participant/").concat(e.props.match.params.id),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(t){console.log("success from axios"),console.log("res from axios",t.data),e.setState({participant:t.data})}).catch(function(t){console.log(t),e.setState({errorMessage:t.message}),e.props.history.push("/login")})},e.openContactLogForm=function(){e.setState(function(e){return{childVisible:!e.childVisible}})},e.updateContactLog=function(){e.getParticipantInfo(),e.openContactLogForm()},e.state={participant:{},errorMessage:"",childVisible:!1},e.actionsTakenLookup={AT1:"Discussed research results",AT2:"Discussed family implications",AT3:"Discussed referral options",AT4:"Referred patient",AT5:"Followed-up on referral",AT6:"Discussed ROCARR"},e.documentsSentLookup={D1:"About ROCARR",D2:"Types of research and testing",D3:"Risks and benegits of genome research",D4:"Privacy, security and data sharing",D5:"Implications for you and your family",D6:"Interpreting results"},e.actionsRequiredLookup={AR1:"Referral",AR2:"Follow-up call"},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getParticipantInfo()}},{key:"render",value:function(){var e=this,t=this.state.participant,a=t.name,n=t.email,l=t.contactLog,r=t.id,c=t.homePhone,i=t.researchStudy;return"_id"in this.state.participant?(console.log("LOG",l),l.forEach(function(e,t){e.followUp?console.log(t,e):console.log("NO FOLLOWUP",e)}),o.a.createElement("div",{className:"component"},o.a.createElement("div",null,this.state.errorMessage),o.a.createElement("h4",{className:"participant-headers"},"PARTICIPANT PROFILE"),o.a.createElement("div",{className:"profile"},o.a.createElement("p",null,o.a.createElement("strong",null,"Study ID: "),r),o.a.createElement("p",null,o.a.createElement("strong",null,"Name: "),a),o.a.createElement("p",null,o.a.createElement("strong",null,"Email: "),n),o.a.createElement("p",null,o.a.createElement("strong",null,"Phone: "),c),o.a.createElement("p",null,o.a.createElement("strong",null,"Research Study: "),i)),o.a.createElement("br",null),o.a.createElement("h4",{className:"participant-headers"},"FOLLOW-UP REQUIRED"),o.a.createElement("div",{className:"contact-log tableHeader"},o.a.createElement("div",null,"Date Due"),o.a.createElement("div",null,"Action Required"),o.a.createElement("div",null,"Description"),o.a.createElement("div",null,"Assigned to")),l.map(function(t,a){return t.followUp?o.a.createElement("div",{className:"contact-log",key:a},o.a.createElement("div",null,new Date(t.followUp.dateDue).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"2-digit"})),o.a.createElement("div",null,t.followUp.actionsRequired.map(function(t){return o.a.createElement("p",{key:t},e.actionsRequiredLookup[t])})),o.a.createElement("div",null,t.followUp.description),o.a.createElement("div",null,t.followUp.openAssignment?t.followUp.openAssignment:t.followUp.assignTo.map(function(e){return o.a.createElement("p",{key:e},e)}))):o.a.createElement("span",{key:"keyRequired"})}),o.a.createElement("br",null),o.a.createElement("div",{className:"log"},o.a.createElement("h4",{className:"participant-headers"},"CONTACT LOG"),o.a.createElement("button",{className:"btn search",onClick:this.openContactLogForm},"ADD LOG")),o.a.createElement("div",null,this.state.childVisible?o.a.createElement(v,{studyId:this.state.participant.id,onAddContactLog:this.updateContactLog}):null),o.a.createElement("div",{className:"contact-log tableHeader"},o.a.createElement("div",null,"Date"),o.a.createElement("div",null,"Reason for interaction"),o.a.createElement("div",null,"Actions Taken"),o.a.createElement("div",null,"Signed by")),o.a.createElement("div",null,l.map(function(t,a){return o.a.createElement("div",{key:a,className:"contact-log"},o.a.createElement("div",null,new Date(t.date).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"2-digit"})),o.a.createElement("div",null,t.interactionReason),o.a.createElement("div",null,t.actionsTaken.map(function(t){return o.a.createElement("p",{key:t},e.actionsTakenLookup[t])})),o.a.createElement("div",null,t.createdBy.name))})))):o.a.createElement("p",null,"Loading...")}}]),t}(r.Component),S=a(58),A=a.n(S),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).startChat=function(){console.log("starting socket connection...."),a.socket=A()("localhost:3333")},a.socket=null,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,localStorage.getItem("token")?o.a.createElement("span",null):o.a.createElement("div",{className:"contact-us"},o.a.createElement("div",{className:"contact-us-left"},o.a.createElement("h3",null,"Speak with a Genetic Counsellor now ",o.a.createElement("br",null)," Call 1-800-222-7777")),o.a.createElement("div",{className:"contact-us-right"},o.a.createElement("button",{className:"chat btn",onClick:this.startChat},"LIVE CHAT"),o.a.createElement("button",{className:"email btn"},"EMAIL US"))))}}]),t}(r.Component),I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleInputChange=function(t){e.setState({errorMessage:""});var a=t.target.value;e.setState({query:a})},e.searchParticipants=function(){f.a.get("".concat(b,"/participants/search/").concat(e.state.query),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(t){console.log("success from axios"),console.log("res from axios",t.data),e.setState({participants:t.data})}).catch(function(t){console.log(t),e.setState({errorMessage:t.message})})},e.state={query:"",participants:[],errorMessage:""},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("token")||this.props.history.push("/login")}},{key:"render",value:function(){return o.a.createElement("div",{className:"component"},o.a.createElement("form",{onSubmit:this.searchParticipants},o.a.createElement("label",null,o.a.createElement("h2",null," Find Participant "),o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"Enter first or last name",className:"search-input",onChange:this.handleInputChange}),o.a.createElement("input",{type:"submit",value:"Search",className:"search btn"}))),o.a.createElement("br",null),o.a.createElement("br",null),this.state.participants.length>0?o.a.createElement("div",{className:"searchResults"},o.a.createElement("div",{className:"five-col tableHeader"},o.a.createElement("div",null,"Study ID"),o.a.createElement("div",null,"Name"),o.a.createElement("div",null,"Email"),o.a.createElement("div",null,"Phone"),o.a.createElement("div",null,"Study")),this.state.participants.map(function(e){return o.a.createElement("div",{className:"five-col"},o.a.createElement(c.b,{to:"/participant/".concat(e.id)},o.a.createElement("div",null,e.id)),o.a.createElement("div",null,e.name),o.a.createElement("div",null,e.email),o.a.createElement("div",null,e.homePhone),o.a.createElement("div",null,e.researchStudy))})):null)}}]),t}(r.Component);var k=function(){return o.a.createElement("div",null,localStorage.getItem("token")?o.a.createElement("div",{className:"container"},o.a.createElement("input",{"data-function":"swipe",id:"swipe",type:"checkbox"}),o.a.createElement("label",{"data-function":"swipe",for:"swipe"},o.a.createElement("img",{alt:"close-icon",src:"/rocarr-react/images/icons-close.png"})),o.a.createElement("label",{"data-function":"swipe",for:"swipe"},o.a.createElement("img",{alt:"open-icon",src:"/rocarr-react/images/icons-menu.png"})),o.a.createElement("div",{className:"sidebar"},o.a.createElement("nav",{className:"menu"},o.a.createElement("li",null,o.a.createElement(c.b,{to:"/dashboard"},"MY DASHBOARD")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/search"},"SEARCH PARTICIPANTS ")),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"ALL PARTICIPANTS")),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"ADD PARTICIPANTS"))))):o.a.createElement("span",null))},D=o.a.createElement(c.a,{basename:"/"},o.a.createElement("div",null,o.a.createElement(i.a,{path:"/",component:N}),o.a.createElement(i.a,{path:"/",component:k}),o.a.createElement(i.a,{exact:!0,path:"/",component:E}),o.a.createElement(i.a,{exact:!0,path:"/participant/:id/contact_log",component:v}),o.a.createElement(i.a,{exact:!0,path:"/login",component:y}),o.a.createElement(i.a,{exact:!0,path:"/dashboard",component:w}),o.a.createElement(i.a,{exact:!0,path:"/create_account",component:C}),o.a.createElement(i.a,{exact:!0,path:"/participant/:id",component:R}),o.a.createElement(i.a,{exact:!0,path:"/search",component:I}),o.a.createElement(i.a,{path:"/",component:O})));l.a.render(D,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,a){e.exports=a(114)},64:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.29091f68.chunk.js.map