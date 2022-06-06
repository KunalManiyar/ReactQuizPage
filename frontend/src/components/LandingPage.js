import React, { Fragment } from "react";
import { useState } from "react";
import "./LandingPage.css";
const LandingPage = () => {
  const [name, setName] = useState();

  return (
    <Fragment>
      <div className="enterNameContainer">
        <div className="enterNameBox">
          <h2 className="enterNameHeading">Enter Name</h2>

          <form className="enterNameForm">
            <div className="forgotPasswordEmail">
              <input
                type="text"
                placeholder="Enter Name Here..."
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <input type="submit" value="Send" className="forgotPasswordBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
