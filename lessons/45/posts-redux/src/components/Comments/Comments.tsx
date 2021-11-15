import React, { useEffect } from "react";
import useTypedSelector from "../../hooks";
import styles from "./Comments.module.css";
import { useParams } from "react-router";
import { useActions } from "../../hooks/useActions";

const Comments = () => {
  let params = useParams<{ postId: string }>();
  const { comments } = useTypedSelector((state) => state.comments);
  const { fetchComments } = useActions();

  useEffect(() => {
    fetchComments(params.postId);
  }, []);

  return (
    <>
      {comments.map((comment) => {
        return (
          <div className={styles.comment}>
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
