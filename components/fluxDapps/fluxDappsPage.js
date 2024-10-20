import React from "react";
import styles from "./index.module.css";
import { DappTabs } from "../dAppsTab/dappTabs";
import Image from "next/image";
import stars from "../../public/images/dapps/Group-stars.svg"
export function FluxDappsPage(){
    return(
        <React.Fragment>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                        <div className={styles.header}>
                        <h1>Explore Applications<br/> Running on <span>Flux Web3</span></h1>
                        <p>“An operational network of decentralized computing power is one of the core modules for the Flux Ecosystem, providing the ability for Flux and third-party developers alike to run their applications on a fair-priced network with no single point-of-failure.” <span>-Daniel Keller, CSO</span></p>
                        </div>
                     </div>
                     <div className="row">
                        <div className={styles.btns}>
                            <a href="https://cloud.runonflux.com/globalapps">Discover Global Apps</a>
                            <a href="https://cloud.runonflux.com/marketplace">Marketplace</a>
                            <a href="https://cloud.runonflux.com/launch">Deploy dApp</a>
                        </div>
                     </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row" style={{marginBottom: '100px'}}>
                        <DappTabs/>
                    </div>
                    <div className="row " style={{marginBottom: '100px'}}>
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className={styles.card}>
                            <Image src={stars} alt="img1" width={'0'} height={'0'}/>
                            <p>We’ve taken our partnership with @RunOnFlux to the next phase as Flux fine-tunes requirements for running nodes and statistics for node operators. This will allow for a more robust and scalable infrastructure for Kadena’s network!Here’s to a successful partnership!</p>
                            <h6><i>@kadena_io</i></h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className={styles.card}>
                            <Image src={stars} alt="img1" width={'0'} height={'0'}/>
                            <p>Today, Flux demonstrated the power of decentralized infrastructure.Through their Kadena node network, they supported #Kaddex when we discovered issues with our nodes.Once we transitioned fully to @RunOnFlux nodes, we saw immediate improvement in performance of the DEX.</p>
                            <h6><i>@KaddeXofficial</i></h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className={styles.card}>
                            <Image src={stars} alt="img1" width={'0'} height={'0'}/>
                            <p>We are thrilled to be the first GameFi on Kadena to be running on Flux’s fully decentralized cloud Infrastructure! If you think that decentralization matters and you want to be part of #web3. Don’t settle on your nodes: @RunOnFlux!</p>
                            <h6><i>@MinersOfKadenia</i></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}