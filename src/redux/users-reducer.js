import { UsersAPI } from "../api/api";

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
let initialstate = {
  items: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: true,
  followingInProgress: [],
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
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const setUsers = (items) => {
  return {
    type: SET_USERS,
    items,
  };
};
export const isFollow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const isunfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const toggleIsFollowing = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

export const GetUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  UsersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
  });
};

export const follow = (id) => (dispatch) => {
  dispatch(toggleIsFollowing(true, id));
  UsersAPI.followUser(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(isFollow(id));
    }
    dispatch(toggleIsFollowing(false, id));
  });
};
export const unfollow = (id) => (dispatch) => {
  dispatch(toggleIsFollowing(true, id));
  UsersAPI.unfollowUser(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(isunfollow(id));
    }
    dispatch(toggleIsFollowing(false, id));
  });
};
export default usersReducer;
