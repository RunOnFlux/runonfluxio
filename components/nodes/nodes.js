import React from "react";
import { useState, useEffect } from "react";
import styles from "./index.module.css"
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from "next/image";
import map from "../../public/images/map.svg"
import globeImg from "../../public/images/globe-alt.svg"
import arrowUp from "../../public/images/gree-yello-up.svg"
import ProgressBar from 'react-bootstrap/ProgressBar';
import nodes from "../../public/images/nodes.svg"
import ram from "../../public/images/ram.svg"
import cores from "../../public/images/cores.svg"
import ssd from "../../public/images/ssd.svg"
import web1 from "../../public/images/web1.svg"
import web2 from "../../public/images/pencil.svg"
import web3 from "../../public/images/key.svg"
import web1Icons from "../../public/images/Web 1.0 icons.svg"
import web2Icons from "../../public/images/Web 2.0 icons.svg"
import web3Icons from "../../public/images/Web 3.0 icons.svg"
import redundancy from "../../public/images/redundancy.svg"
import security from "../../public/images/security.svg"
import interoperability from "../../public/images/interoperability.svg"
import decentralization from "../../public/images/decentralization.svg"
import wallet from "../../public/images/images/wallet.svg"
import lumen from "../../public/images/images/lumenicon.svg"
import { Slider1 } from "../Slider/slider1";
import { CostCalculatorCard } from "../costCalculatorCard/costCalculatorCard";
import { Slider2 } from "../Slider/slider2";
import wordpressIcon from "../../public/images/wordpress.svg";
import fluxdriveIcon from "../../public/images/fluxdrive.svg";
import ovh from "../../public/images/images/ovhicon.svg";
import { Slider3 } from "../Slider/slider3";
import circleGraph from "../../public/images/images/circleGraph.svg"
import lineGraph from "../../public/images/images/lineGraph.svg"
import Line from "../../public/images/images/Line.svg"
import seedIcon from "../../public/images/images/seedicon.svg"
import CAP from "../../public/images/images/CAPM4.svg"
import COT from "../../public/images/images/cotx-cumulus.jpg"
import BMO from "../../public/images/BMO.jpeg"
import cotx from "../../public/images/images/cotxicon.svg";
import bmo from '../../public/images/images/bmoicon.svg';
import { Slider4 } from "../Slider/slider4";
import Modal from 'react-bootstrap/Modal';
import NCard from "../../public/images/images/nvidiacard.svg"
import classNames from "classnames";
var partnerClasses = classNames(
    styles.partners,
    styles.center,
    styles.sliderSection
);
var textPartnerClasses = classNames(
    styles.smallDesc,
    styles.uppercase,
    styles.bluetext,
    styles.bold
);

var dDivClasses = classNames(
    styles.doubleDiv,
    styles.bold
)

var dDivClasses2 = classNames(
    styles.doubleDiv,
    styles.bold,
    styles.right
)

var percentClasses = classNames(
    styles.lightbluetext,
    styles.right
)

var subTxtClasses = classNames(
    styles.SubText,
    styles.stakingSub
)

var subTxtClasses2 = classNames(
    styles.SubText,
    styles.list
)

var hardwareNameClass = classNames(
    styles.hardwareName,
    styles.bold
)

var productClass = classNames(
    styles.productDiv,
    styles.bluetext,
    styles.bold,
    styles.productName
)

var tcbClasses = classNames(
    styles.TitleText,
    styles.center,
    styles.bold
)

var smcpClasses = classNames(
    styles.smallgrey,
    styles.centerparagraph
)

var guideClasses = classNames(
    styles.bluetext,
    styles.bold,
    styles.center,
    styles.guideName
)

var guideClasses2 = classNames(
    styles.bluetext,
    styles.bold,
    styles.left,
    styles.guideName2
)

