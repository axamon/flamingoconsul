import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ImmigrationDepartment from '../immigrationDepartment.jpg';
import report from '../Flamingo PROFILE.pdf';
import ContactDetails from './ContactDetails';


export default class Immigration extends Component {
  render() {
    return (
      <div className='text-justify'>
        
        <Card>
            <Card.Img variant="top" src={ImmigrationDepartment} />
            <Card.Body>
              <Card.Title>Immigration Services</Card.Title>
              <Card.Text>
              <p>We support individuals and corporate clients to acquire Zambian Visas and other immigration permits.</p>
              <p>We provide professional guidance on required visa application documentation to ensure successful outcomes.</p>
              <ContactDetails />
              </Card.Text>
              <a href={report} attributes-list download><Button>Get more info</Button></a>
            </Card.Body>
        </Card>
      </div>
    )
  }  
}

