import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListAllRequest extends React.Component {
    render() {
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
                        <td>01</td>
                        <td>Membership</td>
                        <td>-</td>
                        <td>How can I join..</td>
                        <td>2021/01/11</td>
                        <td>Solved</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>02</td>
                        <td>Shipment</td>
                        <td>-</td>
                        <td>How many day...</td>
                        <td>2020/12/27</td>
                        <td>Progress</td>
                    </tr>
                </table>
                {/* https://www.w3schools.com/howto/howto_css_pagination.asp */}
                <div class="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#">1</a>
                    <a class="active" href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
        );
    }
}

export default ListAllRequest;