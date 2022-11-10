import React from "react";
import styles from "./index.module.css"
import Head from "next/head";
// import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic';
import Image from "next/image";
import SeedStudio from "../../public/images/seed.png";
import fio from "../../public/images/fio.png"
import firo from "../../public/images/firo.png"
import kaddex from "../../public/images/KADDEX-logo.svg"
import lumen from "../../public/images/Lumen-logo-noR.png"
import nvidia from "../../public/images/nvidia-logo-1.png"
import presearch from "../../public/images/presearch.png"
import wyre from "../../public/images/Wyre.png"
import coinmetro from "../../public/images/coinmetro.png"
import kadena from "../../public/images/kadena.png"
import { MdSettingsInputComponent } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import {MdOutlineSchema } from "react-icons/md";
import { MdTraffic} from "react-icons/md";
import { MdSettingsRemote} from "react-icons/md";
import { MdSaveAlt } from "react-icons/md";


export function HomePage(){
    const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
    return(
        <main className={styles.main}>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>Build on <br/>Web3.0 Today</h1><br/>
                            <h6>The Flux Cloud is a People-Powered Network to help you build decentralized applications with increased flexibility, scalability, and censorship resistance</h6>
                            <div className={styles.buttons}>
                            <a className={styles.btn2}>Launch DApp</a>
                            <a className={styles.btn1}>View Cost</a>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </section>

            <section className={styles.section2}>
                <div className="container">
                    <div className="row text-center mx-auto">
                        <div className="col-lg-12 text-center mx-auto">
                            <div className={styles.videoPlayer}>
                                <ReactPlayer url='https://www.youtube.com/watch?v=cqZkNO7KM00' style={{margin: "auto"}} width="100%" height="100%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={styles.partners}>
                                <Image alt="logo" src={SeedStudio}/>
                                <Image alt="logo" src={lumen}/>
                                <Image alt="logo" src={wyre}/>
                                <Image alt="logo" src={nvidia}/>
                                <Image alt="logo" src={kaddex}/>
                                <Image alt="logo" src={fio}/>
                                <Image alt="logo" src={firo}/>
                                <Image alt="logo" src={presearch}/>
                                <Image alt="logo" src={coinmetro}/>
                                <Image alt="logo" src={kadena}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section4}>
                <div className="container">
                    <div className="row">
                        <div className="text-center mb-5">
                            <h5>FLUX DECENTRALIZED CLOUD INFRASTRUCTURE</h5>
                            <h1>The Flux Cloud Advantages</h1>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6">
                            <div className={styles.card1}>
                                <MdSettingsInputComponent style={{background: "#324ab2", color: "white", padding: "10px", fontSize: "50px", borderRadius: "7px"}}/>
                                <h5>Redundancy</h5>
                                <h6>Redundant applications and automatic failover by outages</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6">
                        <div className={styles.card1}>
                            <MdSecurity style={{background: "#324ab2", color: "white", padding: "10px", fontSize: "50px" , borderRadius: "7px"}}/>
                            <h5>Security</h5>
                            <h6>Docker Hub, IPFS and additional Layers of Security</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6">
                            <div className={styles.card1}>
                            <MdTraffic style={{background: "#324ab2", color: "white", padding: "10px", fontSize: "50px" , borderRadius: "7px"}}/>
                            <h5>Interoperability</h5>
                            <h6>Code agnostic due to Docker container deployment</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6">
                        <div className={styles.card1}>
                            <MdOutlineSchema style={{background: "#324ab2", color: "white", padding: "10px", fontSize: "50px" , borderRadius: "7px"}}/>
                            <h5>Decentralization</h5>
                            <h6>Random deployments → Censorship resistant </h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6">
                        <div className={styles.card1}>
                            <MdSettingsRemote style={{background: "#324ab2", color: "white", padding: "10px", fontSize: "50px" , borderRadius: "7px"}}/>
                            <h5>Watchtower</h5>
                            <h6>Docker container updates get automatically pulled</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6">
                        <div className={styles.card1}>
                            <MdSaveAlt style={{background: "#324ab2", color: "white", padding: "10px", fontSize: "50px" , borderRadius: "7px"}}/>
                            <h5>Low Cost</h5>
                            <h6>Pay by specs and low cost due to block reward incentives</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section5}>
                <div className="container-fluid">
                    <div className="row" style={{display: "flex"}}>
                        <div className="col-md-3 col-6 m3-5 mt-3" style={{display: "inline-flex", alignItems: "center"}}>
                            <div className={styles.nodes}>
                                <div>
                                <h6>TOTAL NODES</h6>
                                <h2>15283</h2>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-md-3 col-6 m3-5 mt-3" style={{display: "inline-flex", alignItems: "center"}}>
                            <div className={styles.nodes}>
                                <div>
                                <h6>TOTAL CORES</h6>
                                <h2>103 824</h2>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3 mt-3" style={{display: "inline-flex", alignItems: "center"}}>
                            <div className={styles.nodes}>
                                <div>
                                <h6>TOTAL SDD</h6>
                                <h2>6,435.60 PB</h2>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3 mt-3" style={{display: "inline-flex", alignItems: "center"}}>
                            <div className={styles.nodes} style={{borderLeft: "0px"}}>
                                <div>
                                <button className={styles.nodesBtn}>View Flux Cloud Stats</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section6}>
                <div className="container">
                    <div className="row text-center">
                        <h6>FLUX IS GLOBAL</h6>
                        <h2>Global Network of Flux Cloud</h2>
                        <h6>The Flux Cloud is connected world wide. It spans across all continents, within X geographical regions around the
                        world. Its strongest Availability Zone are the whole EU zone and United States, but also other Zones like South Asia,
                        and Australia are witnessing an increase of Server deployments. </h6>
                    </div>
                </div>
            </section>
        </main>
    )
}