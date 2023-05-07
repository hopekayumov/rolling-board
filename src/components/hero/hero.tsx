import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero__title}>Project Management app</h1>
      <h2 className={styles.hero__heading}>
        Colabrate and build <br /> faster, together.
      </h2>
      <span className={styles.hero__text}>
        Create, share, and get feedback with collaborative <br /> boards for
        rapid development.
      </span>

      <button className={styles.hero__btn}>Create Kanban board</button>
    </section>
  );
};

export default Hero;
