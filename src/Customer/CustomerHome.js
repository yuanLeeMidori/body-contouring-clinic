import React from 'react';
import SideBar from '../SideBar/SideBar';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CustomerHome extends React.Component {

    state = {
        items: [
            {url:'/Customer/', title: 'Home'},
            {url:'/Customer/Profile', title: 'Profile'},
            {url:'/Customer/Edit', title: 'Edit Profile'},
        ]
    }
    constructor(prop){
        super(prop)
    }

    render() {
        
        return (
            <div className="App-basic" class="form-group">
                <div class="row">
                    <SideBar items={this.state.items}/>
                    <div className="col-md-7">
                        <h1>Hello, user.fullName</h1>
                        <hr />

                        <h2>Example of profile </h2>
                        <br />
                        <form>
                            <label>
                                Current Level : VIP or not
                            </label><br />
                            <label>
                                Current balance
                            </label><br />
                            <label>
                                Current Appointment
                            </label><br />
                            <label>
                                Add more...
                            </label><br />

                        </form>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default CustomerHome