import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const rndimg = "https://picsum.photos/300/200?grayscale"


export default class Contacts extends Component {
  render() {
    return (
      <div className='row mb-5 mt-5 mx-3'>
         <div className="col-md-1 high-200 text-center">
          <img src={rndimg} />
        </div>     
        <div className="col-md-2 text-center">
        </div>
        <div className="col-md-4 m-auto text-center">
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
      </div>
    )
  }
}
