import axios from "axios";

export const enterName = (name) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REQUEST" });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/v1/name", { name: name }, config);

    dispatch({ type: "USER_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "USER_FAIL", payload: error.response.data.message });
  }
};
