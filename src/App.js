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
  }

  componentDidMount(){
    fetch('http://localhost:3001/api')
    .then(res=>res.json())
    .then(data=>this.setState({backServer:data.backServer}));
  }

  render(){
    return(
      <div className="App">
        <Home />
        <Footer />
      </div>
    );
    
    
  }
}

export default App;
