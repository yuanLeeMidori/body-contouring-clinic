import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/SideBar';
import Button from 'react-bootstrap/Button';

class EditRequest extends React.Component {

    state = {
            items : [
                {url:'/Request/', title: 'View All Request'},
                {url:'/Request/Create', title: 'Create Request'},
                {url:'/Request/', title: 'FAQ'},
            ]
    }
    
    render() {
        return (
            <div class="row">
                <SideBar items={this.state.items}/>
                <div class="col-md-7">
                    <h1 className="PageTitle">Edit Request for 01</h1>
                    <form action="/Request/Edit"  method ="post" className="EditRequest">
                        <label>Email:</label>
                        <input type="text" id='email' name='email' placeholder="example@bodyCountouringClinic.ca" /> <br/>
                        
                        <label>Contact #:</label>
                        <input type="text" id='phone' name='phone' placeholder="+1(437)988-1678" /> <br/>
                        
                        <label>Category:</label>
                        <select id='category' name='category'>
                            <option value="">MemberShip</option>
                            <option value="">Shipment</option>
                            <option value=""></option>
                        </select>
                        <br/>

                        <label>Service:</label>
                        <select id='service' name='service'>
                            <option value="">abc</option>
                            <option value="">def</option>
                            <option value="">ghi</option>
                        </select>
                        <br/>

                        <label>Password:</label>
                        <input type="text" id='pwd' name='pwd' placeholder="At least 4 characters" /> <br/>

                        <label>Title:</label>
                        <input type="text" id='title' name='title' placeholder="Title" /> <br/>
                        
                        <label>Contents:</label>
                        <textarea id='contents' name='contents' placeholder="Inquries" >
                        </textarea>
                        <br/>

                        <label>Attach File:</label>
                        <input type="file" />
                        <br/>
                        <Button type="cancel" variant="light" href="/Request/" size="lg">CANCEL</Button>
                        <Button type="submit" variant="light" href="/Request/" size="lg">SAVE</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditRequest;