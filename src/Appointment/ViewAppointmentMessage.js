import React from 'react';
import '../App.css';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ViewAppointmentMessage extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} centered>
        <Modal.Header>
          <Modal.Title>Message for Appointment {this.props.appointmentId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.text}</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" href="/Appointment/Appointment">
            Back to appointment
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ViewAppointmentMessage.propTypes = {
  show: PropTypes.string,
  appointmentId: PropTypes.number,
  text: PropTypes.string,
};

export default ViewAppointmentMessage;
