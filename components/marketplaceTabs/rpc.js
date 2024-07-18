import React from "react";
import styles from "./index.module.css";
import { Card } from "./card";
import wanchain from "../../public/images/marketplace/Logos/wanchain.svg"
import bitgert from "../../public/images/marketplace/Logos/bitgert.svg"
import celo from "../../public/images/marketplace/Logos/celo.svg"
import fuse from "../../public/images/marketplace/Logos/fuse.svg"
import astar from "../../public/images/marketplace/Logos/astar.svg"
export function RPC(){
    return (
        <div className="row">
             <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={wanchain} name={'Wanchain RPC'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={bitgert} name={'Bitgert RPC'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={celo} name={'Celo RPC'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={fuse} name={'Fuse RPC'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={astar} name={'Astar RPC'}  linkName={'View App'}  /></div>
                    </div>
        </div>
    )
}