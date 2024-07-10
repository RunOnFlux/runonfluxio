import React from "react";
import styles from "./index.module.css";
import { Card } from "./card";
import presearch from "../../public/images/marketplace/Logos/presearch.svg"
import streamr from "../../public/images/marketplace/Logos/streamr.svg"
import ironFish from "../../public/images/marketplace/Logos/ironfish.svg"
import ravecoin from "../../public/images/marketplace/Logos/ravencoin.svg"
import kadena from "../../public/images/marketplace/Logos/kadena.svg"
import neoxa from "../../public/images/marketplace/Logos/neoxa.svg"
import kusama from "../../public/images/marketplace/Logos/kusama.svg"
import deso from "../../public/images/marketplace/Logos/deso.svg"
import dogecoin from "../../public/images/marketplace/Logos/dogecoin.svg"
import alephium from "../../public/images/marketplace/Logos/alephium.svg"
import meowcoin from "../../public/images/marketplace/Logos/meowcoin.svg"
import nexanode from "../../public/images/marketplace/Logos/nexa.svg"
import radiant from "../../public/images/marketplace/Logos/radiant.svg"
import neurai from "../../public/images/marketplace/Logos/neurai.svg"
import celestia from "../../public/images/marketplace/Logos/celestia.svg"
import bittensor from "../../public/images/marketplace/Logos/bittensor.svg"
import cyberfly from "../../public/images/marketplace/Logos/cyberfly.svg"

export function Blockchain(){
    return (
       <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={presearch} name={'Presearch-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={streamr} name={'Streamr'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={ironFish} name={'IronFish-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={ravecoin} name={'Ravecoin-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={kadena} name={' Kadena-Chainweb'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={neoxa} name={'Neoxa-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={kusama} name={'Kusama-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={deso} name={'Deso-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={dogecoin} name={'Dogecoin-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={alephium} name={'Alephium-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={meowcoin} name={'Meowcoin'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={nexanode} name={'Nexa-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={radiant} name={'Radiant-ElectrumX'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={neurai} name={'Neurai-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={neurai} name={'Neurai-ElectrumX'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={celestia} name={'Celestia-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={bittensor} name={'Bittensor-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={cyberfly} name={'Cyberfly-Node'} url={''} linkName={'View App'}  /></div>
                    </div>

       </div>
    )
}