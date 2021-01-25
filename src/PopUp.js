import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap'

class PopUp extends React.Component {
    render() {
      return (
        // <div className='popup'>
        //   <div className='popup_inner'>
        //     <h1>{this.props.text}</h1>
        //   <button onClick={this.props.closePopup}>{this.props.btn1}</button>
        //   <button onClick={this.props.closePopup}>{this.props.btn2}</button>
        //   </div>
        // </div>
        <Modal.Dialog centered>
           <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closePopup}>{this.props.btn1}</Button>
            <Button variant="primary" onClick={this.props.closePopup}>{this.props.btn2}</Button>
          </Modal.Footer> 
        </Modal.Dialog>
      );
    }
  }

  export default PopUp;