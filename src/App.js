import './App.css';
import Contacts from './components/contacts/Contacts';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact'

import { Provider } from './Context'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
    <Router>
      <div className="App">
        <Header  branding="Contact Manager"/>
        <div className="container">
          <AddContact/>
          <Contacts />
        </div>
      </div>
    </Router>
      
    </Provider>    
  );
}

export default App;
