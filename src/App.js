import React from 'react';
import logo from './logo.svg';
import './App.css';

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
            <header className="App-header">
              <p>
                Body Contouring Clinic <br/>
                React : true <br/>
                {`Express : ${this.state.backServer}`}
              </p>
            </header>
          </div>
    );
  }
}

export default App;
