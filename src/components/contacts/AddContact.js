import React, { Component } from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {
  state = {
    name:'',
    email:'',
    phone:'',
    errors: {}
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone
    };

    // Check for errors:
    if(name === ''){
      this.setState({errors:{name: 'Name is Required.'}});
      return;
    }
    if(email === ''){
      this.setState({errors:{email: 'Email is Required.'}});
      return;
    }
    if(phone === ''){
      this.setState({errors:{phone: 'Phone is Required.'}});
      return;
    }

    dispatch({type: 'ADD_CONTACT', payload: newContact});
    
    //clear state:

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
    const {name, email, phone, errors} = this.state;

    return(
      <Consumer>
        {
          value => {
            const {dispatch} = value;
            return(
              <div className="card m-3">
               <div className="card-header">Add Contact</div>
                <div className="card-body ">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                  <TextInputGroup name="name" label="Name" placeholder="Enter your name..." value={name} onChange={this.onChange} error={errors}/>
                  <TextInputGroup name="email" label="Email" placeholder="Enter your email..." value={email} onChange={this.onChange} type="email" error={errors}/>
                  <TextInputGroup name="phone" label="Phone" placeholder="Enter your phone..." value={phone} onChange={this.onChange} error={errors}/>
                  
                  <input  type="submit" value="Add Contact" className="btn btn-block btn-primary mt-3 w-100"/>
          
                  </form>
                </div>
              </div>
            );
          }
        }
      </Consumer>
    )

  }
}
export default AddContact;