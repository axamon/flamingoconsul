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
import CompanyFormation from './components/CompanyFormation';
import Compliance from './components/Compliance';
import GovernmentLiaison from './components/GovernmentLiaison';




class App extends Component {
 render() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='container vh-95'>
        <NavBar />
        <div className='no-title bg-white text-center'>
          <h4>Immigration and Regulatory Compliance Experts</h4>
          <hr></hr>
        </div>
        <Routes className='row'>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/company" element={<CompanyFormation />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/government" element={<GovernmentLiaison />} />



        </Routes>
        <Footer  className='row bottom-0' />
      </div>
    </Router>
  );
}
}

export default App;
