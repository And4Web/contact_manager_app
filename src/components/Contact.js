import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Contact extends Component {
  
  // static propTypes = {
  //   contacts: PropTypes.object.isRequired,
      
  // }
  render() {
    const {name, email, phone} = this.props;
    return (
      <div className="card card-body m-3">
        <h4 >{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{phone}</li>
        </ul>
      </div>
    )
  }
}



export default Contact;