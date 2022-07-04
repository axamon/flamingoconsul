import React, {Component, lazy, Suspense } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const NavBar = lazy(() => import('./components/navbar'));
const Footer = lazy(() => import('./components/Footer'));
const About = lazy(() => import('./components/About'));
const Contacts = lazy(() => import('./components/Contacts'));
const Home = lazy(() => import('./components/Home'));
const Immigration = lazy(() => import('./components/Immigration'));
const CompanyFormation = lazy(() => import('./components/CompanyFormation'));
const Compliance = lazy(() => import('./components/Compliance'));
const GovernmentLiaison = lazy(() => import('./components/GovernmentLiaison'));
const SendDocuments = lazy(() => import('./components/SendDocuments'));

const renderLoader = () => <p>Loading</p>;


class App extends Component {
 render() {
  return (
    <Suspense fallback={renderLoader}>
    <Router basename={process.env.PUBLIC_URL}>
      <div className='container vh-95 appear'>
        <NavBar />
        <div className='no-title bg-white text-center'>
          <h4 id="slogan" className='appear'>Immigration and Regulatory Compliance Experts</h4>
          <hr></hr>
        </div>
        <div className='uploadDocs'>
          <SendDocuments />
        </div>
        <br></br>
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
    </Suspense>
  );
}
}

export default App;
