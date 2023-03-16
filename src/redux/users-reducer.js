const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let initialstate = {
  items: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: true,
};

const usersReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, items: [...action.items] };
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
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
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
export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};
export const setTotalUsersCountAC = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
  };
};
export const toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export default usersReducer;
