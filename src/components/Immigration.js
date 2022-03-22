import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ImmigrationDepartment from '../immigrationDepartment.jpg';


export default class Immigration extends Component {
  render() {
    return (
      <div className='text-justify'>
        
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={ImmigrationDepartment} />
            <Card.Body>
              <Card.Title>Immigration</Card.Title>
              <Card.Text>
              <p>We support individuals and corporate clients to acquire Zambian Visas and other immigration permits.</p>
        <p>We provide professional guidance on required visa application documentation to ensure successful outcomes.</p>
              </Card.Text>
              <Button variant="primary">More info</Button>
            </Card.Body>
        </Card>
      </div>
    )
  }  
}

