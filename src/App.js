import React from 'react';
import { Link, Switch, Redirect, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'  // temporary, we can create our css later
import AppointmentHome from './Appointment/AppointmentHome'
import Appointments from './Appointment/Appointments';
import CreateAppointment from './Appointment/CreateAppointment';
import Appointment from './Appointment/Appointment';
import logo from './brand-logo.png';

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
              <a class="nav-link" href="/services">Service and Prices</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Appointment">Appointment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Request">Request</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Profile">Profile</a>
            </li>
          </ul>
        </nav>
        <br />
        <img src={logo} alt="logo" />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() =>
              <header className="App-basic">
                  <p>
                    Body Contouring Clinic <br/>
                    React : true <br/>
                    {`Express : ${this.state.backServer}`}
                  </p>
              </header>} />
            <Route exact path='/Appointment' render={() =>
              <AppointmentHome />} />
            <Route exact path='/Appointment/Appointments' render={() =>
              <Appointments />} />
            <Route exact path='/Appointment/Create' render={() =>
              <CreateAppointment />} />
            <Route exact path='/Appointment/Appointment' render={() =>
              <Appointment />} />
          </Switch>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;
