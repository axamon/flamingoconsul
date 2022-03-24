import React, { Component } from 'react'
import zambiafingerprint from '../zambiafingerprint.png';

export default class Home extends Component {
  render() {
    return (
        <div>
          <img src={zambiafingerprint} height="140px" />
            <p>
                We are a dynamic compliance management consulting firm with unique specialization in immigration support, investment licensing support, company secretarial services, 360 degree compliance surveillance and management, and Government Relations.
            </p>
        </div>
    )
  }
}
