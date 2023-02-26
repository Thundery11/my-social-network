const SET_USERS = "SET_USERS";

let initialstate = {
  items: [],
};

const usersReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    default:
      return state;
  }
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
