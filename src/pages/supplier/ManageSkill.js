import { Delete } from '@mui/icons-material'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { isAutheticated } from '../../components/auth/authhelper'
import swal from 'sweetalert'
import { API } from '../../API'


const ManageSkill = ({userdata}) => {
const {token} = isAutheticated()

const removeSkill = async(i) =>{
    console.log(i)

    if(i > -1){
        // console.log(userdata.skills)
        userdata.skills.splice(i,1)
        // console.log(userdata.skills)
        try{
            let res = await axios.patch(`${API}/api/user/update`,{skills:userdata.skills},{
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
        <div className='container my-5'>
            <div className='d-flex justify-content-between'>
            <h1 className='heading'>Manage Skills</h1>

            {userdata.skills.length < 5 && <div><Link to="/focus_skill" className='btn btn-primary text-light'>Add Skill</Link></div> }
            </div>
            
            <hr></hr>
            <table class="table table-striped table-hover">
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
</table>
            
        </div>
<Footer/>
        </>
    )
}

export default ManageSkill
