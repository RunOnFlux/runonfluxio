import React from "react"
import styles from "./index.module.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FirstCPU } from "./firstCPU";
import { SecondCPU } from "./secondCPU";
import { ThirdCPU } from "./thirdCPU";
import { FourthCPU } from "./fourthCPU";
// import Sonnet from '../../components/Sonnet';

export function CostCalculatorCard(){
    return(
   
    <div className={styles.costCard}>
         <div className={styles.header}>
            <h4>Start Saving Now</h4>
            <p>Estimate the cost of your application on different cloud providers</p>
        </div>
    <Tabs
      defaultActiveKey="5"
      id="uncontrolled-tab-example"
      className="mb-3"
      >
       
      <Tab eventKey="0.1" title="0.1 CPU">
        <FirstCPU/>
      </Tab>
      <Tab eventKey="5" title="5 CPUs">
        <SecondCPU/>
      </Tab>
      <Tab eventKey="10" title="10 CPUs">
       <ThirdCPU/>
      </Tab>
      <Tab eventKey="15" title="15 CPUs">
        <FourthCPU/>
      </Tab>
    </Tabs>             
           </div>
     
    )
}