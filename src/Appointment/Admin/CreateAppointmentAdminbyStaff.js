/* eslint-disable react/jsx-key */
import React from 'react';
import '../../App.css';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import moment from 'moment';

class CreateAppointmentAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveModal: false,
      savedBackLink: '/Appointment/Admin',
      button: 'Back To Appointment',
      title: 'Appointment Saved!',
      completed: false,
      appointment: {
        customer: String,
        contactNumber: String,
        specialRequest: String,
        service: String,
        schedule: String,
        confirmation: 'false',
      },
      services: [],
      customers: [],
      filterData: [],
      dates: [],
      technicians: [],
      dateData: [],
      uniqueDates: [],
      dateId: [],
    };
    this.showSave = this.showSave.bind(this);
    this.hideSave = this.hideSave.bind(this);
  }

  handlSubmit(event) {
    console.log(this.state.appointment);
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/create-appointment`, {
      method: 'POST',
      body: JSON.stringify(this.state.appointment),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => this.setState({ completed: true }))
      .catch((err) => console.log(err));
  }

  onCustomerChange(event) {
    this.setState(() => ({
      appointment: {
        ...this.state.appointment,
        customer: event.target.value,
      },
    }));
  }

  onServiceChange(event) {
    this.setState(() => ({
      appointment: {
        ...this.state.appointment,
        service: event.target.value,
      },
    }));
  }

  onContactNumChange(event) {
    this.setState(() => ({
      appointment: {
        ...this.state.appointment,
        contactNumber: event.target.value,
      },
    }));
  }

  onSpecialRequestChange(event) {
    this.setState(() => ({
      appointment: {
        ...this.state.appointment,
        specialRequest: event.target.value,
      },
    }));
  }
  unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  onTechnicianChange(event) {
    fetch(`${process.env.REACT_APP_API_URL}/staffWorkSchedules?staff=${event.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        const unique = (value, index, self) => {
          return self.indexOf(value) === index;
        };
        console.log(data.map((d) => d.date.date).filter(unique));
        this.setState({
          filterData: data,
          dates: data.map((d) => d.date.date).filter(unique),
          // uniqueDates: data.date.date.filter(unique),
        });
      });
  }

  onDateChange(event) {
    // var pureDate = (event.target.value).split("-");
    // var searchDate = pureDate[1] + "/" + pureDate[2] +"/" + pureDate[0];
    var dId;
    console.log(event.target.value);
    fetch(`${process.env.REACT_APP_API_URL}/date?date=${event.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        dId = data
        // this.setState({
        //   dateId: data,
        // });
      });
    fetch(`${process.env.REACT_APP_API_URL}/workSchedule?date=${dId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dateData: data,
        });
      });
  }

  onTimeChange(event) {
    var finalWorkSchedule = {};
    this.state.dateData.forEach(function (data) {
      if (data.time._id == event.target.value) {
        finalWorkSchedule = data;
      }
    });
    this.setState({
      appointment: {
        ...this.state.appointment,
        schedule: finalWorkSchedule,
      },
    });
  }

  onScheduleChange(event) {
    console.log('id: ' + event.target.value);
    this.setState({
      appointment: {
        ...this.state.appointment,
        schedule: event.target.value,
      },
    });
  }

  showSave = () => {
    this.setState({ saveModal: true });
  };

  hideSave = () => {
    this.setState({ saveModal: false });
  };

  getTechnicians() {
    fetch(`${process.env.REACT_APP_API_URL}/staffs`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          technicians: data,
        });
        console.log(this.state.technicians);
      });
  }

  componentDidMount() {
    document.title = 'Create New Appointment | Body Contouring Clinic';

    fetch(`${process.env.REACT_APP_API_URL}/services`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          services: data,
        });
      });

    fetch(`${process.env.REACT_APP_API_URL}/customers`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          customers: data,
        });
      });

    this.getTechnicians();
  }

  render() {
    if (this.state.completed) {
      return (
        <Redirect
          push
          to={{
            pathname: '/Appointment/Admin',
          }}
        />
      );
    }
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Form onSubmit={this.handlSubmit.bind(this)} method="POST">
              <Form.Group as={Row} controlId="customer">
                <Form.Label column sm="4">
                  Customer Name:
                </Form.Label>
                <Col sm="8">
                  <Form.Control inline as="select" onChange={this.onCustomerChange.bind(this)}>
                    <option value="">-- select customer --</option>
                    {this.state.customers.map((result) => (
                      // eslint-disable-next-line react/jsx-key
                      <option value={result._id}>
                        {result.account == null ? '' : result.account.firstName}{' '}
                        {result.account == null ? '' : result.account.lastName}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="service">
                <Form.Label column sm="4">
                  Services:
                </Form.Label>
                <Col sm="8">
                  <Form.Control inline as="select" onChange={this.onServiceChange.bind(this)}>
                    <option value="">-- select service --</option>
                    {this.state.services.map((result) => (
                      // eslint-disable-next-line react/jsx-key
                      <option value={result._id}>{result.name}</option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="schedule">
                <Form.Label column sm="4">
                  Technician:
                </Form.Label>
                <Col sm="8">
                  <Form.Control as="select" onChange={this.onTechnicianChange.bind(this)}>
                    <option value="">-- select technician --</option>
                    {this.state.technicians.map((result) => (
                      <option value={result._id}>
                        {result.account.firstName} {result.account.lastName}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="4">
                  Date
                </Form.Label>
                <Col sm="8">
                  <Form.Control inline as="select" onChange={this.onDateChange.bind(this)}>
                    <option value="">-- select Date --</option>
                    {this.state.dates.map(
                      (result) => (
                        // eslint-disable-next-line react/jsx-key
                        // moment(result.date.date).isAfter() && (
                        <option value={result}>
                          {moment(result).format('ll')}
                        </option>
                      )
                      // )
                    )}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="4">
                  Time:
                </Form.Label>
                <Col sm="8">
                  <Form.Control inline as="select" onChange={this.onTimeChange.bind(this)}>
                    <option value="">-- select time --</option>
                    {this.state.dateData.map((result) => (
                      // eslint-disable-next-line react/jsx-key
                      <option value={result.time._id}>{result.time.time}</option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="4">
                  Contact Number:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    placeholder="647-596-9521"
                    onChange={this.onContactNumChange.bind(this)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="4">
                  Special Request:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={this.onSpecialRequestChange.bind(this)}
                  />
                </Col>
              </Form.Group>
              <br />
              <Row>
                <Col></Col>
                <Col md="auto">
                  <Button variant="outline-secondary" href="/Appointment/Admin">
                    Cancel
                  </Button>
                </Col>
                <Button variant="outline-info" type="submit">
                  Save
                </Button>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default CreateAppointmentAdmin;
