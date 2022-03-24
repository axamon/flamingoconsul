import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Companyreg from '../companyreg.jpg';
import report from '../Flamingo PROFILE.pdf';
import ContactDetails from './ContactDetails';



export default class CompanyFormation extends Component {
  render() {
    return (
      <div className='text-justify'>
        
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={Companyreg} />
            <Card.Body>
              <Card.Title>Company Formation and Registration</Card.Title>
              <Card.Text>
              <p>We work with local and foreign prospective investors to incorporate businesses and bring their investment goals to life.</p>
              <ContactDetails />
              </Card.Text>
              <a href={report} attributes-list download><Button>Get more info</Button></a>
            </Card.Body>
        </Card>
      </div>
    )
  }  
}

