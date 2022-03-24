import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ComplianceImg from '../compliance.jpg';
import report from '../Flamingo PROFILE.pdf';
import ContactDetails from './ContactDetails';



export default class Compliance extends Component {
  render() {
    return (
      <div className='text-justify'>
        
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={ComplianceImg} />
            <Card.Body>
              <Card.Title>Regulatory Compliance Management</Card.Title>
              <Card.Text>
              <p>We help our clients to de-risk their operations from government-facing
              disruptions by providing regulatory compliance management systems to help keep
              them complaint with legal regulations and guidelines relevant to their business
              processes.</p>
              <ContactDetails />
              </Card.Text>
              <a href={report} attributes-list download><Button>Get more info</Button></a>
            </Card.Body>
        </Card>
      </div>
    )
  }  
}

