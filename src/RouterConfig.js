import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, Form, FormControl, Grid, Row, Col, Button } from 'react-bootstrap'
import { Link, Switch, Redirect, Route, BrowserRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // temporary, we can create our css later
import AppointmentHome from './Appointment/AppointmentHome';
import ServiceHome from './Service/ServiceHome';
import VIPHome from './VIP/VIPHome';
import VIPHomebyAdmin from './VIP/Admin/VIPHomebyAdmin';
import VIPManage from './VIP/Admin/ManageOffer';
import CreateOffer from './VIP/Admin/CreateOffer';
import EditOffer from './VIP/Admin/EditOffer';
import RequestHome from './Request/RequestHome';
import CreateRequest from './Request/CreateRequest';
import CustomerHome from './Customer/CustomerHome'
import CustomerProfile from './Customer/CustomerProfile';
import CustomerEdit from './Customer/CustomerProfileEdit';
import ViewRequest from './Request/ViewRequest';
import RequestHomeAdmin from './Request/Admin/RequestHomebyAdmin';
import AnswerRequest from './Request/Admin/AnswerRequest';
import EditRequest from './Request/EditRequest';
import ViewFAQ from './Request/FAQ/ViewAllFAQbyGeneral';
import ViewFAQAdmin from './Request/Admin/ViewAllFAQbyAdmin';
import CreateFAQ from './Request/Admin/CreateFAQ';
import EditFAQ from './Request/Admin/EditFAQ';
import Login from './Register/login';
import SignUp from './Register/signUp';
import CreateAppointment from './Appointment/CreateAppointment';
import Appointments from './Appointment/Appointments';
import Appointment from './Appointment/Appointment';
import EditAppointment from './Appointment/EditAppointment';
import AppointmentsAdmin from './Appointment/Admin/AppointmentsAdmin';
import AppointmentAdmin from './Appointment/Admin/AppointmentAdmin'
import EditAppointmentAdmin from './Appointment/Admin/EditAppointmentAdmin';
import CreateAppointmentAdmin from './Appointment/Admin/CreateAppointmentAdmin';
import LeaveMessageToAppointment from './Appointment/Admin/LeaveMessageToAppointment';
import PageNotFound from './PageNotFound';


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
              {/* Appointment URL */}
              <Route exact path='/Appointment' render={() => <AppointmentHome />} />
              <Route exact path='/Appointment/Appointments' render={() => <Appointments />} />
              <Route exact path='/Appointment/Create' render={() => <CreateAppointment />} />
              <Route exact path='/Appointment/Appointment' render={() => <Appointment />} />
              <Route exact path='/Appointment/Edit' render={() => <EditAppointment />} />
              
              {/* Appointment Admin URL */}
              <Route exact path='/Appointment/Admin/Appointments' render={() => <AppointmentsAdmin />} />
              <Route exact path='/Appointment/Admin/Appointment' render={() => <AppointmentAdmin />} />
              <Route exact path='/Appointment/Admin/Edit' render={() => <EditAppointmentAdmin />} />
              <Route exact path='/Appointment/Admin/Create' render={() => <CreateAppointmentAdmin />} />
              <Route exact path='/Appointment/Admin/Message' render={() => <LeaveMessageToAppointment />} />

              {/* Service URL */}
              <Route exact path='/Service' render={() => <ServiceHome />} />

              {/* VIP URL */}
              <Route exact path='/VIP/' render={() => <VIPHome />} />
              <Route exact path='/VIP/Admin' render={() => <VIPHomebyAdmin />} />
              <Route exact path='/VIP/Admin/Manage' render={() => <VIPManage />} />
              <Route exact path='/VIP/Admin/Manage/Create' render={() => <CreateOffer />} />
              <Route exact path='/VIP/Admin/Manage/Edit' render={() => <EditOffer />} />
              
              {/* Request URL */}
              <Route exact path='/Request' render={() => <RequestHome />} />
              <Route exact path='/Request/Create' render={() => <CreateRequest />} />
              <Route exact path='/Request/Detail' render={() => <ViewRequest />} />
              <Route exact path='/Request/Edit' render={() => <EditRequest />} />
              <Route exact path='/Request/FAQ' render={() => <ViewFAQ />} />

              {/* Request Admin URL*/}
              <Route exact path='/Request/Admin' render={() => <RequestHomeAdmin />} />
              <Route exact path='/Request/Admin/Answer' render={() => <AnswerRequest />} />
              <Route exact path='/Request/Admin/FAQ' render={() => <ViewFAQAdmin />} />
              <Route exact path='/Request/Admin/FAQ/Create' render={() => <CreateFAQ />} />
              <Route exact path='/Request/Admin/FAQ/Edit' render={() => <EditFAQ />} />
              

              {/* Customer URL */}
              <Route exact path='/Customer' render={() => <CustomerHome />} />
              <Route exact path='/Customer/Profile' render={() => <CustomerProfile />} />
              <Route exact path='/Customer/Edit' render={() => <CustomerEdit />} />
              
              
              {/* Register URL */}
              <Route exact path='/Register/Login' render={() => <Login />} />
              <Route exact path='/Register/SignUp' render={() => <SignUp />} />
              
              {/* Page Not Found */}
              <Route render={() => <PageNotFound />} />
            </Switch>
          </BrowserRouter>
        );
    }
}

export default RouterConfig;