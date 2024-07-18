import React from "react";
import styles from "./index.module.css";
import { Card } from "./card";
import firo from "../../public/images/marketplace/Logos/firo.svg"
import pivx from "../../public/images/marketplace/Logos/pivx.svg"
import dash from "../../public/images/marketplace/Logos/dash.svg"
import blocx from "../../public/images/marketplace/Logos/blocx.svg"
import neoxa from "../../public/images/marketplace/Logos/neoxa.svg"

export function Masternode(){
    return (
        <div className="row">
             <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={firo} name={'Firo Masternode'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={pivx} name={'PIVX Masternode'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={dash} name={'Dash Masternode'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={blocx} name={'BLOCX Masternode'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={neoxa} name={'Neoxa Masternode'}  linkName={'View App'}  /></div>
                    </div>
        </div>
    )
}