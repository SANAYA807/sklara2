import React, { useState, Fragment } from "react";
import "./EmployeeList.css"
import data from "./data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate} from "react-router-dom";


const Employee = ({userdata}) => {
    const navigate = useNavigate();
  const [contacts, setContacts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    Business_Unit: "",
    Role: "",
    Last_Active: "",
    HR: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  function handleChange(value) {
    navigate(value);
  }

 

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      email: editFormData.email,
      fullName: editFormData.fullName,
      Business_Unit: editFormData.Business_Unit,
      Role: editFormData.Role,
      Last_Active: editFormData.Last_Active,
      HR: editFormData.HR,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
     fullName: contact.fullName,
     email: contact.email,
      Business_Unit: contact.Business_Unit,
      Role: contact.Role,
      Last_Active: contact.Last_Active,
      HR: contact.HR,
    };

    setEditFormData(formValues);
  };

  return (
      <>
      <Navbar userdata={userdata} />
      <div className='mp-outer pt-3'>
        <div className='container'>
        <div className='form-dec'>
            <span className='form-color'>
              Add New User  <select className='form-input' defaultValue={'DEFAULT'} name='role' onChange={event => handleChange(event.target.value)}>
              <option value="DEFAULT" disabled hidden>Select</option>
               <option value="/employee_list/Add">Single USer</option>
              <option>Multiple USer</option>
              
          </select>   
            </span>
           
        </div>
        <div className="app-container overflow-auto">
      <form onSubmit={handleEditFormSubmit}>
        <table style={{width:'100%'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Business Unit</th>
              <th>Role</th>
              <th>Last Active</th>
              <th>HR</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}

                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleCancelClick={handleCancelClick}

                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      </div>
     
    </div>
    </div>
    </>
  );
};

export default Employee;