import React from "react";
import styles from "./index.module.css";
import { Card } from "./card";
import hello from "../../public/images/marketplace/Logos/helloworld.svg"
import teamspeak from "../../public/images/marketplace/Logos/teamspeak.svg"
import website from "../../public/images/marketplace/Logos/websitescreenshot.svg"
import ipify from "../../public/images/marketplace/Logos/ipify.svg"
import nostr from "../../public/images/marketplace/Logos/nostr.svg"
export function Hosting(){
    return (
        <div className="row">
             <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={hello} name={'Hello World'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={teamspeak} name={'Teamspeak'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={website} name={'Website Screenshot API'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={ipify} name={'Ipify'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={nostr} name={'Nostr'}  linkName={'View App'}  /></div>
                    </div>
        </div>
    )
}