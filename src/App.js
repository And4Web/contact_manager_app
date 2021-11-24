import './App.css';
import Contacts from './components/contacts/Contacts';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Home from './components/pages/Home';
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
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contacts' element={<Contacts/>}/>
          <Route exact path='/contacts/add' element={<AddContact/>}/>
        </Routes>

          
        </div>
      </div>
    </Router>
      
    </Provider>    
  );
}

export default App;
