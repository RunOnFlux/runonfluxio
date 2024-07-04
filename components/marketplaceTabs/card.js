import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import minecraft from "../../public/images/marketplace/minecraft-icon 1.svg"
export function Card(){
    return (
        <div className={styles.card}>
            <div className={styles.logoContainer}>
                <Image alt="logo" src={minecraft}/>
            </div>
            <div className={styles.content}>
                <h6>SushiSwap</h6>
                <a href="#" className={styles.btn}>View App</a>
            </div>
        </div>
    )
}