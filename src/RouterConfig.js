import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, Form, FormControl, Grid, Row, Col, Button } from 'react-bootstrap'
import { Link, Switch, Redirect, Route, BrowserRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'  // temporary, we can create our css later
import AppointmentHome from './Appointment/AppointmentHome'
import ServiceHome from './Service/ServiceHome'
import RequestHome from './Request/index'
import CreateRequest from './Request/CreateRequest';
import CustomerHome from './Customer/CustomerHome'

class RouterConfig extends React.Component {


    render() {
        return (
            <BrowserRouter>
            <Switch>
              <Route exact path='/' render={() =>
                  <header className="App-basic">
                      <p>
                        Body Contouring Clinic <br/>
                        React : true <br/>
                      </p>
                  </header>} />
              <Route exact path='/Appointment' render={() => <AppointmentHome />} />
              <Route exact path='/Service' render={() => <ServiceHome />} />
              <Route exact path='/Request' render={() => <RequestHome />} />
              <Route exact path='/Request/Create' render={() => <CreateRequest />} />
              <Route exact path='/Customer' render={() => <CustomerHome />} />
            </Switch>
          </BrowserRouter>
        );
    }
}

export default RouterConfig;