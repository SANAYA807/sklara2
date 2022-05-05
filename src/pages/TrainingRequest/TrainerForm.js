import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

function TrainerForm({ userdata }) {
  return (
    <>
      <Navbar userdata={userdata} />
      <div className="mp-outer container-fluid main-div pt-3">
        <div className="container-fluid px-0">
          <h2>
            Training<span className="change-color"> Request Form </span>
          </h2>
          <p className="text-muted">
            <small>A brief glance at your Trainer</small>
          </p>
          <div className="row">
            <div className="col-lg-6 col-sm-12 common-card">
              <div className="card">
                <img
                  src="images/dummy/user1.jpg"
                  className="card-img-top tp-image profile-image"
                  alt="..."
                />
                <div className="card-body">
                  <span className="mp-com-flag1">
                    <img
                      className="img-fluid"
                      src="images/flags/French.png"
                      alt=""
                    />
                  </span>
                  <span className="mp-com-flag2">
                    <img
                      className="img-fluid"
                      src="images/flags/German.png"
                      alt=""
                    />
                  </span>
                  <h4 className="card-title">Justus Harrison </h4>
                  <p className="" style={{ color: "#cccccc" }}>
                    <small>
                      Start-Ups, Marketing & Sales, Leaderships, Negotiations
                    </small>
                  </p>
                  <p>
                    <img src="images/star.png" alt="star" />
                    <span style={{ color: "#1fd0b6" }}>4.9</span>
                    <small style={{ color: "#cccccc" }}>(69)</small>
                  </p>
                  <div>
                    <p className="tp-grey m-0">
                      <small>Industry Focus</small>
                    </p>
                    <a href="/#">
                      <span className="badge badge-pill tp-yellow">
                        Chemical Engineering
                      </span>
                    </a>
                    &nbsp;
                    <a href="/#">
                      <span className="badge badge-pill tp-blue">
                        Oil & Natural Gas
                      </span>
                    </a>
                    &nbsp;
                    <a href="/#">
                      <span className="badge badge-pill tp-green">Energy</span>
                    </a>
                    &nbsp;
                  </div>
                  <div className="mt-3">
                    <p className="tp-grey m-0">
                      <small>Expertise</small>
                    </p>
                    <a href="/#">
                      <span className="badge badge-pill tp-yellow">
                        Start-Ups
                      </span>
                    </a>
                    &nbsp;
                    <a href="/#">
                      <span className="badge badge-pill tp-light-blue">
                        Oil & Natural Gas
                      </span>
                    </a>
                    &nbsp;
                    <a href="/#">
                      <span className="badge badge-pill tp-green">
                        Marketing & Sales
                      </span>
                    </a>
                    &nbsp;
                    <a href="/#">
                      <span className="badge badge-pill tp-red">
                        Leaderships
                      </span>
                    </a>
                    &nbsp;
                    <a href="/#">
                      <span className="badge badge-pill tp-blue">
                        Negotiations
                      </span>
                    </a>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 common-card">
              <div className="card coach-card" style={{ fontSize: "14px" }}>
                <div className="card-body row mt-3">
                  <div className="col-4">
                    <div className="mb-5">
                      <small className="text-muted m-0 p-0">From</small>
                      <p className="m-0 p-0" style={{ fontWeight: "500" }}>
                        Germany
                      </p>
                    </div>
                    <div className="mb-5">
                      <small className="text-muted m-0 p-0">
                        Avg. Response Time
                      </small>
                      <p className="m-0 p-0" style={{ fontWeight: "500" }}>
                        1 day
                      </p>
                    </div>
                    <div className="mb-5">
                      <small className="text-muted m-0 p-0">
                        Total Sessions
                      </small>
                      <p className="m-0 p-0" style={{ fontWeight: "500" }}>
                        69
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mb-5">
                      <small className="text-muted m-0 p-0">Experience</small>
                      <p className="m-0 p-0" style={{ fontWeight: "500" }}>
                        13 Years
                      </p>
                    </div>
                    <div className="mb-5">
                      <small className="text-muted m-0 p-0">
                        Last Delivery
                      </small>
                      <p className="m-0 p-0" style={{ fontWeight: "500" }}>
                        3 days ago
                      </p>
                    </div>
                    <div className="mb-5">
                      <small className="text-muted m-0 p-0">
                        Total Participants
                      </small>
                      <p className="m-0 p-0" style={{ fontWeight: "500" }}>
                        755
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mb-5">
                      <small className="text-muted m-0 p-0">
                        Trainer Since
                      </small>
                      <p className="m-0 p-0" style={{ fontWeight: "500" }}>
                        2009
                      </p>
                    </div>
                    <div className="mb-5">
                      <small className="text-muted m-0 p-0">Languages</small>
                      <p className="m-0 p-0" style={{ fontWeight: "500" }}>
                        English, German
                      </p>
                    </div>
                    <div className="mb-5">
                      <small className="text-muted m-0 p-0">
                        Avg. Session Size
                      </small>
                      <p className="m-0 p-0" style={{ fontWeight: "500" }}>
                        11 Participants
                      </p>
                    </div>
                  </div>
                  <div className="description">
                    <p>
                      Justus Harrison has and Fertilizer Industries for more
                      than two decades and has excelled in leadership and
                      mentorship positions. He has worked in Chemical and
                      Fertilizer Industries for more than two decades and has
                      excelled in leadership and mentorship positions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mp-outer container-fluid main-div pt-3">
        <div className="container-fluid px-0">
          <h2>
             Fill Out & <span className="change-color">Submit the Form </span>
          </h2>
          <p className="text-muted">
            <small>Your trainer will come back with a quotation</small>
          </p>
        </div>
      </div>
     
          <LinearStepper />
       
    </>
  );
}

export default TrainerForm;
