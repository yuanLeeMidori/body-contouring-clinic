import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SideBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          items: []
        }
      }

    render() {
        const {items = []} = this.props;
        return (
            <div className="col-md-2">
                <div className="panel panel-info">
                    <ul className ="list-group">
                        {items.map(item => (
                           <li className="list-group-item"><a href={item.url}>{item.title}</a></li>  
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;