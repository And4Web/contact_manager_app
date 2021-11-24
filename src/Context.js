import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'DELETE_CONTACT':
      return{
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case 'ADD_CONTACT':
      return{
        ...state,
        contacts: [action.payload,  ...state.contacts]
      }
    default:
      return state;
  }
}

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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  }
  render(){
    return(
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer;
