import React from 'react';
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
        return (
            <>
                <h1>These are all appointments</h1>
            </>
        )
    }
}

export default Appointments;