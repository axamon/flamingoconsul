import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom';

import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Immigration from './components/Immigration';

class App extends Component {
 render() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='container bg-white vh-95'>
        <NavBar />
        <div className='no-title item-page row'>
          <h4>Immigration and Regulatory Compliance Experts</h4>
          <hr></hr>
        </div>
        <Routes className='row'>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/immigration" element={<Immigration />} />
        </Routes>
        <Footer  className='row bottom-0' />
      </div>
    </Router>
  );
}
}

export default App;
