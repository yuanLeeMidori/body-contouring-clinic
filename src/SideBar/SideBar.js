import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SideBar extends React.Component {

    render() {
        return (
            <div class="col-md-2">
                <div class="panel panel-info">
                    <ul class ="list-group">
                        <li class="list-group-item"><a href="/Request/">View All Request</a></li>
                        <li class="list-group-item"><a href="/Request/Create">Create Request</a></li>
                        <li class="list-group-item"><a>FAQ</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;