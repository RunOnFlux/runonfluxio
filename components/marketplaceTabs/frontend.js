import React from "react";
import styles from "./index.module.css";
import dopex from "../../public/images/marketplace/Logos/dopex>stryke.svg"
import gmx from "../../public/images/marketplace/Logos/gmx.svg"
import liquidity from "../../public/images/marketplace/Logos/liquity.svg"
import osmosis from "../../public/images/marketplace/Logos/osmosis.svg"
import pangolin from "../../public/images/marketplace/Logos/pangolin.svg"
import sushiswap from "../../public/images/marketplace/Logos/sushiswap.svg"
import yearn from "../../public/images/marketplace/Logos/yearn.svg"
import { Card } from "./card";
export function Frontend(){
    return (
      <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={dopex} name={'Dopex'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={gmx} name={'GMX'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={liquidity} name={'Liquidity'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={osmosis} name={'Osmosis'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={pangolin} name={'Pangolin'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={sushiswap} name={'Sushiswap'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={yearn} name={'Yearn Finance'}  linkName={'View App'}  /></div>
                    </div>
      </div>
    )
}