import React from "react";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> News
        <p className={styles.description}> Keep up with the latest news</p>
      </h1>
    </div>
  );
};

export default Header;
