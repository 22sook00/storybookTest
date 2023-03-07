import React, { useState } from "react";
//import "./navBar.css";
import styles from "./navBar.module.css";
import Button from "../Common/Buttons/Button";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

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
          <Button onClick={() => setIsOpenLogin(!isOpenLogin)}>로그인</Button>
          <Button onClick={() => setIsOpenSignup(!isOpenSignup)}>
            회원가입
          </Button>
        </div>
      </nav>

      {isOpenLogin && (
        <Login
          onClick={() => setIsOpenLogin(true)}
          onClose={() => setIsOpenLogin(false)}
          setIsOpenSignup={setIsOpenSignup}
        />
      )}
      {isOpenSignup && (
        <Signup
          onClick={() => setIsOpenSignup(true)}
          onClose={() => setIsOpenSignup(false)}
        />
      )}
    </header>
  );
};

export default NavBar;
