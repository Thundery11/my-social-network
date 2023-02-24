const SET_USERS = "SET_USERS";

let initialstate = {
  items: [
    {
      name: "Ebragim55",
      id: 1096,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: false,
    },
    {
      name: "uppgraedd",
      id: 1095,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: "ыва234",
      followed: false,
    },
    {
      name: "capitan",
      id: 1094,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: false,
    },
  ],
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
