import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from "./index.module.css"
import { AllApps } from './allApps';
import { Blockchain } from './blockchain';
import { Frontend } from './frontend';
import { Games } from './games';
import { Hosting } from './hosting';
import { Masternode } from './masternode';
import { Productivity } from './productivity';
import { RPC } from './rpc';
export function MarketplaceTabs() {
    const [key, setKey] = useState('AllApps');
  
    return (
      <div className='newTab1' >
          <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
      
        <Tab eventKey="AllApps" title="All Apps">
          <AllApps/>
        </Tab>
        <Tab eventKey="Blockchain" title="Blockchain">
          <Blockchain/>
        </Tab>
        <Tab eventKey="Frontend" title="Frontend">
          <Frontend/>
        </Tab>
        <Tab eventKey="Games" title="Games">
          <Games/>
        </Tab>
        <Tab eventKey="Hosting" title="Hosting">
          <Hosting/>
        </Tab>
        <Tab eventKey="Masternode" title="Masternode">
          <Masternode/>
        </Tab>
        <Tab eventKey="Productivity" title="Productivity">
          <Productivity/>
        </Tab>
        <Tab eventKey="RPC" title="RPC">
          <RPC/>
        </Tab>
       
      
      </Tabs>
      </div>
      
    );
  }