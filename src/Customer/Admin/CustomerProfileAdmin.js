import React from "react";
import "../../App.css";
import SideBar from "../../SideBar/SideBar";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

class CustomerProfileAdmin extends React.Component {
  state = {
    items: [
        {url:'/Customer/Admin', title: 'Home'},
    ],
  };
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
        <div className="row">
        <div className="col-md-1"></div>
        <SideBar items={this.state.items}/>
        <div class="col-md-6" style={{'margin-left':'80px'}}>
            <h2 className="PageTitle">User.userName Information</h2><hr/><br/>
            <Container class="col-md-6">
            <Form style={{'fontSize': '20px', 'marginLeft':'80px', 'textAlign' : 'left'}}>
              <Form.Group as={Row}>
                <Form.Label column md={3}>
                  Name: 
                </Form.Label>
                <Col sm={1}>
                  <Form.Label column md={0} >
                      User.FullName
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Email:
                </Form.Label>
                <Col sm={1}>
                  <Form.Label column md={0}>
                      User.Email
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Address:
                </Form.Label>
                <Col sm={1}>
                  <Form.Label column md={0}>
                      User.Address
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Current Balance:
                </Form.Label>
                <Col sm={1}>
                  <Form.Label column md={0}>
                      User.Balance
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Customer level:
                </Form.Label>
                <Col sm={3}>
                <Form.Control as="select">
                    <option value="">Normal</option>
                    <option value="">VIP</option>
                </Form.Control>    
                </Col>
              </Form.Group>
            </Form>
          </Container>
          <Container>
          <Row >
              <Col>
                <Button variant="outline-info" href="/Appointment/Appointments">View Appointment</Button>&nbsp;
                <Button variant="outline-info" href="/Request/">View Request</Button>&nbsp;
                <Button variant="outline-info" href="/Customer/Admin/Account">View Account</Button>&nbsp;
                <Button variant="outline-info" href="/Customer/Admin">Edit</Button>
              </Col>
                
            </Row>
          </Container>
            <br/>
        </div>
    </div>
    );
  }
}

export default CustomerProfileAdmin;