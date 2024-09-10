import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
export function Card(props){
    return (
        <div className={styles.card}>
            <div className={styles.logoContainer}>
                <Image alt="logo" src={props.logo}/>
            </div>
            <div className={styles.content}>
                <h6>{props.name}</h6>
                <a href="https://cloud.runonflux.io/marketplace" target="_blank" rel="noreferrer" className={styles.btn}>{props.linkName}</a>
            </div>
        </div>
    )
}