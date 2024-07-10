import React from "react";
import styles from "./index.module.css";
import { Card } from "./card";
import enshrouded from "../../public/images/marketplace/Logos/enshrouded.svg"
import palword from "../../public/images/marketplace/Logos/palworld.svg"
export function Games(){
    return (
        <div className="row">
             <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={enshrouded} name={'Enshrouded 16 slots'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={enshrouded} name={'Enshrouded 4 slots'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={enshrouded} name={'Enshrouded 8 slots'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={palword} name={'Palworld 16 slots'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={palword} name={'Palworld 32 slots'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={palword} name={'Palworld 8 slots'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={palword} name={'Palworld 4 slots'} url={''} linkName={'View App'}  /></div>
                    </div>
        </div>
    )
}