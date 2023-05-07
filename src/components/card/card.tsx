import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  icon: any;
};

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className={styles.card}>
      <Image src={icon} alt="icon" />
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
};

export default Card;
