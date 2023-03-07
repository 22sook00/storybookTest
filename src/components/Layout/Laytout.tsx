import React, { FC } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
//import "./layout.css";
import styles from "./layout.module.css";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <NavBar />
      <section className={styles.layout_container}>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
