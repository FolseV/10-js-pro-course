import React from "react";
import useTypedSelector from "../../hooks";
import classNames from "classnames/bind";
import styles from "./Modal.module.css";

const cx = classNames.bind(styles);

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = (props) => {
  const { theme } = useTypedSelector((state) => state.theme);
  const { postId } = useTypedSelector((state) => state.posts);
  const { users } = useTypedSelector((state) => state.users);

  let newUser = users.filter((user) => user.id === postId);

  return (
    <>
      {newUser.map((user) => {
        return (
          <div
            className={cx({
              modal: true,
              active: props.active,
              modalDark: theme,
            })}
            onClick={() => props.setActive(false)}
          >
            <div
              className={cx({
                modal__content: true,
                active: props.active,
                modalContentDark: theme,
              })}
              onClick={(e) => e.stopPropagation}
            >
              <div
                className={cx({
                  modal__title: true,
                  modalTitleDark: theme,
                })}
              >
                {user.name}
              </div>
              <div
                className={cx({
                  modal__body: true,
                  modalBodyDark: theme,
                })}
              >
                <p>
                  Adress: {user.address.city}
                  {user.address.street}
                  {user.address.suite}
                </p>
                <p>Email: {user.email}</p>
                <p></p>
                <p>Phone: {user.phone}</p>
              </div>
              {/* <button className={styles.modal_button}>Close</button> */}
              <button
                className={cx({
                  modal_Button: true,
                  modal_ButtonDark: theme,
                })}
              >
                Close
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Modal;
