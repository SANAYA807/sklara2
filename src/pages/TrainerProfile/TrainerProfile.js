import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './TrainerProfile.css';
import ContactFooter from '../../components/ContactFooter/ContactFooter';
import Calandar from '../../components/Calandar/Calandar';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import EuroIcon from '@mui/icons-material/Euro';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Carousel } from 'react-bootstrap';
import { useRef, useState } from 'react';

function TrainerProfile() {


  const arrayEvents = [1, 2, 3]
  const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  return (
    <>
      <Navbar />
      <div className='outer-tp pt-3'>
        <div className='container-md'>
          <h2>Profile of <span className='change-color'>Martin Krugger</span></h2>
          <p className='text-muted'><small>Trainer & Coaches can see limited information about you </ small></p>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 common-card'>
              <div className="card">
                <img src="images/dummy/user2_big.jpg" className="card-img-top tp-image" alt="..." />
                <div className="card-body">
                  <span className='tp-flag1'><img className="" src="images/flags/de.svg" alt="" /></span>
                  <span className="tp-flag2"><img className="img-fluid" src="images/flags/en.svg" alt="" /></span>
                  <h4 className="card-title">Martin Krugger</h4>
                  <p className='' style={{ "color": "#cccccc" }}><small>Start-Ups, Marketing & Sales, Leaderships, Negotiations</small></p>
                  <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>4.9</span><small style={{ "color": "#cccccc" }}>(69)</small></p>
                  <div>
                    <p className="tp-grey m-0"><small>Industry Focus</small></p>
                    <a href="/#"><span className="badge badge-pill tp-yellow">Chemical Engineering</span></a>&nbsp;
                    <a href="/#"><span className="badge badge-pill tp-blue">Oil & Natural Gas</span></a>&nbsp;
                    <a href="/#"><span className="badge badge-pill tp-green">Energy</span></a>&nbsp;
                  </div>
                  <div className='mt-3'>
                    <p className="tp-grey m-0"><small>Industry Focus</small></p>
                    <a href="/#"><span className="badge badge-pill tp-yellow">Start-Ups</span></a>&nbsp;
                    <a href="/#"><span className="badge badge-pill tp-light-blue">Oil & Natural Gas</span></a>&nbsp;
                    <a href="/#"><span className="badge badge-pill tp-green">Marketing & Sales</span></a>&nbsp;
                    <a href="/#"><span className="badge badge-pill tp-red">Leaderships</span></a>&nbsp;
                    <a href="/#"><span className="badge badge-pill tp-blue">Negotiations</span></a>&nbsp;
                  </div>
                  <div className='d-flex justify-content-center my-3'>
                    <button className='btn tp-event-button mt-3'><small><ChatBubbleIcon fontSize='14px' /> Contact Martin </small></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-sm-12 common-card'>
              <div className="card" style={{ "fontSize": "14px" }}>
                <div className="card-body row mt-3">
                  <div className='col-4'>
                    <div className="mb-5">
                      <small className='text-muted m-0 p-0'>From</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>Germany</p>
                    </div>
                    <div className="mb-5">
                      <small className='text-muted m-0 p-0'>Avg. Response Time</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>1 day</p>
                    </div>
                    <div className="mb-5">
                      <small className='text-muted m-0 p-0'>Total Sessions</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>69</p>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className="mb-5">
                      <small className='text-muted m-0 p-0'>Experience</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>13 Years</p>
                    </div>
                    <div className="mb-5">
                      <small className='text-muted m-0 p-0'>Last Delivery</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>3 days ago</p>
                    </div>
                    <div className="mb-5">
                      <small className='text-muted m-0 p-0'>Total Participants</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>755</p>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className="mb-5">
                      <small className='text-muted m-0 p-0'>Trainer Since</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>2009</p>
                    </div>
                    <div className="mb-5">
                      <small className='text-muted m-0 p-0'>Languages</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>English, German</p>
                    </div>
                    <div className="mb-5">
                      <small className='text-muted m-0 p-0'>Avg. Session Size</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>11 Participants</p>
                    </div>
                  </div>
                  <div className='px-3'>
                    <hr className='text-muted' />
                  </div>
                  <div className='mb-5'><small>
                    Martin has corporate training experience of more than 13 years and overall experience of 25+ years.
                    He has worked in Chemical and Fertilizer Industries for more than two decades and has excelled in
                    leadership and mentorship positions. He has worked in Chemical and Fertilizer Industries for more than
                    two decades and has excelled in leadership and mentorship positions.</small>
                  </div>
                </div>
              </div>
            </div>
            <h2>Availbility Calendar of <span className='change-color'>Martin Krugger</span></h2>
            <p className='text-muted'><small>Select a date to find available time slots</ small></p>
            <br />
            <div className='col-12 common-card'>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Your <span className='change-color'>Reports</span></h3>
                  <p className='text-muted'><small>Only you and your HR Manager can see</ small></p>
                  <Calandar />
                </div>
                <hr className='text-muted mb-5' />
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <h2 className='mb-3'>Upcoming Events</h2>
              <div>
                <button
                  className="carousel-buttons mx-2 mb-3 mr-1 pb-1 shadow-sm"
                  onClick={onPrevClick}
                >
                  <ArrowBackIosNewIcon fontSize='small' />
                </button>
                <button
                  className="carousel-buttons mb-3 pb-1 shadow-sm"
                  onClick={onNextClick}
                >
                  <ArrowForwardIosIcon fontSize='small' />
                </button>
              </div>
            </div>
            <Carousel ref={ref} nextIcon="false" prevIcon="false" indicators={false} controls={false} interval={null}>
              <Carousel.Item>
                <div className='row'>
                  {arrayEvents.map((element, i) => {
                    return <div key={i} className='col-lg-4 col-sm-12 mb-4'>
                      <div className="card shadow-sm">
                        <img role="button" src="images/dummy/training01.jpg" className="card-img-top mp-com-image" alt="..." />
                        <div className="card-body">
                          <span className='tp-com-flag1'><img className="" src="images/flags/de.svg" alt="" /></span>
                          <h6 className="card-title m-0 mt-2">Understanding Analytical Tools (Expert)</h6>
                          <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                          <div className='row mb-3'>
                            <div className='col-6'>
                              <p className="tp-grey"><small>Martin Jenkins</small></p>
                              <small><CropLandscapeIcon fontSize="small" />6 sessions</small><br />
                              <small><CalendarMonthIcon fontSize="small" />  26 Jan, 2022</small>
                            </div>
                            <div className='col-6'>
                              <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                              <small><PeopleIcon fontSize="small" />10 seats</small><br />
                              <small><PeopleOutlineIcon fontSize="small" />3 seats left</small>
                            </div>
                          </div>
                          <small className='text-muted'>
                            This training is focussed on financial analytics in the banks and intervest micro financing companies. Bloomberg tools will be in focus....
                          </small>
                          <button className='btn mp-event-button col-12 mt-3'><small><ShoppingBagIcon className='pb-1' fontSize='small' /> Book Now @ <EuroIcon className='pb-1' fontSize='small' />325</small></button>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='row'>
                  {arrayEvents.map((element, i) => {
                    return <div key={i} className='col-lg-4 col-sm-12 mb-4'>
                      <div className="card shadow-sm">
                        <img role="button" src="images/dummy/training02.jpg" className="card-img-top mp-com-image" alt="..." />
                        <div className="card-body">
                          <span className='tp-com-flag1'><img className="" src="images/flags/de.svg" alt="" /></span>
                          <h6 className="card-title m-0 mt-2">Understanding Analytical Tools (Expert)</h6>
                          <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                          <div className='row mb-3'>
                            <div className='col-6'>
                              <p className="tp-grey"><small>Martin Jenkins</small></p>
                              <small><CropLandscapeIcon fontSize="small" />6 sessions</small><br />
                              <small><CalendarMonthIcon fontSize="small" />  26 Jan, 2022</small>
                            </div>
                            <div className='col-6'>
                              <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                              <small><PeopleIcon fontSize="small" />10 seats</small><br />
                              <small><PeopleOutlineIcon fontSize="small" />3 seats left</small>
                            </div>
                          </div>
                          <small className='text-muted'>
                            This training is focussed on financial analytics in the banks and intervest micro financing companies. Bloomberg tools will be in focus....
                          </small>
                          <button className='btn mp-event-button col-12 mt-3'><small><ShoppingBagIcon className='pb-1' fontSize='small' /> Book Now @ <EuroIcon className='pb-1' fontSize='small' />325</small></button>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </Carousel.Item>
            </Carousel>
            <h2 className='mb-3'>Pass 3 Sessions & Feedback of Martin</h2>
            {arrayEvents.map((element, i) => {
              return <div key={i} className='col-lg-4 col-sm-12 mb-4'>
                <div className="card shadow-sm">
                  <img role="button" src="images/dummy/training02.jpg" className="card-img-top mp-com-image" alt="..." />
                  <div className="card-body">
                    <span className='tp-com-flag1'><img className="" src="images/flags/de.svg" alt="" /></span>
                    <h2 className="card-title m-0 mt-2 mb-">Understanding Analytical Tools (Expert)</h2>
                    <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                    <div className='row mb-3'>
                      <div className='col-6'>
                        <p className="tp-grey"><small>Martin Jenkins</small></p>
                        <small><CalendarMonthIcon fontSize="small" />  26 Jan, 2022</small>
                      </div>
                      <div className='col-6'>
                        <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                        <small><PeopleIcon fontSize="small" />10 participants</small><br />
                      </div>
                    </div>
                    <small className='text-muted'>
                      10 participant attended this event on 26 Jan, 2022. The average feedback based on ratings are as follows:
                    </small>
                    <div className='d-flex mt-3'>
                      <img src="images/star.png" className='tp-star' alt='star' />
                      <img src="images/star.png" className='tp-star' alt='star' />
                      <img src="images/star.png" className='tp-star' alt='star' />
                      <img src="images/star.png" className='tp-star' alt='star' />
                      <img src="images/star.png" className='tp-star' alt='star' />
                      <small>(5)</small>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div >
      <ContactFooter />
      <Footer />
    </>
  );
}

export default TrainerProfile;
