import React, { Component } from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = { 
    name:'',
    email:'',
    phone:'',
    errors: {}
  
  }

  async componentDidMount(){
    const {id} = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    })

  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;
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

    const {id} = this.props.match.params;

    const updContact = {
      name,
      email,
      phone
    };

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);
    dispatch({type: 'UPDATE_CONTACT', payload: res.data});
    
    
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
                  <span className="text-primary">Edit</span> Contact
                </h1>
                <div className="card m-3">
                <div className="card-header">Refill this form</div>
                  <div className="card-body ">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                    <TextInputGroup name="name" label="Name" placeholder="Enter your name..." value={name} onChange={this.onChange} error={errors}/>
                    <TextInputGroup name="email" label="Email" placeholder="Enter your email..." value={email} onChange={this.onChange} type="email" error={errors}/>
                    <TextInputGroup name="phone" label="Phone" placeholder="Enter your phone..." value={phone} onChange={this.onChange} error={errors}/>
                    
                    <input  type="submit" value="Update Contact" className="btn btn-block btn-primary mt-3 w-100"/>
            
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
export default EditContact;