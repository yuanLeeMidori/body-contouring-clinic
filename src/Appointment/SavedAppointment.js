import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

class SavedAppointment extends React.Component {

    render() {
        return (
            <Modal show={this.props.show} centered>
            <Modal.Header>
             <Modal.Title>{this.props.text}</Modal.Title>
           </Modal.Header>
 
           <Modal.Footer>
                <Button variant="outline-info" href="/Appointment/Appointment">Back to appointment</Button>
           </Modal.Footer>
         </Modal>
        );
    }
}

export default SavedAppointment