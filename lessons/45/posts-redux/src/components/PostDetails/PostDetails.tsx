import React, { useEffect } from "react";
import styles from "./PostDetails.module.css";
import { Link } from "react-router-dom";
import { generatePath, useParams } from "react-router";
import useTypedSelector from "../../hooks";
import { useActions } from "../../hooks/useActions";
import logo from "../Posts/yy3.gif";

const PostDetails = () => {
  let params = useParams<{ postId: string }>();
  const { postDetails, loading, error } = useTypedSelector((state) => state.posts);
  const { fetchPostDetails } = useActions();

  useEffect(() => {
    fetchPostDetails(params.postId);
  }, [fetchPostDetails, params.postId]);

  if (loading) {
    return <img src={logo} alt="loading..." />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div className={styles.post} key={postDetails?.id}>
        <h2 className={styles.post_title}>{postDetails?.title}</h2>
        <p>{postDetails?.body}</p>
        <div>
          <Link
            className={styles.commentLink}
            to={generatePath("/posts/:postId/comments", { postId: postDetails?.id + "" })}
          >
            Comment
          </Link>
        </div>
      </div>
      <button onClick={() => console.log(postDetails)}>click</button>
    </>
  );
};

export default PostDetails;
