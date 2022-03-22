import React, { Component } from 'react'
import zambiafingerprint from '../zambiafingerprint.png';

export default class Home extends Component {
  render() {
    return (
        <div>
          <img src={zambiafingerprint} height="140px" />
            <p>
                We help businesses manage regulatory compliance risks by providing executive compliance management solutions.
            </p>
        </div>
    )
  }
}
