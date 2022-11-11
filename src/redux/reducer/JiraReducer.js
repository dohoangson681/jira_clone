const initState = {
  userRemberLogin: false,
  userInfo: {},
};
export const JiraReducer = (state = initState, action) => {
  switch (action.type) {
    case "REMEMBER_USER":
      console.log("action", action);
      state.userRemberLogin = action.status;
      return { ...state };
    case "SET_USER_LOGIN":
      console.log("action", action);
      state.userInfo = {...action.data}
      console.log('state.userInfo' , state.userInfo) ; 
      return { ...state };
    default:
      return state;
  }
};
