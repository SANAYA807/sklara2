import { React, useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import SideNav from '../../components/SideNav/SideNav'

import "./step1.css";

const step1 = (userdata) => {


    return (
        <>
            <Navbar userdata={userdata} />

            <div className=''>
                <div className="row container-fluid ">

                    <SideNav />
                </div>
                <div>
                    <h6 className="Quiz_create" >Quiz Creator</h6>
                    <div className='your-event' >
                        <label class="col-md-4 control-label fw">Create a quiz for your event</label>
                        <p className="text-muted small">
                            After saving the quiz will be saved to your event, but only visible the stated time frame.
                        </p>
                    </div>
                    <div className="mx-4  ">
                        <p className='Select_type fw-bold'>Select type of Quiz</p>
                        {/* <label htmlFor="">Company Size</label> */}

                        <select style={{ width: '19vw' }} className='select_option'  >
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>


                    <div className=" mx-4 ">

                        <label class=" Name_quiz fw-bold">Select type of Quiz</label>
                        <input className=" Name_box  shadow-sm" style={{ width: '35vw' }}
                            type="text"

                        />
                    </div>
                    <div className="form-group">
                        <label class="Discrip  fw-bold">Description</label>
                        <input className=" Discrip_box  shadow-sm" style={{ width: '70vw', }}
                            type="text"

                        />



                    </div>

                    <p className="timing  fw-bold">Timing</p>
                    <div className="timing-box "  >

                        <div className=" d-flex flex-row flex-wrap my-1 ">
                            <label className="text-muted small" for="birthday">Activation Date</label>
                            <div className="d-flex align-items-center flex-wrap my-1 "> <input type="date" name="birthday" />
                                <input className="select d-flex " type="number" name="points" ></input>
                            </div>

                        </div>

                        <div><label className="text-muted small  my-1" for="birthday">Due  Date</label>
                            <input type="date" />
                            <input type="number" name="points" step="0" ></input></div>

                        <div>
                            <label className="text-muted small  my-1" for="birthday">Time limit</label>
                            <input type="number" />
                            <input type="number" name="points" placeholder='Minutes' ></input>
                            <input type="checkbox" name="checkbox" />
                        </div>

                    </div>




                </div>


            </div>


        </>

    )
}
export default step1




