import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Liaison from '../liaison.jpg';
import report from '../Flamingo PROFILE.pdf';
import ContactDetails from './ContactDetails';


export default class GovernmentLiaison extends Component {
  render() {
    return (
      <div className='text-justify'>
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={Liaison} />
            <Card.Body>
              <Card.Title>Government Liaison Services</Card.Title>
              <Card.Text>
                <p>We act as an official link to government contacts.</p>
                <p>We facilitate communication and build mutually beneficial relationships between our clients and various government entities to support their business goals.</p>
                <ContactDetails />
              </Card.Text>
              <a href={report} attributes-list download><Button>Get more info</Button></a>
            </Card.Body>
        </Card>
      </div>
    )
  }  
}

