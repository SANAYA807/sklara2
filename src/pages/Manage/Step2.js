import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// import ReactChipInput from "react-chip-input";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


function Step2({eventTitle, setEventTitle, focusSkill, setFocusSkill, desc, setDesc, requirements, setRequirements,
  contents, setContents,numOfSessions, setNumOfSessions, maxParticipants,setMaxParticipants,language, setLanguage}) {
  const [description, setDescription] = useState("");

  

  // const [state, setstate] = useState({ tags:[]})

  // const addChip = (value) => {
  //     const tags = state.tags.slice();
  //     tags.push(value);
  //     setstate({...state,tags:tags});
  //   }
  //   const removeChip = (index) => {
  //     const tags = state.tags.slice();
  //     tags.splice(index, 1);
  //   setstate({...state,tags:tags });
  //   };

  return (
    <div style={{paddingLeft: '32px'}} className="step2">
      <p className="fw-bold">What do you want to name this event?</p>
      <form class="d-flex edit_bar">
        <input
          style={{ boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)" }}
          class="form-control search-input"
          type="text" value={eventTitle}
          onChange={(e)=>setEventTitle(e.target.value)}
          placeholder="Creative Thinking for Beginers"
          aria-label="Search"
        />
        <CreateIcon />
      </form>
      <p className="fw-bold">
        Select the skills area or areas that are most suitable for this training
      </p>

      <form class="d-flex search_bar">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SearchIcon"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          class="form-control search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      {/* <ReactChipInput
                classes="class1 class2"
                chips={state.tags}
                onSubmit={value =>addChip(value)}
                onRemove={index => removeChip(index)}
        /> */}
      <div className="d-flex align-items-start list_card-1 p-1 my-3 ">
        <div
          style={{ width: "8rem" }}
          className="col-md-12 nav-box m-2 skill-box"
        >
          <p className="py-1 mb-0 px-1">
            Leadership <DeleteOutlineIcon fontSize="small" />
          </p>
        </div>
        <div
          style={{ width: "10rem" }}
          className="col-md-12 nav-box m-2 skill-box"
        >
          <p className="py-1 mb-0 px-1">
            Critical Thinking <DeleteOutlineIcon fontSize="small" />
          </p>
        </div>
      </div>
      <div className="form-group">
        <label class="col-md-4 control-label fw-bold">Description</label>
        <p className="text-muted small">
          Explain the objective and possible outcomes of the training.
        </p>
        <CKEditor
          editor={ClassicEditor}
          data={desc}
          onChange={(event, editor) => {
            let data = editor.getData();
            setDesc(data);
          }}
        />
      </div>
      <div className="form-group">
        <label class="col-md-4 control-label fw-bold">Requirements </label>
        <p className="text-muted small">
          Explain if you want the participants to have prior knowledge or
          experience required for the training
        </p>
        <CKEditor
          editor={ClassicEditor}
          data={requirements}
          onChange={(event, editor) => {
            let data = editor.getData();
            setRequirements(data);
          }}
        />
      </div>
      <div className="form-group">
        <label class="col-md-4 control-label fw-bold">Contents</label>
        <p className="text-muted small">
          Explain the topic covered as a summary..
        </p>
        <CKEditor
          editor={ClassicEditor}
          data={contents}
          onChange={(event, editor) => {
            let data = editor.getData();
            setContents(data);
          }}
        />
      </div>

      <div style={{ marginBottom: "-22px" }} className="d-flex align-items-center flex-wrap my-4">
            
            <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
            <p className="fw-bold">Enter the number of sessions</p>
                <input style={{width:'300px'}} type="number" value={numOfSessions}
               onChange={(e)=>setNumOfSessions(e.target.value)} className="form-control"
                />
            </div>

            <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
            <p className="fw-bold">Maximum participants</p>
                <input style={{width:'300px'}} type="number" value={maxParticipants}
              onChange={(e)=>setMaxParticipants(e.target.value)}  className="form-control"
                />
            </div>

            <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
            <p className="fw-bold">Language of Delivery</p>
                <input style={{width:'300px'}} type="text" value={language}
               onChange={(e)=>setLanguage(e.target.value)} className="form-control"
                />
            </div>
      </div>
    </div>
  );
}

export default Step2;
