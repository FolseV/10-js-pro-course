import { useEffect } from "react";
import useTypedSelector from "../../hooks";
import { useActions } from "../../hooks/useActions";
import styles from "./Users.module.css";
import logo from "../Posts/yy3.gif";

const Users = () => {
  const { users, error, loading } = useTypedSelector((state) => state.users);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return <img src={logo} alt="loading..." />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1 className={styles.users}>Users</h1>
      <ul className={styles.usersLists}>
        {users.map((user) => {
          return (
            <li className={styles.usersList} key={user.id}>
              <h2>Name: {user.name}</h2>
              <p className={styles.usersParag}>Email: {user.email}</p>
              <p className={styles.usersParag}>
                Adress: {user.address.city} {user.address.street} {user.address.suite}
              </p>
              <p className={styles.usersParag}>Phone: {user.phone}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
