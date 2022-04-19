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

function DropBox() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleChange = (date) => {
      setSelectedDate(date)
    }
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

        {/* <div> */}
            <div style={{width: '100%', height: '200px'}} className='row'>
                <div style={{background: '#DFEEDB'}} className='col-lg-3 col-sm-12 m-2 d-flex flex-column justify-content-center'>
                    <p onClick={() => setOpenModal(true)}><QueryBuilderIcon />Click to add time</p>
                    <p><TimerIcon /></p>
                </div>
                <div style={{background: '#17A2B8'}} className='col-lg-8 col-sm-12 m-2 p-4'>
                    What’s Covered:
                </div>
            </div>

            <div className="break-box my-3" >Break +</div>

            <div style={{width: '100%', height: '200px'}} className='row'>
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
