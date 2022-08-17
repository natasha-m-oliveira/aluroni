import styles from "./PaginaPadrao.module.scss";
import stylesTema from "styles/Tema.module.scss";
import { Outlet } from "react-router-dom";
import React from "react";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa di código e da massa</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
