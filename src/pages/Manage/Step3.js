import React, {useState,useEffect} from 'react'
import { Data } from './Data.js';
import { IconContext } from 'react-icons';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import DropBox from './DropBox.js';


function Step3({numOfSessions,sessionDetails,setSessionDetails,setProceed, data}) {
    const [clicked, setClicked] = useState(false);
  
  
  useEffect(()=>{
    if(sessionDetails.length > 0){
      setProceed(true)
    }else{
      setProceed(false)
    }
    console.log(sessionDetails, "yyyyyyyy")
  },[sessionDetails])

    const toggle = index => { 
      console.log(data, "dddddddddds")
      setSessionDetails([ data])
      if (clicked === index) {
        //if clicked question is already active, then close it
        return setClicked(null);
      }
  
      setClicked(index);
    };
   

  return (
    <div className='step3' style={{paddingLeft: '32px'}}>
            <p style={{marginBottom: '0px', fontSize: '24px'}} className='fw-bold'>Creative Thinking for Beginers</p>
            <p className='text-muted'>Save to edit and publish later or publish to reach out to your customers.</p>

            <p style={{marginBottom: '0px'}} className='fw-bold'>Enter your Session schedule and details</p>
            <p className='text-muted'>Click on the session buttons to select data and time</p>

            <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
                <div className='AccordionSection'>
                    <div className='Contain1'>
                    {data.length > 0 && data.map((item, index) => {
                        return (
                        <>
                            <div className='Wrap p-3' onClick={() => toggle(index)} key={index}>
                            <h5 className='fw-bold' style={{width: "100%"}} >Session {item.sessionNum}</h5>
                            <span>{clicked === index ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</span>
                            </div>
                            {clicked === index ? (
                            <div className='Dropdown'>
                                <DropBox data={item} key={index} />
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