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
                        <th><input type="checkbox" /></th>
                        <th>01</th>
                        <th>Membership</th>
                        <th>-</th>
                        <th>How can I join..</th>
                        <th>2021/01/11</th>
                        <th>Solved</th>
                    </tr>
                    <tr>
                        <th><input type="checkbox"/></th>
                        <th>02</th>
                        <th>Shipment</th>
                        <th>-</th>
                        <th>How many day...</th>
                        <th>2020/12/27</th>
                        <th>Progress</th>
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