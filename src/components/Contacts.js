import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

  constructor(){
    super();
    this.state = {
      contacts:[
        {
          id: 1,
          name:  'Anand',
          email: 'anand@gmail.com',
          phone: '555-5555555'
        },
        {
          id: 2,
          name:  'Amul',
          email: 'amul@gmail.com',
          phone: '555-5345555'
        },
        {
          id: 3,
          name:  'Aditi',
          email: 'aditi@gmail.com',
          phone: '555-5893555'
        }
      ]
    }
  }

  deleteContact = (id) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({contacts: newContacts});
  }

  render() {
    const {contacts} = this.state; 
    return (
      <React.Fragment>
        { contacts.map(contact => <Contact key={contact.id} contact={contact} deleteClickHandler= {this.deleteContact.bind(this, contact.id)}/>)}
      </React.Fragment>
    )
  }
}


export default Contacts;