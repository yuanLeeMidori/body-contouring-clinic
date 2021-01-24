import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Appointments extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "All Appointments | Body Contouring Clinic";
    }

    render() {
        const title = {
            color: '#393D47',
            margin: '40px',
            'margin-bottom': '80px',
        };
        const pagination = {
            color: '#B58970',
        }
        return (
            <>
                <div style={title}>
                    <h2>Hello, user.fullName!</h2>
                    <h2>These are all your upcoming appointments</h2>
                </div>
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
                                    <td><a href="/Appointment/Appointment">details</a></td>
                            </tr>
                            <tr>
                                    <td>2021-01-21</td>
                                    <td>10:30</td>
                                    <td>Pay as you go add on Medium</td>
                                    <td>$79</td>
                                    <td><a href="/Appointment/Appointment">details</a></td>
                            </tr>
                            </table>
                            <br />
                            <span style={pagination}>{"<"} 1 2 3 4 5 {">"}</span>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                
            </>
        )
    }
}

export default Appointments;