import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBBtn,
  MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className='container pt-5 mt-auto mb-auto border-0 text-center'>
        <div className="row">
            <div className="col-sm-3 ">
                <div>
                    <h4>Services</h4>
                    <ul class="unstyled">
                        <li className='unstyled'><a href="/for-individuals.html">For Individuals</a></li>
                        <li class="item-343"><a href="/for-corporates.html">For Corporates</a></li>
                        <li class="item-345"><a href="/related-services.html">Related Services</a></li>
                        <li class="item-975"><a href="/immigration">Zambia Immigration</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-3 ">
                <div>
                    <h4>Visa Types</h4>
                    <ul class=" ">
                        <li class="item-347"><a href="/visa-and-permit-overview.html">Overview</a></li>
                        <li class="item-349"><a href="/work.html">Work</a></li>
                        <li class="item-351"><a href="/relative-spousal.html">Relative/Partner</a></li>
                        <li class="item-354"><a href="/residency.html">Permanent Stay</a></li>
                        <li class="item-348"><a href="/extended-visit.html">Extended Visit</a></li>
                        <li class="item-355"><a href="/citizenship.html">Citizenship</a></li>
                        <li class="item-350"><a href="/business.html">Business</a></li>
                        <li class="item-353"><a href="/study.html">Study</a></li>
                        <li class="item-352"><a href="/retirement-visa.html">Retirement</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-3 ">
                <div>
                    <h4>Related Topics</h4>
                    <ul class=" ">
                        <li class="item-359"><a href="/about-zambia.html">About Zambia</a></li>
                        <li class="item-360"><a href="/relocation.html">Immigration Topics</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-3 ">
                <div>
                    <h4>Connect with us</h4>
                    <ul class=" ">
                        <li class="item-356"><a href="https://www.linkedin.com/company/flamingo-consultancy-ltd" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                        <li class="item-357"><a href="/newsletter.html">Newsletter</a></li>
                        <li class="item-358"><a href="/contacts">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='md-9'>
                <MDBFooter className='text-center' color='black' bgColor='light'>
                {/* <MDBContainer className='p-4'>
                    <section className='mb-4'>
                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </a>

                    <a className='btn  btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                    </a>
                    </section>

                    <section className=''>
                    <form action=''>
                        <div className='row d-flex justify-content-center'>
                        <div className='col-auto'>
                            <p className='pt-2'>
                            <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        <MDBCol md='5' start='12'>
                            <MDBInput contrast type='email' label='Email address' className='mb-4' />
                        </MDBCol>

                        <div className='col-auto'>
                            <MDBBtn outline color='' type='submit' className='mb-4'>
                            Subscribe
                            </MDBBtn>
                        </div>
                        </div>
                    </form>
                    </section>

                    <section className='mb-4'>
                    <p>
                    </p>
                    </section>

                    <section className=''>
                    <MDBRow>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Links</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                            <a href='#!' className=''>
                                Link 1
                            </a>
                            </li>
                            <li>
                            <a href='#!' className=''>
                                Link 2
                            </a>
                            </li>
                        </ul>
                        </MDBCol>

                    </MDBRow>
                    </section>
                </MDBContainer> */}

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright: <a className='' href='https://www.flamingoconsul.com'>Flamingo Consultancy</a>
                </div>
                </MDBFooter>
            </div>
        </div>
    </div>
  );
}