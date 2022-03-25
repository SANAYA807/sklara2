import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import CalenderCard from '../../components/Calender/Calender';
import HighlightIcon from '@mui/icons-material/Highlight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
const CoachProfile = () => {
    return (
        <div>
            <Navbar />
            <div className='outer-profile pt-3'>
                <div className='container-md'>
                    <h2 >Coach's Profile :: <span className='change-color'> Martin Krugger</span></h2>
                    <p className='text-muted'><small>Business Coach</small></p>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 common-card'>
                            <div className="card">
                                <button type="button" className="btn profile-settings"><i class="fa-solid fa-gear"></i></button>
                                <img src="	http://18.157.84.45/design/images/dummy/user2_big.jpg" className="card-img-top profile-image" alt="..." />
                                <div className="card-body">
                                    <span className='profile-flag1'><img className="" src="	http://18.157.84.45/design/images/flags/de.svg" alt="" /></span>
                                    <span className="profile-flag2"><img className="img-fluid" src="http://18.157.84.45/design/images/flags/en.svg" alt="" /></span>
                                    <h4 className="card-title">Martin Krugger</h4>
                                    <small className='inner-text'>Start-Ups, Marketing & Sales, Leaderships, Negotiations</small>
                                    <br />
                                    <StarRoundedIcon style={{ color: '#ffc100' }} />
                                    <span className='rating'> 4.9</span>
                                    <small className='inner-text'> (69)</small>
                                    <div className='mt-4'>
                                        <small className='text-muted m-0 p-0'>Industry Focus</small>
                                        <br />
                                        <div className="badges">
                                            <h6 className=" badge bg-warning">Oil & Natural Gas</h6>
                                            <h6 className="badge bg-info">Chemical Engineering</h6>
                                            <h6 className="badge bg-success">Energy</h6>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <small className='text-muted m-0 p-0'>Expertise</small>
                                        <br />
                                        <div className="badges">
                                            <h6 className=" badge bg-warning">Oil & Natural Gas</h6>
                                            <h6 className="badge bg-info">Chemical Engineering</h6>
                                            <h6 className="badge bg-success">Energy</h6>
                                            <h6 className="badge bg-danger">Leaderships</h6>
                                            <h6 className="badge bg-primary">Energy</h6>


                                        </div>
                                    </div>
                                    <div className="center">
                                        <button className='btn shadow btn-primary text-light coach-btn'> <ChatBubbleRoundedIcon fontSize='small' /> Contact martin</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 common-card'>
                            <div className="card coach-card" style={{ "fontSize": "14px" }}>
                                <div className="card-body row mt-3">
                                    <div className='col-4'>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>From</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>Germany</p>
                                        </div>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Works At</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>Bosch </p>
                                        </div>
                                        <div className="mb-2">
                                            <small className='text-muted m-0 p-0'>Email Address</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>rebecca@somemail.com</p>
                                        </div>

                                    </div>
                                    <div className='col-4'>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Experience</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>13 Years</p>
                                        </div>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Languages</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>English, German</p>
                                        </div>
                                        <div className="mb-2">
                                            <small className='text-muted m-0 p-0'>Phone Number</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>+49 172 575 9260</p>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Experience</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>13 Years</p>
                                        </div>

                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Highest Qualification</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>Dr. Ing</p>
                                        </div>
                                        <div className="mb-2">
                                            <small className='text-muted m-0 p-0'>Linked In Profile</small>
                                            <div>
                                                <a href='/' className='m-0 p-0' style={{ "fontWeight": "500", "textDecoration": "none" }}>Open Profile</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="description">
                                        <p>Martin has corporate training experience of more than 13 years and overall experience of 25+ years. He has worked in Chemical and Fertilizer Industries for more than two decades and has excelled in leadership and mentorship positions. He has worked in Chemical and Fertilizer Industries for more than two decades and has excelled in leadership and mentorship positions.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <h3 className="card-title">Availaiblity Calender of <span className='change-color'>Martin Krugger</span></h3>
                        <p className='text-muted'><small>Select a date to find available time slots</small></p>

                        <div className='common-card'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-lg-6 ">
                                        <CalenderCard />
                                        <div className='alignRight'><small className='text-muted '>Highlights indicate martin is busy on those dates</small></div>
                                        <h6 className='mb-0 mt-5'>Want a personalized training from Martin, for you or your team?</h6>
                                        <p><small className='text-muted '>You will have the opportunity to add your requirements in the following pages.</small></p>
                                        <button className='btn shadow btn-primary text-light coach-btn mt-0'> Request Booking</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {[1, 2, 3, 4].map(() =>
                            <div className='col-lg-6 col-sm-12 mt-3'>
                                <div className="card">
                                    <div className="card-body p-4 pb-5 row">
                                        <div className='col-1 ml-2 d-flex justify-content-end'><HighlightIcon style={{ color: '#1fd0b6' }} /></div>
                                        <div className='col-11'>
                                            <h6>How to be a pro using AI tools</h6>
                                            <span className='review-flag1'><img className="" src="	http://18.157.84.45/design/images/flags/de.svg" alt="" /></span>
                                            {[1, 1, 1, 1].map(item => <StarRoundedIcon fontSize='smaller' style={{ color: '#ffc100' }} />)}
                                            <small className='text-muted'>review from Germany</small>

                                            <p className='mt-4'> It was a great experience. Martin explained the basics very interestingly and the advanced stuff was approached with great examples.</p>
                                            <CalendarTodayIcon fontSize='smaller' style={{ color: '6c757d' }} />
                                            <PeopleIcon fontSize='smaller' style={{ color: '#6c757d', marginLeft: '25px' }} />
                                            <small className='text-muted ml-1'>10 participants</small>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                        <a href="#" className='view-all'><small> View All</small></a>
                        <div className="center">
                            <button className='btn shadow btn-primary text-light coach-btn mb-5'> <ChatBubbleRoundedIcon fontSize='small' /> Contact martin</button>
                        </div>
                    </div>
                </div>

                <div className='profile-end-div'>
                    <div className='inner-profile-end text-center'>
                        <h4>Do you need support in using the Talent Platform or Sklara Joyn?</h4>
                        <p>Feel free to contact our IT Support.</p>
                        <button type="button" className="btn mx-1 px-4">Email Us</button>
                        <button type="button" className="btn mx-1 px-4">Call Us</button>
                    </div>
                </div>
            </div>
            <Footer />


        </div>
    )
}

export default CoachProfile