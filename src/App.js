import './App.css';
import Contact from './components/Contact.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager"/>
      <h1>Hello!</h1>
      <Contact name="Anand" email="anand@gmail.com" phone="555-555555"/>
      <Contact name="Amul" email="amul@gmail.com" phone="557-680555"/>
      <Contact name="Aditi" email="aditi@gmail.com" phone="575-550005"/>
    </div>
  );
}

export default App;
