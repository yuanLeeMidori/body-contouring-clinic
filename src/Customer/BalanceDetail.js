import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import styles from '../app.module.css';
import SideBar from '../SideBar/SideBar';

class BalanceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { url: '/Customer/', title: 'Home' },
        { url: '/Customer/Profile', title: 'Profile' },
        { url: '/Customer/Edit', title: 'Edit Profile' },
        { url: '/Customer/Balance', title: 'Balance' },
      ],
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-1"></div>
        <SideBar items={this.state.items} />
        <div className="col-md-6">
          <h2>Balance Details</h2>
          <hr />
          <Container>
            <Row>
              <Col></Col>
              <Col xs={7}>
                <table className={styles.appointmentTable}>
                  <tr>
                    <td>Customer Name: </td>
                    <td>Harry Potter</td>
                  </tr>
                  <tr>
                    <td>Date:</td>
                    <td>2021/01/14</td>
                  </tr>
                  <tr>
                    <td>Price:</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td>Technician:</td>
                    <td>Mintae Kim</td>
                  </tr>
                  <tr>
                    <td>Service:</td>
                    <td>Laser skin clean therapy</td>
                  </tr>
                  <tr>
                    <td>Contact #:</td>
                    <td>(437)988-1678</td>
                  </tr>
                </table>
              </Col>
              <Col></Col>
            </Row>
            <br />
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" variant="outline-info" href="/Customer/Balance">
                Back
              </Button>
            </Col>
          </Container>
        </div>
      </div>
    );
  }
}

export default BalanceDetail;
