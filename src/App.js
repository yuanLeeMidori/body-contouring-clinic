import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'  // temporary, we can create our css later
import Footer from './Footer';
import logo from './resources/brand-logo.png';
import underBar from './resources/underBar.png'
import RouterConfig from './RouterConfig';
import Home from './Home/Home';
import HomeCustomer from './Home/HomeCustomer';
import HomeVIP from './Home/HomeVIP';
import HomeAdmin from './Home/HomeAdmin';


class App extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        backServer:false,
        count : 0
      };

      this.increaseButton = this.increaseButton.bind(this)
      this.decreaseButton = this.decreaseButton.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:3001/api')
    .then(res=>res.json())
    .then(data=>this.setState({backServer:data.backServer}));
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
          <Home />
          <button onClick={this.decreaseButton}>before</button>
          <button onClick={this.increaseButton}>next</button>
          <br/><br/><br/><br/>
          <Footer />
        </div>
      );
    } else if(this.state.count == 1) {
      return(
        <div className="App">
          <HomeAdmin />
          <button onClick={this.decreaseButton}>before</button>
          <button onClick={this.increaseButton}>next</button>
          <br/><br/><br/><br/>
          <Footer />
        </div>
      );
    } else if(this.state.count == 2) {
      return(
        <div className="App">
          <HomeCustomer />
          <button onClick={this.decreaseButton}>before</button>
          <button onClick={this.increaseButton}>next</button>
          <br/><br/><br/><br/>
          <Footer />
        </div>
      );
    } else if(this.state.count >= 3) {
      return(
        <div className="App">
          <HomeVIP />
          <button onClick={this.decreaseButton}>before</button>
          <button onClick={this.increaseButton}>next</button>
          <br/><br/><br/><br/>
          <Footer />
        </div>
      );
    }
    
    
  }
}

export default App;
