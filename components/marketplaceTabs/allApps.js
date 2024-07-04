import React from "react";
import styles from "./index.module.css";
import { Card } from "./card";
export function AllApps(){
    return (
     
        <div className="row">
                 <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card/></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card/></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card/></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card/></div>
                    </div>
             </div>
       

        
        
      
    )
}