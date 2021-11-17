import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Contact extends Component {
  
  static propTypes = {
    contact: PropTypes.object.isRequired,
      
  }
  render() {
    const {contact} = this.props;
    return (
      <div className="card card-body m-3">
        <h4 >{contact.name} <i class="fas fa-plus"></i>
</h4>
        <ul className="list-group">
          <li className="list-group-item">{contact.email}</li>
          <li className="list-group-item">{contact.phone}</li>
        </ul>
      </div>
    )
  }
}



export default Contact;