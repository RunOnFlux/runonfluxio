import React from "react"
import styles from "./index.module.css";
import Image from "next/image";

export function DappCard1(props){
    return(
        <div className={styles.card}>
            <div className={styles.header}>
            <Image src={props.header} alt="img1" width={'0'} height={'0'}/>
            </div>
            <div className={styles.logo}>
            <Image src={props.logo} alt="logo" width={'0'} height={'0'}/>
            <h3>{props.title}</h3>
            </div>
            <p><span>{props.name}</span> {props.content}</p>
            <div className={styles.btnrow}>
            <a className={styles.btn1}>{props.btn1}</a>
            {/* <a className={styles.btn2}>{props.btn2}</a> */}
            {/* <a className={styles.btn3}>{props.btn3}</a> */}
            </div>
            
        </div>
    )
};

export function DappCard2(props){
    return(
        <div className={styles.card}>
            <div className={styles.header}>
            <Image src={props.header} alt="img1" width={'0'} height={'0'}/>
            </div>
            <div className={styles.logo}>
            <Image src={props.logo} alt="logo" width={'0'} height={'0'}/>
            <h3>{props.title}</h3>
            </div>
            <p><span>{props.name}</span> {props.content}</p>
            <div className={styles.btnrow}>
            <a className={styles.btn1}>{props.btn1}</a>
            <a className={styles.btn2}>{props.btn2}</a>
            {/* <a className={styles.btn3}>{props.btn3}</a> */}
            </div>
            
        </div>
    )
};

export function DappCard3(props){
    return(
        <div className={styles.card}>
            <div className={styles.header}>
            <Image src={props.header} alt="img1" width={'0'} height={'0'}/>
            </div>
            <div className={styles.logo}>
            <Image src={props.logo} alt="logo" width={'0'} height={'0'}/>
            <h3>{props.title}</h3>
            </div>
            <p><span>{props.name}</span> {props.content}</p>
            <div className={styles.btnrow}>
            <a className={styles.btn1}>{props.btn1}</a>
            <a className={styles.btn2}>{props.btn2}</a>
            <a className={styles.btn3}>{props.btn3}</a>
            </div>
            
        </div>
    )
}