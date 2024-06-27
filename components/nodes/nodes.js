import React from "react";
import { useState, useEffect } from "react";
import styles from "./index.module.css"

import Image from "next/image";

import wallet from "../../public/images/images/wallet.svg"
import { Slider1 } from "../Slider/slider1";

import circleGraph from "../../public/images/images/circleGraph.svg"

import seedIcon from "../../public/images/images/seedicon.svg"
import CAP from "../../public/images/images/CAPM4.svg"
import COT from "../../public/images/images/cotx-cumulus.jpg"
import BMO from "../../public/images/BMO.jpeg"
import cotx from "../../public/images/images/cotxicon.svg";
import bmo from '../../public/images/images/bmoicon.svg';
import progressbar from "../../public/images/images/node progressbar.svg"




export function Node() {
    const url = 'https://api.runonflux.io/daemon/getzelnodecount';



    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let thedata = data;
            let numofnodes = document.getElementById('danodes');
            numofnodes.innerHTML = `${thedata.data.total}`;
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <main className={styles.main}>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <h1><span>FluxNode</span> <br />Infrastructure</h1>
                        <p>Support the Flux Cloud by running FluxNodes - by and for the people. The Flux Cloud is powered by thousands of FluxNodes connected from all around the globe, and the community is the backbone. By contributing their computational resources, individuals are incentivized accordingly.</p>

                        <div className="mt-4">
                            <a className={styles.btn2} href="/node">Deploy Node</a>
                            <a className={styles.btn1} href="https://home.runonflux.io/dashboard/economics">Economics</a>
                        </div>

                        <div className={styles.nodes}>
                         <div className={styles.nodesContainer}>
                            <h3>Nodes</h3>
                            <div className={styles.dotanimation}><h1 className={styles.blueDot}></h1></div>
                            <h2 id="danodes">...</h2>
                            </div>
                        </div>
                        </div>
                        <h6 className={styles.smallDesc}>Decentralized infrastructure nodes live.</h6>
                        <div className="col-md-6">
                            </div>
                    </div>
                </div> 
            </section>


            <section className={styles.section2}>
                <div className="container-fluid">
                    <div className="row">
                    <h6>offical  infrastructure partners</h6>
                    <div>
                        <Slider1 />
                    </div>
                    </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                        <h3>Incentivized<br/><span>Infrastructure</span></h3>
                        <p className="mb-4">The total block reward on the Flux blockchain is divided equally between POW miners and FluxNode operators for every block. In addition, there is a hierarchy among the different FluxNode tiers, with the most computationally heavy FluxNode entitled to the largest share of the initial 50% distribution reserved for FluxNode.</p>
                            <a href="https://home.runonflux.io/dashboard/map" className={styles.btn1}>Dashboard</a>
                        </div>
                        <div className="col-md-6 text-center">
                        <Image alt={"img"} src={circleGraph} />
                            </div>
                    </div>
                    <div className="row" style={{marginTop: "-20px"}}>
                        <Image alt="progress-bar" src={progressbar} className={styles.progressBarImg}/>
                    </div>
                  
                </div>
            </section>

            <section className={styles.section4}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                        <h3><span>FluxNode</span> Hierarchy</h3>
                         <p className="mb-4">To ensure the Flux Cloud network functions optimally, multiple tiers of FluxNodes are available for deployment, each with specific collateral and hardware requirements. <br /><br /> Interested parties are encouraged to review the economic models associated with each tier through the dashboard to make informed decisions. The dashboard provides a comprehensive overview of the technical and financial parameters of each FluxNode tier, enabling informed selection.</p>
                         <a className={styles.btn1} href="https://home.runonflux.io/dashboard/economics">Economics</a>
                        </div>
                        <div className="col-lg-5 col-md-12"></div>
                    </div>
                </div>
            </section>

            <section className={styles.section5}>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 mb-5">
                        <div className={styles.nodeCard}>
                            <div className="row">
                                <div className="col">
                                    <div style={{height: "100%", display: "flex", alignItems: "center"}}>
                                        <div>
                                        <div className={styles.cardHead}>
                                        <h4>Cumulus Node</h4>
                                        <h5>1000 Flux</h5>
                                        </div>
                                        <div className={styles.cardRewards}>
                                            <span>Deterministic Block rewards <span style={{color:"#2d8eff", float: "right", marginTop: "4px"}}>7.5%</span></span>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                <div className={styles.cardReq}>
                                    <h5>Hardware Requirements</h5>
                                    <h6>2 Cores</h6>
                                    <h6>4 Threads</h6>
                                    <h6>8 GB RAM</h6>
                                    <h6>220 GB/SSD/NVME</h6>
                                    <h6>180 Mb/s DWS</h6>
                                    <h6>240 EPS Min. Requirements</h6>
                                    <h6>25 Mb Bandwidth</h6>
                                    <h5>VPS and ARM64 compatible</h5>
                                    </div>
                                </div>
                            </div>  
                         </div>
                        </div>

                        <div className="col-md-6 mb-5">
                        <div className={styles.nodeCard}>
                            <div className="row">
                                <div className="col">
                                    <div style={{height: "100%", display: "flex", alignItems: "center"}}>
                                        <div>
                                        <div className={styles.cardHead}>
                                        <h4>Cumulus Fractus</h4>
                                        <h5>ADD-ON</h5>
                                        </div>
                                        <div className={styles.cardRewards}>
                                            <span>Extra reward for storage <span style={{color:"#2d8eff", float: "right", marginTop: "4px"}}>15%</span></span>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                <div className={styles.cardReq}>
                                    <h5>Hardware Requirements</h5>
                                    <h6>2 Cores</h6>
                                    <h6>4 Threads</h6>
                                    <h6>8 GB RAM</h6>
                                    <h6>9250 GB HDD</h6>
                                    <h6>80 Mb/s DWS</h6>
                                    <h6>240 EPS Min. Requirements</h6>
                                    <h6>100 Mb down/up speed</h6>
                                    <h5>VPS and ARM64 compatible</h5>
                                    </div>
                                </div>
                            </div>  
                         </div>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6 mb-5">
                        <div className={styles.nodeCard}>
                            <div className="row">
                                <div className="col">
                                    <div style={{height: "100%", display: "flex", alignItems: "center"}}>
                                        <div>
                                        <div className={styles.cardHead}>
                                        <h4>Nimbus Node</h4>
                                        <h5>12,500 Flux</h5>
                                        </div>
                                        <div className={styles.cardRewards}>
                                            <span>Deterministic Block rewards <span style={{color:"#2d8eff", float: "right", marginTop: "4px"}}>12.5%</span></span>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                <div className={styles.cardReq}>
                                    <h5>Hardware Requirements</h5>
                                    <h6>4 Cores</h6>
                                    <h6>8 Threads</h6>
                                    <h6>32 GB RAM</h6>
                                    <h6>440 GB/SSD/NVME</h6>
                                    <h6>180 Mb/s DWS</h6>
                                    <h6>640 EPS Min. Requirements</h6>
                                    <h6>50 Mb Bandwidth</h6>
                                    <h5>VPS and ARM64 compatible</h5>
                                    </div>
                                </div>
                            </div>  
                         </div>
                        </div>

                        <div className="col-md-6 mb-5">
                        <div className={styles.nodeCard2}>
                            <div className={styles.centerCard}>
                              <h6>Nimbus Fractus <br/>TBA</h6>
                            </div>  
                         </div>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6 mb-5">
                        <div className={styles.nodeCard}>
                            <div className="row">
                                <div className="col">
                                    <div style={{height: "100%", display: "flex", alignItems: "center"}}>
                                        <div>
                                        <div className={styles.cardHead}>
                                        <h4>Stratus Node</h4>
                                        <h5>40,000 Flux</h5>
                                        </div>
                                        <div className={styles.cardRewards}>
                                            <span>Deterministic Block rewards <span style={{color:"#2d8eff", float: "right", marginTop: "4px"}}>30%</span></span>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                <div className={styles.cardReq}>
                                    <h5>Hardware Requirements</h5>
                                    <h6>8 Cores</h6>
                                    <h6>16 Threads</h6>
                                    <h6>64 GB RAM</h6>
                                    <h6>880 GB/SSD/NVME</h6>
                                    <h6>400 Mb/s DWS</h6>
                                    <h6>1520 EPS Min. Requirements</h6>
                                    <h6>100 Mb Bandwidth</h6>
                                    <h5>VPS and ARM64 compatible</h5>
                                    </div>
                                </div>
                            </div>  
                         </div>
                        </div>

                        <div className="col-md-6 mb-5">
                        <div className={styles.nodeCard2}>
                            <div className={styles.centerCard}>
                              <h6>Stratus Fractus <br/>TBA</h6>
                            </div>  
                         </div>
                        </div>
                    </div> 
                </div>
            </section>

            <section className={styles.section6}>
                <div className="container">
                    <div className="row" style={{marginBottom: "100px"}}>
                    <div className="col-md-6">
                        <h3>Titan <span>Nodes</span></h3>
                        <p>The minimum collateral requirement for the base FluxNode tier may not be feasible for all participants. In such scenarios, alternative support mechanisms such as the Titan modulus have been developed to provide viable options for network participation.</p>
                        <p>The Titan nodes will enable users to pool their resources to run enterprise-level hardware, and in doing so, exposing them to a new customer set.
                        </p>
                    </div>
                    <div className="col-md-6">
                    <div className={styles.nodeCard}>
                            <div className="row">
                                <div className="col">
                                    <div style={{height: "100%", display: "flex", alignItems: "center"}}>
                                        <div style={{width: "100%"}}>
                                        <div className={styles.cardHead} >
                                        <h4>Titan Staking</h4>
                                        <h5>From 50 Flux</h5>
                                        </div>
                                        <div className={styles.cardRewards2}>
                                           <a href="#" className={styles.btn1}>Titan Staking</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                <div className={styles.cardReq}>
                                    <h5>Hardware Requirements</h5>
                                    <h6>2 Cores</h6>
                                    <h6>4 Threads</h6>
                                    <h6>8 GB RAM</h6>
                                    <h6>220 GB/SSD/NVME</h6>
                                    <h6>180 Mb/s DWS</h6>
                                    <h6>240 EPS Min. Requirements</h6>
                                    <h6>25 Mb down/up speed</h6>
                                    <h5>VPS and ARM64 compatible</h5>
                                    </div>
                                </div>
                            </div>  
                         </div>
                    </div>
                    </div>
                    <div className="row mt-5" style={{marginBottom: '50px'}}>
                        <div className="col-lg-8 col-md-12">
                            <h3><span>Infrastructure</span> Hardware</h3>
                            <p style={{width: "100%"}}>The operation of a FluxNode is a process that is subject to individual discretion and influenced by various economic factors, such as pricing and electricity costs. To deploy a FluxNode, you have several options available, including the use of rented virtual private servers (VPS) or dedicated hardware deployment.</p>
                            <p style={{width: "100%"}}>Regarding hardware requirements, we recommend consulting one of our official partners for information on hardware compatibility and potential server options. These partnerships guarantee access to reliable and compatible hardware solutions for FluxNode deployment.</p>
                            <div className="row mt-5">
                            <div className="col-md-6 col-sm-6 col-12 mb-4">
                         
                                <div className={styles.puchaseOption}>
                                    <div>
                                    <Image alt={"img"} src={seedIcon} />
                                    <h6>Seeed Studio</h6>
                                    </div>
                                   
                                    <div className={styles.button}>
                                  
                                    <a className={styles.btn1} href="https://www.seeedstudio.com/flux">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-12 mb-4">
                            <div className={styles.puchaseOption}>
                                <div>
                                <Image alt={"img"} src={cotx} />
                                <h6>Cotx</h6>
                                </div>
                           
                                    <div className={styles.button}>
                                  
                                    <a className={styles.btn1} href="https://cotx-store.com/collections/cotx-fluxnode/products/cotx-fluxnode-cumulus">Buy Now</a>
                                    </div>
                                </div>
                                </div>
                                
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                <div className={styles.puchaseOption}>
                                    <div>
                                    <Image alt={"img"} src={bmo} />
                                    <h6>BMO</h6>
                                    </div>
                                
                                    <div className={styles.button}>
                                  
                                    <a className={styles.btn1} href="https://bmoblockchain.us/shop/">Buy Now</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-lg-4 col-md-12 d-none d-lg-block">
                        <div className={styles.scroll}>
                        <div className={styles.hardwareCard}>
                            {/* <div className={styles.cardHeader}>
                            <h6>SenceCAP M4</h6>
                        <a className={styles.btn1} href="https://www.seeedstudio.com/SenseCAP-M4-p-5556.html">Buy Now</a>
                            </div> */}
                        <p>
                            SenseCAP M4 Square is a plug and play Cumulus FluxNode, which provides
                            an easy and friendly install process via the SenseCAP Hotspot Mobile
                            App. Further projects will be supported soon, which will allow you to
                            support multiple projects via one device!{" "}
                        </p>
                        <Image alt={"img"} src={CAP} />
                    </div>
                    <br></br>
                    <div className={styles.hardwareCard}>
                            {/* <div className={styles.cardHeader}>
                            <h6>Cotx</h6>
                        <a className={styles.btn1} href="https://cotx-store.com/collections/cotx-fluxnode/products/cotx-fluxnode-cumulus">Buy Now</a>
                            </div> */}
                        <p>
                        COTX IOT Cloud service and FluxOS software, presenting this brand new FluxNode.
                            High performance and small power consumption COTX - FluxNode brings you excellent
                            expandability and serviceability.
                        </p>
                        <Image alt={"img"} src={COT} />
                    </div>
                    <br></br>
                    <div className={styles.hardwareCard}>
                            {/* <div className={styles.cardHeader}>
                            <h6>BMO</h6>
                        <a className={styles.btn1} href="https://bmoblockchain.us/shop/">Buy Now</a>
                            </div> */}
                        <p>
                        BMO Advanced Managed Services (BAMS) is a one stop solution. With expertise in design, implementation, optimization, troubleshooting and the documentation of various projects around blockchain ecosystem.{" "}
                        </p>
                        <Image alt={"img"} src={BMO} />
                    </div>
                </div>
                        </div>
                    </div>

                <div className="d-lg-none d-block" style={{marginBottom: "100px"}}>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 mb-4">
                        <div className={styles.hardwareCard}>
                            {/* <div className={styles.cardHeader}>
                            <h6>SenceCAP M4</h6>
                        <a className={styles.btn1} href="https://www.seeedstudio.com/SenseCAP-M4-p-5556.html">Buy Now</a>
                            </div> */}
                        <p>
                            SenseCAP M4 Square is a plug and play Cumulus FluxNode, which provides
                            an easy and friendly install process via the SenseCAP Hotspot Mobile
                            App. Further projects will be supported soon, which will allow you to
                            support multiple projects via one device!{" "}
                        </p>
                        <Image alt={"img"} src={CAP} />
                    </div>
                    </div>
                    <br></br>
                    <div className=" col-md-6 col-sm-6 mb-4">
                    <div className={styles.hardwareCard}>
                            {/* <div className={styles.cardHeader}>
                            <h6>Cotx</h6>
                        <a className={styles.btn1} href="https://cotx-store.com/collections/cotx-fluxnode/products/cotx-fluxnode-cumulus">Buy Now</a>
                            </div> */}
                        <p>
                        COTX IOT Cloud service and FluxOS software, presenting this brand new FluxNode.
                            High performance and small power consumption COTX - FluxNode brings you excellent
                            expandability and serviceability.
                        </p>
                        <Image alt={"img"} src={COT} />
                    </div>
                    </div>
                    <br></br>
                    <div className=" col-md-6 col-sm-6 mb-4">
                    <div className={styles.hardwareCard}>
                            {/* <div className={styles.cardHeader}>
                            <h6>BMO</h6>
                        <a className={styles.btn1} href="https://bmoblockchain.us/shop/">Buy Now</a>
                            </div> */}
                        <p>
                        BMO Advanced Managed Services (BAMS) is a one stop solution. With expertise in design, implementation, optimization, troubleshooting and the documentation of various projects around blockchain ecosystem.{" "}
                        </p>
                        <Image alt={"img"} src={BMO} />
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="row mb-5">
                        <h3 className="text-center">Guides To Set Up<br/><span>Your Own FluxNode</span></h3>
                        <p className="text-center" style={{margin: "auto"}}> Efforts have been made to simplify the installation process through
                    user-friendly guides. However, before proceeding, it is crucial to ensure
                    that the minimum required Flux collateral and hardware specifications are
                    met. To assist beginners, multiple options for FluxNode setup are provided,
                    including the most commonly used methods. Accompanying video guides are also
                    available to provide step-by-step assistance with the setup process.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className={styles.guidesContain}>
                            <Image alt={"img"} src={wallet} />
                            <div>
                                <a href="https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb">Flux Light Node Setup</a>
                            </div>
                            <br />
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className={styles.guidesContain}>
                            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/RT1uaSrurv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div>
                                <a href="https://www.youtube.com/embed/RT1uaSrurv4">Flux LightNode Wallet</a>
                            </div>
                            <br />
                        </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className={styles.guidesContain}>
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/-lJJyuliR38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div >
                                    <a href="https://www.youtube.com/embed/-lJJyuliR38">FluxNode Setup for Raspberry Pi4B</a>
                                </div>
                                <br />
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className={styles.guidesContain}>
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/FITPHv52Fyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div>
                                    <a href="https://www.youtube.com/embed/FITPHv52Fyo">Self-Hosted Flux Node Setup Guide</a>
                                </div>
                                <br />
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className={styles.guidesContain}>
                                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/n2CMwfahUBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div >
                                    <a href="https://www.youtube.com/embed/n2CMwfahUBI">Raspberry Pi FluxNode Setup Guide</a>
                                </div>
                                <br />
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className={styles.guidesContain}>
                            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/akfV5WhmE-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div>
                                <a href="https://www.youtube.com/embed/akfV5WhmE-g">Cumulus Mini-PC and other alternatives</a>
                            </div>
                            <br />
                        </div>
                            </div>
                    </div>
                </div>
            </section>

          


           

          
          

        </main>
    );
}