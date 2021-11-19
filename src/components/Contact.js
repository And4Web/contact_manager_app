import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Consumer} from '../Context';

class Contact extends Component {   
  state = {
    showContactInfo: false,
  }
 
  onDeleteClick = (id, dispatch) => {
    dispatch({type:'DELETE_CONTACT', payload: id})
  }

  static propTypes = {
    contact: PropTypes.object.isRequired,
        
  }
    
  render() {
    const {id, contact} = this.props;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return(
            <div className="card card-body m-3">
              <h4 >{contact.name} <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} className="fas fa-sort-down  position-absolute ms-2" style={{cursor: 'pointer'}}></i>
              <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.onDeleteClick.bind(this, id, dispatch)}/>
              </h4>
            {this.state.showContactInfo ? (<ul className="list-group">
            <li className="list-group-item">{contact.email}</li>
            <li className="list-group-item">{contact.phone}</li>
            </ul>) : null}
        
            </div>
          )
        }
        }
      </Consumer>      
    )
  }
}

export default Contact;