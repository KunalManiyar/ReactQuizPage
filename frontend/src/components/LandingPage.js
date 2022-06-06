import React, { Fragment } from "react";
import { useState } from "react";
import FaceIcon from "@material-ui/icons/Face";
import "./LandingPage.css";
const LandingPage = () => {
  const [name, setName] = useState();

  return (
    <Fragment>
      <div className="enterNameContainer">
        <div className="enterNameBox">
          <h2 className="enterNameHeading">Enter Name</h2>

          <form className="enterNameForm">
            <div>
              <FaceIcon />
              <input
                type="text"
                placeholder="Enter Name Here..."
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <input type="submit" value="Submit" className="enterNameBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
