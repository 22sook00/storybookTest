import React, { useState } from "react";
//import "./navBar.css";
import styles from "./navBar.module.css";
import Button from "../Common/Buttons/Button";

const NavBar = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);
  return (
    <header className={styles.nav_container}>
      <nav className={styles.nav_wrapper}>
        <h2>
          squares <br />
          board
        </h2>
        <div className={styles.nav_button_wrapper}>
          <Button size="sm" onClick={() => setIsOpenLogin(!isOpenLogin)}>
            로그인
          </Button>
          <Button size="sm" onClick={() => setIsOpenSignup(!isOpenSignup)}>
            회원가입
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
