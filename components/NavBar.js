import React from "react";
import styles from "../styles/nav.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
