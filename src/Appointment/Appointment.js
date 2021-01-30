import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../app.module.css';
import SideBar from '../SideBar/SideBar';
import PopUp from '../PopUp';

class Appointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                { url: '/Appointment', title: 'Appointment Home' },
                { url: '/Appointment/Appointments', title: 'View All Appointments' },
                { url: '/Appointment/Create', title: 'Create Appointment' },
            ],
            show: false,
            children: 'appointment',
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.deleteAppointment = this.deleteAppointment.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };
    
    deleteAppointment = () => {
        this.setState({ show: false });
    };

    componentDidMount() {
        document.title = "Create New Appointment | Body Contouring Clinic";
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
                <div className="row">
                <div className="col-md-1"></div>
                <SideBar items={this.state.items} />
                <div className="col-md-6">    
                    <h2>Appointment Details</h2>
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={7}>
                            <table className={styles.appointmentTable}>
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
                            <Col>
                                <Button variant="outline-info">View Message</Button>{' '}
                                <Button variant="outline-danger" onClick={this.showModal}>Delete</Button>{' '}
                                <Button variant="outline-info" href="/Appointment/Edit">Edit</Button></Col>
                                <PopUp show={this.state.show} handleClose={this.hideModal} handleDelete={this.hideModal} text={this.state.children} btn1='Cancel' btn2='Delete' />        
                        </Row>
                    </Container>
                </div>
                </div>
            </>
        )
    }
}

export default Appointment;