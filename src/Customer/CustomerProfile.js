import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CustomerProfile extends React.Component {
    constructor(prop){
        super(prop)
    }

    render() {
        return (
            <div className="App-basic" class="form-group">
                <h1>Hello, user.fullName</h1>
                <hr />

                <h2>Example of profile </h2>
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
        )
    }
}

export default CustomerProfile