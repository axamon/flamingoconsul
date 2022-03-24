import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import report from '../Flamingo PROFILE.pdf';
import ContactDetails from './ContactDetails';
import logo from '../FINAL LOGO.svg';


export default class Home extends Component {
  render() {
    return (
      <div className='text-justify'>
        
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Home</Card.Title>
              <Card.Text>
              <p>We are a dynamic compliance management consulting firm with unique specialization in immigration support, investment licensing support, company secretarial services, 360 degree compliance surveillance and management, and Government Relations.</p>
              <p>Our <b>mission</b> is to help businesses manage regulatory compliance risks by providingexective compliance management solutions</p>
              <p>Our <b>vision</b> is to be the consultant of choice for all business and individual regulatory compliance requirements.</p>
              <ContactDetails />
              </Card.Text>
              <a href={report} attributes-list download><Button>Get more info</Button></a>
            </Card.Body>
        </Card>
      </div>
    )
  }  
}