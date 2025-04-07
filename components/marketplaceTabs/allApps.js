import React from "react";
import styles from "./index.module.css";
import { Card } from "./card";
import wanchain from "../../public/images/marketplace/Logos/wanchain.svg"
import bitgert from "../../public/images/marketplace/Logos/bitgert.svg"
import celo from "../../public/images/marketplace/Logos/celo.svg"
import fuse from "../../public/images/marketplace/Logos/fuse.svg"
import astar from "../../public/images/marketplace/Logos/astar.svg"
import compiler from "../../public/images/marketplace/Logos/compiler.svg"
import folding from "../../public/images/marketplace/Logos/foldinghome.svg"
import grocy from "../../public/images/marketplace/Logos/grocy.svg"
import owncast from "../../public/images/marketplace/Logos/owncast.svg"
import rustpad from "../../public/images/marketplace/Logos/rustpad.svg"
import whoogle from "../../public/images/marketplace/Logos/whoogle.svg"
import yacy from "../../public/images/marketplace/Logos/yacy.svg"
import firo from "../../public/images/marketplace/Logos/firo.svg"
import pivx from "../../public/images/marketplace/Logos/pivx.svg"
import dash from "../../public/images/marketplace/Logos/dash.svg"
import blocx from "../../public/images/marketplace/Logos/blocx.svg"
import neoxa from "../../public/images/marketplace/Logos/neoxa.svg"
import hello from "../../public/images/marketplace/Logos/helloworld.svg"
import teamspeak from "../../public/images/marketplace/Logos/teamspeak.svg"
import website from "../../public/images/marketplace/Logos/websitescreenshot.svg"
import ipify from "../../public/images/marketplace/Logos/ipify.svg"
import nostr from "../../public/images/marketplace/Logos/nostr.svg"
import enshrouded from "../../public/images/marketplace/Logos/enshrouded.svg"
import palword from "../../public/images/marketplace/Logos/palworld.svg"
import dopex from "../../public/images/marketplace/Logos/dopexstryke.svg"
import gmx from "../../public/images/marketplace/Logos/gmx.svg"
import liquidity from "../../public/images/marketplace/Logos/liquity.svg"
import osmosis from "../../public/images/marketplace/Logos/osmosis.svg"
import pangolin from "../../public/images/marketplace/Logos/pangolin.svg"
import sushiswap from "../../public/images/marketplace/Logos/sushiswap.svg"
import yearn from "../../public/images/marketplace/Logos/yearn.svg"
import presearch from "../../public/images/marketplace/Logos/presearch.svg"
import streamr from "../../public/images/marketplace/Logos/streamr.svg"
import ironFish from "../../public/images/marketplace/Logos/ironfish.svg"
import ravecoin from "../../public/images/marketplace/Logos/ravencoin.svg"
import kadena from "../../public/images/marketplace/Logos/kadena.svg"
// import neoxa from "../../public/images/marketplace/Logos/neoxa.svg"
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
export function AllApps(){
    return (
     
        <div className="row">
             <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={enshrouded} name={'Enshrouded 16 slots'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={enshrouded} name={'Enshrouded 4 slots'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={enshrouded} name={'Enshrouded 8 slots'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={palword} name={'Palworld 16 slots'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={palword} name={'Palworld 32 slots'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={palword} name={'Palworld 8 slots'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={palword} name={'Palworld 4 slots'}  linkName={'View App'}  /></div>
                    </div>
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
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={firo} name={'Firo Masternode'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={pivx} name={'PIVX Masternode'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={dash} name={'Dash Masternode'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={blocx} name={'BLOCX Masternode'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={neoxa} name={'Neoxa Masternode'}  linkName={'View App'}  /></div>
                    </div>
                 <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={wanchain} name={'Wanchain RPC'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={bitgert} name={'Bitgert RPC'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={celo} name={'Celo RPC'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={fuse} name={'Fuse RPC'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={astar} name={'Astar RPC'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={compiler} name={'Compiler'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={folding} name={'Folding@home'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={grocy} name={'Grocy'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={owncast} name={'Owncast'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={rustpad} name={'Rustpad'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={whoogle} name={'Whoogle'}  linkName={'View App'}  /></div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={presearch} name={'Presearch-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={streamr} name={'Streamr'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={ironFish} name={'IronFish-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={ravecoin} name={'Ravecoin-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={kadena} name={' Kadena-Chainweb'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={neoxa} name={'Neoxa-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={kusama} name={'Kusama-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={deso} name={'Deso-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={dogecoin} name={'Dogecoin-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={alephium} name={'Alephium-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={meowcoin} name={'Meowcoin'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={nexanode} name={'Nexa-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={radiant} name={'Radiant-ElectrumX'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={neurai} name={'Neurai-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={neurai} name={'Neurai-ElectrumX'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={celestia} name={'Celestia-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={bittensor} name={'Bittensor-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={cyberfly} name={'Cyberfly-Node'}  linkName={'View App'}  /></div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className={styles.main}> <Card logo={yacy} name={'YaCy'}  linkName={'View App'}  /></div>
                    </div>

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