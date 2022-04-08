import React from 'react'
import './StepperForm.css'
const StepperForm = () => {
    return (
        <div className='container py-3'>
            <div> <img src="./images/logo_sklara.svg" alt="" className='logo' /></div>
            <div className="row mt-4">
                <div className="col-md-5">
                    <h4 className="heading">John, please complete the registration</h4>
                    <br />
                    <p className="text-muted mb-0">Step one of seven</p>
                    <ul className='d-flex align-items-center ps-0'>{[1, 2, 3, 4, 5, 6, 7].map((item, i) => <li className='steps' key={i}>{item}</li>)}</ul>
                </div>
                <div className="col-md-7">
                    <div className="invitation px-3 py-4 d-flex">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" alt="" height={80} />
                        <div>
                            <p className='mb-0'>You were invited by</p>
                            <h6 className='mb-0'>Lorem</h6>
                            <p className="text-muted">23 mmin ago</p>

                            <h6>Invitation will expire within 24 days</h6>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default StepperForm