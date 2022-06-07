import React, { Fragment, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FaceIcon from "@material-ui/icons/Face";
import "./LandingPage.css";
import { enterName } from "../User/userAction";
import Proceed from "./Proceed";
const LandingPage = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const enterNameSubmit = (e) => {
    e.preventDefault();

    dispatch(enterName(name));
    navigate("/proceed", { state: { name: name } });

    // var { loading, user } = useSelector((state) => state.users);
  };
  useEffect(() => {}, [dispatch]);
  return (
    <Fragment>
      <div className="enterNameContainer">
        <div className="enterNameBox">
          <h2 className="enterNameHeading">Enter Name</h2>

          <form className="enterNameForm" onSubmit={enterNameSubmit}>
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

            <input type="submit" value="Start Quiz" className="enterNameBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
