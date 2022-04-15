import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import { FolderCopyIcon ,AssignmentOutlined } from '@mui/icons-material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ErrorIcon from '@mui/icons-material/Error';

import "./YourEvent.css"

function YourEvent({userdata}) {
  return (
      <>
    <Navbar userdata={userdata} />
    <div className="">
            <div className='container-fluid px-1 Manage'>
                <div className='row justify-content-center'>
                    <div className="row">
                        <div className="col-md-2 left_nav">
                        <div className='d-flex align-items-start list_card-1 p-1 my-4 side-nav'>
                               
                                <div className="col-md-12 nav-box my-1">
                                    {/* <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6> */}
                                    <p className="text-muted px-3 mb-0">
                                        <FolderOpenIcon fontSize='small' /> Open Request
                                    </p>
                                </div>
                        </div>
                        
                        <div className='d-flex align-items-start list_card-1 p-1 my-4 side-nav'>
                               
                               <div className="col-md-12 nav-box my-1">
                                   {/* <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6> */}
                                   <p className="text-muted px-3 mb-0">
                                       <FormatQuoteIcon fontSize='small' /> Your Quotes
                                   </p>
                               </div>
                       
                       </div> 
                       <div className='d-flex align-items-start list_card-1 p-1 my-4 side-nav active'>
                               
                               <div className="col-md-12 nav-box my-1">
                                   {/* <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6> */}
                                   <p className=" px-3 mb-0">
                                       <AssignmentOutlined fontSize='small' /> Your Events
                                   </p>
                               </div>
                       
                       </div> 
                       <div className='d-flex align-items-start list_card-1 p-1 my-4 side-nav'>
                               
                               <div className="col-md-12 nav-box my-1">
                                   {/* <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6> */}
                                   <p className="text-muted px-3 mb-0">
                                       <ReceiptLongIcon fontSize='small' /> Bills
                                   </p>
                               </div>
                        </div>
                        <div className='d-flex align-items-start list_card-1 p-1 my-4 side-nav'>
                               
                               <div className="col-md-12 nav-box my-1">
                                   {/* <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6> */}
                                   <p className="text-muted px-3 mb-0">
                                       <ErrorIcon fontSize='small' /> Legal Info
                                   </p>
                               </div>
                        </div>
                       
                       </div>    

                      <div className='Manage-right' >
                       <div className="col-md-12 py-2 ps-2">

                            <div className="d-flex align-items-center flex-wrap">

                               <div className="border_input cat-box">
                                    {/* <label htmlFor="">Company Size</label> */}
                                    <select >
                                        <option>All Categories</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>    
                                <div className="input-group mx-4 mp-input-div shadow-sm">

                                        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                        <span className="input-group-text mp-icon" id="basic-addon2"><i className="fa fa-search fa-sm py-1"></i></span>
                                        </div>

                                </div> 
                                <div className='d-flex justify-content-end px-5' style={{marginLeft: '180px'}}>
                                    <button className='btn px-3 py-2 btn-primary round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'white', width: '130px', fontWeight: '600' }}>New Event</button>
                                </div>
                            </div>

                            <div className="d-flex align-items-center flex-wrap">
                                <div className="border_input">
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder='Name' />
                                </div>
                            
                                <div className="border_input ">
                                    <label htmlFor="">Type</label>
                                    <input type="text" placeholder='Type' />
                                </div>
                                <div className="border_input">
                                    <label htmlFor="">Customer/Id</label>
                                    <select >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                </div>
                                <div className="border_input ">
                                    <label htmlFor="">Status</label>
                                    <select >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>                
                                </div>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                    <td style={{width: '33px'}} ><input className='largeCheck' type="checkbox" /></td>
                                    <td style={{color: '#1B1464', fontWeight: '500', width: '300px'}}>Creative thinking for Begginers <div className='text-muted' >5468754</div></td>
                                    <td style={{width: '250px'}} className='text-muted'>Public Training</td>
                                    <td style={{width: '250px'}} className='text-muted'>N/A</td>
                                    <td style={{width: '250px'}} className='text-muted'>In Progress</td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '33px'}} ><input className='largeCheck' type="checkbox" /></td>
                                    <td style={{color: '#1B1464', fontWeight: '500', width: '300px'}}>Creative thinking for Begginers <div className='text-muted' >5468754</div></td>
                                    <td style={{width: '250px'}} className='text-muted'>Public Training</td>
                                    <td style={{width: '250px'}} className='text-muted'>N/A</td>
                                    <td style={{width: '250px'}} className='text-muted'>In Progress</td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '33px'}} ><input className='largeCheck' type="checkbox" /></td>
                                    <td style={{color: '#1B1464', fontWeight: '500', width: '300px'}}>Creative thinking for Begginers <div className='text-muted' >5468754</div></td>
                                    <td style={{width: '250px'}} className='text-muted'>Public Training</td>
                                    <td style={{width: '250px'}} className='text-muted'>N/A</td>
                                    <td style={{width: '250px'}} className='text-muted'>In Progress</td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '33px'}} ><input className='largeCheck' type="checkbox" /></td>
                                    <td style={{color: '#1B1464', fontWeight: '500', width: '300px'}}>Creative thinking for Begginers <div className='text-muted' >5468754</div></td>
                                    <td style={{width: '250px'}} className='text-muted'>Public Training</td>
                                    <td style={{width: '250px'}} className='text-muted'>N/A</td>
                                    <td style={{width: '250px'}} className='text-muted'>In Progress</td>
                                    </tr>
                                  
                            
                                </tbody>
                            </table>
                       </div>
                       </div>
                    </div>

                    
                    
                </div>
            </div>   

    </div>
    </>
  )
}

export default YourEvent