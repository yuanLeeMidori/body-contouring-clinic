import React, { Component } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            password: null,
            firstName: null,
            lastName: null,
            email: null,
            contactNumber: null,
          errors: {
            id: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            contactNumber: '',          
          }
        };
      }

      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
      
        switch (name) {
            case 'id': 
            errors.id = 
              value.length <= 25
                ? 'ID must be less than 25 characters!'
                : '';
            break;
            case 'password': 
            errors.password = 
              value.length <= 45
                ? 'Password must be less than 45 characters!'
                : '';
            break;
            case 'firstName': 
            errors.firstName = 
              value.length <= 45
                ? 'First Name must be less than 45 characters!'
                : '';
            break;
            case 'lastName': 
            errors.lastName = 
              value.length <= 45
                ? 'Full Name must be less than 45 characters!'
                : '';
            break;
            case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid';
            break;
            case 'contactNumber': 
            errors.contactNumber = 
              value.pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                ? 'Contact number must be 10 digit number with '-'!'
                : '';
            break;

          default:
            break;
        }
      
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
      }

    render() {
        return (
            <form>
            <h3>Login Form</h3>

            <div className="form-group">
                <label>ID</label>
                <input type="text" className="form-control" placeholder="ID" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" />
            </div>

            <div className="form-group">
                <label>Contact Number</label>
                <input type="tel" className="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
    );

    
}
}

export default SignUp;