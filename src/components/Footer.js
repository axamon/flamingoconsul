import React from 'react';
import { BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBBtn,
  MDBRow
} from 'mdb-react-ui-kit';
import { Nav } from 'react-bootstrap';

export default function App() {
  return (        
    <div className='container pt-5 mt-auto mb-auto border-0 text-center'>
        <div className="row">
            <div className="col-sm-3 ">
                <div>
                    <h4>Services</h4>
                    <small>
                        <ul class="unstyled">
                            <li class="item-975"><Nav.Link restricted={false} as={Link} to={"/immigration"}>Zambia Immigration</Nav.Link></li>
                            <li class="item-343"><Nav.Link restricted={false} as={Link} to={"/company"}>Company formation and Registration</Nav.Link></li>
                            <li class="item-975"><Nav.Link restricted={false} as={Link} to={"/compliance"}>Regulatory Compliance Management</Nav.Link></li>
                            <li class="item-975"><Nav.Link restricted={false} as={Link} to={"/government"}>Government Liaison Services</Nav.Link></li>
                        </ul>
                    </small>
                </div>
            </div>
            <div class="col-sm-3 ">
                <div>
                    <h4>Permit Types</h4>
                    <small>
                        <ul class=" ">
                            <li class="item-347"><a href="/employment">Employment</a></li>
                            <li class="item-349"><a href="/residence">Residence</a></li>
                            <li class="item-351"><a href="/investor">Investor</a></li>
                            <li class="item-354"><a href="/study">Study</a></li>
                            <li class="item-355"><a href="/citizenship">Citizenship</a></li>
                        </ul>
                    </small>
                </div>
            </div>
            <div class="col-sm-3 ">
                <div>
                    <h4>Related Topics</h4>
                    <small>
                        <ul class=" ">
                            <li class="item-359"><a href="/about-zambia.html">About Zambia</a></li>
                            <li class="item-360"><a href="/relocation.html">Immigration Topics</a></li>
                        </ul>
                    </small>
                </div>
            </div>
            <div class="col-sm-3 ">
                <div>
                    <h4>Connect with us</h4>
                    <small>
                        <ul class=" ">
                            <li class="item-356"><a href="https://www.linkedin.com/company/flamingo-consultancy-ltd" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                            <li class="item-357"><a href="/newsletter.html">Newsletter</a></li>
                            <li class="item-358"><a href="/contacts">Contact</a></li>
                        </ul>
                    </small>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='md-9'>
                <MDBFooter className='text-center' color='black' bgColor='light'>
                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2022 Copyright: <a className='' href='https://www.flamingoconsul.com'>Flamingo Consultancy</a>
                    </div>
                </MDBFooter>
            </div>
        </div>
    </div>
  );
}