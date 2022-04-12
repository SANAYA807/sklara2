import { Add, Circle, Delete } from '@mui/icons-material'
import React,{useState,useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { isAutheticated } from '../../components/auth/authhelper'
import swal from 'sweetalert'
import { API } from '../../API'
import './manageskill.css';
import { OverlayTrigger,Popover,Button } from 'react-bootstrap'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Modal } from '@mui/material'


const ManageSkill = ({userdata}) => {
const {token} = isAutheticated()
const [editMode, setEditMode] = useState(false)
const [step, setStep] = useState(1)
const [skill, setSkill] = useState('')
const [color, setColor] = useState('')
const [utility,setUtility] = useState(1)
const [priorityValue,setPriorityValue] = useState(1)
const [skillValue, setSkillValue] = useState(1)
const [updateMode, setUpdateMode] = useState(false)
const [index, setIndex] = useState(null)

const setToggle = () =>{
  if(editMode === false){
      setEditMode(true)
  }else{
      setEditMode(false)
  }
}


let removedSkill = userdata.removedSkills ? userdata.removedSkills : [];
const removeSkill = async(i) =>{
    //console.log(i)
    const confirm = window.confirm('Are you sure you want to delete this skill')
        if(!confirm){
            return
        }

    if(i > -1){
        // console.log(userdata.skills)
        let removeSkill = userdata.skills[i]
        if(removedSkill.length >= 4){
          removedSkill.splice(3,1)
          removedSkill.push(removeSkill)
        }else{
          removedSkill.push(removeSkill)
        }
        
        //console.log(removedSkill)
        userdata.skills.splice(i,1)
        // console.log(userdata.skills)
        try{
            let res = await axios.patch(`${API}/api/user/update`,{skills:userdata.skills,removedSkills:removedSkill},{
              headers:{
                Authorization: `Bearer ${token}`
              }
            })
            //console.log(res)
        if (res.data.status === 'ok') {
          localStorage.setItem(
            "userData",
            JSON.stringify({
              userData: res.data.data
            }))
          swal('Success', 'Skill removed successfully', 'success').then(() => {
            window.location.reload()
          })
  
        }
      } catch (err) {
        console.log(err)
        swal('Error', `${err.message}`, 'error')
      }
    }
}


  //editSkill
  const editSkill = async(i) =>{
    setEditMode(true)
    setStep(2);
    setUpdateMode(true)
    setIndex(i)
    let s = userdata.skills[i].skill
    let u = userdata.skills[i].utility
    let p = userdata.skills[i].priorityValue
    let v = userdata.skills[i].skillValue
    setSkill(s)
    setUtility(u)
    setPriorityValue(p)
    setSkillValue(v)
}

const confirmUpdate = async()=>{

  const newData = userdata.skills
  newData[index].utility = utility;
  newData[index].priorityValue = priorityValue;
  newData[index].skillValue = skillValue;
  newData[index].updatedAt = Date.now();

  try{
    let res = await axios.patch(`${API}/api/user/update`,{skills:newData},{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    //console.log(res)
if (res.data.status === 'ok') {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      userData: res.data.data
    }))
  swal('Success', 'Skill updated successfully', 'success').then(() => {
    window.location.reload()
  })

}
setSkill('')
setColor('')
setUtility(1)
setPriorityValue(1)
setSkillValue(1)
} catch (err) {
console.log(err)
swal('Error', `${err.message}`, 'error')
}

}

    return (
        <>
        <Navbar userdata={userdata}/>
        <div className='container-fluid main-div my-5'>

{/* Modal */}

            {/* for skill selection */}
            <Modal
        open={editMode}
        onClose={()=>setEditMode(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='container bg-light p-5 mt-5'>
        <div className='d-flex justify-content-end mt-2'>
  <button className='btn btn-secondary' onClick={()=>window.location.reload()}>Close</button>
</div>
  {/* {step === 1 &&
  <>
  <div className='container center my-5'>
    <div className='col-md-4 mb-5'>
        <h5 className='text-center'>Add any skill you'd like</h5>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className='form-control skill-search' placeholder={`Search for skills`}/>
    </div>
</div>
<div className='row justify-content-center my-3'>
    {searchData.length > 0 && searchData.map((item, i)=>(
      <>
{item.skills && item.skills.map((itm)=>(
<div className='col-md-2 m-2'>
        <button className='btn btn-rounded btn-outline-info' onClick={()=>handleSelect(itm.skill,itm.color)}>{itm.skill}</button>
        </div>
))}
</>
    ))}
   { searchData.length === 0 && searchTerm.length !== 0 &&  <h3 className='text-center text-danger my-5'>No matching value found</h3>}
   
   <div className='d-flex justify-content-end'>
<button className='btn btn-primary' disabled={!skill && !color} onClick={()=>setStep(2)}>Next</button>
     </div>
</div>
</>
} */}
{step === 2 &&
<>
  <div className='row justify-content-center my-3'>
    <h5 className='text-center my-5'>How import or critical is this Skill related to your career?</h5>
    <div className='d-flex justify-content-between'>
      <h6>Not so critical</h6>
      <h6>Sometimes it's useful</h6>
      <h6>Critical</h6>
      <h6>Very critical</h6>    
      </div>
<input type="range" class="form-range" min="1" max="4" step="1" value={utility} onChange={(e)=>setUtility(e.target.value)} id="customRange3"></input>
  </div>

  <div className='row justify-content-center my-5'>
    <h5 className='text-center my-5'>How soon you want to start mastering this skill?</h5>
    <div className='d-flex justify-content-between'>
      <h6>As soon as<br></br>possible</h6>
      <h6>In a few months</h6>
      <h6>Whenever possible, with<br></br> no stress</h6>
      <h6>No time limit</h6>    
      </div>
<input type="range" class="form-range" min="1" max="4" step="1" value={priorityValue} onChange={(e)=>setPriorityValue(e.target.value)} id="customRange3"></input>
  </div>

  <div className='d-flex justify-content-between'>
<button className='btn btn-primary' onClick={()=>setStep(1)}>Back</button>
<button className='btn btn-primary' disabled={!utility && !priorityValue} onClick={()=>setStep(3)}>Next</button>
     </div>

  </>
}
{step === 3 &&
<>
<div className='row justify-content-center my-3'>
    <h3 className='text-center mt-5 mb-2'>It's Time to Rate Yourself on Your Skills!</h3>
    <h5 className='text-center'>Rate your skills to find relevant learning content and to keep tracks of your progress.</h5>
    <div className='card my-5 py-5'>

<h1 className='text-center mb-5'>{skill}</h1>

    <div className='d-flex justify-content-between'>
      <h6>1</h6>
      <h6>2</h6>
      <h6>3</h6>
      <h6>4</h6>
      <h6>5</h6>
      <h6>6</h6>
      <h6>7</h6>
      <h6>8</h6>
      <h6>9</h6>
      <h6>10</h6>
  
      </div>
<input type="range" class="form-range" min="1" max="10" step="1" value={skillValue} onChange={(e)=>setSkillValue(e.target.value)} id="customRange3"></input>
<div className='d-flex justify-content-between'>
      <h6>BEGINNER</h6>
      <h6>EXPERT</h6>
      </div>
  </div>
  </div>
  <div className='d-flex justify-content-between'>
<button className='btn btn-primary' onClick={()=>setStep(2)}>Back</button>
{updateMode &&
  <button className='btn btn-primary' disabled={!skillValue} onClick={confirmUpdate}>Update</button>
}

     </div>
</>
}
</div>
      </Modal>

{/* skill selection ends */}


            <div className='d-flex justify-content-between'>
              <div>
            <h1 className='heading'>Manage Skills</h1>
            <h3>Your current Focus Areas</h3>
            <p className='text-secondary'>You can add at the most 5 skills to your portfolio</p>
            </div>
            {userdata.skills.length < 5 && 
            <div><Link to="/focus_skill" className='btn btn-primary text-light w-100'><Add/> Add Skills</Link>
            <p className='text-secondary text-left'>You can add {5 - userdata.skills.length} more skill</p>
            </div> }
            
            </div>
            <hr></hr>
  {/* <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Skill</th>
      <th scope="col">Skill Value</th>
      <th scope="col">priorityValue</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {userdata.skills.length > 0 && userdata.skills.map((item,i)=>(
    <tr>
      <th scope="row" style={{color:item.color}}>{item.skill}</th>
      <td>{item.skillValue}</td>
      <td>{item.priorityValue}</td>
      <td className="text-danger" style={{cursor:"pointer"}} onClick={()=>removeSkill(i)}><Delete/></td>
    </tr>
  ))}
  </tbody>
</table> */}
            
            <div className='w-100'>
              {userdata.skills.length > 0 && userdata.skills.map((item,i)=>(
                <div className='card w-100 p-3 mb-3'>
                  <div className='row'>
                    <div className='col-md-1'>
                      <Circle className='manage-skill-circle' style={{color:item.color}}/>
                      </div>
                      <div className='col-md-11'>
                        <div className='d-flex justify-content-between'>
                        <h4>{item.skill}</h4>
                        <>
    <OverlayTrigger
      trigger="click"
      key={item._id}
      placement={'left'}
      overlay={
        <Popover id={item._id}>
          <Popover.Body>
            <h6 style={{cursor:"pointer"}} onClick={()=>editSkill(i)}>Evaluate</h6>
            <h6 style={{cursor:"pointer"}} onClick={()=>removeSkill(i)}>Remove</h6>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="light"><MoreVertIcon/></Button>
    </OverlayTrigger>
</>
                        </div>
                        
                        <p className='text-secondary'>Average 1 session per week</p>
                        <div className='d-flex'>
                        <div>
                        <p className='text-secondary mb-0'>Added on</p>
                        <h6>{new Date(item.createdAt).toDateString()}</h6>
                        </div>
                        <div className='mx-5'>
                        <p className='text-secondary mb-0'>Current Skill Level</p>
                        <h6>{item.skillValue}/10</h6>
                          </div>
                          </div>
                        
                        <div className='d-flex justify-content-between'>
                        <div>
                        <p className='text-secondary mb-0'>Sessions</p>
                        <h6>100</h6>
                        </div>
                        <div>
                        <p className='text-secondary mb-0'>Group Trainings</p>
                        <h6>5</h6>
                        </div>
                        <div>
                        <p className='text-secondary mb-0'>Personalized Trainings</p>
                        <h6>10</h6>
                        </div>
                        <div>
                        <p className='text-secondary mb-0'>Personalized Coaches</p>
                        <h6>8</h6>
                        </div>
                          </div>
                      </div>
                  </div>
                  </div>
              ))}
            </div>

            <div>
            <h3>Your past Focus Areas</h3>
            <p className='text-secondary'>Based on your previous interests</p>
            </div>
            <div className='w-100'>
              {userdata.removedSkills.length > 0 && userdata.removedSkills.map((item,i)=>(
                <div className='card w-100 p-3 mb-3'>
                  <div className='row'>
                    <div className='col-md-1'>
                      <Circle className='manage-skill-circle' style={{color:item.color}}/>
                      </div>
                      <div className='col-md-11'>
                        <div className='d-flex justify-content-between'>
                        <h4>{item.skill}</h4>
                        <>
    <OverlayTrigger
      trigger="click"
      key={item._id}
      placement={'left'}
      overlay={
        <Popover id={item._id}>
          <Popover.Body>
            {/* <h6 style={{cursor:"pointer"}}>Evaluate</h6> */}
            {/* <h6 style={{cursor:"pointer"}} onClick={()=>removeSkill(i)}>Remove</h6> */}
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="light"><MoreVertIcon/></Button>
    </OverlayTrigger>
</>
                        </div>
                        
                        <p className='text-secondary'>Average 1 session per week</p>
                        <div className='d-flex'>
                        <div>
                        <p className='text-secondary mb-0'>Added on</p>
                        <h6>{new Date(item.createdAt).toDateString()}</h6>
                        </div>
                        <div className='mx-5'>
                        <p className='text-secondary mb-0'>Active Duration</p>
                        <h6>2 years 1 month</h6>
                          </div>
                          </div>
                        
                        <div className='d-flex justify-content-between'>
                        <div>
                        <p className='text-secondary mb-0'>Sessions</p>
                        <h6>100</h6>
                        </div>
                        <div>
                        <p className='text-secondary mb-0'>Group Trainings</p>
                        <h6>5</h6>
                        </div>
                        <div>
                        <p className='text-secondary mb-0'>Personalized Trainings</p>
                        <h6>10</h6>
                        </div>
                        <div>
                        <p className='text-secondary mb-0'>Personalized Coaches</p>
                        <h6>8</h6>
                        </div>
                          </div>
                      </div>
                  </div>
                  </div>
              ))}
            </div>


        </div>
<Footer/>
        </>
    )
}

export default ManageSkill
