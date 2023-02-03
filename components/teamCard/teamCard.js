import React from "react";
import styles from "./index.module.css"
import Image from "next/image";

import twitter from "../../public/images/twitter-log.svg"
import linkedin from "../../public/images/iconmonstr-linkedin-3-2.svg"
export function TeamCard(props){
    return(
        <div className={styles.card}>
            <Image alt="image" src={props.src} layout="responsive"/>
            <div className={styles.nameSection}>
                <h5>{props.name}</h5>
                <div className={styles.icons}>
                <a href={props.twitterLink}><Image alt="logo" src={twitter} className={styles.icon}/></a>
                <a href={props.linkedInLink}><Image alt="logo" src={linkedin} className={styles.icon}/></a>
                </div>
            </div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}