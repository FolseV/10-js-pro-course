import React, { useEffect } from "react";
import useTypedSelector from "../../hooks";
import styles from "./Comments.module.css";
import { useParams } from "react-router";
import { useActions } from "../../hooks/useActions";
import logo from "../Posts/yy3.gif";

const Comments = () => {
  let params = useParams<{ postId: string }>();
  const { comments, loading, error } = useTypedSelector((state) => state.comments);
  const { fetchComments } = useActions();

  useEffect(() => {
    fetchComments(params.postId);
  }, [fetchComments, params.postId]);

  if (loading) {
    return <img src={logo} alt="loading..." />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {comments.map((comment) => {
        return (
          <div className={styles.comment} key={comment.id}>
            <h2>Comment</h2>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p className={styles.commentBody}>{comment.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
