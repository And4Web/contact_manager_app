import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {   
  state = {
    showContactInfo: false,
  }
 

  static propTypes = {
    contact: PropTypes.object.isRequired,      
  }
    
  render() {
    const {contact} = this.props;
    return (
      <div className="card card-body m-3">
        <h4 >{contact.name} <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} className="fas fa-sort-down  position-absolute ms-2"></i>
        </h4>
        {this.state.showContactInfo ? (<ul className="list-group">
          <li className="list-group-item">{contact.email}</li>
          <li className="list-group-item">{contact.phone}</li>
        </ul>) : null}
        
      </div>
    )
  }
}

export default Contact;