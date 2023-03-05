const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
let initialstate = {
  items: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 2,
};

const usersReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, items: [...state.items, ...action.items] };
    }
    case FOLLOW: {
      return {
        ...state,
        items: state.items.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        items: state.items.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    default:
      return state;
  }
};

export const setUsersAC = (items) => {
  return {
    type: SET_USERS,
    items,
  };
};
export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export default usersReducer;
