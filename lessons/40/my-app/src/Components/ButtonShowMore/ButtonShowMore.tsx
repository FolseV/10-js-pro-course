import React, { useContext } from "react";
import { LoadedContext, VarContext } from "../../myContext";
import styles from "./ButtonShowMore.module.css";

const ButtonShowMore: React.FC = () => {
  const [, setValue] = useContext(VarContext);
  const [loaded] = useContext(LoadedContext);
  if (loaded === true) {
    return (
      <>
        <button
          className={styles.buttonShowMore}
          onClick={() => setValue((prevValue: number) => prevValue + 5)}
        >
          Show More
        </button>
        <button
          className={styles.buttonShowMore}
          onClick={() => setValue((prevValue: number) => (prevValue = 5))}
        >
          Reset
        </button>
      </>
    );
  } else {
    return (
      <div className="loading">
        <img src="https://i.gifer.com/yy3.gif" alt="loading..." />
      </div>
    );
  }
};

export default ButtonShowMore;
