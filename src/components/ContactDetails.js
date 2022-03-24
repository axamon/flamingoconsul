import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'


export default class ContactDetails extends Component {
  render() {
    return (
        <div>
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p><FontAwesomeIcon icon={faHome} /> B275/276 Off Lilayi Road, Lusaka<br />Lusaka, Lusaka 10101, ZM</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p><FontAwesomeIcon icon={faPhone} /> +260 977 885 755</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p><FontAwesomeIcon icon={faMailBulk} /> <a href='mailto:flamingoconsul@protonmail.com'>flamingoconsul@protonmail.com</a></p>
                </li>
            </ul>
        </div>
    )
  }
}
