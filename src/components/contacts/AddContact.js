import React, { Component } from 'react';
import {Consumer} from '../../Context'
// import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name:'',
    email:'',
    phone:'',
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;
    const newContact = {
      // id: uuid(),
      name,
      email,
      phone
    };
    dispatch({type: 'ADD_CONTACT', payload: newContact});

    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
    const {name, email, phone} = this.state;

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
                    <div className="form-group">
                      <label htmlFor="name" className="ms-1 mb-2 ">Name</label>
                      <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter your name..." value={name} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="ms-1 mb-2 ">Email</label>
                      <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter your Email..." vlaue={email} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="ms-1 mb-2 ">Phone</label>
                      <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter your phone..." value={phone} onChange={this.onChange}/>
                    </div>
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