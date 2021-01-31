import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../SideBar/SideBar";

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { url: "/Appointment", title: "Appointment Home" },
        { url: "/Appointment/Appointments", title: "View All Appointments" },
        { url: "/Appointment/Create", title: "Create Appointment" },
      ],
    };
  }

  componentDidMount() {
    document.title = "All Appointments | Body Contouring Clinic";
  }

  render() {
    const title = {
      color: "#393D47",
      margin: "40px 400px",
    };
    const pagination = {
      color: "#B58970",
    };
    return (
      <>
        <div className="row">
          <div className="col-md-1"></div>
          <SideBar items={this.state.items} />
          <div className="col-md-6">
            <h2>Hello, user.fullName!</h2>
            <h2>These are all your upcoming appointments</h2>
            <Container>
              <Row>
                <Col></Col>
                <Col xs={7}>
                  <table>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Info</th>
                      <th>Price</th>
                    </tr>
                    <tr>
                      <td>2021-01-14</td>
                      <td>13:00</td>
                      <td>Laser-Any Body area 6 sessions</td>
                      <td>$99</td>
                      <td>
                        <a href="/Appointment/Appointment">details</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2021-01-21</td>
                      <td>10:30</td>
                      <td>Pay as you go add on Medium</td>
                      <td>$79</td>
                      <td>
                        <a href="/Appointment/Appointment">details</a>
                      </td>
                    </tr>
                  </table>
                  <br />
                  <span style={pagination}>
                    {"<"} 1 2 3 4 5 {">"}
                  </span>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default Appointments;
