import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AllDapps } from './allDapps';
import { Dapp } from './dapp';
import { Dex } from './dex';
import { Games } from './games';
import { Infrastructure } from './infrastructure';
import { Node } from './node';
import { Social } from './social';
import { Whitepaper } from './whitepaper';

export function DappTabs() {
  const [key, setKey] = useState('Infrastructure');

  return (
    <div className='newTab'>
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
    
      <Tab eventKey="All" title="All">
        <AllDapps/>
      </Tab>
      <Tab eventKey="Dapp" title="Dapp">
      <Dapp/>
      </Tab>
      <Tab eventKey="Dex" title="Dex">
      <Dex/>
      </Tab>
      <Tab eventKey="Games" title="Games">
      <Games/>
      </Tab>
      <Tab eventKey="Infrastructure" title="Infrastructure">
      <Infrastructure/>
      </Tab>
      <Tab eventKey="Node" title="Node">
      <Node/>
      </Tab>
      <Tab eventKey="Social" title="Social">
      <Social/>
      </Tab>
      <Tab eventKey="Whitepaper" title="Whitepaper">
      <Whitepaper/>
      </Tab>
    
    </Tabs>
    </div>
    
  );
}

