import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProfileHome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App-basic">
                <h1>This is Profile Home page </h1>
                
                <hr /><hr />
                <h2>Hello, user.fullName</h2>
            </div>
        );
    }
}

export default ProfileHome;