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
             <label htmlFor="" className="ms-1 mb-2">Name</label>
              <input type="text" className="form-control form-control-lg" placeholder="Enter yout name..."/>
            </div>
          </form>
        </div>
      </div>
      
    )
  }
}
export default AddContact;