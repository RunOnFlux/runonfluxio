import React from "react";
import styles from "./index.module.css"
import Image from "next/image";
import fluxLogo from "../../public/images/Flux_white-blue.svg"
import landingPage from "../../public/images/marketplace/flux_cloud_landing_page.svg"
import Enshrouded from "../../public/images/marketplace/Enshrouded_graphical_logo_TRANSPARENT 1.svg"
import palword from "../../public/images/marketplace/Palword.svg"
import logo1 from "../../public/images/marketplace/ISV-OSS-Non-Nvidia-Publishing-Foldingathome 1.svg"
import logo2 from "../../public/images/marketplace/logo2.svg"
import logo3 from "../../public/images/marketplace/logo3.svg"
import logo4 from "../../public/images/marketplace/logo4.svg"
import logo5 from "../../public/images/marketplace/logo5.svg"
import logo6 from "../../public/images/marketplace/logo6.svg"
import link1 from "../../public/images/marketplace/link.svg"
import stripe from "../../public/images/marketplace/Stripe.svg"
import paypal from "../../public/images/marketplace/Paypal.svg"
import visa from "../../public/images/marketplace/Visa&mastercard.svg"
import apple from "../../public/images/marketplace/ApplePay.svg"
import flux from "../../public/images/Flux_white-blue.svg"
import { MarketplaceTabs } from "../marketplaceTabs/tabs";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import kadena from "../../public/images/marketplace/Kadena.svg"
import eckodao from "../../public/images/images/eckodao_logo_black.svg"
import mok from "../../public/images/marketplace/MOK.svg"
import streamr from "../../public/images/images/Horizontal colour lockup.svg"
export function MarketplacePage(){
    return(
        <React.Fragment>
            <section className={styles.section1}>
              <div className="container">
                <div className="row">
                    <div className="col">
                    <h3><Image alt="logo" src={fluxLogo}/>Marketplace</h3>
                        <h1>The Ultimate Web3 Launchpad</h1>
                        <p>The Flux Marketplace is your ultimate launchpad, akin to the Apple Store, but for decentralized applications. Whether you're looking to deploy dApps, frontends, backends, game servers, or blockchain nodes, the Flux Marketplace makes it incredibly simple.</p>
                        <div className="mt-4">
                            <a className={styles.btn2} href="https://cloud.runonflux.com/">Marketplace</a>
                            <a className={styles.btn1} target="_blank" href="https://github.com/RunOnFlux">Github</a>
                        </div>
                        <div className={styles.landingPageImage}>
                            <Image alt="landing-page" src={landingPage}/>
                        </div>
                    </div>
                </div>
              </div>
            </section>
            <section className={styles.section2}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div style={{display: 'inline-flex', alignItems: "center", height: "100%"}}>
                                <div>
                                <h3>Deploy Your <br/><span>Favorite Games</span></h3>
                            <p>Whether you are a solo player or part of a large community, our marketplace offers seamless solutions to bring your gaming world to life. Deploy Palworld or Enshrouded game servers effortlessly with just a few clicks, and enjoy custom configurations to tailor your server settings for unique gameplay experiences. Benefit from our robust, decentralized infrastructure, ensuring your gaming experience is safe and reliable.</p>
                            <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                          <div className="row">
                            <div className="col-md-6 mb-4">
                            <div className={styles.gameCard}>
                                <Image alt="logo" src={Enshrouded}/>
                                <div className={styles.bottom}>
                                    <a target="_blank" href="https://cloud.runonflux.com/marketplace" className={styles.btn3}>Install Now</a>
                                    <p>Starting at $9.99 / month</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6 mb-4">
                            <div className={`${styles.gameCard} ${styles.gameCard2}`}>
                                <Image alt="logo" src={palword}/>
                                <div className={styles.bottom}>
                                    <a target="_blank" href="https://cloud.runonflux.com/marketplace" className={styles.btn3}>Install Now</a>
                                    <p>Starting at $7.99 / month</p>
                                </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                </div>
            </section>
            <section className={styles.section3}>
                <div className="container">
                    <div className="row mb-5">
                        <h3 style={{marginBottom: "10px"}} className={styles.header}>Discover DApps In<span> The Flux Web3 Marketplace</span></h3>
                        <p className={styles.header}>Flux Marketplace offers a diverse range of services to meet your needs, from front-ends and backends to game servers and blockchain nodes. Our platform empowers you to effortlessly deploy and manage these services with ease. Explore the most popular dApps below.</p>
                    </div>
                    <div className="row mb-5">
                       <div className="col-12">
                       <div className={styles.coronaCard}>
                            <div className="row g-0">
                            <div className="col-lg-8 col-md-7 col-sm-12">
                                <div className={styles.cardImg}></div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12">
                                <div className={styles.card1}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.logoContainer}><Image alt="logo" src={logo1}/></div>

                                        <div className={styles.cardHead2}>
                                            <h6>Folding@Home</h6>
                                            <a className={styles.btn4} href="https://cloud.runonflux.com/marketplace" target="_blank">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p>Developed by the Pande laboratory in 2001, Folding@home is a distributed computing project focused on protein folding. Led by Vijay Pande, an adjunct professor of Bioengineering, Folding@home aims to revolutionize disease research by providing atomically-detailed protein folding simulations. By launching a Folding@FluxCloud app from the Flux Marketplace, you can actively help gain crucial insights into diseases like Alzheimer’s and Cancer.</p>
                                    </div>
                                  
                                </div>
                            </div>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 mb-4">
                        <div className={styles.card1} style={{borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px"}}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.logoContainer}><Image alt="logo" src={logo2}/></div>

                                        <div className={styles.cardHead2}>
                                            <h6>Presearch Node</h6>
                                            <a className={styles.btn4} href="https://cloud.runonflux.com/marketplace" target="_blank">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p>Presearch, is a community-powered, decentralized search engine that provides better results while protecting your privacy and rewarding you when you search. Presearch Node software runs on Flux to help power the new Presearch decentralized search engine. By running node software, Flux helps crawl the web for the information needed to answer user search queries.</p>
                                    </div>
                                  
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                        <div className={styles.card1} style={{borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px"}}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.logoContainer}><Image alt="logo" src={logo3}/></div>

                                        <div className={styles.cardHead2}>
                                            <h6>Streamer Node</h6>
                                            <a className={styles.btn4} href="https://cloud.runonflux.com/marketplace" target="_blank">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p>Streamr, (DATA) is an open source project and decentralized platform that relies on cryptography instead of trust. It is a P2P, real-time data infrastructure that houses a platform and tools for a new data economy. The technology stack includes a scalable real-time messaging network (pub/sub) hosted on computers worldwide, a marketplace for trading/selling data and a set of tools for working with real-time data.
                                    </p>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className={styles.card1} style={{borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px"}}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.logoContainer}><Image alt="logo" src={logo4}/></div>

                                        <div className={styles.cardHead2}>
                                            <h6>Bittensor Nodee</h6>
                                            <a className={styles.btn4} href="https://cloud.runonflux.com/marketplace" target="-blank">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p>Bittensor is an open-source protocol that powers a decentralized, blockchain-based machine learning network. Machine learning models train collaboratively and are rewarded in TAO according to the informational value they offer the collective. TAO also grants external access, allowing users to extract information from the network while tuning its activities to their needs.</p>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className={styles.card1} style={{borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px"}}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.logoContainer}><Image alt="logo" src={logo5}/></div>

                                        <div className={styles.cardHead2}>
                                            <h6>TeamSpeak</h6>
                                            <a className={styles.btn4} href="https://cloud.runonflux.com/marketplace" target="_blank">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p>Take complete control of your communication with TeamSpeak, offering military-grade security, ultra low latency VoIP, and 3D surround sound as default. With TeamSpeak there are no centralized servers and no harvesting of personal data. Your chat, your data, your choice. With TeamSpeak, your team rules!</p>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className={styles.card1} style={{borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px"}}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.logoContainer}><Image alt="logo" src={logo6}/></div>

                                        <div className={styles.cardHead2}>
                                            <h6>Owncast</h6>
                                            <a className={styles.btn4} href="https://cloud.runonflux.com/marketplace" target="_blank">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p>Owncast, is an open source, self-hosted, decentralized, single user live video streaming and chat server for running your own live streams similar in style to the large mainstream options. It offers complete ownership over your content, interface, moderation and audience.</p>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className={styles.card2}>
                                    <h4>Launch your project</h4>
                                    <p>Anything can run on the Flux Web3 Cloud. If you can dockerize it, Flux can run it!</p>
                                    <p>Using Docker Hub for deployment, all applications are redundant, running on 3 to 100 balanced instances with automatic failover, ensuring 99.99% uptime.</p>
                                    <a href="https://cloud.runonflux.com/marketplace" target="_blank">Deploy Now</a>
                                </div>
                            </div>
                    </div>

                    <div className="row" style={{marginTop: "100px"}}>
                    <div className="col-md-6 mb-4 order-0 order-md-1">
                            <div className={styles.paymentOptions} >
                            <div>
                                <h3 className="mb-4" style={{textAlign: "left"}}>Flexible Payment<br/> Options</h3>
                                <p style={{textAlign: "left"}}>Choose from secure payment options including Stripe, PayPal, and cryptocurrency for a hassle-free checkout experience on our website. Your satisfaction and security are our priorities.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 order-1 order-md-0">
                            <div className="row">
                                <div className="col-6 mb-4">
                                    <div className={styles.btnCard}>
                                        <Image alt="logo" src={stripe}/>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                <div className={styles.btnCard}>
                                        <Image alt="logo" src={paypal}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 mb-4">
                                <div className={styles.btnCard}>
                                        <Image alt="logo" src={visa}/>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                <div className={styles.btnCard}>
                                        <Image alt="logo" src={apple}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-4">
                                <div className={`${styles.btnCard} ${styles.btnCard2}`}>
                                        <Image alt="logo" src={flux}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>

                    <div className="row" style={{ marginTop: "50px" }}>
                        <div className="col-md-6 mb-0">
                            <div className={styles.paymentOptions}>
                                <div>
                                    <h3 className="mb-4" style={{ textAlign: "left" }}>Multiple <span>Sign-In Login</span></h3>
                                    <p style={{ textAlign: "left" }}>Unlock the full potential of FluxCloud with multiple login options, via crypto wallet or mainstream login solutions through Flux SingleSignOn. Simply log in to <a target="_blank" href="https://cloud.runonflux.com">www.cloud.runonflux.com</a> using your Gmail, Apple ID, or Email, and experience unparalleled convenience in running your apps, deploying a WordPress site or saving files on the Flux blockchain via FluxDrive.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6  mb-0">
                            <div className={styles.solutions}>
                                {/* <Image alt="logo" src={solutions}/> */}
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className={styles.section4}>
                <div className="container">
                   <div className="row">
                      <div className=" col-lg-6 col-md-8">
                        <h3>Explore More</h3>
                        <p>The Flux Marketplace is your one-stop shop for running a wide range of applications effortlessly. Explore and deploy various applications with just a few clicks, all without writing a single line of code.</p>
                        <p><i>Discover the ease and convenience of using Flux for all your computing needs.</i></p>
                      </div>
                      <div className="col-md-6"></div>
                   </div>
                </div>
                <div className="container">
                        <MarketplaceTabs/>
                   </div>
            </section>

            <section className={styles.section5}>
                   <div className="container">
                    <div className="row mb-3">
                    <h3>Success Stories With <span>Our Partners</span></h3>
                    </div>
                    <div className="row">
                        <div className="tabCard">
                        <Tabs
                            defaultActiveKey="kadena"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            >
                            <Tab eventKey="kadena" title={<Image alt="logo" src={kadena} className={styles.tabLogo}/>}>
                               <p className={styles.tabText}>“We’ve taken our partnership with Flux to the next phase as Flux 
                               fine-tunes requirements for running nodes and statistics for node operators. This will allow for a more robust and scalable infrastructure for Kadena’s network!Here’s to a successful partnership!”</p>
                            </Tab>
                            {/* <Tab eventKey="eckodao" title={<Image alt="logo" src={eckodao} className={styles.tabLogo2}/>}>
                              
                            </Tab> */}
                            <Tab eventKey="mok" title={<Image alt="logo" src={streamr} className={styles.tabLogo}/>}>
                               <p className={styles.tabText}>
                                "Flux is a pivotal and reliable hosting provider for us. Working together has allowed us to integrate our technologies, enhancing the functionality and efficiency of our real-time data pipelines. This collaboration strengthens the P2P mesh network of data pipelines and boosts our end user's capabilities in handling real time, high data payload use cases such as video streaming."
                                    <br/>
                                    Mark Little
                                    CCO, Streamr Network
                               </p>
                            </Tab>
                            </Tabs>
                        </div>
                    </div>
                   </div>
            </section>
        </React.Fragment>
    )
}