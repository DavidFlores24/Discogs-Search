import React from "react";

import { debounce } from "../../utils";

import styles from "./input.module.css";

export const SearchInput = props => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Artist Name"
        type="text"
        onKeyUp={evt => debounce(props.keyup(evt), 300)}
      ></input>
    </div>
  );
};
