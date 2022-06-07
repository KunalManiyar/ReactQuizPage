export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "USER_REQUEST":
      return {
        loading: true,
      };
    case "USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "USER_FAIL":
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
