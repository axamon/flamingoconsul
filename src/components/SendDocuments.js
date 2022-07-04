import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import UploadFile from '../uploadfile.png';
import Button from 'react-bootstrap/Button'
import report from '../Flamingo PROFILE.pdf';

export class SendDocuments extends Component {
  render() {
    return (
        <div className='text-justify'>
        
        <Card>
            {/* <Card.Img variant="top" src={UploadFile} /> */}
            <Card.Body>
              {/* <Card.Title>Upload documents</Card.Title> */}
              <Card.Text>
              <a href={report} attributes-list download><Button >Get more info of the company</Button></a>
              <span>   </span>
              <a href='https://www.dropbox.com/request/3anRrp91CfqQfcsmD2fB' target="_blank" attributes-list download><Button>Upload your documents</Button></a>
              </Card.Text>
            </Card.Body>
        </Card>
      </div>
    )
  }
}

export default SendDocuments