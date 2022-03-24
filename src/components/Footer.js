import React from 'react';
import { BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import ContactDetails from './ContactDetails';

export default function App() {
  return (        
    <div id='footer' className='container pt-5 mt-auto mb-auto border-0 text-center'>
        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-5">
                <div>
                    <h4>Services</h4>
                    <small>
                        <ul class="unstyled">
                            <li><Nav.Link restricted={false} as={Link} to={"/immigration"}>Zambia Immigration</Nav.Link></li>
                            <li><Nav.Link restricted={false} as={Link} to={"/company"}>Company formation and Registration</Nav.Link></li>
                            <li><Nav.Link restricted={false} as={Link} to={"/compliance"}>Regulatory Compliance Management</Nav.Link></li>
                            <li><Nav.Link restricted={false} as={Link} to={"/government"}>Government Liaison Services</Nav.Link></li>
                        </ul>
                    </small>
                </div>
            </div>
            <div class="col-sm-5 col-md-6 col-lg-2">
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
            {/* <div class="col-sm-2">
                <div>
                    <h4>Related Topics</h4>
                    <small>
                        <ul class=" ">
                            <li class="item-359"><a href="/about-zambia.html">About Zambia</a></li>
                            <li class="item-360"><a href="/relocation.html">Immigration Topics</a></li>
                        </ul>
                    </small>
                </div>
            </div> */}
            <div class="col-sm-12 col-md5  col-xl-5 col-lg-5">
                <div>
                    <h4>Connect with us</h4>
                    <small>
                        <ul class=" ">
                            <li class="item-356"><a href="https://www.linkedin.com/company/flamingo-consultancy-ltd" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                            <li><ContactDetails /></li>
                        </ul>
                    </small>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='md-9'>
                <small>
                {/* <MDBFooter className='text-center' color='black' bgColor='white'> */}
                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', color: 'gray' }}>
                    Copyright <a className='' href='https://www.flamingoconsul.com'>Flamingo Consultancy</a> © 2022. All rights reserved.
                    </div>
                {/* </MDBFooter> */}
                </small>
            </div>
        </div>
    </div>
  );
}