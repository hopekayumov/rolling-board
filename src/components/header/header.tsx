import React from "react";
import Image from "next/image";

import styles from "./header.module.scss";

import Logo from "../../assets/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image src={Logo} alt="logo" width={155} height={28} />
      </Link>

      <nav className={styles.nav}>
        <Link className={styles.nav__link} href="/about">
          About
        </Link>
        <Link className={styles.nav__link} href="/about">
          English
        </Link>
      </nav>

      <div className={styles.headerAuth}>
        <button className={styles.login__btn}>Login</button>
        <button className={styles.signup___btn}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
