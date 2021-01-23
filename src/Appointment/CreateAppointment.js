import React from 'react';
import '../App.css';
import { Form, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateAppointment extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Create New Appointment | Body Contouring Clinic";
    }
    render() {
        return (
            <>
                <br /><br />
                <h2 style={{margin: '15px'}}>New Appointment</h2>

                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={6}>
                        <Form>
                            <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                                <Form.Label column sm="2">
                                Services:
                                </Form.Label>
                                <Col sm="10">
                                        <Form.Control as="select">
                                            <option>Active air oxygen therapy</option>
                                            <option>Green peel</option>
                                            <option>Skin rejuventation</option>
                                            <option>laser hair removal</option>
                                        </Form.Control>                                        
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                                <Form.Label column sm="2">
                                Technician:
                                </Form.Label>
                                <Col sm="10">
                                        <Form.Control as="select">
                                            <option>Piper Chapman</option>
                                            <option>Alex Vause</option>
                                            <option>Daya Diaz</option>
                                            <option>Tasha Jefferson</option>
                                        </Form.Control>        
                                </Col>
                            </Form.Group>
                                
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Date & Time:
                                </Form.Label>        
                                <Col sm="10">
                                    <Form.Control />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                <Form.Label column sm="2">
                                    Special Request :
                                </Form.Label>        
                                <Col sm="10">
                                    <Form.Control as="textarea" rows={3} />
                                </Col>
                            </Form.Group>
                        </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col md="auto">Cancel</Col>
                        <Col xs lg="2">
                        Save
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default CreateAppointment;