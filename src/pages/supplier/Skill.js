import React,{useState,useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import StyleIcon from '@mui/icons-material/Style';
import DonutChart from './DonutChart';
import { Add, Circle, Delete, ImportantDevices } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import CalculateIcon from '@mui/icons-material/Calculate';
import axios from 'axios';
import { API } from '../../API';
import { isAutheticated } from '../../components/auth/authhelper';
import swal from 'sweetalert';



const Skill = ({userdata}) => {
    const [editMode, setEditMode] = useState(false)
    const {token} = isAutheticated()

    const [searchTerm,setSearchTerm] = useState('')
    const [searchData, setSearchData] = useState([])
    const [blank,setBlank] = useState(false)
    const [rating, setRating] = useState(5)
    const [step, setStep] = useState(2)
    const [skill, setSkill] = useState('')
    const [color, setColor] = useState('')
    const [utility,setUtility] = useState('')
    const [priorityValue,setProrityValue] = useState('')
    const [skillValue, setSkillValue] = useState('')

    const setToggle = () =>{
        if(editMode === false){
            setEditMode(true)
        }else{
            setEditMode(false)
        }
    }
//search function
    const handleSearch = async()=>{
        let res = await axios.get(`${API}/api/focusSkills/search/${searchTerm}`);
        if(res.data.status === 'ok'){
            setSearchData(res.data.data)
           // console.log('yes')
            //console.log(res)
            setBlank(false)
        }else if(res.data.data.length === 0){
            setBlank(true)
        } 
    }


    useEffect(()=>{
        handleSearch();
    },[searchTerm])

//select funtion
   const handleSelect = async(skill,color)=>{
     const exists = userdata.skills.find(item=>item.skill === skill)
     if(exists){
      return swal('Error','This skill is alreay present in your profile','error')
     }else if(userdata.skills.length >=5){
      return swal('Error','Already having 5 skills in your profile. Please remove one to add new skill','error')
     }

     //seting variables
     setSkill(skill)
     setColor(color)

     setStep(2)
    //     const newData ={
    //       skill:skill,
    //       skillValue:rating,
    //       priorityValue:1,
    //       color:color,
    //     }
    //     // console.log(selectedItem)
    //     const updatedData = userdata.skills
    //     updatedData.push(newData)
    //     try{
    //       let res = await axios.patch(`${API}/api/user/update`,{skills:updatedData},{
    //         headers:{
    //           Authorization: `Bearer ${token}`
    //         }
    //       })
    //       //console.log(res)
    //   if (res.data.status === 'ok') {
    //     localStorage.setItem(
    //       "userData",
    //       JSON.stringify({
    //         userData: res.data.data
    //       }))
    //     swal('Success', 'Skill added successfully', 'success').then(() => {
    //       window.location.reload()
    //     })

    //   }
    // } catch (err) {
    //   console.log(err)
    //   swal('Error', `${err.message}`, 'error')
    // }

  }

//delete function
    const removeSkill = async(i) =>{
        const confirm = window.confirm('Are you sure you want to delete this skill')
        if(!confirm){
            return
        }
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
        <div className='container my-4'>
            <h1>Your Skill <span className='heading'>Focus Areas</span></h1>
            <div className='row justify-content-between'>
                <div className='col'>
            <h5>You can add at the most 5 skills to your portfolio</h5>
            </div>
            <div className='col-sm-2'>
                <div className='d-flex'>
                <Link to="/manage_skill" className='btn btn-primary'><StyleIcon/> Manage</Link>
                </div>
            </div>
            </div>

            {/* for skill selection */}
{editMode &&
<>
<div className='container center my-5'>
    <div className='col-md-3 mb-5'>
        <h5 className='text-center'>Add any skill you'd like</h5>
        <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} className='form-control skill-search' placeholder={`Search for skills`}/>
    </div>
</div>
<div className='container'>
  {step === 1 &&
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
<button className='btn btn-primary'>Next</button>
     </div>
</div>
}
{step === 2 &&
  <div className='row justify-content-center my-3'>
<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="4" step="1" id="customRange3"></input>
  </div>
}
</div>
</>
}
{/* skill selection ends */}

            <div className='card  my-4'>
                <div className='skill-donut-div d-flex justify-content-center overflow-auto py-5'>
                {userdata.skills.length > 0 && userdata.skills.map((item,i)=>(
                    <div className='mx-3 black-donut'>
 <h5 className='center my-3' style={{color:item.color}}>{item.skill}</h5>
 {editMode &&
 <div className='d-flex donut-action-div'><Delete className='donut-action-item text-danger' onClick={()=>removeSkill(i)}/><CalculateIcon className='donut-action-item text-success'/></div>
}
 <DonutChart value={item.skillValue} color={item.color} rate={item.skillValue}/>
 </div>
                ))}
                {userdata.skills.length <=4 &&
                                    <div className='mx-3 blank-donut'>
<h5 className='center my-3' style={{color:"#fff"}}>c</h5>
 {/* <DonutChart value={10} color='#BFBFBF'/> */}
 <div className='blank-donut-item2'>
<Add sx={{ fontSize: 80 }} style={{color:"lightgreen", cursor:'pointer'}} onClick={setToggle}/>
</div>
 <div className='circle2'></div>
 </div>
}
{userdata.skills.length <4 &&
<div className='mx-3 blank-donut'>
 <h5 className='center my-3' style={{color:"#fff"}}>c</h5>
 <div className='blank-donut-item'>
<SentimentVeryDissatisfiedIcon sx={{ fontSize: 50 }} style={{color:"#BFBFBF"}}/>
</div>
 <div className='circle'></div>
 </div>
}
                    
                </div>
            </div>
            
            
        </div>
        <Footer/>
        </>
    )
}

export default Skill
