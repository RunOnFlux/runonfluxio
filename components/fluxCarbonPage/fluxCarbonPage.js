/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./index.module.css"
import image1 from "../../public/images/twitter_flux_grey2x.png"
import image2 from "../../public/images/discord_fux_grey2x.png"
import image3 from "../../public/images/facebook_flux_grey2x.png"
import image6 from "../../public/images/github_flux_grey2x.png"
import image7 from "../../public/images/youtube_flux_grey2x.png"
import image10 from "../../public/images/linkdin.svg"
import Image from "next/image";
import carbon1 from "../../public/images/fluxcarbon-images/ASIC1-p-500.png"
import carbon2 from "../../public/images/fluxcarbon-images/PoUW1-p-500.png"
import carbon3 from "../../public/images/fluxcarbon-images/Cloud1-p-500.png"
import carbon4 from "../../public/images/fluxcarbon-images/cryptoclimateaccord1-p-500.png"
import card01 from "../../public/images/fluxcarbon-images/card2-01.png"
import card02 from "../../public/images/fluxcarbon-images/card2-02.png"
import card03 from "../../public/images/fluxcarbon-images/card2-03.png"
export function FluxCarbonPage(){
    return(
        <React.Fragment>
            <section className={styles.section1} id="home">
                <div className="container">
                   <div className="row">
                        <div className="col-12">
                            <div className={styles.card1}>
                                <div>
                                <h1>#Make Flux</h1>
                                <h3>Go Green</h3>
                                </div>
                            </div>
                            <div className={styles.icons}>
                            <a href="https://twitter.com/RunOnFlux" target="_blank" rel="noreferrer"><Image alt="icon" src={image1}/></a>
                            <a href="https://discord.gg/runonflux" target="_blank" rel="noreferrer"><Image alt="icon" src={image2}/></a>
                            <a href="https://www.facebook.com/runonflux" target="_blank" rel="noreferrer"><Image alt="icon" src={image3}/></a>
                            <a href="https://github.com/RunOnFlux" target="_blank" rel="noreferrer"><Image alt="icon" src={image6}/></a>
                            <a href="https://www.linkedin.com/company/flux-official/mycompany/" target="_blank" rel="noreferrer"><Image alt="icon" src={image10}/></a>
                            <a href="https://www.youtube.com/channel/UCphbdfb1MXYgUPsdhQPcnGw" target="_blank" rel="noreferrer"><Image alt="icon" src={image7}/></a>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
            <section className={styles.section2} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>About <span>Flux Carbon Neutral</span></h3>
                            <p>Surging demand for cryptocurrencies and accelerating adoption of blockchain-based solutions have highlighted an important issue: the technology's growing energy consumption and its impact on our climate. Flux is actively developing sustainable solutions for proof of work and cloud computing. Flux believes that blockchains are not the sole cause of environmental problems but that it instead can provide solutions that will ultimately create more energy-efficient solutions than legacy technology can.</p>
                            <h6>#FLUXGOES<span>GREEN</span></h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section3}>
                <div className="container">
                    <div className="row" style={{marginBottom: "100px"}}>
                        <div className="col-lg-6 col-md-12">
                            <h3>Road to <span>Net Carbon Zero</span></h3><br/>
                            <p>The Flux ethos also extends to responsibly utilizing energy. It does so through active development and innovation.</p><br/>
                            <a target="_blank" rel="noreferrer" className={styles.nav3LinkBtn} href="https://fluxofficial.medium.com/building-a-sustainable-blockchain-proof-of-useful-work-academic-on-flux-fd78ce3f20c8"> Read more</a>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "100px"}}>
                        <div className="col-md-6">
                        <h3><span>ASIC-resistant</span> mining algorithm</h3>
                        <p>Flux utilizes an ASIC-resistant mining algorithm to keep the energy levels spent in check. Bitcoin and Ethereum can be mined with ASICS, which creates a run on hash rates as ASICS mines very efficiently and is usually deployed at an industrial level. It takes 143 mWh of power to make one Bitcoin and about 3 kWh to make a Flux. From inception Flux took measures to reduce the energy overhead of mining.</p>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.imgContainer}>
                                <Image src={carbon1} alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "100px"}}>
                        <div className="col-md-6 order-1 ">
                            <div className={styles.imgContainer}>
                            <Image alt="img" src={carbon2}/>
                            </div>
                        </div>
                        <div className="col-md-6 order-0 order-md-2">
                            <h3><span>Proof-of-Useful-Work</span><br/>Consensus</h3>
                            <p>What began as small local area networks expanded to massive data centers responsible for cloud computing. Concentrating processing power in a single data center location is expensive, and its impact on the environment is significant. The vast amount of energy needed just for cooling and maintenance of the equipment is staggering.</p>
                            <p><b>Flux is the solution - A Decentralized Network as a Service</b></p>
                            <p>Flux partnered with the Western Switzerland University of Applied Sciences in Geneva to develop an innovative new consensus to further leverage its network - Proof of Useful Work ( PoUW)</p>
                            <p></p>
                            <p>The PoUW consensus is the solution to the criticism of the Proof of Work consensus due to its high energy consumption by securing the blockchain. It ensures that the computational power is used for solving real-world problems while securing the blockchain simultaneously.</p>
                            <p>Here are just some examples of these real-world problems:</p>
                            <p style={{color: "#77d261", marginBottom: "0px"}}>- Affordable AI, training models, cut down time and prices by a huge margin</p>
                            <p style={{color: "#77d261" , marginBottom: "0px"}}>- Affordable Rendering on one or multiple GPUs</p>
                            <p style={{color: "#77d261" , marginBottom: "0px"}}>- Affordable Stream Gaming on the latest and highest resolution games</p>
                        </div>
                    </div>
                    
                    <div className="row" style={{marginBottom: "100px"}}>
                        <div className="col-md-6">
                            <h3>Flux <span>Web 3.0</span> Cloud</h3>
                            <p>Data centers use an estimated 200–250 billion kWh per year globally. In conventional data centers, much of the capacity sits idle, ultimately wasting power. Flux aims to provide a more efficient organization of its ‘virtual’ data center with fewer resources being idle. The capacity of the Flux network is tied closely to supply and demand. By developing more flexible computing deployment and hosting models, Flux will build a more energy-efficient cloud solution than centralized providers can.</p>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.imgContainer}>
                            <Image  src={carbon3} alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "100px"}}>
                    <div className="col-md-6 order-1 ">
                            <div className={styles.imgContainer}>
                            <Image src={carbon4} alt="img"/>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2">
                            <h3>Crypto <span>Climate Accord</span></h3>
                            <p>Flux is committing to the Crypto Climate Accord to do our part in building innovative climate-sustainable blockchain solutions. We are in no doubt this help us find new partners in pursuing better and more sustainable technology.</p>
                            <p>The <b style={{color: "#77d261"}}>Crypto Climate Accord</b> is a private sector-led initiative for the entire crypto community focused on decarbonizing the cryptocurrency and blockchain industry in record time.</p>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <h3 className="text-center">Building <span>The Future</span> Together</h3><br/>
                        <p className="text-center">Flux actively seeks ways to build a more sustainable and environmentally friendly blockchain. We’d love to join forces with others in this endeavor, as it should be a shared mission for all blockchains to protect the environment. If you have good ideas for making blockchain more sustainable, please seek and share them with us to develop a better future together.</p>
                    </div>

                    <div className="row">
                      
                      
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <a href="#" className={styles.img2Container}>
                                    <Image alt="img" src={card03}/> 
                                </a>
                                <div className={styles.cardContent}>
                                <h5>PoUW: A Game Changer for Proof of Work and Blockchain</h5>
                                <p>Proof of Work is a mechanism that allows decentralized networks to achieve consensus by solving a cryptographic puzzle. Its reliance on computational strength has also stood the test of time, making it a reliable system that confers robust security and resilience against attacks.</p>
                                <a target="_blank" rel="noreferrer" href="https://fluxofficial.medium.com/pouw-a-game-changer-for-proof-of-work-and-blockchain-56f402dca66f">/ read more</a>    
                                </div>
                              
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                            <div className={styles.card2}>
                                <a href="#" className={styles.img2Container}>
                                    <Image alt="img" src={card02}/>
                                </a>
                                <div className={styles.cardContent}>
                                <h5>Flux Signs The Supporter Letter to Crypto Climate Accord.</h5>
                                <p>Flux is pioneering ‘Proof of Useful Work,’ new sustainable technology for Proof of Work blockchains. Flux is always looking for like-minded partners that share the Flux ethos and the passion for innovation. Flux is signing the support letter to Crypto Climate Accord to forge new partnerships in the quest for environmentally sustainable blockchains.</p>
                                <a target="_blank" rel="noreferrer" href="https://fluxofficial.medium.com/flux-signs-the-supporter-letter-to-crypto-climate-accord-61c87ad445e2">/ read more</a>        
                                 </div>
                              
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-5" id="contact">
                            <div className={styles.card2}>
                                <a href="#" className={styles.img2Container}>
                                    <Image alt="img" src={card01}/>
                                </a>
                                <div className={styles.cardContent}>
                                <h5>Flux and a Sustainable Future in Blockchain and Cloud Computing.</h5>
                                <p>All blockchain has a shared responsibility of building environmentally sustainable technology. Flux is actively developing sustainable solutions for proof of work and cloud computing. Flux believes that blockchain is not the cause of environmental problems but that it instead can provide solutions that will ultimately create more energy-efficient solutions than legacy technology can.</p>
                                <a target="_blank" rel="noreferrer" href="https://fluxofficial.medium.com/flux-and-a-sustainable-future-in-blockchain-and-cloud-computing-9669b124a49d">/ read more</a>       
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </React.Fragment>
    )
}
