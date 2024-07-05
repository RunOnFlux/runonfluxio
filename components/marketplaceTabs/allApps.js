import React from "react";
import styles from "./index.module.css";
import { Card } from "./card";
import minecraft from "../../public/images/marketplace/minecraft-icon 1.svg"
import dash from "../../public/images/marketplace/dash.svg"
import firo from "../../public/images/marketplace/firo.svg"
import wanchain from "../../public/images/marketplace/wanchain.svg"
import blocks from "../../public/images/marketplace/blocks.svg"
import neoxa from "../../public/images/marketplace/neoxa.svg"
import celestia from "../../public/images/marketplace/celestia.svg"
import timpi from "../../public/images/marketplace/timpi 1 1.svg"
import nostr from "../../public/images/marketplace/nostr.svg"
import rustpad from "../../public/images/marketplace/rustpad.svg"
import whoogle from "../../public/images/marketplace/whoogle.svg"
import sushiswap from "../../public/images/marketplace/sushiswap.svg"
export function AllApps(){
    return (
     
        <div className="row">
                 <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={minecraft} name={'Minecraft'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={dash} name={'Dash'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={firo} name={'Firo'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={wanchain} name={'Wanchain'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={blocks} name={'Blocx'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={neoxa} name={'Neoxa'} url={''} linkName={'Deploy Now'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={celestia} name={'Celestia'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={timpi} name={'Timpi'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={nostr} name={'Nostr'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={rustpad} name={'Rustpad'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={whoogle} name={'Whoogle'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={sushiswap} name={'Sushiswap'} url={''} linkName={'View App'}  /></div>
                    </div>
             </div>
       

        
        
      
    )
}