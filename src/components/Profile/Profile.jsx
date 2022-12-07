import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
debugger;
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.state.postData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
