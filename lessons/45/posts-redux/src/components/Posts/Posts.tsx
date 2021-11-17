import React, { useEffect } from "react";
import useTypedSelector from "../../hooks";
import { useActions } from "../../hooks/useActions";
import logo from "./yy3.gif";
import { Link, generatePath } from "react-router-dom";
import styles from "./Posts.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);
interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Posts: React.FC<Props> = (props) => {
  const { posts, error, loading, postsNumber } = useTypedSelector((state) => state.posts);
  const { users } = useTypedSelector((state) => state.users);
  const { theme } = useTypedSelector((state) => state.theme);
  const { fetchPosts, fetchUsers, increasePosts, findPostId } = useActions();

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, [fetchUsers, fetchPosts]);

  if (loading) {
    return <img src={logo} alt="loading..." />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  const filteredPosts = posts.filter((post) => {
    return post.id <= postsNumber;
  });

  return (
    <>
      <ul
        className={cx({
          list: true,
          usersList__dark: !!theme,
        })}
      >
        {filteredPosts.map((post) => {
          return (
            <li
              className={cx({
                card: true,
                card__dark: theme,
              })}
              key={post.id}
            >
              <h2
                className={cx({
                  card__title: true,
                  card__title__dark: theme,
                })}
              >
                {post.title}
              </h2>
              <p
                className={cx({
                  card__body: true,
                  card__body__dark: theme,
                })}
              >
                {post.body}
              </p>
              <p
                className={cx({
                  card__author: true,
                  card__author__dark: theme,
                })}
              >
                Author:{" "}
                <button
                  className={styles.card__button}
                  onClick={() => {
                    props.setActive(true);
                    findPostId(post.id);
                  }}
                >
                  {users[post.userId - 1]?.name}
                </button>
              </p>
              <Link
                className={styles.post_details}
                to={generatePath("/posts/:postId", {
                  postId: post.id,
                })}
              >
                Post Details
              </Link>
            </li>
          );
        })}
      </ul>
      <button className={styles.buttonShowMore} onClick={() => increasePosts()}>
        show more
      </button>
    </>
  );
};

export default Posts;
