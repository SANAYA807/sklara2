import { Add, Circle, Delete } from '@mui/icons-material'
import React from 'react'
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


const ManageSkill = ({userdata}) => {
const {token} = isAutheticated()

let removedSkill = userdata.removedSkills ? userdata.removedSkills : [];


const removeSkill = async(i) =>{
    //console.log(i)

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

    return (
        <>
        <Navbar userdata={userdata}/>
        <div className='container-fluid main-div my-5'>
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
            <h6 style={{cursor:"pointer"}}>Evaluate</h6>
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
