import React from 'react';
import '../App.css';
import SideBar from '../SideBar/SideBar';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

class ViewSchedulesList extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      items: [
        { url: '/Staff/Schedule', title: 'Schedule Calendar' },
        { url: '/Staff/Schedule/Create', title: 'Create Schedule' },
        { url: '/Staff/Schedules', title: 'View Schedule List' },
      ],
      loaded: true,
      staff: '602b54964bff0f4ab039060d', // temporary till the login auth
      workSchedules: [],
      dates: [],
      times: [],
    };
  }

  getWorkSchedules() {
    return new Promise((resolve) => {
      fetch(`${process.env.REACT_APP_API_URL}/staffWorkSchedules?staff=${this.state.staff}`)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  }

  componentDidMount() {
    this.getWorkSchedules().then((data) => {
      this.setState({
        workSchedules: data,
        loaded: true,
      });
    });
  }

  render() {
    console.log(this.state.workSchedules);
    if (this.state.loaded) {
      return (
        <div className="row">
          <div className="col-md-1"></div>
          <SideBar items={this.state.items} />
          <div className="col-md-8" style={{ 'margin-left': '80px' }}>
            <h2 className="PageTitle">View All Schedule</h2>
            <br />
            <div className="contents">
              <Form inline>
                <Form.Control
                  as="select"
                  name="days"
                  value={this.state.dayValue}
                  onChange={this.handleDayChange}
                >
                  <option value="0">N/A</option>
                  <option value="30">This Week</option>
                  <option value="60">This Month</option>
                  <option value="90">Next Month</option>
                </Form.Control>
              </Form>
              <br />
              <table>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Description</th>
                </tr>

                {this.state.workSchedules.map((sch) => (
                  <tr key={sch._id}>
                    <td>{sch.date}</td>
                    {/* <td>{this.state.workSchedules.times.map((time) => (
                      <span key={time._id}>{time.time}</span>
                    ))}</td> */}
                    <td>{this.state.workSchedules.times && this.state.workSchedules.times[0]}</td>
                    <td>{sch.description}</td>
                  </tr>
                ))}
                {/* {this.state.workSchedules.map((sch) => (
                // (this.props.status.length == 0 ||
                // this.props.status == 'none') ||
                //   parseInt(this.props.day) == 0 ||
                //   this.props.day.length == 0
                //   ? request._id.length > 0
                //   : this.props.status == request.status &&
                //   moment(request.date) > moment().subtract(parseInt(this.props.day), 'days')
                //   &&
                <tr key={sch._id}>
                  <td>
                    <Link to={`/Request/Admin/${sch._id}`} style={{ color: 'black' }}>
                      {sch._id}
                    </Link>
                  </td>
                  <td>{sch.date}</td>
                  <td>time</td>
                  <td>{sch.description}</td>
                </tr>
              ))} */}
              </table>
              <Container>
                <Row>
                  <Col xs={10}></Col>
                  <Col xs={1}></Col>
                  <Col xs={1}>
                    <Button variant="outline-info" href="/Request/Admin/Answer">
                      Answer
                  </Button>
                  </Col>
                </Row>
              </Container>
              <br />
              <br />
            </div>
            <br />
            <br />
          </div>
        </div>
      );
    }
  }
}

export default ViewSchedulesList;
