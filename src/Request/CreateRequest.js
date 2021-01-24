import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/SideBar';

class CreateRequest extends React.Component {
    render() {
        return (
            <div class="row">
                <SideBar />
                <div className="col-md-7">
                    <form action="/Request/"  method ="post" className="createRequest">
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
                        <button type="cancel">CANCEL</button>
                        <button>BACKTOLIST</button>
                        <button type="submit">SAVE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateRequest;