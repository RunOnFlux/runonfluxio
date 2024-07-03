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
                            <a className={styles.btn2} href="">Marketplace</a>
                            <a className={styles.btn1} href="">Github</a>
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
                                    <a href="#" className={styles.btn3}>Install Now</a>
                                    <p>Starting at $9.99 / month</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6 mb-4">
                            <div className={`${styles.gameCard} ${styles.gameCard2}`}>
                                <Image alt="logo" src={palword}/>
                                <div className={styles.bottom}>
                                    <a href="#" className={styles.btn3}>Install Now</a>
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
                        <h3>Discover DApps In<span> The Flux WEb3 Marketplace</span></h3>
                        <p>Flux Marketplace offers a diverse range of services to meet your needs, from front-ends and backends to game servers and blockchain nodes. Our platform empowers you to effortlessly deploy and manage these services with ease. Explore the most popular dApps below.</p>
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
                                            <a className={styles.btn4} href="#">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p>Developed by the Pande laboratory in 2001, <a href="#">Folding@home</a> is a distributed computing project focused on protein folding. Led by Vijay Pande, an adjunct professor of Bioengineering, Folding@home aims to revolutionize disease research by providing atomically-detailed protein folding simulations. By launching a Folding@FluxCloud app from the Flux Marketplace, you can actively help gain crucial insights into diseases like Alzheimer’s and Cancer.</p>
                                    </div>
                                  
                                </div>
                            </div>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                        <div className={styles.card1} style={{borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px"}}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.logoContainer}><Image alt="logo" src={logo2}/></div>

                                        <div className={styles.cardHead2}>
                                            <h6>Presearch Node</h6>
                                            <a className={styles.btn4} href="#">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p><a href="#">Presearch,</a> is a community-powered, decentralized search engine that provides better results while protecting your privacy and rewarding you when you search. Presearch Node software runs on Flux to help power the new Presearch decentralized search engine. By running node software, Flux helps crawl the web for the information needed to answer user search queries.</p>
                                    </div>
                                  
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                        <div className={styles.card1} style={{borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px"}}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.logoContainer}><Image alt="logo" src={logo3}/></div>

                                        <div className={styles.cardHead2}>
                                            <h6>Streamer Node</h6>
                                            <a className={styles.btn4} href="#">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p><a href="#">Streamr,</a> (DATA) is an open source project and decentralized platform that relies on cryptography instead of trust. It is a P2P, real-time data infrastructure that houses a platform and tools for a new data economy. The technology stack includes a scalable real-time messaging network (pub/sub) hosted on computers worldwide, a marketplace for trading/selling data and a set of tools for working with real-time data.
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
                                            <a className={styles.btn4} href="#">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p><a href="#">Bittensor</a> is an open-source protocol that powers a decentralized, blockchain-based machine learning network. Machine learning models train collaboratively and are rewarded in TAO according to the informational value they offer the collective. TAO also grants external access, allowing users to extract information from the network while tuning its activities to their needs.</p>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className={styles.card1} style={{borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px"}}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.logoContainer}><Image alt="logo" src={logo5}/></div>

                                        <div className={styles.cardHead2}>
                                            <h6>TeamSpeak</h6>
                                            <a className={styles.btn4} href="#">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p>Take complete control of your communication with <a href="#">TeamSpeak,</a> offering military-grade security, ultra low latency VoIP, and 3D surround sound as default. With TeamSpeak there are no centralized servers and no harvesting of personal data. Your chat, your data, your choice. With TeamSpeak, your team rules!</p>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className={styles.card1} style={{borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px"}}>
                                    <div className={styles.cardHead}>
                                        <div className={styles.logoContainer}><Image alt="logo" src={logo6}/></div>

                                        <div className={styles.cardHead2}>
                                            <h6>Owncast</h6>
                                            <a className={styles.btn4} href="#">View App</a>  <a className={styles.btn5} href="#"><Image alt="logo" src={link1}/></a>
                                        </div>

                                    </div>
                                    <div className={styles.cardText1}>
                                    <p><a href="#">Owncast,</a> is an open source, self-hosted, decentralized, single user live video streaming and chat server for running your own live streams similar in style to the large mainstream options. It offers complete ownership over your content, interface, moderation and audience.</p>
                                    </div>
                                  
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}