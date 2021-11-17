import React from "react";
import { useActions } from "../../hooks/useActions";
import styles from "./ThemeButton.module.css";

const ThemeButton: React.FC = () => {
  const { changeTheme } = useActions();
  return (
    <>
      <div>
        <input
          type="checkbox"
          id="toggle-button"
          className={styles.toggle__button}
          onClick={() => changeTheme()}
        />
      </div>
    </>
  );
};

export default ThemeButton;
