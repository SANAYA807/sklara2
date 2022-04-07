import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.email}</td>
      <td>{contact.Business_Unit}</td>
      <td>{contact.Role}</td>
      <td>{contact.Last_Active}</td>
      <td>{contact.HR}</td>
      <td >
          <div>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;