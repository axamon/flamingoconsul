import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import report from '../Flamingo PROFILE.pdf';
import logo from '../FINAL LOGO.svg';
import CoreValues from './CoreValues';


export default class Home extends Component {
  render() {
    return (
      <div className='text-justify'>
        
        <Card>
            <Card.Img className="card" variant="top" src={logo} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
              <p>We are a dynamic compliance management consulting firm with unique specialization in immigration support, investment licensing support, company secretarial services, 360 degree compliance surveillance and management, and Government Relations.</p>
              <h2><b>Mission</b></h2>
              <p>To help businesses manage regulatory compliance risks by providing exective compliance management solutions</p>
              <h2><b>Vision</b></h2>
              <p>To be the consultant of choice for all business and individual regulatory compliance requirements.</p>
              <h2><b>Core Values</b></h2>
              <CoreValues />
              </Card.Text>
              <a href={report} attributes-list download><Button>Get more info</Button></a>
            </Card.Body>
        </Card>
      </div>
    )
  }  
}