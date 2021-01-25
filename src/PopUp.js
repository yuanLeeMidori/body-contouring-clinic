import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class PopUp extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>{this.props.btn1}</button>
          <button onClick={this.props.closePopup}>{this.props.btn2}</button>
          </div>
        </div>
      );
    }
  }

  export default PopUp;