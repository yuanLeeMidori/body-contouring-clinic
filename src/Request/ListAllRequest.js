import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class ListAllRequest extends React.Component {
    
    render() {
        const pagination = {
            color: '#B58970',
        }

        return (
            <div className="ListAll">
                    <table>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Service</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><Link to='/Request/Detail' style={{color: 'black'}}>01</Link></td>
                            <td>Membership</td>
                            <td>-</td>
                            <td>How can I join..</td>
                            <td>2021/01/11</td>
                            <td>Solved</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td><Link to='/Request/Detail' style={{color: 'black'}}>02</Link></td>
                            <td>Shipment</td>
                            <td>-</td>
                            <td>How many day...</td>
                            <td>2020/12/27</td>
                            <td>Progress</td>
                        </tr>
                    </table>
                    <br/>
                    <span style={pagination}>
                        <a href="#"> &laquo; </a>
                        <a href="#"> 1 </a>
                        <a className="active" href="#"> 2 </a>
                        <a href="#"> 3 </a>
                        <a href="#"> 4 </a>
                        <a href="#"> 5 </a>
                        <a href="#"> 6 </a>
                        <a href="#"> &raquo; </a>   
                    </span>
                    <br/>
            </div>
        );
    }
}

export default ListAllRequest;