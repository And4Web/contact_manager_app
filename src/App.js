import './App.css';
import Contact from './components/Contact.js';
import Header from './components/Header.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header  />
        <Contact name="Anand" email="anand@gmail.com" phone="555-555555"/>

        <Contact name="Amul" email="amul@gmail.com" phone="557-680555"/>

        <Contact name="Aditi" email="aditi@gmail.com" phone="575-550005"/>
      
      
      </div>


    </div>

    
  );
}

export default App;