var sgl = classNames(
    styles.smallgrey,
    styles.left
)

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

            <section className={partnerClasses}>
                <p className={textPartnerClasses}>offical  infrastructure partners</p>

                <div>
                    <Slider1 />
                </div>

            </section>
            <section className={styles.infographs}>
                <h1 className={styles.TitleText}>Incentivized <span className={styles.bluetext}>Infrastructure</span></h1>
                <h5 className={styles.SubText}>The total block reward on the Flux blockchain is divided equally between POW miners and FluxNode operators for every block. In addition, there is a hierarchy among the different FluxNode tiers, with the most computationally heavy FluxNode entitled to the largest share of the initial 50% distribution reserved for FluxNode.</h5>

                <div className={styles.buttons}>
                    <a href="https://home.runonflux.io/dashboard/map" id={styles.headerBut2}>Dashboard</a>
                </div>
                <br />
                <Image alt={"img"} className={styles.circleGraph} src={circleGraph} />
                {/* <Image alt={"img"} className={styles.lineGraph} src={lineGraph} /> */}
            </section>
            <section className={styles.infohierarchy}>
                <h1 className={styles.TitleText}><span className={styles.bluetext}>FluxNode</span><br /> Hiearchy</h1>
                <h5 className={styles.SubText}>To ensure the Flux Cloud network functions optimally, multiple tiers of FluxNodes are available for deployment, each with specific collateral and hardware requirements. <br /><br /> Interested parties are encouraged to review the economic models associated with each tier through the dashboard to make informed decisions. The dashboard provides a comprehensive overview of the technical and financial parameters of each FluxNode tier, enabling informed selection.</h5>

                <div className={styles.buttons}>
                    <a href="https://home.runonflux.io/dashboard/economics" id={styles.headerBut2}>Economics</a>
                </div>

                <div className={styles.divContainer}>
                    <div className={dDivClasses}>
                        <div className={styles.Reqs}><span className={styles.darker}>Hardware Requirements</span><br /> 2 Cores <br /> 4 Threads <br /> 8 GB RAM<br /> 220 GB SSD/NVME <br /> 180 MB/s DWS <br /> 240 EPS Min. Requirements <br /> 25 Mb down/up speed<br /><span className={styles.darker}>VPS and ARM64 compatible</span></div>

                        <div className={styles.Node}><span className={styles.lightbluetext}>Cumulus Node</span><br />1000 FLUX</div>

                        <div className={styles.Reward}><span className={styles.bluetext}>Deterministic Block Reward</span><span className={percentClasses}>7.5%</span></div>
                    </div>
                    <Image alt={"img"} src={Line} />
                    <div style={{ marginLeft: "4.85%" }} className={dDivClasses}>
                        <div className={styles.Reqs}><span className={styles.darker}>Hardware Requirements</span><br /> 2 Cores <br /> 4 Threads <br /> 8 GB RAM<br /> <span className={styles.bluetext}>9250</span> GB HDD <br /> <span className={styles.bluetext}>80</span> MB/s DWS <br /> 240 EPS Min. Requirements <br /> <span className={styles.bluetext}>100</span> Mb down/up speed<br /><span className={styles.darker}>VPS and ARM64 compatible</span></div>

                        <div className={styles.Node}><span className={styles.lightbluetext}>Cumulus Fractus</span><br />ADD-ON</div>

                        <div className={styles.Reward}><span className={styles.bluetext}>Extra reward for storage</span><span className={percentClasses}>15%</span></div>
                    </div>
                </div>

                <div className={styles.divContainer}>
                    <div className={dDivClasses}>
                        <div className={styles.Reqs}><span className={styles.darker}>Hardware Requirements</span><br /> 4 Cores <br /> 8 Threads <br /> 32 GB RAM<br /> 440 GB SSD/NVME <br /> 180 MB/s DWS <br /> 640 EPS Min. Requirements <br /> 50 Mb down/up speed<br /><span className={styles.darker}>VPS and ARM64 compatible</span></div>

                        <div className={styles.Node}><span className={styles.lightbluetext}>Nimbus Node</span><br />12,500 FLUX</div>

                        <div className={styles.Reward}><span className={styles.bluetext}>Deterministic Block Reward</span><span className={percentClasses}>12.5%</span></div>
                    </div>
                    <Image alt={"img"} src={Line} />
                    <div style={{ marginLeft: "4.85%" }} className={dDivClasses}>
                        <div className={styles.Placeholder}>
                            Nimbus Fractus <br /> TBA
                        </div>
                    </div>
                </div>

                <div className={styles.divContainer}>
                    <div className={dDivClasses}>
                        <div className={styles.Reqs}><span className={styles.darker}>Hardware Requirements</span><br /> 8 Cores <br /> 16 Threads <br /> 64 GB RAM<br /> 880 GB SSD/NVME <br /> 400 MB/s DWS <br /> 1520 EPS Min. Requirements <br /> 100 Mb down/up speed<br /><span className={styles.darker}>VPS compatible</span></div>

                        <div className={styles.Node}><span className={styles.lightbluetext}>Stratus Node</span><br />40,000 FLUX</div>

                        <div className={styles.Reward}><span className={styles.bluetext}>Deterministic Block Reward</span><span className={percentClasses}>30%</span></div>
                    </div>
                    <Image alt={"img"} src={Line} />
                    <div style={{ marginLeft: "4.85%" }} className={dDivClasses}>
                        <div className={styles.Placeholder}>
                            Stratus Fractus <br /> TBA
                        </div>
                    </div>
                </div>
                <div className={dDivClasses2} style={{ marginTop: "5%" }}>
                    {/* <div className={styles.Reqs}><span className={styles.darker}>Hardware Requirements</span><br /> 2 Cores <br /> 4 Threads <br /> 8 GB RAM<br /> 220 GB SSD/NVME <br /> 180 MB/s DWS <br /> 240 EPS Min. Requirements <br /> 25 Mb down/up speed<br /><span className={styles.darker}>VPS and ARM64 compatible</span></div> */}

                    <br />
                    <div className={styles.Node}><span className={styles.lightbluetext}>Titan Sharing</span><br />From 50 Flux</div>

                    <div style={{ marginLeft: "13%" }} className={styles.btnTrans}>Titan Sharing</div>

                    <br />
                </div>
                <h1 className={styles.TitleText} style={{ paddingTop: "0%" }}><span className={styles.bluetext}>Titan</span> Nodes</h1>
                <h5 className={subTxtClasses}>The minimum collateral requirement for the base FluxNode tier may not be feasible for all participants. In such scenarios therefore, alternative support mechanisms such as the Titan modulus have been developed to provide viable options for network participation.</h5>
                <br />
                <h5 className={subTxtClasses2}>The Titan nodes will enable users to pool their resources to run enterprise-level hardware, thereby exposing them to a new customer set.</h5>
            </section>

            <section className={styles.hardware}>
                <div className={styles.parent}>
                    <div className={styles.div1}>
                        <div className={styles.puchaseOption}>
                            <Image alt={"img"} src={seedIcon} />
                            <div className={hardwareNameClass}>Seeed Studio</div>
                            <a href="https://www.seeedstudio.com/flux"><div className={styles.btnTrans2}>Buy Now</div></a>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.puchaseOption}>
                            <Image alt={"img"} src={cotx} />
                            <div className={hardwareNameClass}>Cotx</div>
                            <a href="https://cotx-store.com/collections/cotx-fluxnode/products/cotx-fluxnode-cumulus"><div className={styles.btnTrans2}>Buy Now</div></a>
                        </div>
                    </div>
                    <div className={styles.div3}>
                        <div className={styles.puchaseOption}>
                            <Image alt={"img"} src={bmo} />
                            <div className={hardwareNameClass}>BMO</div>
                            <a href="https://bmoblockchain.us/shop/"><div className={styles.btnTrans2}>Buy Now</div></a>
                        </div>
                    </div>
                    <div className={styles.div6}>
                        <h1 className={styles.TitleText} style={{ marginTop: 0, paddingTop: 0 }}>
                            <span className={styles.bluetext}>Infrastructure</span>{" "}
                            <span className={styles.lineBreak}>HardWare</span>
                        </h1>
                    </div>
                    <div className={styles.div7}>
                        <h5 className={styles.SubText} style={{ width: "100%", marginTop: 0 }}>
                            To ensure the Flux Cloud network functions optimally, multiple tiers of
                            FluxNodes are available for deployment, each with specific collateral
                            and hardware requirements. Interested parties are encouraged to review
                            the economic models associated with each tier through the dashboard to
                            make informed decisions. The dashboard provides a comprehensive overview
                            of the technical and financial parameters of each FluxNode tier,
                            enabling informed selection.
                        </h5>
                    </div>
                </div>
                <div className={styles.scroll}>
                    <div className={styles.hardwareDiv}>
                        <div className={productClass}>SenceCAP M4</div>
                        <a href="https://www.seeedstudio.com/SenseCAP-M4-p-5556.html"><div className={styles.btnTrans}>Buy Now</div></a>
                        <h5 className={styles.SubText} style={{ width: "85%", fontSize: "15px" }}>
                            SenseCAP M4 Square is a play and play Cumulus FluxNode, which provides
                            an easy and friendly install process via the SenseCAP Hotspot Mobile
                            App. Further projects will be supported soon, which will allow you to
                            support multiple projects via one device!{" "}
                        </h5>
                        <Image alt={"img"} src={CAP} />
                    </div>
                    <br></br>
                    <div className={styles.hardwareDiv}>
                        <div className={productClass}>Cotx</div>
                        <a href="https://cotx-store.com/collections/cotx-fluxnode/products/cotx-fluxnode-cumulus"><div className={styles.btnTrans}>Buy Now</div></a>
                        <h5 className={styles.SubText} style={{ width: "85%", fontSize: "15px" }}>
                            COTX IOT Cloud service and FluxOS software, presenting this brand new FluxNode.
                            High performance and small power consumption COTX - FluxNode brings you excellent
                            expandability and serviceability.{" "}
                        </h5>
                        <Image alt={"img"} src={COT} />
                    </div>
                    <br></br>
                    <div className={styles.hardwareDiv}>
                        <div className={productClass}>BMO</div>
                        <a href="https://bmoblockchain.us/shop/"><div className={styles.btnTrans}>Buy Now</div></a>
                        <h5 className={styles.SubText} style={{ width: "85%", fontSize: "15px" }}>
                        BMO Advanced Managed Services (BAMS) is a one stop solution. With expertise in design, implementation, optimization, troubleshooting and the documentation of various projects around blockchain ecosystem.{" "}
                        </h5>
                        <Image alt={"img"} src={BMO} />
                    </div>
                </div>
            </section>
            <section className={styles.Guides}>
                <h1
                    className={tcbClasses}
                    style={{ padding: 0, margin: 0, marginTop: "5%" }}
                >
                    Guides to set up <br /> <span className={styles.bluetext}>Your Own FluxNode</span>
                </h1>
                <p className={smcpClasses}>
                    Efforts have been made to simplify the installation process through
                    user-friendly guides. However, before proceeding, it is crucial to ensure
                    that the minimum required Flux collateral and hardware specifications are
                    met. To assist beginners, multiple options for FluxNode setup are provided,
                    including the most commonly used methods. Accompanying video guides are also
                    available to provide step-by-step assistance with the setup process.
                </p>
                <div className={styles.containGuides}>
                    <div className={styles.guidesContain}>
                        <Image alt={"img"} src={wallet} />
                        <div className={guideClasses}>
                            <a href="https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb">Flux Light Node Setup</a>
                        </div>
                        <br />
                    </div>
                    <div className={styles.guidesContain}>
                        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/RT1uaSrurv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className={guideClasses}>
                            <p>Flux LightNode Wallet</p>
                        </div>
                        <br />
                    </div>
                    <div className={styles.guidesContain}>
                        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/-lJJyuliR38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className={guideClasses}>
                            <p>FluxNode Setup for Raspberry Pi4B</p>
                        </div>
                        <br />
                    </div>
                    <div className={styles.guidesContain}>
                        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/FITPHv52Fyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className={guideClasses}>
                            <p>Self-Hosted Flux Node Setup Guide</p>
                        </div>
                        <br />
                    </div>
                    <div className={styles.guidesContain}>
                        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/n2CMwfahUBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className={guideClasses}>
                            <p>Raspberry Pi FluxNode Setup Guide</p>
                        </div>
                        <br />
                    </div>
                    <div className={styles.guidesContain}>
                        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/akfV5WhmE-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className={guideClasses}>
                            <p>Cumulus Mini-PC and other alternatives</p>
                        </div>
                        <br />
                    </div>
                </div>
            </section>

        </main>
    );
}