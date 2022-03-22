import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/navbar';
import Footer from './components/Footer';

class App extends Component {
 render() {
  return (
    <>
      <NavBar />
      <Footer  className='row bottom-0' />
    </>
  );
}
}

export default App;
