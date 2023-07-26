import Cookies from "js-cookie";

const initialState = {
  userData: {
    email: "",
    email_verified: false,
    family_name: "",
    given_name: "",
    locale: "",
    name: "",
    picture: "",
    sub: "",
  },
  userToken: Cookies.get("accessToken"),
};

const userappreducer = (state = initialState, action: UserActionType) => {
  switch (action.type) {
    case "ADD_USER_DATA":
      const { userData } = action.payload;
      return {
        ...state,
        userData,
      };

    case "ADD_USER_TOKEN":
      const { userToken } = action.payload;
      return {
        ...state,
        userToken,
      };

    case "REMOVE_USER_DATA":
      return { ...initialState, userToken: "" };

    default:
      return state;
  }
};

export default userappreducer;
