import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'  // temporary, we can create our css later
import logo from '../resources/brand-logo.png';
import underBar from '../resources/underBar.png'
import RouterConfig from '../RouterConfig';


class Home extends React.Component{

  constructor(props){
      super(props);
      this.state={
        count : 0
      }

      this.increaseButton = this.increaseButton.bind(this)
      this.decreaseButton = this.decreaseButton.bind(this)
  }

  increaseButton() {
    this.setState((preState) => {
        return {
          count : preState.count + 1
          };
       });
  }
  decreaseButton() {
    this.setState((preState) => {
        return {
          count : preState.count - 1
          };
       });
  }

  render(){
    if(this.state.count <= 0){
        return(
            <div className="App">
              <nav className="nav-back navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" onClick={this.decreaseButton}>BodyContouringClinic@gmail.com</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.increaseButton}>(416) 966 - 0006</a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Service">Service and Prices</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/VIP">VIP</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Appointment">Appointment</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Request">Request</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Customer">Profile</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Register/Login">Log out</a>
                    </li>
                </ul>
              </nav>
              <br />
              <img src={logo} alt="logo"/><br/><br/>
              <img src={underBar} alt="bar" /><br/><br/>
              <br/>
              <RouterConfig />
            </div>
          );
    } else if(this.state.count == 1){
        return(
            <div className="App">
              <nav className="nav-back navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" onClick={this.decreaseButton}>BodyContouringClinic@gmail.com</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.increaseButton}>(416) 966 - 0006</a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/Register/Login">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Service">Service and Prices</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/VIP/Admin">VIP</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Appointment/Admin/Appointments">Appointment</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Request/Admin">Request</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Customer/Admin">Profile</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Register/Login">Log out</a>
                    </li>
                </ul>
              </nav>
              <br />
              <img src={logo} alt="logo"/><br/><br/>
              <img src={underBar} alt="bar" /><br/><br/>
              <br/>
              <RouterConfig />
            </div>
          );
    } else if(this.state.count == 2){
        return(
            <div className="App">
              <nav className="nav-back navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" onClick={this.decreaseButton}>BodyContouringClinic@gmail.com</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.increaseButton}>(416) 966 - 0006</a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Service">Service and Prices</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Appointment">Appointment</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Request">Request</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Customer">Profile</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Register/Login">Log out</a>
                    </li>
                </ul>
              </nav>
              <br />
              <img src={logo} alt="logo"/><br/><br/>
              <img src={underBar} alt="bar" /><br/><br/>
              <br/>
              <RouterConfig />
            </div>
          );
    } else if(this.state.count >= 3){
        return(
            <div className="App">
              <nav className="nav-back navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" onClick={this.decreaseButton}>BodyContouringClinic@gmail.com</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.increaseButton}>(416) 966 - 0006</a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Service">Service and Prices</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Register/Login">LogIn</a>
                  </li>
                </ul>
              </nav>
              <br />
              <img src={logo} alt="logo"/><br/><br/>
              <img src={underBar} alt="bar" /><br/><br/>
              <br/>
              <RouterConfig />
            </div>
          );
    }
    
    }
    
  }


export default Home;
