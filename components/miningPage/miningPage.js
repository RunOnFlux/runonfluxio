import React from "react";
import styles from "./index.module.css"
import Image from "next/image";
import fluxLogo from "../../public/images/images/Flux_blue_logo.png"
import fluxHashIcon from "../../public/images/flux_hash_icon.svg";
import blockRewards from "../../public/images/flux_block_reward_icon.svg";
import rewardDistribution from "../../public/images/flux_protocol_icon.svg";
import blockTime from "../../public/images/flux_block_time_icon.svg";
import maxSupply from "../../public/images/flux_circulation_icon.svg";
import halving from "../../public/images/flux_halving_icon.svg";
import port from "../../public/images/flux_rcp_port_icon.svg"
import rpc from "../../public/images/flux_p2p_port_icon.svg"

export function MiningPage(){
    return(
        <React.Fragment>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <Image alt="logo" src={fluxLogo}/>
                            <h1>Flux Mining Ecosystem</h1>
                            <p>Flux is mined using the ZelHash algorithm. ZelHash is a GPU minable implementation of Equihash 125,4, harnessing ASIC/FPGA resistance, developed by Wilke Trei of lolMiner.</p>
                        </div>
                        <div className="col-xl-6"></div>
                    </div>
                    <div className="row">
                        <div className={styles.btns}>
                            <a>ZelHash Whitepaper</a>
                            <a>Flux Pool</a>
                        </div>
                     </div>
                </div>
            </section>

            <section className={styles.section2}>
                <div className="container">
                    <div className="row">
                    <div className="col-xl-6">
                    <h2>Flux Community &  <br/>Third Party Pools</h2>
                    <p>Flux can be mined on our community pool Fluxpools.net or on a variety of third party pools created by teams that support our mining ecosystem.</p>
                    </div>
                    <div className="col-xl-6"></div>
                    </div>
                    <div className="row">
                        <h3>Coin specification</h3>
                    </div>
                    <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div>
                                <div className={styles.img1}>
                                <Image src={fluxHashIcon} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>HASHING ALGORITHM</p>
                                <h3 style={{color: '#4c80ee'}}>ZELHASH</h3>
                                <p style={{fontSize: "0.8em"}}>Equihash 125_4</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div>
                                <div className={styles.img1}>
                                <Image src={blockRewards} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>BLOCK REWARD</p>
                                <h3 style={{color: '#4c80ee'}}>37.5 FLUX</h3>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div>
                                <div className={styles.img1}>
                                <Image src={rewardDistribution} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>REWARD DISTRIBUTION</p>
                                <h3 style={{color: '#fbcd17'}}>50% POW - 50% NODE</h3>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div>
                                <div className={styles.img1}>
                                <Image src={blockTime} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>BLOCK TIME</p>
                                <h3 style={{color: '#f855ba'}}>2 min</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div>
                                <div className={styles.img1}>
                                <Image src={maxSupply} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>MAX SUPPLY</p>
                                <h3 style={{color: '#4c80ee'}}>440,000,000</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div>
                                <div className={styles.img1}>
                                <Image src={halving} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>HALVING</p>
                                <h3 style={{color: '#4c80ee'}}>2.5 YEARS</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div>
                                <div className={styles.img1}>
                                <Image src={port} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>P2P PORT </p>
                                <h3 style={{color: '#36c9a5'}}>16125</h3>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div>
                                <div className={styles.img1}>
                                <Image src={rpc} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>RPC PORT </p>
                                <h3 style={{color: '#36c9a5'}}>16124</h3>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className="container">
                    <div className="row">
                        <h3>Mining Pools</h3>
                        <p>Be aware that there are pools that allow you to mine <span>Flux parallel assets </span><br/> through which the reward is higher.</p>
                    </div>
                    <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5>FluxPools</h5>
                                    <p>Fee supports Flux</p>
                                    <p>Stratums: EU, US</p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5>MinerPool.org</h5>
                                    <p>Pooled,Solo</p>
                                    <p>Stratums: EU, US, Asia</p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5>EnigmaPool</h5>
                                    <p>Pooled</p>
                                    <p>Stratums: EU, US, Asia</p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5>Herominers</h5>
                                    <p>Pooled, Solo</p>
                                    <p>Stratums: EU, US, Asia</p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5>ZPool</h5>
                                    <p>Pooled</p>
                                    <p>Stratums: EU, US, SEA</p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5>ZeroPool</h5>
                                    <p>Pooled</p>
                                    <p>Stratums: EU, US, SEA</p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5>2 Mars Miners</h5>
                                    <p>Pooled</p>
                                    <p>Stratums: EU, US, SEA</p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5 className={styles.h5Blue}>Solo Pool</h5>
                                    <p>Fee supports Flux</p>
                                    <p></p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5 className={styles.h5Blue}>NLPool</h5>
                                    <p>Profit Auto-Switch</p>
                                    <p>Stratums: EU</p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5 className={styles.h5Blue}>2miners</h5>
                                    <p>Pooled, Solo</p>
                                    <p>Stratums: EU</p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5 className={styles.h5Blue}>Coinblockers</h5>
                                    <p>Pooled, Solo</p>
                                    <p>Stratums: EU, NA, ASIA</p>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <div>
                                    <h5 className={styles.h5Blue}>Zergpool</h5>
                                    <p>Profit Auto-Switch</p>
                                    <p></p>
                                </div>    
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card3}>
                                <div>
                                  <h2>More Pools</h2>
                                </div>    
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className={styles.section4}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-4">Compatible GPU Miners</h3>
                            <h6>Algorithm: Equihash (125,4)</h6>
                            <h6 className="mb-5">Personalization String: ZelProof</h6>
                            <ul>
                                <li>lolMiner ({">"} v0.8.2) (AMD)</li>
                                <li>GMiner ({">"} v1.46) (NVIDIA)</li>
                                <li>miniZ ({">"} v1.4o) (NVIDIA)</li>
                            </ul><br/>
                            <h6>* Config Generator can be found on <a href="https://fluxpools.net/coins/flux">https://fluxpools.net/coins/flux </a>-- Getting Started *</h6>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-12">
                        <h3 className="mb-4">Tuning Your GPU for Optimal Performance</h3>
                        <h6>Sample Overclock Settings are being maintained by the community <a href="https://grid.is/@djsearle1977/flux-overclock-settings-for-miners-_ZVpuZUZQ96B5Voly1U_YQ">here.</a></h6>
                        </div>
                    </div><br/>

                    <div className="row mb-5">
                        <div className="col-12">
                        <h3 className="mb-4">Third Party Mining Tutorials</h3>
                        <div className={styles.btns}>
                            <a>Flux Pool</a>
                        </div><br/>
                        <p>Note that we are not associated with any of these video tutorials or any placement of product contained within. These videos are provided as examples only.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                     <div className="col-12">
                     <div className={styles.videoEmbed}>
                        <iframe height="500" width="100%" src="https://www.youtube.com/embed/fulcZGdGs64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                     </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}