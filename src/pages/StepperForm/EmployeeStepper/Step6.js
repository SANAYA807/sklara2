import React from 'react'

const Step6 = () => {
    return (
        <div className="align-items-center">
            <div className="border_input form_type">
                <label htmlFor="">New Password</label>
                <input type="password" placeholder='link' />

            </div>
        
            <div className="border_input form_type">
                <label htmlFor="">Repeat New Password</label>
                <input type="password" placeholder='link' />

            </div>
            <div className='d-flex justify-content-center pt-2'>
                <button className='btn px-3 py-2 btn-primary round_btn' style={{ "padding": "0 20px", fontWeight: '600', width: '340px', }}>Confirm</button>
            </div>
        </div>
         
    )
}

export default Step6