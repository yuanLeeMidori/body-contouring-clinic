import React from 'react';
import '../../App.css';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../../SideBar/SideBar';
import styles from '../../app.module.css';

class EditAppointmentAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                { url: '/Appointment', title: 'Appointment Home' },
                { url: '/Appointment/Admin/Appointments', title: 'View All Appointments' },
            ]
        };
    }

    componentDidMount() {
        document.title = "Edit New Appointment | Body Contouring Clinic";
    }
    render() {
        return (
            <>
                <br /><br />
                <div className="row">
                    <div className="col-md-1"></div>
                    <SideBar items={this.state.items} />
                    <div className="col-md-6">
                    <h2 className={styles.appointmentTitle}>Edit Appointment</h2>
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                            <Form>
                                <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                                    <Form.Label column sm="4">
                                    Services:
                                    </Form.Label>
                                    <Col sm="8" style={{marginLeft: '0px'}} className="row">
                                            <Form.Control inline as="select" className="col-md-7">
                                                <option>Active air oxygen therapy</option>
                                                <option>Green peel</option>
                                                <option>Skin rejuventation</option>
                                                <option>laser hair removal</option>
                                            </Form.Control>
                                            <Button style={{marginLeft: '50px'}}>Add Services</Button>           
                                    </Col>
                                </Form.Group>
                                 

                                <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                                    <Form.Label column sm="4">
                                    Technician:
                                    </Form.Label>
                                    <Col sm="8">
                                            <Form.Control as="select">
                                                <option>Piper Chapman</option>
                                                <option>Alex Vause</option>
                                                <option>Daya Diaz</option>
                                                <option>Tasha Jefferson</option>
                                            </Form.Control>        
                                    </Col>
                                </Form.Group>
                                    
                                <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                        Date
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="date" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                        Time
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="time" />
                                    </Col>
                                </Form.Group>        
                                <Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                        Contact Number:
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control placeholder="647-596-9521" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label column sm="4">
                                        Special Request:
                                    </Form.Label>        
                                    <Col sm="8">
                                        <Form.Control as="textarea" rows={3} placeholder="Vanilla essential oil" />
                                    </Col>
                                </Form.Group>
                            </Form>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                    <Container style={{'margin-top': '50px', cursor: 'pointer'}}>
                        <Row >
                            <Col></Col>
                            <Col md="auto"><a href="/Appointment/Admin/Appointment">Cancel</a></Col>
                            <Col lg="2"><a href="/Appointment/Admin/Appointment">Save</a></Col>
                        </Row>
                    </Container>
                        </div>
                </div>
 
            </>
        )
    }
}

export default EditAppointmentAdmin;