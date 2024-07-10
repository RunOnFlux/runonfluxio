import React from "react";
import styles from "./index.module.css";
import { Card } from "./card";
import compiler from "../../public/images/marketplace/Logos/compiler.svg"
import folding from "../../public/images/marketplace/Logos/foldinghome.svg"
import grocy from "../../public/images/marketplace/Logos/grocy.svg"
import owncast from "../../public/images/marketplace/Logos/owncast.svg"
import rustpad from "../../public/images/marketplace/Logos/rustpad.svg"
import whoogle from "../../public/images/marketplace/Logos/whoogle.svg"
import yacy from "../../public/images/marketplace/Logos/yacy.svg"
export function Productivity(){
    return (
       <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={compiler} name={'Compiler'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={folding} name={'Folding@home'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={grocy} name={'Grocy'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={owncast} name={'Owncast'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={rustpad} name={'Rustpad'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={whoogle} name={'Whoogle'} url={''} linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={yacy} name={'YaCy'} url={''} linkName={'View App'}  /></div>
                    </div>
       </div>
    )
}