import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './Profile.css';

function Profile() {
  return (
    <>
    <div className='outer-profile pt-3'>
      <div className='container-md'>
        <h2 className='change-color'>My Profile</h2>
        <p className='text-muted'><small>Trainer & Coaches can see limited information about you </ small></p>
        <div className='row'>
          <div className='col-lg-6 col-sm-12 common-card'>
            <div className="card">
              <button type="button" className="btn profile-settings"><i class="fa-solid fa-gear"></i></button>
              <img src="images/dummy/user4_big.jpg" className="card-img-top profile-image" alt="..." />
              <div className="card-body">
                <span className='profile-flag1'><img className="" src="	http://18.157.84.45/design/images/flags/de.svg" alt="" /></span>
                <span className="profile-flag2"><img className="img-fluid" src="	http://18.157.84.45/design/images/flags/en.svg" alt="" /></span>
                <h4 className="card-title mb-5">Rebecca Finch</h4>
                <p className='mb-5' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                <hr className='text-muted' />
                <div className='d-flex justify-content-between'>
                  <small className='text-muted'>Platform Language</small>
                  <small className='text-muted'>Default Platform Mode</small>
                </div>
                <div className='d-flex justify-content-between'>
                  <p>English</p>
                  <p>Training</p>

                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-sm-12 common-card'>
            <div className="card" style={{ "fontSize": "14px" }}>
              <div className="card-body row mt-3">
                <div className='col-6'>
                  <div className="mb-4">
                    <small className='text-muted m-0 p-0'>From</small>
                    <p className='m-0 p-0' style={{ "fontWeight": "500" }}>Germany</p>
                  </div>
                  <div className="mb-4">
                    <small className='text-muted m-0 p-0'>Works At</small>
                    <p className='m-0 p-0' style={{ "fontWeight": "500" }}>Bosch Ingeneurgeleschaft Gmbh</p>
                  </div>
                  <div className="mb-4">
                    <small className='text-muted m-0 p-0'>Email Address</small>
                    <p className='m-0 p-0' style={{ "fontWeight": "500" }}>rebecca@somemail.com</p>
                  </div>
                  <div className="mb-4">
                    <small className='text-muted m-0 p-0'>Date of Birth</small>
                    <p className='m-0 p-0' style={{ "fontWeight": "500" }}>16.07.1972</p>
                  </div>
                  <div className="mb-4">
                    <small className='text-muted m-0 p-0'>Experience</small>
                    <p className='m-0 p-0' style={{ "fontWeight": "500" }}>21 years</p>
                  </div>
                </div>
                <div className='col-6'>
                  <div className="mb-4">
                    <small className='text-muted m-0 p-0'>Experience</small>
                    <p className='m-0 p-0' style={{ "fontWeight": "500" }}>13 Years</p>
                  </div>
                  <div className="mb-4">
                    <small className='text-muted m-0 p-0'>Languages</small>
                    <p className='m-0 p-0' style={{ "fontWeight": "500" }}>English, German</p>
                  </div>
                  <div className="mb-4">
                    <small className='text-muted m-0 p-0'>Phone Number</small>
                    <p className='m-0 p-0' style={{ "fontWeight": "500" }}>+49 172 575 9260</p>
                  </div>
                  <div className="mb-4">
                    <small className='text-muted m-0 p-0'>Highest Qualification</small>
                    <p className='m-0 p-0' style={{ "fontWeight": "500" }}>Dr. Ing</p>
                  </div>
                  <div className="mb-4">
                    <small className='text-muted m-0 p-0'>Linked In Profile</small>
                    <div>
                      <a href='/' className='m-0 p-0' style={{ "fontWeight": "500", "textDecoration": "none" }}>Open Profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-sm-12 common-card'>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Your <span className='change-color'>Reports</span></h3>
                <p className='text-muted'><small>Only you and your HR Manager can see</ small></p>
                <div className='mx-4 mt-4 mb-2'>
                  <div>
                    <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "500" }}></i>
                    <small className='text-muted mx-1'>My Activities & Learnings</small>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                    <small className='text-muted mx-1'>My Skillsets</small>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                    <small className='text-muted mx-1'>My Certificates</small>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                    <small className='text-muted mx-1'>My Badges</small>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                    <small className='text-muted mx-1'>My Browser Sessions</small>
                  </div>
                </div>
              </div>
              <hr className='text-muted mb-5' />
            </div>
          </div>
          <div className='col-lg-6 col-sm-12 common-card'>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Our <span className='change-color'>Privacy and Policies</span></h3>
                <p className='text-muted'><small>Upskilly's policies pertaining to your data</ small></p>
                <div className='mx-4 mt-4 mb-2'>
                  <div>
                    <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "500" }}></i>
                    <small className='text-muted mx-1'>Contact the Privacy Officer</small>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                    <small className='text-muted mx-1'>Data Requests</small>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                    <small className='text-muted mx-1'>Export My Data</small>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                    <small className='text-muted mx-1'>Delete My Account</small>
                  </div>
                </div>
              </div>
              <hr className='text-muted mb-5' />
            </div>
          </div>
          <div className='col-12 col-12 common-card'>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title"><span className='change-color'>Login Activity</span></h3>
                <p className='text-muted'><small>Only you and your HR Manager can see</ small></p>
                <div className='card mb-5' style={{ "boxShadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", "backgroundColor": "#fff3cd" }}>
                  <div className='card-body pb-1'>
                    <p style={{ "fontWeight": "500" }}><small>First access to site</small></p>
                    <p><small>Monday, 20th November 2021, 4:43 PM (96 days ago)</small></p>
                  </div>
                </div>
                <div className='card' style={{ "boxShadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", "backgroundColor": "#d4edda" }}>
                  <div className='card-body pb-1'>
                    <p style={{ "fontWeight": "500" }}><small>Last access to site</small></p>
                    <p><small>Friday, 11th February 2021, 10:17 AM (2 days ago)</small></p>
                  </div>
                </div>
              </div>
              <hr className='text-muted mb-5' />
            </div>
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
    </div >
    </>
  );
}

export default Profile;
