import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../App.css';
import SideBar from '../SideBar/SideBar';

class EditStaffSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { url: '/Staff/Schedule', title: 'Schedule Calendar' },
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
      workSchedule: {
        ...this.state.workSchedule,
        date: e.target.value,
      },
    }));
  }

  onTimeChange(e) {
    this.setState(() => ({
      workSchedule: {
        ...this.state.workSchedule,
        time: e.target.value,
      },
    }));
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
        dates: data,
      });
    });
    this.getTimes().then((data) => {
      this.setState({
        times: data,
      });
    });
  }

  render() {
    // today schedule
    // let formatted = this.state.workSchedules.map(
    //   (s) =>
    //     new Object({
    //       d: s.date.date.split('/'),
    //       year: s.date.date.split('/')[2],
    //       month: s.date.date.split('/')[0],
    //       day: s.date.date.split('/')[1],
    //       t: s.times.map(
    //         (t) =>
    //           new Object({
    //             timeRange: t.time,
    //             startHr: t.time.substr(0, t.time.indexOf(':')),
    //             startMin: t.time.split(':')[1].split('-')[0],
    //             endHr: t.time.split(':')[1].split('-')[1],
    //             endMin: t.time.split(':')[2],
    //           })
    //       ),
    //     })
    // );
    // make the date and time to this format (yyyy,mm-1,dd,hh,mm)
    // week schedule
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
                    >
                      <option value="">--Choose--</option>
                      {this.state.dates.map((date) => (
                        <option key={date._id} value={date._id}>
                          {date.date}
                        </option>
                      ))}
                    </Form.Control>
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
                    >
                      <option value="">--Choose--</option>
                      {this.state.times.map((time) => (
                        <option key={time._id} value={time._id}>
                          {time.time}
                        </option>
                      ))}
                    </Form.Control>
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
                      <Button variant="outline-info" type="submit">
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
