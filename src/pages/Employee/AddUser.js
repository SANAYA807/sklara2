import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const initialValue = {
    employee_name: '',
    employee_email: '',
    employee_pass: '',
    role: '',
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 5
        }
    }
})

const AddUser = ({userdata}) => {
    const [user, setUser] = useState(initialValue);
    const {employee_name, employee_email, employee_pass, employee_roll} = user;
    const classes = useStyles();
    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = () => {
        console.log(user)
        // await addUser(user);
        navigate('/employee_list');
    }

    return (
        <>
        <Navbar userdata={userdata}/>
        <div className='mp-outer pt-3'>
          <div className='container'>
      <FormGroup className={classes.container}>
      <Typography variant="h4">Add Employee</Typography>
      
      <FormControl>
          <InputLabel htmlFor="my-input">Employee name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='employee_name' value={employee_name} id="my-input" />
      </FormControl>
      <FormControl>
          <InputLabel htmlFor="my-input">Employee Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='employee_email' value={employee_email} id="my-input"/>
      </FormControl>
      <FormControl>
          <InputLabel htmlFor="my-input">Employee Password</InputLabel>
          <Input onChange={(e) => onValueChange(e)} type='password' name='employee_pass' value={employee_pass} id="my-input" />
      </FormControl>
      <div className='form-inputs'>
          Select Employee Roles  <select className='form-input' defaultValue={'DEFAULT'} name='role' onChange={(e) => onValueChange(e)}>
              <option value="DEFAULT" disabled hidden>Roles</option>
               <option>Employee</option>
              <option>HR</option>
              
          </select> 
        </div>
      <FormControl>
          <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
      </FormControl>
  </FormGroup>
  </div>
  </div>
  </>
      
    )
}

export default AddUser;