import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import SideBar from '../SideBar/SideBar';
import StaffScheduleCalendar from './StaffScheduleCalendar';
import SavedPopUp from '../SavedPopUp';

class EditStaffSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { url: '/Staff/Schedule', title: 'Your Schedule' },
        { url: '/Staff/Schedule/Edit', title: 'Set Schedule' },
      ],
      weekCalendarView: 'week',
      dayCalendarView: 'day',
      savedBackLink: '/Staff/Schedule/Edit',
      title: 'Schedule Updated!',
      button: 'Back to schedule',
      saveModal: false,
      tmpStaffId: '602b54964bff0f4ab039060d', // Chloe // change this after login authorization
      staff: [],
      workSchedules: [],
      scheduleTime: [],
      scheduleDate: [],

      // for calendar
      todaySchedules: {},
    };
    this.showSave = this.showSave.bind(this);
    this.hideSave = this.hideSave.bind(this);
  }

  showSave = () => {
    this.setState({ saveModal: true });
  };

  hideSave = () => {
    this.setState({ saveModal: false });
    console.log('hey');
  };

  getStaff(id) {
    return new Promise((resolve) => {
      fetch(`${process.env.REACT_APP_API_URL}/staff/${id}`)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  }

  componentDidMount() {
    document.title = 'Set Your Schedule | Body Contouring Clinic';
    this.getStaff(this.state.tmpStaffId).then((data) => {
      this.setState({
        staff: data,
        workSchedules: data.workSchedules,
      });
    });
  }

  render() {
    // today schedule
    let formatted = this.state.workSchedules.map(
      (s) =>
        new Object({
          d: s.date.date.split("/"),
          year: s.date.date.split("/")[2],
          month: s.date.date.split("/")[0],
          day: s.date.date.split("/")[1],
          t: s.times.map((t) => new Object({
            timeRange: t.time,
            startHr: t.time.substr(0, t.time.indexOf(":")),
            startMin: t.time.split(':')[1].split('-')[0],
            endHr: t.time.split(':')[1].split('-')[1],
            endMin: t.time.split(':')[2]
          }))
        })
    );
    console.log(formatted);
    // make the date and time to this format (yyyy,mm-1,dd,hh,mm)
    // week schedule
    return (
      <>
        <div className="row">
          <div className="col-md-1"></div>
          <SideBar items={this.state.items} />
          <div className="col-md-9">
            <Container style={{ marginLeft: '0px', marginRight: '0px', float: 'center' }}>
              <h2>
                Modify your schedule{' '}
                <Button variant="outline-info" onClick={this.showSave}>
                  Save
                </Button>
              </h2>
              <SavedPopUp
                show={this.state.saveModal}
                handelClose={this.hideSave}
                text={this.state.title}
                href={this.state.savedBackLink}
                button={this.state.button}
              />
              <Row>
                <Col sm={5}>
                  <StaffScheduleCalendar view={this.state.dayCalendarView} />
                </Col>
                <Col sm={2}></Col>
                <Col>
                  <StaffScheduleCalendar view={this.state.weekCalendarView} />
                </Col>
              </Row>
            </Container>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </>
    );
  }
}

export default EditStaffSchedule;
