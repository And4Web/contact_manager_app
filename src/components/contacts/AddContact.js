import React, { Component } from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {
  state = {
    name:'',
    email:'',
    phone:'',
    errors: {}
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;
    const newContact = {
      // id: uuidv4(),
      name,
      email,
      phone
    };

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
    dispatch({type: 'ADD_CONTACT', payload: res.data});

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
    
    //clear state:

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })
    
    //pushing to history not working in react router v6. we have to use hooks useNavigate() method for this, but it can be used only in functional components. Learn hooks. 
    // this.props.history.push('/contacts');
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
              <div>
                <h1 className="display-5 mb-3 ms-3">
                  <span className="text-primary">Add</span> Contact
                </h1>
                <div className="card m-3">
                <div className="card-header">Fill this form</div>
                  <div className="card-body ">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                    <TextInputGroup name="name" label="Name" placeholder="Enter your name..." value={name} onChange={this.onChange} error={errors}/>
                    <TextInputGroup name="email" label="Email" placeholder="Enter your email..." value={email} onChange={this.onChange} type="email" error={errors}/>
                    <TextInputGroup name="phone" label="Phone" placeholder="Enter your phone..." value={phone} onChange={this.onChange} error={errors}/>
                    
                    <input  type="submit" value="Add Contact" className="btn btn-block btn-primary mt-3 w-100"/>
            
                    </form>
                  </div>
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