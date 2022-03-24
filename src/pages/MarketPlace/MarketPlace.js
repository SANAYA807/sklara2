import React from 'react'
import "./MarketPlace.css"

export default function MarketPlace() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8]
  const arrayEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div className='search-outer pt-3'>
      <div className='container-md'>
        <h1 className='mb-4'>Find the perfect <span className="change-color">trainer or coach</span></h1>
        <div className="input-group mb-3 search-input-div shadow-sm">
          <input type="text" className="form-control" placeholder="Try 'Business Analysis'" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <span className="input-group-text search-icon" id="basic-addon2"><i className="fa fa-search fa-sm py-1"></i></span>
          </div>
        </div>
        <div className='mb-5'>
          <p align="left">
            <span className='search-popular'>Popular:</span>
            <a href="/#"><span className="badge badge-pill div-white-text-violet-bg">Business Analysis</span></a>&nbsp;
            <a href="/#"><span className="badge badge-pill div-white-text-violet-bg">AI in Business Decisions</span></a>&nbsp;
            <a href="/#"><span className="badge badge-pill div-white-text-violet-bg">Sales & Marketing</span></a>&nbsp;<br />
            <a href="/#"><span className="badge badge-pill div-white-text-violet-bg">No Code App Development</span></a>
          </p>
        </div>
        <div className='mb-4'>
          <h3>Our Recommendations</h3>
          <h6>based on your profile, preferences and activities</h6>
        </div>
        <div key="companies">
          <div className='search-top-company'>
            <p className='first m-0'>Top Corporate Trainers</p>
            <p className='text-secondary'>based on your preferences</p>
          </div>
          <div className='row'>
            {array.map((element, i) => {
              return <div key={i} className='col-lg-3 col-sm-12 mb-4'>
                <div className="card shadow-sm">
                  <img role="button" src="images/dummy/user4_big.jpg" className="card-img-top search-com-image" alt="..." />
                  <div className="card-body">
                    <span className='search-com-flag1'><img className="" src="	images/flags/de.svg" alt="" /></span>
                    <span className="search-com-flag2"><img className="img-fluid" src="	images/flags/en.svg" alt="" /></span>
                    <h5 className="card-title m-0">Rebecca Finch</h5>
                    <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                    <p className="search-experience"><small>Experience of 26 years</small></p>
                    <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                  </div>

                </div>
              </div>
            })}
          </div>
          <div className="text-end mb-4"><a href="/#" style={{ "color": "#550b7c", "textDecoration": "none" }}>Show All</a></div>
        </div>
        <div key="coaches">
          <div className='search-top-company'>
            <p className='first m-0'>Top Coaches</p>
            <p className='text-secondary'>based on your preferences</p>
          </div>
          <div className='row'>
            {array.map((element, i) => {
              return <div key={i} className='col-lg-3 col-sm-12 mb-4'>
                <div className="card shadow-sm">
                  <img role="button" src="images/dummy/user4_big.jpg" className="card-img-top search-com-image" alt="..." />
                  <div className="card-body">
                    <span className='search-com-flag1'><img className="" src="	images/flags/de.svg" alt="" /></span>
                    <span className="search-com-flag2"><img className="img-fluid" src="	images/flags/en.svg" alt="" /></span>
                    <h5 className="card-title m-0">Rebecca Finch</h5>
                    <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                    <p className="search-experience"><small>Experience of 26 years</small></p>
                    <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                  </div>

                </div>
              </div>
            })}
          </div>
          <div className="text-end mb-4"><a href="/#" style={{ "color": "#550b7c", "textDecoration": "none" }}>Show All</a></div>
        </div>
        <div key="events">
          <div className='search-top-company'>
            <p className='first m-0'>Top Training Events</p>
            <p className='text-secondary'>based on your preferences</p>
          </div>
          <div className='row'>
            {arrayEvents.map((element, i) => {
              return <div key={i} className='col-lg-4 col-sm-12 mb-4'>
                <div className="card shadow-sm">
                  <img role="button" src="images/dummy/user4_big.jpg" className="card-img-top search-com-image" alt="..." />
                  <div className="card-body">
                    <span className='search-com-flag1'><img className="" src="	images/flags/de.svg" alt="" /></span>
                    <span className="search-com-flag2"><img className="img-fluid" src="	images/flags/en.svg" alt="" /></span>
                    <h6 className="card-title m-0 mt-2">Understanding Analytical Tools (Expert)</h6>
                    <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                    <div className='row mb-3'>
                      <div className='col-6'>
                        <p className="search-experience"><small>Martin Jenkins</small></p>
                        <small><i className="mdi mdi-presentation"></i>6 sessions</small><br />
                        <small><i className="mdi mdi-account-multiple"></i>6 sessions</small>
                      </div>
                      <div className='col-6'>
                        <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                        <small><i className="mdi mdi-calendar"></i>6 sessions</small><br />
                        <small><i className="mdi mdi-account-multiple-outline"></i>6 sessions</small>
                      </div>
                    </div>
                    <small className='text-muted'>
                      This training is focussed on financial analytics in the banks and intervest micro financing companies. Bloomberg tools will be in focus....
                    </small>
                    <button className='btn search-event-button col-12 mt-3'><i className="mdi mdi-shopping"></i> Book Now @ <i className="mdi mdi-currency-eur"></i>325</button>
                  </div>
                </div>
              </div>
            })}
          </div>
          <div className="text-end mb-4"><a href="/#" style={{ "color": "#550b7c", "textDecoration": "none" }}>Show All</a></div>
        </div>
      </div >
      <div className='profile-end-div'>
        <div className='inner-profile-end text-center'>
          <h4>Do you need support in using the Talent Platform or Sklara Joyn?</h4>
          <p>Feel free to contact our IT Support.</p>
          <button type="button" className="btn mx-1 px-4">Email Us</button>
          <button type="button" className="btn mx-1 px-4">Call Us</button>
        </div>
      </div>
    </div>
  )
}

