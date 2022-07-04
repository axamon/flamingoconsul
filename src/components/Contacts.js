import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import logo from '../FINAL LOGO.svg';
import report from '../Flamingo PROFILE.pdf';
import ContactDetails from './ContactDetails';
import CoreValues from './CoreValues';



export default class Contacts extends Component {
  render() {
    return (
      <div className='text-justify'>
        
        <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
              <ContactDetails />
              </Card.Text>
            </Card.Body>
        </Card>
      </div>
    )
  }  
}

