import React from "react";
import styles from "./content-info.module.scss";
import Image from "next/image";

import checkIcon from "../../assets/uim_check-circle.svg";

type contentInfo = {
  purpose: string;
  title: string;
  description: string;
  image: any;
  row: string;
};

const contentInfo = ({
  purpose,
  title,
  description,
  image,
  row,
}: contentInfo) => {
  return (
    <div
      className={row === "row" ? styles.contentInfo : styles.contentInfoReverse}
    >
      <div className={styles.contentInfoImg}>
        <Image src={image} alt="icon" />
      </div>

      <div className={styles.left}>
        <div className={styles.purpose}>
          <Image src={checkIcon} alt="check" />
          <span>{purpose}</span>
        </div>

        <h1 className={styles.contentInfo__title}>{title}</h1>
        <span className={styles.contentInfo__text}>{description}</span>
      </div>
    </div>
  );
};

export default contentInfo;
