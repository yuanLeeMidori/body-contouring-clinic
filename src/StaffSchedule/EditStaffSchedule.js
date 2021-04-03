import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import '../App.css';
import SideBar from '../SideBar/SideBar';
import moment from 'moment';

class EditStaffSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { url: '/Staff/Schedules/Calendar', title: 'Schedule Calendar' },
        { url: '/Staff/Schedule/Create', title: 'Create Schedule' },
        { url: '/Staff/Schedules', title: 'View Schedule List' },
      ],
      savedBackLink: '/Staff/Schedule/Edit',
      title: 'Schedule Updated!',
      button: 'Back to schedule',
      saveModal: false,
      tmpStaffId: '602b54964bff0f4ab039060d', // Chloe // change this after login authorization

      workSchedule: [],
      date: [],
      time: [],
      dates: [],
      times: [],

      // for calendar
      todaySchedules: {},

      dateIsSelected: false,
      timeIsSelected: false,
    };
    this.showSave = this.showSave.bind(this);
    this.hideSave = this.hideSave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showSave = () => {
    this.setState({ saveModal: true });
  };

  hideSave = () => {
    this.setState({ saveModal: false });
    console.log('hey');
  };

  handleSubmit(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/workSchedule/${this.props.id}`, {
      method: 'PUT',
      body: JSON.stringify(this.state.workSchedule),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => this.setState({ completed: true }))
      .catch((err) => console.log(err));
  }

  onDateChange(e) {
    this.setState(() => ({
      dateIsSelected: false,
    }));
    if (e.target.value === '') {
      this.setState(() => ({
        date: {
          ...this.state.date,
          _id: e.target.value,
        },
        dateIsSelected: true,
      }));
    } else {
      this.setState(() => ({
        date: {
          ...this.state.date,
          _id: e.target.value,
        },
        workSchedule: {
          ...this.state.workSchedule,
          date: e.target.value,
        },
        dateIsSelected: false,
      }));
    }
  }

  onTimeChange(e) {
    this.setState(() => ({ timeIsSelected: false }));
    if (e.target.value === '') {
      this.setState(() => ({
        time: {
          ...this.state.time,
          _id: e.target.value,
        },
        timeIsSelected: true,
      }));
    } else {
      this.setState(() => ({
        time: {
          ...this.state.time,
          _id: e.target.value,
        },
        workSchedule: {
          ...this.state.workSchedule,
          time: e.target.value,
        },
        timeIsSelected: false,
      }));
    }
  }

  onDescriptionChange(e) {
    this.setState(() => ({
      workSchedule: {
        ...this.state.workSchedule,
        description: e.target.value,
      },
    }));
  }

  getWorkSchedule(id) {
    return new Promise((resolve) => {
      fetch(`${process.env.REACT_APP_API_URL}/workSchedule/${id}`)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  }

  getDates() {
    return new Promise((resolve) => {
      fetch(`${process.env.REACT_APP_API_URL}/dates`)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  }

  getTimes() {
    return new Promise((resolve) => {
      fetch(`${process.env.REACT_APP_API_URL}/times`)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  }

  componentDidMount() {
    document.title = 'Set Your Schedule | Body Contouring Clinic';
    this.getWorkSchedule(this.props.id).then((data) => {
      this.setState({
        workSchedule: data,
        date: data.date,
        time: data.time,
      });
    });
    this.getDates().then((data) => {
      this.setState({
        dates: data.filter((d) => {
          return moment(d.date).isAfter();
        }),
      });
    });
    this.getTimes().then((data) => {
      this.setState({
        times: data,
      });
    });
  }

  render() {
    if (this.state.completed) {
      return (
        <Redirect
          push
          to={{
            pathname: '/Staff/Schedules',
          }}
        />
      );
    }
    return (
      <>
        <div className="row">
          <div className="col-md-1"></div>
          <SideBar items={this.state.items} />
          <div className="col-md-8" style={{ 'margin-left': '80px' }}>
            <h2 className="PageTitle">Edit Schedule</h2>
            <br />
            <Container>
              <Form onSubmit={this.handleSubmit.bind(this)} method="PUT">
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Date:
                  </Form.Label>
                  <Col sm={6}>
                    <Form.Control
                      as="select"
                      onChange={this.onDateChange.bind(this)}
                      value={this.state.date._id}
                      isInvalid={!!this.state.dateIsSelected}
                    >
                      <option value="">--Choose--</option>
                      {this.state.dates.map((date) => (
                        <option key={date._id} value={date._id}>
                          {moment(date.date).format('ll')}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">date is required</Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Time:
                  </Form.Label>
                  <Col sm={6}>
                    <Form.Control
                      as="select"
                      onChange={this.onTimeChange.bind(this)}
                      value={this.state.time._id}
                      isInvalid={!!this.state.timeIsSelected}
                    >
                      <option value="">--Choose--</option>
                      {this.state.times.map((time) => (
                        <option key={time._id} value={time._id}>
                          {time.time}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">Time is required</Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Description:
                  </Form.Label>
                  <Col sm={6}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={this.state.workSchedule.description}
                      onChange={this.onDescriptionChange.bind(this)}
                    />
                  </Col>
                </Form.Group>
                <br />
                <Container>
                  <Row>
                    <Col xs={6}></Col>
                    <Col xs={1}>
                      <Button variant="outline-secondary" href="/Staff/Schedules">
                        Cancel
                      </Button>
                    </Col>
                    <Col xs={1}>
                      <Button type="submit" variant="outline-info">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Form>
              <br />
              <br />
            </Container>
            <br />
            <br />
          </div>
        </div>
      </>
    );
  }
}

export default EditStaffSchedule;
