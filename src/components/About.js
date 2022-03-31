import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AboutUs from '../FINAL LOGO.svg';
import report from '../Flamingo PROFILE.pdf';
import ContactDetails from './ContactDetails';
 
export default class About extends Component {
  render() {
    return (
      <div className='container text-justify'>
        <Card>
            <Card.Img variant="top" src={AboutUs} />
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
              <p>We provide regulatory compliance solutions to multinational companies, and individuals prospecting business or employment opportunities in Zambia.</p>
              <p>Our team is backed by our Lead Consultant who comes with over 8 years experience in government relations and regulatory compliance management.</p>
              <ContactDetails />
              </Card.Text>
              <a href={report} attributes-list download><Button>Get more info</Button></a>
            </Card.Body>
        </Card>
      </div>
    )
  }  
}