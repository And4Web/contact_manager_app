
import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component{
  state = {
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
  render(){
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer;
