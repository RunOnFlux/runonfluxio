

import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

import twitter from "../../public/images/twitter-log.svg";
import linkedin from "../../public/images/iconmonstr-linkedin-3-2.svg";

export function TeamCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image alt="image" src={props.src} layout="responsive" />
      </div>
      <div className={styles.nameSection}>
        <h5 className={styles.name}>{props.name}</h5>
        <div className={styles.icons}>
          {props.twitterLink && (
            <a href={props.twitterLink}>
              <Image alt="Twitter logo" src={twitter} className={styles.icon} />
            </a>
          )}
          {props.linkedInLink && (
            <a href={props.linkedInLink}>
              <Image alt="LinkedIn logo" src={linkedin} className={styles.icon} />
            </a>
          )}
        </div>
      </div>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.intro}>{props.intro}</p>
      <p className={styles.intro}>{props.description}</p>
    </div>
  );
}
