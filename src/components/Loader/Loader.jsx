import classNames from "classnames";
import React, { useState } from "react";
import styles from "./Loader.module.scss";

export const Loader = () => {
  const [isPause, setisPause] = useState(false);
  return (
    <>
      <div className={styles.threeDotSpinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
      <div
        className={classNames(styles.rect, { [styles.paused]: isPause })}
      ></div>
      <button onClick={() => setisPause(!isPause)}>toggle</button>
    </>
  );
};
