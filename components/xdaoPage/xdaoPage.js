import React from "react"
import styles from "./index.module.css";
import logo from "../../public/images/xdao-logo.svg"
import Image from "next/image";
export function XDAOPage(){
    return(
        <React.Fragment>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                    <Image src={logo} alt="img1" width={'0'} height={'0'}/>
                    <h3>Decentralized autonomous organization</h3>
                    <p><i>Flux Governance (XDAO) is managed by a decentralized community who submit and vote on proposals for the future of Flux. Flux node operators will be able to vote whether proposals are accepted or rejected. This is a milestone for Flux as community governance is a centerpiece of decentralization.</i></p>
                    <div className={styles.btns}>
                            <a>XDAO Details</a>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}