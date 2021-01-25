import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import serviceDetails from '../resources/serviceDetails.png';
class ServiceHome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App-basic">
                <img src={serviceDetails} alt="ServiceDetails" />
            </div>
        );
    }
}

export default ServiceHome;