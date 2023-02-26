import axios from "axios";
import React from "react";
import UserPhoto from "../../assets/images/male-avatar.jpg";
let Users = (props) => {
  props.setUsers([
    [
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
  ]);


};

export default Users;
