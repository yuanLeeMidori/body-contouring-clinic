import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Appointment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const title = {
            color: '#393D47',
            margin: '50px',
        }
        const button = {
            cursor: 'pointer',
            margin: '30px'
        }
        return (
            <>
                <h2 style={title}>Appointment Details</h2>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={7}>
                        <table style={{margin: '60px', 'margin-left': '90px'}}>
                                <tr>
                                    <td>Customer Name: </td>
                                    <td>Jane Doe</td>
                                </tr>
                                <tr>
                                    <td>Date:</td>
                                    <td>2021/01/24</td>
                                </tr>
                                <tr>
                                    <td>Time:</td>
                                    <td>13:00-14:00</td>
                                </tr>
                                <tr>
                                    <td>Technician:</td>
                                    <td>John Doe</td>
                                </tr>
                                <tr>
                                    <td>Service:</td>
                                    <td>Laser-Any Body area</td>
                                </tr>
                                <tr>
                                    <td>Contact #:</td>
                                    <td>(437)988-1678</td>
                                </tr>
                                <tr>
                                    <td>Special Request:</td>
                                </tr>
                            </table>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><a style={button}>Delete </a><a style={button}> Edit</a></Col>
                    </Row>
                </Container>

            </>
        )
    }
}

export default Appointment;