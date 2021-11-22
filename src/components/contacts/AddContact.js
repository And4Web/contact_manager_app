import React, { Component } from 'react'

class AddContact extends Component {  

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  } 

  static defaultProps = {
    name: 'Fred',
    email: 'fred@gmail.com',
    phone: '777-777777'
  }

  render() {
    const {name, email, phone} = this.props;
    
    return (
      <div className="card m-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body ">
          <form onSubmit={this.onSubmit}>
          <div className="form-group">
             <label htmlFor="name" className="ms-1 mb-2 ">Name</label>
              <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter your name..." value={name} />
            </div>
          <div className="form-group">
             <label htmlFor="email" className="ms-1 mb-2 ">Email</label>
              <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter your Email..." vlaue={email} />
            </div>
          <div className="form-group">
             <label htmlFor="phone" className="ms-1 mb-2 ">Phone</label>
              <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter your phone..." value={phone} />
            </div>
          <input  type="button" value="Add Contact" className="btn btn-block btn-primary mt-3 w-100"/>
          
          </form>
        </div>
      </div>
      
    )
  }
}
export default AddContact;