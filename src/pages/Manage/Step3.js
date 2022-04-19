import React, {useState} from 'react'
import { Data } from './Data.js';
import { IconContext } from 'react-icons';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import DropBox from './DropBox.js';


function Step3() {
    const [clicked, setClicked] = useState(false);
  

    const toggle = index => {
      if (clicked === index) {
        //if clicked question is already active, then close it
        return setClicked(null);
      }
  
      setClicked(index);
    };
  return (
    <div className='step3' style={{paddingLeft: '32px'}}>
            <p style={{marginBottom: '0px'}} className='fw-bold'>Creative Thinking for Beginers</p>
            <p className='text-muted'>Save to edit and publish later or publish to reach out to your customers.</p>

            <p style={{marginBottom: '0px'}} className='fw-bold'>Enter your Session schedule and details</p>
            <p className='text-muted'>Click on the session buttons to select data and time</p>

            <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
                <div className='AccordionSection'>
                    <div className='Contain1'>
                    {Data.map((item, index) => {
                        return (
                        <>
                            <div className='Wrap p-3' onClick={() => toggle(index)} key={index}>
                            <h5 style={{width: "100%"}} >{item.question}</h5>
                            <span>{clicked === index ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</span>
                            </div>
                            {clicked === index ? (
                            <div className='Dropdown'>
                                <DropBox />
                            </div>
                            ) : null}
                        </>
                        );
                    })}
                    </div>
                </div>
                </IconContext.Provider>
    </div>
  )
}

export default Step3