import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import DateFnsUtils from "@date-io/date-fns"
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TimerIcon from '@mui/icons-material/Timer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { HiDotsVertical } from "react-icons/hi";
import CancelIcon from '@mui/icons-material/Cancel';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


import {
  DatePicker,
  TimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import "./Step3.css"
import Modal from './Modal.js';
import { Groups } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import ModalTime from "./ModelTime";



function DropBox({data,key}) {
    const [session , setSession] = useState(["row", "break", "row"])
    const [openPointer, setopenPointer] = useState(-1);
    const [value, setValue] = useState(0);
    const [openEditor, setopenEditor] = useState(false);
    const [indexs, setIndexs] = useState(-1);
    const [openModal, setOpenModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [show, setShow] = useState(false);


    const handleModelEvent = (index) => {
        setIndexs(index)
        setOpenModal(true)
      }

      const handleOpenEditor = (index, open) => {
        setIndexs(index)
        setopenEditor(open)
      }

   const deleteBreak = (index) => {
    const reducedArr = [...session];

    reducedArr.splice(index, 1);

    setSession([...reducedArr])
   }

    const handleChange = (date) => {
      setSelectedDate(date)
    }

    const showHoveredHandler = (i)=>{
        setopenPointer(i);
   }
   
   const hideHoveredHandler=()=>{
        // setopenPointer(-1)
   }

   const AddRow = (index) => {
       console.log(index, "ssfdsssddd")
    setSession([...session.slice(0, index+1), "row", ...session.slice(index+1)])
      console.log(session)
   }

   const addBreak = (index) => {
    setSession([...session.slice(0, index+1), "break", ...session.slice(index+1)])
    console.log(session)
 }

   const deleteRow = (index) => {

    const reducedArr = [...session];

    reducedArr.splice(index, 1);

    setSession([...reducedArr])

  }

  console.log(session)

  const insertDate=(index,value)=>{
    data[index].date = value;
    console.log(data)
  }


  return (
      <>
    <div
        style={{ marginBottom: "-22px", justifyContent: 'space-between', width: '100%'}}
        className="d-flex align-items-center flex-wrap my-4"
        >
            <div style={{ marginRight: "10px" }} className="d-flex flex-column">
                <p style={{marginBottom: '0px'}}className='fw-bold'>Select a date for the session</p>
                <div className="p-1" onClick={() => setShow(true)} style={{textAlign: 'end', border: '1px solid #cec0c0', borderRadius: '10px'}}><CalendarTodayIcon /></div>
                <ModalTime data={data} show={show} onClose={() => setShow(false)} />

                {/* <MuiPickersUtilsProvider>
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
                </MuiPickersUtilsProvider> */}
            </div>

            {/* <div style={{ marginRight: "10px" }} className="d-flex flex-column">
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

            <div style={{ marginRight: "10px" }} className="d-flex flex-column">
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
            </div> */}

            <div className="d-flex flex-column">
                <div className='d-flex justify-content-end px-5' style={{marginLeft: '97px'}}>
                    <button className='btn px-3 py-2 btn-primary round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'white', width: '162px', fontWeight: '600' }}><AddIcon /> New Activity</button>
                </div>
            </div>
        </div>

            
            
           
            {session && session.map((item, index) => {
                if (item== "break") {
                    return <div key={index} className="break-box my-2" > <div className="fw-bold" style={{color: 'white'}}> <p className='BreakcloseBtn' onClick={()=>deleteBreak(index)}> <CancelIcon /> </p> Break +</div> </div>
                }
                return <>
                    {indexs== index && openEditor &&
                    <div style={{width: '320px', height: '60px'}} className='row editor-show'>
                        <div className='row hover-editor' style={{width: '73rem'}}>
                            <div onClick={()=>AddRow(indexs)} style={{background: '#E6D9EF', width: '90px', height: '50px'}} className='m-1 p-0 d-flex justify-content-center align-items-center small'>
                                Add Row  
                            </div>
                            <div onClick={()=>deleteRow(indexs)} style={{background: '#E6D9EF', width: '91px', height: '50px', borderLeft: '3px solid white', borderRight: '3px solid white'}} className='m-1 p-0 d-flex justify-content-center align-items-center small'>
                                Delete Row
                            </div>
                            <div onClick={()=>addBreak(indexs)} style={{background: '#E6D9EF', width: '90px', height: '50px'}} className='m-1 p-0 d-flex justify-content-center align-items-center small'>
                                Add Break
                            </div>
                        </div>
                    </div>
                }
                <div key={index} style={{width: '98%', height: '200px'}} className='row my-2' onMouseEnter={()=>showHoveredHandler(index)} onMouseLeave={()=>hideHoveredHandler(-1)} >
                 <div className="dot-Pointer" style={{width: '45px'}} onClick={()=>handleOpenEditor(index, !openEditor)} >{openPointer ===index && <div className="dot-Point" ><img src="images/indicate.png" alt="image" /></div>}</div>
                 <div className={`row ${openPointer==index ? "hover-indicate" : ""} modalButton p-0`} style={{width: '71rem'}} onClick={()=>  handleModelEvent(index)}>
                     <div style={{background: '#DFEEDB', width: '333px', color: '#28A745'}} className=' m-1 d-flex flex-column justify-content-center'>
                         <p><QueryBuilderIcon />Click to add time</p>
                         <p><TimerIcon /></p>
            {indexs===index && <Modal open={openModal} onClose={() => setOpenModal(false)} data={data} />}                     </div>
                     <div style={{background: '#17A2B8', width: '787px', color: '#FFFFFF'}} className='m-1 p-4'>
                         What’s Covered:
                         <p>{data.session[0].topicsCovered}</p>
                     </div>
                 </div>
              </div>
              </>
              }
            )}


            


    </>
  );
}

export default DropBox;
