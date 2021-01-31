import React, { Component } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import imgName from './images/verified_user.png';

class SignupSuccess extends Component {
    render() {
        return (
          <div>
          <div class="container">
            <h1>Thanks for Signing Up!</h1>
            <br></br>
            <img src = {imgName}
               width='230'
               height='230' 
               style={{'margin-left':'10px'}}         
             />

            <p> Email verified.
                You can now sign in with your new account.
            </p>
            </div>

            <button type="button" class="btn btn-outline-dark" style={{'margin-left':'10px'}}>
              <a class="login" href="./Login">Go to Log In! ❯</a>
              </button>  
              <br></br>             
              <br></br>  
          </div>
        );
    }
} 
export default SignupSuccess;