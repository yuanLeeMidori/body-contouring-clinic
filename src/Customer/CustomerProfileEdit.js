import React from 'react';
import '../App.css';
import SideBar from '../SideBar/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class CustomerProfileEdit extends React.Component {
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

                        <h2>Edit page</h2>
                        <br />
                        <form>
                            <label>
                                First Name: 
                                <input type="text" name="fullName" value={"Default"}/>
                            </label><br />
                            <label>
                                last Name: 
                                <input type="text" name="fullName" value={"Default"}/>
                            </label><br />
                            <label>
                                New password: 
                                <input type="password" name="fullName" />
                            </label><br />
                            <label>
                                Confirm Password: 
                                <input type="password" name="fullName" />
                            </label><br />
                            <label>
                                Email: 
                                <input type="email" name="fullName" />
                            </label><br />
                            <label>
                                Contract Number: 
                                <input type="text" name="fullName" />
                            </label><br />
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default CustomerProfileEdit