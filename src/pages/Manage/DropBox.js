import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import DateFnsUtils from "@date-io/date-fns"
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TimerIcon from '@mui/icons-material/Timer';
import {
  DatePicker,
  TimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import "./Step3.css"
import { Modal } from "@mui/material";

function DropBox({data}) {
    console.log(data)
    const [openModal, setOpenModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleChange = (date) => {
      setSelectedDate(date)
    }

    const setInputs = (i)=>{
        return 
      }

  return (
      <>
      <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='p-4 center'
          style={{height:"60vh"}}>
<div className='col-md-4 center p-4 card shadow-sm'>
              <div className='mb-3'>
                <label>Topic</label>
                <input type="text" className='form-control'/>
              </div>
              <div className='mb-3'>
                <label>Duration</label>
                <div className='d-flex justify-content-between'>
                <input type="text" className='form-control'/>
                <input type="text" className='form-control'/>
                </div>
                <div className='d-flex justify-content-between'>
                <p className="text-secondary">Hours</p>
                <p className="text-secondary">Minutes</p>
                </div>
              </div>
              <div className='mb-3'>
                <label>Description</label>
                <textarea type="text" className='form-control'/>
              </div>
  
        </div>

          </Modal>


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

        {/* <div> */}
            <div style={{width: '100%', height: '200px',cursor:'pointer'}} className='row' onClick={() => setOpenModal(true)}>
                <div style={{background: '#DFEEDB'}} className='col-lg-3 col-sm-12 m-2 d-flex flex-column justify-content-center'>
                    <p><QueryBuilderIcon />Click to add time</p>
                    <p><TimerIcon /></p>
                </div>
                <div style={{background: '#17A2B8'}} className='col-lg-8 col-sm-12 m-2 p-4'>
                    What’s Covered:
                </div>
            </div>

            <div className="break-box my-3" >Break +</div>

            <div style={{width: '100%', height: '200px',cursor:'pointer'}} className='row' onClick={() => setOpenModal(true)}>
                <div style={{background: '#FBDCAD'}} className='col-lg-3 col-sm-12 mb-4 m-2 d-flex flex-column justify-content-center'>
                    <p><QueryBuilderIcon />Click to add time</p>
                    <p><TimerIcon /></p>
                </div>
                <div style={{background: '#C026B7'}} className='col-lg-8 col-sm-12 mb-4 m-2 p-4'>
                    What’s Covered:
                </div>
            </div>


        {/* </div> */}
    </>
  );
}

export default DropBox;
