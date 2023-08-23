import React from "react"
import styles from "./index.module.css";
import Image from "next/image";
import Arrow from "../../public/images/arrowRight.png"
export function BlogCard(props){
    return(
       
        <div className={styles.card}>
            <div className={styles.imgContainer}> <Image alt="card-image"  className="object-cover" src={props.img} href={props.href} width={'0'} height={'0'} unoptimized/></div>
           <br/> 
            <h6>{props.date}</h6>
            <h4>{props.description}</h4>
            <h5>{props.content}</h5>
            <a href={props.link} target="_blank" rel="noreferrer">Read Full <span><Image alt="arrow" src={Arrow}/></span></a>
        </div>
    )
}