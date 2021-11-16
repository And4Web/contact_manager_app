import './App.css';
import Contact from './components/Contact.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" color="green"/>
      <h1>Hello!</h1>
      <Contact/>
    </div>
  );
}

export default App;
