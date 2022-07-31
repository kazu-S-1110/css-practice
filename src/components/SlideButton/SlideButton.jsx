import classNames from "classnames";
import React from "react";
import styles from "./SlideButton.module.scss";

export const SlideButton = () => {
  return (
    <button className={classNames(styles.btn, styles.slideBg)}>
      <span></span>SlideButton
    </button>
  );
};
