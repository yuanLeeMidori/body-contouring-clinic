import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class ListAllRequestbyAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      requestCategory: " ",
    };
  }

  getRequests() {
    return new Promise((resolve) => {
      fetch('http://localhost:3001/requests')
        .then((response) => response.json())
        .then((results) => {
          resolve(results);
        });
    });
  }
  // how to put the customer data to respective request obj
  getCustomer(id) {
    return new Promise((resolve) => {
      fetch(`http://localhost:3001/customer/${id}`)
        .then((response) => response.json())
        .then((results) => {
          resolve(results);
        });
    });
  }
  getRequestCategory(id) {
    return new Promise((resolve) => {
      fetch(`http://localhost:3001/request-category/${id}`)
        .then((response) => response.json())
        .then((results) => {
          resolve(results);
        });
    });
  }

  componentDidMount() {
    this.getRequests().then((data) => {
      this.setState({
        requests: data,
      });
    });
  }
  render() {
    const pagination = {
      color: '#B58970',
    };
    return (
      <div className="ListAll">
        <table>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Category</th>
            <th>Service</th>
            <th>Title</th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>

          {this.state.requests.map((request) => (
          <tr key={request._id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <Link to={`/Request/Admin/Answer/${request._id}`} style={{ color: 'black' }}>
                {request._id}
              </Link>
              </td>
            <td>{request.requestCategoryId}</td>
            <td>{request.serviceCategoryId}</td>
            <td>{request.title}</td>
            <td>{request.customerId}</td>
            <td>customer name from other get</td>
            <td>{request.date}</td>
            <td>{request.status}</td>
          </tr>
          ))}

        </table>
        <br />
        <span style={pagination}>
          <a href="#"> &laquo; </a>
          <a href="#"> 1 </a>
          <a className="active" href="#">
            {' '}
            2{' '}
          </a>
          <a href="#"> 3 </a>
          <a href="#"> 4 </a>
          <a href="#"> 5 </a>
          <a href="#"> 6 </a>
          <a href="#"> &raquo; </a>
        </span>
        <br />
      </div>
    );
  }
}

export default ListAllRequestbyAdmin;
