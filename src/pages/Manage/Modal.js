import React from 'react';
import "./Model.css"

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay Modal-box' style={{color: 'black'}}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
              <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
                <p className="fw-bold text-left">Topic</p>
                    <input style={{width:'460px'}} type="text"
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
              </div>
              
              <div style={{ marginBottom: "-22px"}} className="d-flex align-items-center flex-wrap my-4">
            
                <div className="input-group mx-4 mp-input-div d-flex flex-column">
                   <p className="fw-bold">Duration</p>
                   <div className="d-flex justify-content-between">
                      <input style={{width:'210px'}} type="text"
                      className="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2" />
                      
                      <input style={{width:'210px'}} type="text"
                      className="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2" />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Hours</p>
                      <p style={{width:'210px'}}>Minutes</p>
                    </div>
                </div>
              </div>

              <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
                <p className="fw-bold text-left">Duration</p>
                    <textarea style={{width:'460px', height: '260px'}} type="text"
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
              </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Modal;