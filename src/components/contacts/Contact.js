import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Consumer} from '../../Context';
import axios from 'axios';

class Contact extends Component {   
  state = {
    showContactInfo: false,
  }
 
  onDeleteClick = async (id, dispatch) => {
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type:'DELETE_CONTACT', payload: id});
    }catch(e){
      dispatch({type:'DELETE_CONTACT', payload: id});
    }
    console.log('delete...', id);    
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
              <Link to ={`contact/edit/${id}`}>
                <i className="fas fa-pencil" 
                    style={{
                    cursor: 'pointer', 
                    float: 'right', 
                    marginRight: '1rem', 
                    color: 'black'
                    }} />
              </Link>
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