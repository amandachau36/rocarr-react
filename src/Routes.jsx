import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import AddContactLog from './components/AddContactLog';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import CreateUser from './components/CreateUser';
import Nav from './components/Nav';
import Participant from './components/Participant';
import Footer from './components/Footer';
import Search from './components/Search';
import SideNav from './components/SideNav';

const Routes = (
  <Router basename='/'>
    <div>
      <Route path="/" component={ Nav } />
      <Route path="/" component={ SideNav } /> 
      <Route exact path="/" component={ Home } />
      <Route exact path="/participant/:id/contact_log" component={ AddContactLog } />
      <Route exact path="/login" component={ LogIn } />
      <Route exact path="/dashboard" component={ Dashboard} />
      <Route exact path="/create_account" component={ CreateUser } />
      <Route exact path="/participant/:id" component={ Participant } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/" component={ Footer } />
    </div>
  </Router>
)

export default Routes;
