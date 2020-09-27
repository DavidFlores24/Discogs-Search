import React from "react";

import styles from "./list.module.css";

export const List = props => {
  const listItems = props.items.map((item, index) => (
    <li key={index} className={styles.item}>
      {item}
    </li>
  ));

  return (
    <div className={styles.container}>
      <ul className={styles.list}>{listItems}</ul>
    </div>
  );
};
