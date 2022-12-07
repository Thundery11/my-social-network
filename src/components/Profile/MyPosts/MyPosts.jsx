import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let posts = props.postData.map((p) => (
    <Post message={p.message} likescount={p.likescount} id={p.id} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button>remove</button>
        </div>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
