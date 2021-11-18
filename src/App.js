import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import { Provider } from './Context'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header  />
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>    
  );
}

export default App;
