import React from "react";
import Nav from "./NavBar";

import styles from "../styles/Layout.module.scss";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.container_main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
