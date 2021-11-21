import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name:'',
    email:'',
    phone:'',
  }

  render() {
    return (
      <div className="card m-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body ">
          <form >
          <div className="form-group">
             <label htmlFor="name" className="ms-1 mb-2 ">Name</label>
              <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter your name..."/>
            </div>
          <div className="form-group">
             <label htmlFor="email" className="ms-1 mb-2 ">Email</label>
              <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter your Email..."/>
            </div>
          <div className="form-group">
             <label htmlFor="phone" className="ms-1 mb-2 ">Phone</label>
              <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter your phone..."/>
            </div>
          </form>
        </div>
      </div>
      
    )
  }
}
export default AddContact;