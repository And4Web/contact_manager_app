import React, { Component } from 'react';
import {Consumer} from '../../Context'
import Contact from './Contact';

class Contacts extends Component {

  render() {
    return(
    <Consumer>
      {(value) => {
          const { contacts } = value;
          return(
          <React.Fragment>
            <h1 className="display-5 mb-3 ms-3">
              <span className="text-danger">Contacts</span> List
            </h1>
             { contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
          </React.Fragment>
          )
        }
      }
    </Consumer>
    )
  }
}

export default Contacts;