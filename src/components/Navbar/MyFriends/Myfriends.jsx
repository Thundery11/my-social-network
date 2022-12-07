import s from "./MyFriends.module.css";

const MyFriends = (props) => {
  return (
    <div className={s.circle}>
      <div className={s.circles}>{props.friendName}</div>
    </div>
  );
};

export default MyFriends;
