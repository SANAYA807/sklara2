import React, { useState } from 'react'
import StepperForm from '../StepperForm'
import Step1 from './Step1'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
const EmployeeForm = () => {
    const [step, setstep] = useState(1)
    const getStep = (item) => {
        setstep(item)
    }
    console.log(step);
    return (
        <div className='container-fluid px-5'>
            <StepperForm getStep={getStep} />
            {step === 1 && <Step1 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
            {step === 5 && <Step5 />}

            <div className='d-flex justify-content-end my-5 pt-5'>
                <button className='btn px-3 py-2 btn-light round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'grey', width: '130px', fontWeight: '600' }}>Cancel</button>
                <button className='btn px-3 py-2 btn-primary round_btn' style={{ "padding": "0 20px", fontWeight: '600', width: '130px', marginLeft: '20px' }}>Continue</button>
            </div>

        </div>
    )
}

export default EmployeeForm