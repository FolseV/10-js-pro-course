import React, { useState } from "react";
import styles from "./app.module.css";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from "react-router-dom";
import ThemeButton from "./components/ThemeButton";
import classNames from "classnames/bind";
import Users from "./components/Users";
import PostDetails from "./components/PostDetails";
import Comments from "./components/Comments";
import useTypedSelector from "./hooks";
import Modal from "./components/Modal";

let cx = classNames.bind(styles);

function App() {
  const { theme } = useTypedSelector((state) => state.theme);
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <Router>
      <div className="App">
        <header>
          <ul className={styles.navigationBar}>
            <li>
              <NavLink to="/posts" activeClassName={styles.activeLink}>
                <p className={styles.nav}>Posts </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName={styles.activeLink}>
                <p className={styles.nav}> Users</p>
              </NavLink>
            </li>
            <ThemeButton />
          </ul>
        </header>
        <div
          className={cx({
            app: true,
            appDark: theme,
          })}
        >
          <Switch>
            <Route path="/posts" exact>
              <Posts active setActive={setModalActive} />
              <Modal active={modalActive} setActive={setModalActive} />
            </Route>
            <Route path="/users" exact>
              <Users />
            </Route>
            <Route path="/posts/:postId" exact>
              <PostDetails />
            </Route>
            <Route path="/posts/:postId/comments" exact>
              <Comments />
            </Route>
            <Redirect from="/" to="/posts" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
