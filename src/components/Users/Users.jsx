import axios from "axios";
import React from "react";
import UserPhoto from "../../assets/images/male-avatar.jpg";
import s from "./Users.module.css";
let Users = (props) => {
  if (props.items.length === 0) {
    props.setUsers([
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
    ]);
  }

  return (
    <div>
      {props.items.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : UserPhoto}
                alt="sdsds"
                className={s.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
