import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
const Proceed = async () => {
  //   console.log(useSelector((state) => state.user));
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state.name;
  console.log(name);
  try {
    var { data } = await axios.get(`/api/v1/user/${name}`);
  } catch (error) {
    console.log(error);
  }

  const status = data.user[0].status;
  console.log(status);
  //   console.log(state.user);
  //   console.log(state.user.status);

  useEffect(() => {
    if (status === true) {
      navigate("/questions");
    }
  }, [status]);
  return (
    <Fragment>
      <h1>Hello</h1>
    </Fragment>
  );
};

export default Proceed;
