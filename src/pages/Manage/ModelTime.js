import React,{useState} from 'react';
import "./Model.css"
import {
  DatePicker,
  TimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns"
import TextField from '@mui/material/TextField';



const ModalTime = ({show, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [value, setValue] = useState(0);

  const handleChange = (date) => {
    setSelectedDate(date)
  }

  if (!show) return null;
  return (
    <div onClick={onClose} className='overlay Modal-box'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer modalTime'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div style={{width: '28rem', margin: '20px auto'}} className='content'>
            <div style={{width: '28rem'}}>
              <p style={{marginBottom: '0px'}} >Start With</p>
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
          
              <div className="d-flex justify-content-between my-2">

               <div style={{ marginRight: "10px" , border: '1px solid #b4a3a3'}} className="d-flex flex-column Timer">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                    label="Start With"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </MuiPickersUtilsProvider>
            </div>

            <div style={{border: '1px solid #b4a3a3'}} className="d-flex flex-column Timer">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                    label="End With"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </MuiPickersUtilsProvider>
            </div>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ModalTime;