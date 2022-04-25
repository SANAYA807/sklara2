import { React, useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import SideNav from '../../components/SideNav/SideNav'
import Footer from '../../components/footer/Footer';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./step1.css";

const step1 = (userdata) => {
     //const [description, setDescription] = useState("");
    // const [eventName, setEventName] = useState("");

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
                        <input className=" Discrip_box  shadow-sm" style={{ width: '70vw',   }} 
                              type="text"
                            
                        />
                        
                    
                       
                    </div>
                    
                    <p className="timing  fw-bold">Timing</p>
                    <div className="timing-box "  >
                        
                        <div className=" d-flex flex-row flex-wrap my-1 flex-direction: row;">   
                            <label className="text-muted small" for="birthday">Activation Date</label>
                            <div className="d-flex align-items-center flex-wrap my-1 d-flex flex-row "> <input type="date" name="birthday" />
                                <input className=" flex-wrap my-1 d-flex "type="number" name="points" ></input>
                                </div>
                           
                            </div>
                       
                        <div><label className="text-muted small" for="birthday">Due  Date</label>
                            <input type="date" name="birthday" />
                            <input type="number" name="points" step="0" ></input></div>
                        
                           <div> 
                            <label className="text-muted small" for="birthday">Time limit</label>
                            <input type="number" name="birthday" />
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



    // < div className = 'Manage-right' >
    //     <div className="col-md-12 py-2 ps-2">

    //         <div style={{ marginBottom: '-22px' }} className="align-items-center flex-wrap">
    //             <h6 className="Quiz_create" >Quiz Creator</h6>
    //             <div className='.your-event' >
    //                 <label class="col-md-4 control-label fw-bold">Create a quiz for your event</label>
    //                 <p className="text-muted small">
    //                     After saving the quiz will be saved to your event, but only visible the stated time frame.
    //                 </p>
    //             </div>
    //             <p className='Select_type'>Select type of Quiz</p>
    //             {/* <label htmlFor="">Company Size</label> */}

    //             <select className='select_option'  >
    //                 <option></option>
    //                 <option>1</option>
    //                 <option>2</option>
    //                 <option>3</option>
    //                 <option>4</option>
    //             </select>
    //             <p className='Name_quiz'>Name of Quize</p>
    //             <input className='Name_box' type="text" />

    //         </div>



    //     </div>
    //                         </ >



    // 



    // < div className = 'container-fluid px-1 Manage' >
    //     <div className='row justify-content-center'>
    //         <div className="row">
    //             <SideNav />
    //             <div style={{ paddingLeft: '32px' }} className="step2">
    //                 <p className="fw-bold">What do you want to name this event?</p>
    //                 <form class="d-flex edit_bar">
    //                     <input
    //                         style={{ boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)" }}
    //                         class="form-control search-input"
    //                         // type="text" value={eventTitle}
    //                         // onChange={(e) => setEventTitle(e.target.value)}
    //                         placeholder="Creative Thinking for Beginers"
    //                         aria-label="Search"
    //                     />
    //                     {/* <CreateIcon /> */}
    //                 </form>
    //                 <p className="fw-bold">
    //                     Select the skills area or areas that are most suitable for this training
    //                 </p>

    //                 <form class="d-flex search_bar">
    //                     <svg
    //                         class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
    //                         focusable="false"
    //                         aria-hidden="true"
    //                         viewBox="0 0 24 24"
    //                         data-testid="SearchIcon"
    //                     >
    //                         <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
    //                     </svg>
    //                     <input
    //                         class="form-control search-input"
    //                         type="search"
    //                         placeholder="Search"
    //                         aria-label="Search"
    //                     />
    //                 </form>
    //                 {/* <ReactChipInput
    //             classes="class1 class2"
    //             chips={state.tags}
    //             onSubmit={value =>addChip(value)}
    //             onRemove={index => removeChip(index)}
    //     /> */}
    //                 <div className="d-flex align-items-start list_card-1 p-1 my-3 ">
    //                     <div
    //                         style={{ width: "8rem" }}
    //                         className="col-md-12 nav-box m-2 skill-box"
    //                     >
    //                         {/* <p className="py-1 mb-0 px-1">
    //                                     Leadership <DeleteOutlineIcon fontSize="small" />
    //                                 </p> */}
    //                     </div>
    //                     <div
    //                         style={{ width: "10rem" }}
    //                         className="col-md-12 nav-box m-2 skill-box"
    //                     >
    //                         {/* <p className="py-1 mb-0 px-1">
    //                                     Critical Thinking <DeleteOutlineIcon fontSize="small" />
    //                                 </p> */}
    //                     </div>
    //                 </div>
    //                 <div className="form-group">
    //                     <label class="col-md-4 control-label fw-bold">Description</label>
    //                     <p className="text-muted small">
    //                         Explain the objective and possible outcomes of the training.
    //                     </p>
    //                     {/* <CKEditor
    //                                 editor={ClassicEditor}
    //                                 data={desc}
    //                                 onChange={(event, editor) => {
    //                                     let data = editor.getData();
    //                                     setDesc(data);
    //                                 }}
    //                             /> */}
    //                 </div>
    //                 <div className="form-group">
    //                     <label class="col-md-4 control-label fw-bold">Requirements </label>
    //                     <p className="text-muted small">
    //                         Explain if you want the participants to have prior knowledge or
    //                         experience required for the training
    //                     </p>
    //                     {/* <CKEditor
    //                                 editor={ClassicEditor}
    //                                 data={requirements}
    //                                 onChange={(event, editor) => {
    //                                     let data = editor.getData();
    //                                     setRequirements(data);
    //                                 }} */}
    //                     {/* /> */}
    //                 </div>
    //                 <div className="form-group">
    //                     <label class="col-md-4 control-label fw-bold">Contents</label>
    //                     <p className="text-muted small">
    //                         Explain the topic covered as a summary..
    //                     </p>
    //                     {/* <CKEditor
    //                                 editor={ClassicEditor}
    //                                 data={contents}
    //                                 onChange={(event, editor) => {
    //                                     let data = editor.getData();
    //                                     setContents(data);
    //                                 }}
    //                             /> */}
    //                 </div>

    //                 <div style={{ marginBottom: "-22px" }} className="d-flex align-items-center flex-wrap my-4">

    //                     <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
    //                         <p className="fw-bold">Enter the number of sessions</p>
    //                         <input style={{ width: '300px' }} type="number"
    //                         // onChange={(e) => setNumOfSessions(e.target.value)} className="form-control"
    //                         />
    //                     </div>

    //                     <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
    //                         <p className="fw-bold">Maximum participants</p>
    //                         <input style={{ width: '300px' }} type="number"
    //                             className="form-control"
    //                         />
    //                     </div>

    //                     <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
    //                         <p className="fw-bold">Language of Delivery</p>
    //                         <input style={{ width: '300px' }} type="text"
    //                             className="form-control"
    //                         />
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>



    //     </div>
    //         </ >
