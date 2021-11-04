import React, { useEffect, useContext } from "react";
import { AuthorIdContext, ThemeContext, VarContext } from "../../myContext";
import { Posts, UsersT } from "../../types";
import styles from "./Row.module.css";
import classNames from "classnames/bind";
import { Link, generatePath } from "react-router-dom";

let cx = classNames.bind(styles);

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  author: UsersT[];
  posts: Posts[];
}

const Row: React.FC<Props> = (props) => {
  const [value, setValue] = useContext(VarContext);
  const [theme] = useContext(ThemeContext);
  const [, setAuthorId] = useContext(AuthorIdContext);

  useEffect(() => {
    setValue(5); // change list number to 5 when loaded
  }, []);

  const filteredUsers = props.posts.filter((post) => {
    return post.id <= value;
  });

  const findAuthorName = props.author.map((author) => {
    return author.name;
  });

  return (
    <>
      <ul
        className={cx({
          list: true,
          usersList__dark: !!theme,
        })}
      >
        {filteredUsers.map((el) => {
          return (
            <li
              className={cx({
                card: true,
                card__dark: theme,
              })}
              key={el.id}
            >
              <h2
                className={cx({
                  card__title: true,
                  card__title__dark: theme,
                })}
              >
                {el.title}
              </h2>
              <p
                className={cx({
                  card__body: true,
                  card__body__dark: theme,
                })}
              >
                {el.body}
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
                    setAuthorId(() => el.userId);
                  }}
                >
                  {findAuthorName[el.userId - 1]}
                  {theme}
                </button>
              </p>
              <Link
                className={styles.post_details}
                to={generatePath("/posts/:postId", {
                  postId: el.id,
                })}
              >
                Post Details
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Row;
