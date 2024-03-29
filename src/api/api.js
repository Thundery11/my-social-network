import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "2ae5bbdb-ec27-42f3-9502-5fb19ea27207",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const UsersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUser(id = 2038) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};

export const ProfileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getProfileStatus(userId) {
    return instance
      .get(`/profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateProfileStatus(status) {
    return instance
      .put(`/profile/status`, { status: status })
      .then((responce) => responce.data);
  },
};

export const AuthAPI = {
  setAuth() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
