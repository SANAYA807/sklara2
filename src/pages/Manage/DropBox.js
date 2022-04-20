import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import DateFnsUtils from "@date-io/date-fns"
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TimerIcon from '@mui/icons-material/Timer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { HiDotsVertical } from "react-icons/hi";

import {
  DatePicker,
  TimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import "./Step3.css"
import Modal from './Modal.js';


function DropBox() {
    const [openPointer, setopenPointer] = useState(false);
    const [openEditor, setopenEditor] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleChange = (date) => {
      setSelectedDate(date)
    }

    // useEffect(() => {
    //     const checkIfClickedOutside = e => {
    //       // If the menu is open and the clicked target is not within the menu,
    //       // then close the menu
    //       if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
    //         setIsMenuOpen(false)
    //       }
    //     }
    
    //     document.addEventListener("mousedown", checkIfClickedOutside)
    
    //     return () => {
    //       // Cleanup the event listener
    //       document.removeEventListener("mousedown", checkIfClickedOutside)
    //     }
    //   }, [openModal])

  return (
      <>
        <div
        style={{ marginBottom: "-22px", justifyContent: 'space-between', width: '100%'}}
        className="d-flex align-items-center flex-wrap my-4"
        >
            <div style={{ marginRight: "10px" }} className="d-flex flex-column">
                <p style={{marginBottom: '0px'}} className='fw-bold'>Select a date for the session</p>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleChange}
                    KeyboardButtonProps={{
                    "aria-label": "change date",
                    }}
                    invalidDateMessage="Computer says no"
                />
                </MuiPickersUtilsProvider>
            </div>

            <div className="d-flex flex-column">
                <div className='d-flex justify-content-end px-5' style={{marginLeft: '97px'}}>
                    <button className='btn px-3 py-2 btn-primary round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'white', width: '162px', fontWeight: '600' }}><AddIcon /> New Activity</button>
                </div>
            </div>
        </div>

            {openEditor &&
                <div style={{width: '320px', height: '60px'}} className='row editor-show'>
                    <div className='row hover-editor' style={{width: '73rem'}}>
                        <div style={{background: '#E6D9EF', width: '90px', height: '50px'}} className='m-1 p-0 d-flex justify-content-center align-items-center small'>
                            Add Row  
                        </div>
                        <div style={{background: '#E6D9EF', width: '91px', height: '50px', borderLeft: '3px solid white', borderRight: '3px solid white'}} className='m-1 p-0 d-flex justify-content-center align-items-center small'>
                            Delete Row
                        </div>
                        <div style={{background: '#E6D9EF', width: '90px', height: '50px'}} className='m-1 p-0 d-flex justify-content-center align-items-center small'>
                            Add Break
                        </div>
                    </div>
                </div>
            }
            
            <div style={{width: '98%', height: '200px'}} className='row' onMouseEnter={()=>setopenPointer(true)} onMouseLeave={()=>setopenPointer(false)} >
                <div className="dot-Pointer" style={{width: '45px'}} onClick={()=>setopenEditor(!openEditor)} >{openPointer && <div className="dot-Point" ><HiDotsVertical color="#550B7C" size={70} /></div>}</div>
                <div className='row hover-indicate modalButton p-0' style={{width: '71rem'}} onClick={() => setOpenModal(true)}>
                    <div style={{background: '#DFEEDB', width: '333px'}} className=' m-1 d-flex flex-column justify-content-center'>
                        <p><QueryBuilderIcon />Click to add time</p>
                        <p><TimerIcon /></p>
                        <Modal open={openModal} onClose={() => setOpenModal(false)} />
                    </div>
                    <div style={{background: '#17A2B8', width: '787px'}} className='m-1 p-4'>
                        What’s Covered:
                    </div>
                </div>
            </div>

            <div className="break-box my-3" > <div>Break +</div> </div>

            <div style={{width: '98%', height: '200px'}} className='row' onMouseEnter={()=>setopenPointer(true)} onMouseLeave={()=>setopenPointer(false)} >
                <div className="dot-Pointer" style={{width: '45px'}} onClick={()=>setopenEditor(!openEditor)} >{openPointer && <div className="dot-Point" ><HiDotsVertical color="#550B7C" size={70} /></div>}</div>
                <div className='row hover-indicate modalButton p-0' style={{width: '71rem'}} onClick={() => setOpenModal(true)}>
                    <div style={{background: '#FBDCAD', width: '333px'}} className=' m-1 d-flex flex-column justify-content-center'>
                        <p><QueryBuilderIcon />Click to add time</p>
                        <p><TimerIcon /></p>
                    </div>
                    <div style={{background: '#C026B7', width: '787px'}} className='m-1 p-4'>
                        What’s Covered:
                    </div>
                </div>
            </div>


    </>
  );
}

export default DropBox;
