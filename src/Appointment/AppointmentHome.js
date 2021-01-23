import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class AppointmentHome extends React.Component {

    constructor(props) {
        super(props);
    }



    componentDidMount() {
        document.title = "Appointment Home | Body Contouring Clinic";
    }

    render() {
        const calendar = {
            width: '800px',
            height: '400px',
        };
        const button = {
            'font-size': 'large',
            'font-weight': 'bold',
            color: 'gray',
            margin: '40px',
        };
        return (
            <div className="App-basic">                
                <hr /><hr />
                <h2 style={{margin: '40px'}}>Hello, user.fullName</h2>
                <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body" style={calendar}>
                    <p>
                        I'm the calender
                    </p>
                    </blockquote>
                </Card>
                <Container style={button}>
                    <Row>
                        <Col><a style={button} href='/Appointment/Appointments'>View All Appointments</a></Col>
                        <Col><a style={button} href='/Appointment/Create'>Create Appointment</a></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AppointmentHome;