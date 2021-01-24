import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, Form, FormControl, Grid, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'  // temporary, we can create our css later
import Footer from './Footer';
import logo from './resources/brand-logo.png';
import underBar from './resources/underBar.png'
import RouterConfig from './RouterConfig';

class App extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        backServer:false
      };
  }

  componentDidMount(){
    fetch('http://localhost:3001/api')
    .then(res=>res.json())
    .then(data=>this.setState({backServer:data.backServer}));
  }

  render(){
    return(
      <div className="App">
        <nav class="nav-back navbar navbar-expand-lg navbar-light">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link">BodyContouringClinic@gmail.com</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">(416) 966 - 0006</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Service">Service and Prices</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Appointment">Appointment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Request">Request</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Customer">Customer</a>
            </li>
          </ul>
        </nav>
        <br />
        <img src={logo} alt="logo"/><br/>
        <img src={underBar} alt="bar" />
        <RouterConfig />
        <Footer />
      </div>
    );
  }
}

export default App;
